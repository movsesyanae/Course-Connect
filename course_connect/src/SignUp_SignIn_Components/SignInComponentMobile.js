import {useState,useEffect,useRef} from 'react'
import SignIn from './SignIn'

import './SignInStyleMobile.scss'
import SignUp from './SignUp'
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory, Link } from 'react-router-dom';

const SignUpComponentMobile = () => {
	const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [studyBuddy, setStudyBuddy] = useState(false);
    const [friend, setFriend] = useState(false);
    const [sex, setSex] = useState(false);
    const [male, setMale] = useState(false);
    const [female, setFemale] = useState(false);
	const [other, setOther] = useState(false);
	const [gender,setGender] = useState(-1);
	const [lookingFor,setLookingFor] = useState([]);
    const [nonBinary, setNonBinary] = useState('');
	const [signUpFailMessage, setSignUpFailMessage] = useState('');
	const whereWeAt = useRef(document.getElementById('name'));

	<h1 thingy='dis dick'></h1>


	
	const ErrorPopUp = () => {
		if(signUpFailMessage !== '') {
			return (
				// <div class = 'entry-mobile' id='errorBox'>
				// 	<p>{signUpFailMessage}</p>
				// </div>

				<div className="alert" ref={whereWeAt} id='alert-mobile'>
                <ref className="closebtn" onClick = {() => {setSignUpFailMessage(''); window.scrollTo(0,0);}}>&times;</ref>
                {signUpFailMessage}
            </div> 
			);
		} else {
			return (<></>);
		}
	}
	
	function submitHandler (e) {
        e.preventDefault();

        let stringInputs = [name,email,password,confirmPassword,nonBinary];
        let submitPass = true;  //as long as true should succefully submit

        if(name == '' || email == '' || password == '' || confirmPassword == '' ||  (!studyBuddy && !friend && !sex) || (!male && !female && !other) || (other && nonBinary == '')) {
			// props.failMessage('You have not selected all fields');
			setSignUpFailMessage('You have not selected all fields');
            submitPass = false;
            return;
		}
		

        for(let x in stringInputs) { //injection prevention
            console.log(stringInputs[x]);
            if(stringInputs[x].includes('\'') || stringInputs[x].includes('<') || stringInputs[x].includes('>')) {
				setSignUpFailMessage('Stop hacking ;)');
                // props.failMessage('You may not include symbols such as \' or < >');
                submitPass = false;
                return;
            }
        }

		if(!(password == confirmPassword)) { //FIX: passwords showing up in console
			setSignUpFailMessage('Passwords must match!');
            // props.failMessage('Passwords must match!');
            submitPass = false;
            return;
        }

        if(!email.endsWith('@umd.edu')) {
			setSignUpFailMessage('Please use a @umd.edu email');
            // props.failMessage('Please use a @umd.edu email');
            submitPass = false;
            return;
        }

        
    }
	
	
	

    return(
			<div className = 'entry-mobile page-container'>

					<div className = 'entry-mobile grid-unit1'>
						<h1 id='cCLabel'className = 'entry-mobile course-connect'>Course Connect</h1>
						<p>New user? <Link to = '/signIn' id ="signInLink">Sign up</Link></p>
					</div>

					<ErrorPopUp/>

					 
					

					<div className = 'entry-mobile grid-unit3'>
						<input 
						className="entry-mobile"
						type = 'text' 
						id = 'email' 
						name = 'email'
						placeholder = 'email' 
						value = {email} 
						onChange = { (e) => setEmail(e.target.value) } 
						/>
					</div>

					<div className = 'entry-mobile grid-unit4'>
						<input 
						className="entry-mobile"
						type = 'password' 
						id = 'password' 
						name = 'password'
						placeholder = "password" 
						value = {password} 
						onChange = {(e) => setPassword(e.target.value)} 
						/>
					</div>

				

					


					

					<div className = 'entry-mobile grid-unit8'>
						<button className="entry-mobile" type = 'submit' onClick = { (e) => {submitHandler(e);} }> Sign In </button>
					</div>

			</div> 
    );
}

export default SignUpComponentMobile;