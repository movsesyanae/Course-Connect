import {useState} from 'react'
import SignIn from './SignIn'
import './SignInStyle.scss'
import SignUp from './SignUp'

const SignUp_SignIn_Component = (props) => {
	const [failMessage, setFailMesssage] = useState('');
	const [signInFailMessage, setSignInFailMessage] = useState('');
    const [signUpActive, setSignUpActive] = useState(false);

	const errorHandler = (value) => {
		setSignInFailMessage(value); 
		// console.log(failMessage);
	}

	const ErrorBox = () => {
		if(signInFailMessage != '') {
			return (
				<div id = 'ErrorBox'>
					<span className="entry-pageclosebtn" onClick={() => setSignInFailMessage('')}>&times;</span> 
						{signInFailMessage}
				</div>
			);
		} else return(<></>);
	}


    return(
		<div className = 'entry-page'>

			<div className = "sign-up-slider" id = "container">
			
				{signUpActive ? 
				<SignUp failMessage = {(value) => errorHandler(value)}
					logIn = {(value) => props.logIn(value)} /> :
				<SignIn failMessage = {(value) => errorHandler(value)} 
					logIn = {(value) => props.logIn(value)} /> 
					}

				
			</div>
			<ErrorBox/>
		</div>


    );
}

export default SignUp_SignIn_Component;