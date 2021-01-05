import React, { useState, useEffect} from 'react';
import './SignUpStyle.css'

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

    const NonBinary = () => {
        if (other == true) {
            return (
                    <div>
                    <label htmlFor = "nonBinary"> Confirm Gender : </label>
                    <input 
                        type = 'text' 
                        id = 'nonBinary'
                        key = 'nonBinary'
                        name = 'nonBinary' 
                        value = {nonBinary} 
                        onChange = {(e) => setNonBinary(e.target.value)} 
                    /> 
                </div>  
                );
        } else {
            return (<></>);
        }
    }

    const NonBinaryComponent = () => {
        <div>
                    <label htmlFor = "nonBinary"> Confirm Gender : </label>
                    <input 
                        type = 'text' 
                        id = 'nonBinary'
                        key = 'nonBinary'
                        name = 'nonBinary' 
                        value = {nonBinary} 
                        onChange = {(e) => setNonBinary(e.target.value)} 
                    /> 
                </div>  
    }
    

    return (
        <form>
            <div>
                <label htmlFor = "name"> name : </label>
                <input 
                    type = 'text' 
                    id = 'name' 
                    name = 'name' 
                    value = {name} 
                    onChange = { (e) => setName(e.target.value) } 
                /> 
            </div>

            <div>
                <label htmlFor = "email"> email : </label>
                <input 
                    type = 'text' 
                    id = 'email' 
                    name = 'email' 
                    value = {email} 
                    onChange = { (e) => setEmail(e.target.value) } 
                /> 
            </div>

            <div>
                <label htmlFor = "password"> Password : </label>
                <input 
                    type = 'password' 
                    id = 'password' 
                    name = 'password' 
                    value = {password} 
                    onChange = {(e) => setPassword(e.target.value)} 
                /> 
            </div>

            <div>
                <label htmlFor = "confirm Password"> Confirm Password : </label>
                <input 
                    type = 'password' 
                    id = 'confirm password' 
                    name = 'confirm password' 
                    value = {confirmPassword} 
                    onChange = {(e) => setConfirmPassword(e.target.value)} 
                /> 
            </div>

            <div>
                <label htmlFor = "gender"> Gender</label>
                <input type = 'radio' onClick = {() => {setMale(true); setFemale(false); setOther(false);}} id = 'male' name = 'gender' value = '0' />
                <label htmlFor = 'male'> Male </label>
                <input type = 'radio' onClick = {() => {setMale(false); setFemale(true); setOther(false);}} id = 'female' name = 'gender' value = '1' />
                <label htmlFor = 'female'> female </label>
                <input type = 'radio' onClick = {() => {setMale(false); setFemale(false); setOther(true); }} id = 'other' name = 'gender' value = '2' />
                <label htmlFor = 'other'> Non-Binary </label>
            </div>

            <NonBinary/> 

            <div className = "relationshipChecks">
                <div>
                    <input type = 'checkbox' onClick = {() => {setStudyBuddy( !studyBuddy)}} id = 'study buddy' name = 'study buddy' value = '0'/>
                    <label htmlFor = 'study buddy'>Study buddy (pussy)</label> 
                    <input type = 'checkbox' onClick = {() => {setFriend(!friend)}} id = 'friend' name = 'friend' value = '1'/>
                    <label htmlFor = 'friend'>friend</label> 
                    <input type = 'checkbox' onClick = {() => {setSex(!sex)}} id = 'sex' name = 'sex' value = '2'/>
                    <label htmlFor = 'sex'>friend ;)</label> 
                </div>

            </div>

            <div>
                <button type = 'submit' onClick = { (e) => {e.preventDefault(); console.log(email, password)} }> Login </button>
            </div>
        </form>
    );

    
}

export default SignUp;
