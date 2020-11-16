import React from 'react'

import './authpage.styles.scss'

import SignUp from '../../components/sign-up/sign-up.component'
import SignIn from '../../components/sign-in/sign-in.component'

const AuthPage = () => {
    return(
        <div className="authpage">
            <SignIn></SignIn>
            <SignUp></SignUp>
        </div>
    )
}

export default AuthPage