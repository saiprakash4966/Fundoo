import React from 'react';
import './SignUp.css';
import { TextField } from '@mui/material';
import {Button } from '@mui/material';
import {Checkbox} from '@mui/material';
import {FormControlLabel }from '@mui/material';
import { signupApi } from '../../services/userService';



const firstNameRegex = /^([a-z,A-Z]{2,})$/;
const lastNameRegex = /^([a-z,A-Z]{2,})$/;
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function SignUp() {
    const [signupObj, setsignupObj] = React.useState({ firstName: "", lastName: "", email: "", password: "" ,service : "advance" })
    
    const [regexObj,setregexObj] = React.useState({
                firstNameBorder : false , firstNameHelper : "", lastNameBorder : false,lastNameHelper : "", emailBorder : false,emailHelper : "",passwordBorder : false ,passwordHelper : "",confirmBorder : "",confirmHelper: ""
            })

    const takeFirstName = (event) => {
        console.log(signupObj)
        setsignupObj((prevstate) => ({ ...prevstate, firstName: event.target.value }))
       
    }
    const takeLastName = (event) => {
        console.log(signupObj)
        setsignupObj((prevstate) => ({ ...prevstate, lastName: event.target.value }))
        
    }
    const takeUserName = (event) => {
        console.log(signupObj)
        setsignupObj((prevstate) => ({ ...prevstate, email: event.target.value }))
        
    }
    const takePassword = (event) => {
        console.log(signupObj)
        setsignupObj((prevstate) => ({ ...prevstate, password: event.target.value }))
    }
    const takeConfirm = (event) => {
        console.log(signupObj)
        setsignupObj((prevstate) => ({ ...prevstate, password: event.target.value }))
        
    }
    const submit = () => {
        console.log(signupObj, "submit")
        let firstNameText = firstNameRegex.test(signupObj.firstName)
        let lastNameText = lastNameRegex.test(signupObj.lastName)
        let emailText = emailRegex.test(signupObj.email)
        let passwordText = passwordRegex.test(signupObj.password)
        let confirmText = passwordRegex.test(signupObj.password)

        if(firstNameText === false)
                {
                    setregexObj((prevState) => ({...prevState,firstNameBorder : true,firstNameHelper :"Enter correct email"}))
                }
                else if(firstNameText === true)
                {
                    setregexObj((prevState) => ({...prevState,firstNameBorder : false,firstNameHelper :""}))
                }
        
                if(lastNameText === false)
                {
                    setregexObj((prevState) => ({...prevState,lastNameBorder : true,lastNameHelper :"Enter correct password"}))
                }
                else if(lastNameText === true)
                {
                    setregexObj((prevState) => ({...prevState,lastNameBorder : false,lastNameHelper :""}))
                }

        if(emailText === false)
        {
            setregexObj((prevState) => ({...prevState,emailBorder : true,emailHelper :"Enter correct email"}))
        }
        else if(emailText === true)
        {
            setregexObj((prevState) => ({...prevState,emailBorder : false,emailHelper :""}))
        }

        if(passwordText === false)
        {
            setregexObj((prevState) => ({...prevState,passwordBorder : true,passwordHelper :"Enter correct password"}))
        }
        else if(passwordText === true)
        {
            setregexObj((prevState) => ({...prevState,passwordBorder : false,passwordHelper :""}))
        }
        if(confirmText === false)
        {
            setregexObj((prevState) => ({...prevState,confirmBorder : true,confirmText :"Enter correct password"}))
        }
        else if(confirmText === true)
        {
            setregexObj((prevState) => ({...prevState,confirmBorder : false,confirmHelper :""}))
        }
                        
                if(firstNameText === true && lastNameText === true &&emailText === true && passwordText === true && confirmText === true)
                {
                    signupApi(signupObj).then((response) =>{console.log(response) ;localStorage.setItem('token',response.data.id)}).catch((error) => {console.log(error)})
                }
               

        
    }
    return (
        <div className="signup">
            <div className="signup1">
                <div className="google">
               <h1><img src="https://download.logo.wine/logo/Google/Google-Logo.wine.png" alt="" width="90" height="60"/></h1>
                   
                    <h2>Create your Google Account</h2>
                </div>
                <div className="text">
                    <TextField id="Firstname" label="First name" variant="outlined" onChange={takeFirstName} error={regexObj.firstNameBorder} helperText={regexObj.firstNameHelper} />
                    <TextField id="Lastname" label="Last name" variant="outlined" onChange={takeLastName} error={regexObj.lastNameBorder} helperText={regexObj.lastNameHelper} />
                    <div className="user">
                        <TextField id="Username" label="Username" variant="outlined"onChange={takeUserName} error={regexObj.emailBorder} helperText={regexObj.emailHelper} />
                        <p>You can use letters, numbers & periods</p>
                        <h4>Use my current email address instead</h4>
                    </div>
                    <div className="password">
                        <TextField id="Password" label="Password" variant="outlined"onChange={takePassword} error={regexObj.passwordBorder} helperText={regexObj.passwordHelper} />
                        <TextField id="Confirm" label="Confirm" variant="outlined" onChange={takeConfirm} error={regexObj.confirmBorder} helperText={regexObj.confirmHelper}/>
                        <p>Use 8 or more characters with a mix of letters,numbers & symbols</p>
                        <FormControlLabel control={<Checkbox />} label="Show Password" />
                    </div>
                </div>
                <div className="button">
                    <Button variant="text">Sign in instead</Button>
                    <Button variant="contained" onClick={submit}>Next</Button>
                </div>


            </div>
            <div className="pic">
                <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt="image" />
                <p>One Account. All of Google working for you.</p>
            </div>
        </div>
        
        
    );
}

export default SignUp;