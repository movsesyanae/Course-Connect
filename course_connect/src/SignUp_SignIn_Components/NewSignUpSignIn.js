import {useState, useEffect, useRef} from 'react'
import './newSignUpIn.scss';

const NewSignUpSignIn = (props) => {

    const SignUp = () => {
        const [signUpFields,setSignUpFields] = 
        useState({name:'',email:'',password:'',confirmPassword:'',
        studyBuddy:false,friend:false,sex:false,male:false,
        female:false,other:false,nonBinary:'',bio:''});
        const [signUpFailMessage, setSignUpFailMessage] = useState('');
        const whereWeAt = useRef(document.getElementById('name'));

        useEffect(() => {whereWeAt.current.focus()},[signUpFields.nonBinary]);

        const NonBinary = () => {
            if(signUpFields.other){
                return(
                    <div id='nonBinary-field'>
                        <input 
                            type = 'text'
                            key = 'nonBinary'  
                            name = 'nonBinary'
                            ref = {whereWeAt}
                            placeholder = 'gender' 
                            value = {signUpFields.nonBinary} 
                            onChange = { (e) => setSignUpFields({...signUpFields,nonBinary:e.target.value}) } 
                        /> 
                        </div>
                )
            } else {
                return(<></>)
            }
        }

        return (
            <div id = "newSignUpBox">

                <div id='Label-field'>
                    <h1>Sign Up</h1>
                </div>

                <div id='name-field'>
                <input 
                    id='name'
                    ref = {whereWeAt}
                    type = 'text'  
                    name = 'name'
                    placeholder = 'name' 

                    value = {signUpFields.name} 
                    onChange = { (e) => setSignUpFields({...signUpFields,name:e.target.value}) }
                /> 
                </div>

                <div id='email-field'>
                    <input 
                        type = 'text'  
                        name = 'email'
                        placeholder = 'email' 
                        value = {signUpFields.email} 
                        onChange = { (e) => setSignUpFields({...signUpFields,email:e.target.value}) }
                    /> 
                </div> 

                <div id='password-field'>
                    <input 
                        type = 'password'  
                        name = 'password'
                        placeholder = 'password' 
                        value = {signUpFields.password} 
                        onChange = { (e) => setSignUpFields({...signUpFields,password:e.target.value}) }
                    /> 
                </div> 

                <div id='confirmPassword-field'>
                    <input 
                        type = 'password'  
                        name = 'confirm password'
                        placeholder = 'confirm password' 
                        value = {signUpFields.confirmPassword} 
                        onChange = { (e) => setSignUpFields({...signUpFields,confirmPassword:e.target.value}) }
                    /> 
                </div>

                <div id='gender-field'>
                    <label>Gender</label>
                    <input type = 'radio'  id = 'male-r' name = 'gender' value = '0' onClick = { (e) => setSignUpFields({...signUpFields,male:true,female:false,other:false}) }/>
                    <input type = 'radio'  id = 'female-r' name = 'gender' value = '1' onClick = { (e) => setSignUpFields({...signUpFields,male:false,female:true,other:false}) }/>
                    <input type = 'radio'  id = 'other-r' name = 'gender' value = '2' onClick = { (e) => setSignUpFields({...signUpFields,male:false,female:false,other:true}) }/>
                    <label id= 'male-l'>Male</label>
                    <label id= 'female-l'>Female</label>
                    <label id= 'other-l'>Other</label>
                </div>

                <NonBinary/>

                <div id='lookingfor-field'>
                    <label>Looking For:</label>
                        <input type = 'checkbox'  id = 'study-buddy-c' name = 'studdy-buddy' value = '0' onClick = { (e) => setSignUpFields({...signUpFields,studyBuddy:!signUpFields.studyBuddy})}/>
                        <input type = 'checkbox'  id = 'friend-c' name = 'friend' value = '1' onClick = { (e) => setSignUpFields({...signUpFields,friend:!signUpFields.friend})}/>
                        <input type = 'checkbox'  id = 'sex-c' name = 'sex' value = '2' onClick = { (e) => setSignUpFields({...signUpFields,sex:!signUpFields.sex})}/>
                        <label id= 'study-buddy-l'>Studdy <br/>Buddy</label>
                        <label id= 'friend-l'>Friend</label>
                        <label id= 'sex-l'>Friend ;)</label>
                </div>

                <div id='bio-field'>
                    <label>Bio</label>
                    <textarea placeholder = 'tell your classmates something about yourself ;)' value={signUpFields.bio} onChange = { (e) => setSignUpFields({...signUpFields,bio:e.target.value})}/>
                </div>

                <div id='submit-field'>
                    <button type = 'submit' onClick = { (e) => {e.preventDefault();} }> Sign Up </button>
                </div>

            </div>
        );
    }

    const SignIn = (props) => {
        const [signUpFields,setSignUpFields] = 
        useState({email:'',password:''});
        useState({email:'',password:''});


        return (
            <div id = 'newSignInBox'>
            <div id='height-box'>
                <div id='Label-field'>
                    <label><h1>Sign In</h1></label>
                </div>

                <div id='email-field'>
                    <input 
                            type = 'text'  
                            name = 'email'
                            placeholder = 'email' 
                            value = {signUpFields.email} 
                            onChange = { (e) => setSignUpFields({...signUpFields,email:e.target.value}) } 
                        /> 
                </div>

                <div id='password-field'>
                    <input 
                            type = 'password'  
                            name = 'password'
                            placeholder = 'password' 
                            value = {signUpFields.password} 
                            onChange = { (e) => setSignUpFields({...signUpFields,password:e.target.value}) }
                        /> 
                </div>

                <div id='submit-field'>
                    <button type = 'submit' onClick = { (e) => {e.preventDefault();} }> Sign Up </button>
                </div>
                </div>
            </div>
        );
    }

    return(
        <div id = "newOuterBox">
            <SignUp/>
            <SignIn/>
        </div>
    );

}
export default NewSignUpSignIn;