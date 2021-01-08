import {useState} from 'react'
import SignIn from './SignIn'
import './SignInStyle.css'
import SignUp from './SignUp'

const SignUp_SignIn_Component = () => {
	const [signUpFailMessage, setsignUpFailMessage] = useState('');

	const errorHandler = (value) => {
		setsignUpFailMessage(value); 
		console.log(signUpFailMessage);
	}

	const ErrorBox = () => {
		console.log(signUpFailMessage);
			if(signUpFailMessage != '') {
				return (
					<div id = 'ErrorBox'>
  						<span class="closebtn" onClick={() => setsignUpFailMessage('')}>&times;</span> 
							{signUpFailMessage}
					</div>
				);
			}
			return(<></>);
	}

    return(
		<>
        <div class = "container" id = "container">

			<SignIn />
			<SignUp failMessage = {(value) => errorHandler(value)}/>
			

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

		<ErrorBox/>
		</>

    );
}

export default SignUp_SignIn_Component;