import React from 'react'

import './sign-in.styles.scss'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends React.Component {
    constructor(){
        super()

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email,password)

            this.setState({email:'', password: ''})
        } catch(err){
            console.log(err)
        }
        
    }

    handleChange = event => {
        const { value, name } = event.target

        //dynamically change state, if email, set email, if password, set password
        this.setState({[name]: value})
    }
    render() {
        
        return(
            <div className="sign-in">
                <h2>I already have and account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={ this.handleSubmit }>

                    <FormInput
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        required
                        label='Email'
                    />

                    <FormInput
                        name='password'
                        type='password'
                        handleChange={this.handleChange}
                        value={this.state.password}
                        required
                        label='Password'
                    />
                    <div className="buttons">
                        <CustomButton type="submit">
                            Sign In
                        </CustomButton>

                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>                        
                    </div>

                </form>
            </div>
        )
    }
}

export default SignIn