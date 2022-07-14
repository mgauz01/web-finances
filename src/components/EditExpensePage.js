import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../actions/expenses'
import expenses from '../tests/fixtures/expenses'

class EditExpensePage extends React.Component{
    onSubmit(expense){
        props.dispatch(editExpense(props.expense.id, expense))
        props.history.push('/')
    }

    onClick(){
       props.dispatch(removeExpense({ id: props.expense.id }))
       props.history.push('/') 
    }

    render(){
        return (
                <div>
                    <ExpenseForm 
                        expense={props.expense}
                        onSubmit={this.onSubmit}
                    />
                <button onClick={this.onClick}>REMOVE</button>
                </div>
            )
    }
}

const mapStateToProps = (dispatch, state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id
        }), 
        onSubmit: (expense) => dispatch(editExpense(props.expense.id, expense)),
        onClick: () => dispatch(removeExpense({id: props.expense.id}))
    }
}

export default connect(mapStateToProps)(EditExpensePage)

