import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { Button,Form,FormGroup,Label,Input } from 'reactstrap';
import{FacebookLoginButton} from "react-social-login-buttons";
import "./Login.css";

class Login extends Component{
    render(){
        return(
            <Form className="Login" >
            <div><h3>
            <span className="font-weight-bold">Hawkerlite .com</span>
            </h3>
            <h5 className="text-center">
                Welcome
            </h5></div>
            <div className="p-1">
            <FormGroup>
                <Label>Email</Label>
                <Input type="email" placeholder="Email"/>

            </FormGroup>

            <FormGroup >
                <Label >Password</Label>
                <Input type="password" placeholder="Password"/>
                
            </FormGroup>
             </div>
            <Button className="btn-sm btn-dark btn-block">Log in</Button>

            <div className="text-center pt-1">Or continue with your social account
            </div>
            <FacebookLoginButton />
            <div className="text-center mt-2">
                <a href="/PhNo">Login with Phone no</a>
                <br/>
                <a href="/sign-up">Sign up</a>
                <span className="p-2">|</span>
                <a href="/Forgot password">Forgot password</a>
            </div>
            </Form>
        );
    }
}



export default Login;
