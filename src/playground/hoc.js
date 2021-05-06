console.log("LOLO")

// Higer Order Component - Component that renders another component

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)

const widthAdminwarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info, pls don't share</p>}
            <WrappedComponent {...props}/>
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated === true ? <WrappedComponent {...props}/>:<p>Nothing to show</p>}
        </div>
    )
}
const AdminInfo = widthAdminwarning(Info)
const AuthInfo = requireAuthentication(Info)

// ReactDOM.render(<AdminInfo isAdmin={false} info="el details"/>, document.getElementById('root'))
ReactDOM.render(<AuthInfo isAuthenticated={false} info="el details"/>, document.getElementById('root'))
