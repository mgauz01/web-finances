import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import {addExpense} from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'

const store = configureStore()

store.dispatch(addExpense({description: 'Gas bill', amount: 70, createdAt: 800}))
store.dispatch(addExpense({description: 'Water bill', createdAt: -600}))
store.dispatch(addExpense({description: 'rent', amount: 1000, createdAt: 100}))

// store.dispatch(setTextFilter('water'))

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'))
// }, 3000)
// const visibleExpenses = getVisibleExpenses(store.getState().expenses, store.getState().filters)
// console.log(visibleExpenses)

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById("root"));