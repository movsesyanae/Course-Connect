import React, { useState, useEffect, useRef} from 'react';
import './SignInStyle.css'
import axios from 'axios'
const SignUp = props => {

    // const [person, setPerson] = useState({ email: '', password: ''})
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

    
    useEffect(() => {whereWeAt.current.focus()},[nonBinary]);

    function submitHandler (e) {
        e.preventDefault();

        let stringInputs = [name,email,password,confirmPassword,nonBinary];
        let submitPass = true;  //as long as true should succefully submit

        if(name == '' || email == '' || password == '' || confirmPassword == '' ||  (!studyBuddy && !friend && !sex) || (!male && !female && !other) || (other && nonBinary == '')) {
            props.failMessage('You have not selected all fields');
            submitPass = false;
            return;
        }


        for(let x in stringInputs) { //injection prevention
            console.log(stringInputs[x]);
            if(stringInputs[x].includes('\'') || stringInputs[x].includes('<') || stringInputs[x].includes('>')) {
                props.failMessage('You may not include symbols such as \' or < >');
                submitPass = false;
                return;
            }
        }

        if(!(password == confirmPassword)) { //FIX: passwords showing up in console
            props.failMessage('Passwords must match!');
            submitPass = false;
            return;
        }

        if(!email.endsWith('@umd.edu')) {
            props.failMessage('Please use a @umd.edu email');
            submitPass = false;
            return;
        }

       


        // Once everything is handled
        
        //should push user account to server

        const serverURL = 'ec2-3-92-91-162.compute-1.amazonaws.com';

        axios.post(
                serverURL, {createRequestJSON}
            ).then(
                res => {
                console.log(res); console.log(res.data);}
            ).catch(
                err => {console.log(err)}
        );
        


        //only do this part if user does not exist
        const user = createUser();
        const logInObject = {user: user, verified: false}
        props.logIn(logInObject);  
    }

    const createUser = () => {
        const crypto = require('crypto'); 
        const hash = crypto.createHash('sha256');
        const id = hash.update('email', 'binary').digest('hex');
        const passHash = hash.update('password', 'binary').digest('hex');
        // const user = {id: id, passHash: passHash};
        const user = {id: email, passHash: password};
        return user;
    }

    const createRequestJSON = () => {
        const user = createUser(); 

        // get gender
        let gender = '';
        if (male) gender = 'male';
        else if (female) gender = 'female';
        else gender = nonBinary;

        // get enum looking for list
        let lookingForList = []
        if(studyBuddy) lookingForList.push(1);
        if(friend) lookingForList.push(2);
        if(sex) lookingForList.push(3);




        const grace = {user: user, email: email, name: name, gender: gender, lookingForList: lookingForList, verified: false, action: 0};
        console.log(grace);
        return grace;
        
    }
    


    const NonBinary = () => {
        if (other == true) {
            return (
                    <div className="entry-page" id='nonBinaryBox'>
                    {/* <label htmlFor = "nonBinary"> Confirm Gender : </label> */}
                    <input 
                        className="entry-page"
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

    return (
        <body id='mobileEnterBody'>
        <div className="entry-page form-container sign-up-container" id='sign-up-form'>
        <form action = "#" className="entry-page">
                <div className="entry-page" id='signUpLabel'>
                <h1 className="entry-page">Sign Up</h1>
                </div>
                <input 
                    className="entry-page"
                    type = 'text' 
                    id = 'name' 
                    name = 'name'
                    placeholder = 'name' 
                    ref = {whereWeAt}
                    value = {name} 
                    onChange = { (e) => setName(e.target.value) } 
                /> 

                <input 
                    className="entry-page"
                    type = 'text' 
                    id = 'email' 
                    name = 'email'
                    placeholder = 'email' 
                    value = {email} 
                    onChange = { (e) => setEmail(e.target.value) } 
                />

                <input 
                    className="entry-page"
                    type = 'password' 
                    id = 'password' 
                    name = 'password'
                    placeholder = "passworrd" 
                    value = {password} 
                    onChange = {(e) => setPassword(e.target.value)} 
                />

                <input 
                    className="entry-page"
                    type = 'password' 
                    placeholder = 'confirm password'
                    id = 'confirm password' 
                    name = 'confirm password' 
                    value = {confirmPassword} 
                    onChange = {(e) => setConfirmPassword(e.target.value)} 
                />

                <div className = 'entry-page gender-selection-container'>

                    <label className="entry-page" htmlFor = "gender" id="genderLabel"> Gender</label>
                    <div className="entry-page gender-buttons">
                        <div className="entry-page" id = "gb1">
                            <input className="entry-page" type = 'radio' onClick = {() => {setMale(true); setFemale(false); setOther(false);}} id = 'male' name = 'gender' value = '0' />
                            <label className="entry-page" htmlFor = 'male'> Male </label>
                        </div>
                        <div className="entry-page" id = "gb2">
                            <input className="entry-page" type = 'radio' onClick = {() => {setMale(false); setFemale(true); setOther(false);}} id = 'female' name = 'gender' value = '1' />
                            <label className="entry-page" htmlFor = 'female'> Female </label>
                        </div>
                        <div className="entry-page" id = "gb3">
                            <input className="entry-page" type = 'radio' onClick = {() => {setMale(false); setFemale(false); setOther(true); }} id = 'other' name = 'gender' value = '2' />
                            <label className="entry-page" htmlFor = 'other'> Other </label>
                        </div>

                    </div>
                        
                    <NonBinary className="entry-page"/> 
                </div>

            

                
                <div className = 'entry-page looking-for-container'>
                
                    <label className="entry-page"> I'm looking for a... </label>
                    <div className = 'entry-page looking-for-buttons'>



                        <div className="entry-page">
                            <input className="entry-page" type = 'checkbox' onClick = {() => {setStudyBuddy( !studyBuddy)}} id = 'study buddy' name = 'study buddy' value = '0'/>
                            <label className="entry-page" htmlFor = 'study buddy' >Study buddy</label> 
                        </div>

                        <div className="entry-page">
                            <input className="entry-page"type = 'checkbox' onClick = {() => {setFriend(!friend)}} id = 'friend' name = 'friend' value = '1'/>
                            <label className="entry-page" htmlFor = 'friend'>friend</label> 
                        </div>

                        <div className="entry-page">
                            <input className="entry-page" type = 'checkbox' onClick = {() => {setSex(!sex)}} id = 'sex' name = 'sex' value = '2'/>
                            <label className="entry-page" htmlFor = 'sex'>friend ;)</label>
                        </div>
                        
        
                    </div>
                </div>



            
            <div className = 'entry-page sign-up-button'>

                <button className="entry-page" type = 'submit' onClick = { (e) => {submitHandler(e);} }> Sign Up </button>
            </div>
            {console.log(document.activeElement)}
        </form>
        </div>
        </body>
    );

    
}

export default SignUp;
