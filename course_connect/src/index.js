import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CreateRouter from './CreateRouter';
import CourseSelector from './Course_Selector_Component/CourseSelector'
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory } from 'react-router-dom';
import SignUpComponentMobile from './SignUp_SignIn_Components/SignUpComponentMobile';


ReactDOM.render(
  <React.StrictMode>

    {/* <SignUpSliderComponent /> */}

    {/* <SignUpComplete /> */}
    {/* <Router>
      <CreateRouter />
    </Router> */}
  {/* <SignUp_SignIn_Component_Mobile/> */}

	  <CourseSelector />
    {/* <SignUpComponentMobile/> */}

  </React.StrictMode>,
  document.getElementById('root')
);


