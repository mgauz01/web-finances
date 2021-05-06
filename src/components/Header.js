import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import React from 'react'


const Header = () => (
    <header>
        <h1> Expensify </h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard Page</NavLink>
        <br></br>
        <NavLink to="/create" activeClassName="is-active" >Expense Page</NavLink>
        <br></br>
        <NavLink to="/edit" activeClassName="is-active" >Edit Page</NavLink>
        <br></br>
        <NavLink to="/help" activeClassName="is-active" >Help Page</NavLink>


    </header>
)

export default Header