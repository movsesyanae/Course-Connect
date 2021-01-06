import React, { useState, useEffect, useRef} from 'react';
import '../SignInStyle.css'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';

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
                    <div>
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
                    placeholder = "Email" 
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


                {/* <label htmlFor = "gender"> Gender</label> */}

                <div className='gender-select-container'>
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup row aria-label="position" name="position" defaultValue="top" >

                    <FormControlLabel 
                        value = "male"
                        control = {
                            <Radio onClick = {() => {setMale(true); setFemale(false); setOther(false); }} />
                        }
                        label = "Male"
                        labelPlacement = "bottom"
                    />

                    <FormControlLabel 
                        value = "female"
                        control = {
                            <Radio onClick = {() => {setMale(false); setFemale(true); setOther(false); }} />
                        }
                        label = "Female"
                        labelPlacement = "bottom"
                    />

                    <FormControlLabel 
                        value = "other"
                        control = {
                            <Radio onClick = {() => {setMale(false); setFemale(false); setOther(true); }} />
                        }
                        label = "Other"
                        labelPlacement = "bottom"
                    />
                    

                </RadioGroup>
                <NonBinary key = 'pls'/> 
                </div>
                {/* <div class="gender-buttons">
                <input type = 'radio' onClick = {() => {setMale(true); setFemale(false); setOther(false);}} id = 'male' name = 'gender' value = '0' />
                
                <label htmlFor = 'male'> Male </label>
                <input type = 'radio' onClick = {() => {setMale(false); setFemale(true); setOther(false);}} id = 'female' name = 'gender' value = '1' />
                <label htmlFor = 'female'> female </label>
                <input type = 'radio' 
                onClick = {() => 
                {setMale(false); 
                setFemale(false); 
                setOther(true); }} 
                id = 'other' 
                name = 'gender' 
                value = '2' />

                </div>
                <label htmlFor = 'other'> Non-Binary </label>
            
            <NonBinary key = 'pls'/>  */}


            

                
                <div className = 'looking-for-container'>
                
                <FormLabel component="legend">I'm looking for a...</FormLabel>
                
                <FormGroup row >
                    <FormControlLabel 
                            className = 'checkbox'
                            value = "friend"
                            control = {
                                <Checkbox 
                                checked = {friend} 
                                onChange = {(e) => {setFriend(e.target.checked)}} 
                                value = '0'/>
                            }
                            label = "friend"
                            labelPlacement = 'bottom'
                    />
                    <FormControlLabel 
                            className = 'checkbox'
                            value = "studdyBuddy"
                            control = {
                                <Checkbox 
                                checked = {studyBuddy} 
                                onChange = {(e) => {setStudyBuddy(e.target.checked)}}  
                                value = '0'/>
                            }
                            label = {"studdy buddy"}
                            labelPlacement = 'bottom'
                    />
                    <FormControlLabel 
                            className = 'checkbox'
                            value = "sex"
                            control = {
                                <Checkbox 
                                checked = {sex} 
                                onChange = {(e) => {setSex(e.target.checked)}} 
                                value = '0'/>
                            }
                            label = "friend ;)"
                            labelPlacement = 'bottom'
                    />
                    
                    {/* <input type = 'checkbox' onClick = {() => {setStudyBuddy( !studyBuddy)}} id = 'study buddy' name = 'study buddy' value = '0'/>
                    <label htmlFor = 'study buddy' >Study buddy (pussy)</label> 

                    <input type = 'checkbox' onClick = {() => {setFriend(!friend)}} id = 'friend' name = 'friend' value = '1'/>
                    <label htmlFor = 'friend'>friend</label> 

                    <input type = 'checkbox' onClick = {() => {setSex(!sex)}} id = 'sex' name = 'sex' value = '2'/>
                    <label htmlFor = 'sex'>friend ;)</label>  */}
                    </FormGroup>
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
