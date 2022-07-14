import expensesReducer from '../../reducers/expenses'
import moment from 'moment'
import expenses from '../fixtures/expenses'


test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

test('should remmove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remmove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

//Should add an expense
test('should add expense', () => {
    const expense = {
        id: '4',
        description: 'went',
        note: 'hajalaajha',
        amount: 9000,
        createdAt: moment(0).add(9, 'days').valueOf()
    }

    const action = {
        type: 'ADD_EXPENSE',
        expense: expense
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, expense])
})

// Should edit an expense
test('should edit expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount: 700000
        }
    }

    const state = expensesReducer(expenses, action)
    expect(state[1].amount).toEqual(700000)
})

// should edit expense if expense not found
test('should not edit expense if expense not there', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount: 700000
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})
