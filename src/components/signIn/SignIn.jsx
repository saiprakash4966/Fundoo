import React  from 'react';
import './SignIn.css';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { loginApi } from '../../services/userService';


const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

 
function SignIn() {

    const [signInObj,setsignInObj] = React.useState({email : "",password : ""})

    const [regexObj,setregexObj] = React.useState({
        emailBorder : false , emailHelper : "",passwordBorder : false ,passwordHelper : ""
    })
    const takeEmail = (event) =>
    {
       console.log(event.target.value)
       setsignInObj((prevState) =>({...prevState,email : event.target.value}))
    }

    const takePassword = (event) =>
    {
        setsignInObj((prevState) =>({...prevState,password : event.target.value}))
        
    }
    const submit = () =>
    {
        console.log("submit",signInObj)
        let emailText = emailRegex.test(signInObj.email)
        let passwordText = passwordRegex.test(signInObj.password)
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

        if(emailText === true && passwordText === true)
        {
            loginApi(signInObj).then((response) =>{console.log(response)}).catch((error) => {console.log(error)})
        }
    }
    return (
        <div className="main">
        <div className="image">
        <h1><img src="https://download.logo.wine/logo/Google/Google-Logo.wine.png" alt="" width="100" height="80"/></h1>
            
            <h2>Sign in</h2>
            <span>Use your Google Account</span>
        </div>
        <div className="textfield">
        <TextField id="Email" label="Email or Phone" variant="outlined" onChange={takeEmail}
        error={regexObj.emailBorder} helperText={regexObj.emailHelper}
        />
        <Button className='forgot'>Forgot email?</Button>
        <TextField id="password" label="Password" variant="outlined" onChange={takePassword}
        error={regexObj.passwordBorder} helperText={regexObj.passwordHelper}
        />
        
        <p>Not your computer? Use Guest mode to sign in privately.</p>
        <Button className='learn' >Learn more</Button>
        </div>
        <div className="Button1">
                <Button variant="text" onClick=''>Create account</Button>
                <Button variant="contained" onClick={submit}>Next</Button>
            </div>

    </div>
   
    )
}

export default SignIn;
