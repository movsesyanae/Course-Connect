import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignIn from '../src/Index_Component/SignIn'
import SignUp from '../src/SignUp_Component/SignUp'
import CourseSelector from './Index_Component/CourseSelector'


ReactDOM.render(
  <React.StrictMode>

    <div class = "container" id = "container">

    <SignIn />
    <SignUp />

    <div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1>Course Connect</h1>
				<p>Because we failed 216 and needed an internship</p>
				<button class="ghost" id="signIn" onClick = {() => {document.getElementById('container').classList.remove("right-panel-active");}}>Sign In</button>
			</div>
			<div class="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Enter your personal details and start journey with us</p>
				<button class="ghost" id="signUp" onClick = {() => {document.getElementById('container').classList.add("right-panel-active");}}>Sign Up</button>
			</div>
		</div>
	</div>
</div>


    

  </React.StrictMode>,
  document.getElementById('root')
);
