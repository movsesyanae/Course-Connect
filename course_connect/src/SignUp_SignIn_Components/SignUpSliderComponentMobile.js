import {useState,useEffect,useRef} from 'react'
import SignIn from './SignIn'

import './SignInStyleMobile.scss'
import SignUp from './SignUp'

const SignUp_SignIn_Component_Mobile = () => {
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
    const [nonBinary, setNonBinary] = useState('');
    const [signUpFailMessage, setsignUpFailMessage] = useState('');
	const whereWeAt = useRef(document.getElementById('name'));

	<h1 thingy='dis dick'></h1>

	useEffect(() => {whereWeAt.current.focus()},[nonBinary]);

	const NonBinary = () => {
        if (other == true) {
            return (
                    <div className="entry-mobile">
                    {/* <label htmlFor = "nonBinary"> Confirm Gender : </label> */}
                    <input 
                        className="entry-mobile"
                        type = 'text' 
                        id = 'nonBinary'
                        key = 'nonBinary'
                        name = 'nonBinary'
                        placeholder = 'specify gender' 
                        ref = {whereWeAt}
                        value = {nonBinary} 
                        onChange = {(e) => {setNonBinary(e.target.value); }} 
                    /> 
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
            submitPass = false;
            return;
		}
		

        for(let x in stringInputs) { //injection prevention
            console.log(stringInputs[x]);
            if(stringInputs[x].includes('\'') || stringInputs[x].includes('<') || stringInputs[x].includes('>')) {
                // props.failMessage('You may not include symbols such as \' or < >');
                submitPass = false;
                return;
            }
        }

        if(!(password == confirmPassword)) { //FIX: passwords showing up in console
            // props.failMessage('Passwords must match!');
            submitPass = false;
            return;
        }

        if(!email.endsWith('@umd.edu')) {
            // props.failMessage('Please use a @umd.edu email');
            submitPass = false;
            return;
        }

        
    }
    
	

    return(
			<div className = 'entry-mobile page-container'>

					<div className = 'entry-mobile grid-unit1'>
						<h1 className = 'entry-mobile course-connect'>Course Connect</h1>
					</div>

					<div className = 'entry-mobile grid-unit2'>
						<input 
						className="entry-mobile"
						type = 'text' 
						id = 'name' 
						name = 'name'
						placeholder = 'name' 
						ref = {whereWeAt}
						value = {name} 
						onChange = { (e) => setName(e.target.value) } 
						/> 
						<span className="entry-mobile-row"></span>
					</div>

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

					<div className = 'entry-mobile grid-unit5'>
						<input 
						className="entry-mobile"
						type = 'password' 
						placeholder = 'confirm password'
						id = 'confirm password' 
						name = 'confirm password' 
						value = {confirmPassword} 
						onChange = {(e) => setConfirmPassword(e.target.value)} 
                		/>
					</div>

					<div className = 'entry-mobile grid-unit6'>
						<label className="entry-mobile" htmlFor = "gender" > Gender</label>
						<div className="entry-mobile gender-buttons-mobile">
							<div className="entry-page" id = "gb1-button">
								<input className="entry-page" type = 'radio' onClick = {() => {setMale(true); setFemale(false); setOther(false);}} id = 'male' name = 'gender' value = '0' />
							</div>
							<div id='gb1-label'>
								<label className="gb1-label" htmlFor = 'male'> Male </label>
							</div>

                        	<div className="entry-page" id = "gb2-button">
                            	<input className="entry-page" type = 'radio' onClick = {() => {setMale(false); setFemale(true); setOther(false);}} id = 'female' name = 'gender' value = '1' />
                            </div>

							<div id='gb2-label'>
							<label className="entry-page" htmlFor = 'female'> Female </label>
                        	</div>

                        	<div className="entry-page" id = "gb3-button">
                            <input className="entry-page" type = 'radio' onClick = {() => {setMale(false); setFemale(false); setOther(true); }} id = 'other' name = 'gender' value = '2' />
							</div>

							<div id = 'gb3-label'>
                            <label className="entry-page" htmlFor = 'other'> Other </label>
                        	</div>

                    	</div>
					</div>

					<NonBinary/>


					<div className = 'entry-mobile grid-unit7'>
						<label className="entry-mobile"> I'm looking for a... </label>
						<div className = 'entry-mobile looking-for-buttons-mobile'>
								<div  id='lfb1'>
								<input className="entry-mobile" id='innerLfb1'  type = 'checkbox' onClick = {() => {setStudyBuddy( !studyBuddy)}}  name = 'study buddy' value = '0'/>
								</div>
								<label className="entry-mobile" id='lfl1' htmlFor = 'study buddy' >Study buddy</label> 
						
								<div id='lfb2'>
								<input className="entry-mobile"  type = 'checkbox' onClick = {() => {setFriend(!friend)}} name = 'friend' value = '1'/>
								</div>
								<label className="entry-mobile" id='lfl2' htmlFor = 'friend'>friend</label> 
						
								<div id='lfb3'>
								<input className="entry-mobile" type = 'checkbox' onClick = {() => {setSex(!sex)}}  name = 'sex' value = '2'/>
								</div>
								<label className="entry-mobile" id = 'lfl3' htmlFor = 'sex'>friend ;)</label>
						</div>
					</div>


					<div className = 'entry-mobile grid-unit8'>
						<button className="entry-mobile" type = 'submit' onClick = { (e) => {submitHandler(e);} }> Sign Up </button>
					</div>
			</div> 
    );
}

export default SignUp_SignIn_Component_Mobile;