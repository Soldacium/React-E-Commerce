import React from 'react'

import './authpage.styles.scss'

import SignIn from '../../components/sign-in/sign-in.component'

const AuthPage = () => {
    return(
        <div className="authpage">
            <SignIn></SignIn>
            
        </div>
    )
}

export default AuthPage