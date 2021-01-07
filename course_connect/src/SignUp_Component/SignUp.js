import React, { useState, useEffect, useRef} from 'react';
import '../SignInStyle.css'
const SignUp = () => {

    // const [person, setPerson] = useState({ email: '', password: ''})
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [gender, setGender] = useState('');
    const [studyBuddy, setStudyBuddy] = useState(false);
    const [friend, setFriend] = useState(false);
    const [sex, setSex] = useState(false);
    const [male, setMale] = useState(false);
    const [female, setFemale] = useState(false);
    const [other, setOther] = useState(false);
    const [nonBinary, setNonBinary] = useState('');
    const whereWeAt = useRef(document.getElementById('name'));

    

    
    useEffect(() => {whereWeAt.current.focus()},[nonBinary]);
    


    const NonBinary = () => {
        if (other == true) {
            return (
                    <div id='nonBinaryBox'>
                    <label htmlFor = "nonBinary"> Confirm Gender : </label>
                    <input 
                        type = 'text' 
                        id = 'nonBinary'
                        key = 'nonBinary'
                        name = 'nonBinary' 
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

    return (
        <div className="form-container sign-up-container" id='sign-up-form'>
        <form action = "#">
                <div id='signUpLabel'>
                <h1>Sign Up</h1>
                </div>
                <input 
                    type = 'text' 
                    id = 'name' 
                    name = 'name'
                    placeholder = 'name' 
                    ref = {whereWeAt}
                    value = {name} 
                    onChange = { (e) => setName(e.target.value) } 
                /> 

                <input 
                    type = 'text' 
                    id = 'email' 
                    name = 'email'
                    placeholder = 'email' 
                    value = {email} 
                    onChange = { (e) => setEmail(e.target.value) } 
                />

                <input 
                    type = 'password' 
                    id = 'password' 
                    name = 'password'
                    placeholder = "passworrd" 
                    value = {password} 
                    onChange = {(e) => setPassword(e.target.value)} 
                />

                <input 
                    type = 'password' 
                    placeholder = 'confirm password'
                    id = 'confirm password' 
                    name = 'confirm password' 
                    value = {confirmPassword} 
                    onChange = {(e) => setConfirmPassword(e.target.value)} 
                />

                <div className = 'gender-selection-container'>

                    <label htmlFor = "gender" id="genderLabel"> Gender</label>
                    <div class="gender-buttons">
                        <div id = "gb1">
                            <input type = 'radio' onClick = {() => {setMale(true); setFemale(false); setOther(false);}} id = 'male' name = 'gender' value = '0' />
                            <label htmlFor = 'male'> Male </label>
                        </div>
                        <div id = "gb2">
                            <input type = 'radio' onClick = {() => {setMale(false); setFemale(true); setOther(false);}} id = 'female' name = 'gender' value = '1' />
                            <label htmlFor = 'female'> female </label>
                        </div>
                        <div id = "gb3">
                            <input type = 'radio' onClick = {() => {setMale(false); setFemale(false); setOther(true); }} id = 'other' name = 'gender' value = '2' />
                            <label htmlFor = 'other'> Non-Binary </label>
                        </div>

                    </div>
                        
                    <NonBinary key = 'pls'/> 
                </div>

            

                
                <div className = 'looking-for-container'>
                
                    <label> I'm looking for a... </label>
                    <div className = 'looking-for-buttons'>



                        <div>
                            <input type = 'checkbox' onClick = {() => {setStudyBuddy( !studyBuddy)}} id = 'study buddy' name = 'study buddy' value = '0'/>
                            <label htmlFor = 'study buddy' >Study buddy</label> 
                        </div>

                        <div>
                            <input type = 'checkbox' onClick = {() => {setFriend(!friend)}} id = 'friend' name = 'friend' value = '1'/>
                            <label htmlFor = 'friend'>friend</label> 
                        </div>

                        <div>
                            <input type = 'checkbox' onClick = {() => {setSex(!sex)}} id = 'sex' name = 'sex' value = '2'/>
                            <label htmlFor = 'sex'>friend ;)</label>
                        </div>
                        
        
                    </div>
                </div>



            
            <div className = 'sign-up-button'>

                <button type = 'submit' onClick = { (e) => {e.preventDefault(); console.log(email, password)} }> Sign Up </button>
            </div>
            {console.log(document.activeElement)}
        </form>
        </div>
    );

    
}

export default SignUp;
