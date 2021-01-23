import {useState, useEffect} from 'react'
import './newSignUpIn.scss';

const NewSignUpSignIn = (props) => {

    const SignUp = () => {
        const [signUpFields,setSignUpFields] = 
        useState({name:'',email:'',password:'',confirmPassword:'',
        studyBuddy:false,friend:false,sex:false,male:false,
        female:false,other:false,nonBinary:''});
        const [signUpFailMessage, setSignUpFailMessage] = useState('');
        

        return (
            <div id = "newSignUpBox">

                <div id='Label'>

                </div>

                <div id='name'>
                    
                </div>

                <div id='email'>

                </div> 

                <div id='password'>
                    
                </div> 

                <div id='confirmPassword'>

                </div>

                <div id='gender'>
                    
                </div> 

                <div id='lookingfor'>

                </div>

                <div id='bio'>

                </div>

                <div id='submit'>

                </div>

            </div>
        );
    }

    const SignIn = () => {
        return (
            <div id = "newSignInBox">
                
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