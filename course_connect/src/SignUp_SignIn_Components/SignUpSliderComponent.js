import {useState} from 'react'
import SignIn from './SignIn'
import './SignInStyle.css'
import SignUp from './SignUp'

const SignUp_SignIn_Component = () => {
	const [failMessage, setFailMesssage] = useState('');
	const [signInFailMessage, setSignInFailMessage] = useState('');

	const errorHandler = (value) => {
		setSignInFailMessage(value); 
		// console.log(failMessage);
	}

	const ErrorBox = () => {
		if(signInFailMessage != '') {
			return (
				<div className="entry-page" id = 'ErrorBox'>
					<span className="entry-pageclosebtn" onClick={() => setSignInFailMessage('')}>&times;</span> 
						{signInFailMessage}
				</div>
			);
		} else return(<></>);
	}

    return(
		<main className = 'entry-page'>
        <div class = "entry-page container" id = "container">
		
			<SignIn className="entry-page" failMessage = {(value) => errorHandler(value)}/>
			<SignUp className="entry-page" failMessage = {(value) => errorHandler(value)}/>
			

			<div className="entry-page overlay-container">
				<div className="entry-page overlay">
					<div className="entry-page overlay-panel overlay-left">
						<h1 className="entry-page">Course Connect</h1>
						<p className="entry-page">Because we failed 216 and needed an internship</p>
						<button className="entry-page ghost" id="signIn" onClick = {() => {document.getElementById('container').classList.remove("right-panel-active");}}>Sign In</button>
					</div>
					<div className="entry-page overlay-panel overlay-right">
						<h1 className="entry-page">Hello, Friend!</h1>
						<p className="entry-page">Enter your personal details and start journey with us</p>
						<button className="entry-page ghost" id="signUp" onClick = {() => {document.getElementById('container').classList.add("right-panel-active");}}>Sign Up</button>
					</div>
				</div>
			</div>
		</div>

		<ErrorBox/>
		</main>

    );
}

export default SignUp_SignIn_Component;