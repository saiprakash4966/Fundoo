import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Dashboard from '../../pages/Dashboard/Dashboard';
import SignIn from '../signIn/SignIn';
import SignUp from '../signup/SignUp';

function RouterOne() {
    return (
        <div>
          <Router>
            <Routes>
                <Route exact path='/' element= {<SignIn/>}/>
                <Route path='/signup' element ={<SignUp/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
            </Routes>
            </Router>  
        </div>
    );
}

export default RouterOne;