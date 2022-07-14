import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import React from 'react'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import NotFoundPage from '../components/NotFoundPage'
import ExpensePage from '../components/AddExpensePage'
import HelpPage from '../components/HelpPage'
import EditExpensePage from '../components/EditExpensePage'
import Header from '../components/Header'


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
        </div>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={ExpensePage}/>
            <Route path="/help" component={HelpPage}/>
            <Route path="/edit/:id" component={EditExpensePage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </BrowserRouter>
)

export default AppRouter