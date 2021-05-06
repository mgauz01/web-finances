import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import React from 'react'


const EditExpensePage = (props) => {
    console.log(props)
    return (
        <div>
            Editing expense with id of {props.match.params.id} 
        </div>
    )
}

export default EditExpensePage

