import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import {auth, createUserProfileDocument } from '../../firebase/firebase.utils'

class SignUp extends React.Component{
    constructor() {
        super()

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state

        if(password !== confirmPassword) {
            alert(`passwords don't match`)
            return
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email,password)

            createUserProfileDocument(user, { displayName })

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch(err){
            console.log(err)
        }

    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({[name]:value})
    }

    render(){
        const {displayName, email, password, confirmPassword} = this.state
        return(
            <div className="sign-up">
                <h1 className="title">I dont have an account</h1>
                <span>Sign up with email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                    type='text'
                    name='displayName'
                    label='Display Name'
                    value={displayName}
                    handleChange={this.handleChange}
                    required/>


                    <FormInput
                    type='email'
                    name='email'
                    label='Email'
                    value={email}
                    handleChange={this.handleChange}
                    required/>


                    <FormInput
                    type='password'
                    name='password'
                    value={password}
                    label='Password'
                    handleChange={this.handleChange}
                    required/>


                    <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    label='Confirm password'
                    handleChange={this.handleChange}
                    required/>

                    <CustomButton type='submit'> SIGN UP </CustomButton>

                </form>
            </div>
        )
    }
}

export default SignUp