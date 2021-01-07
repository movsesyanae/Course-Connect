
import SignIn from './SignIn'
import SignUp from './SignUp'

const SignUp_SignIn_Component = () => {
    return(
        <div class = "container" id = "container">

			<SignIn />
			<SignUp />

			<div class="overlay-container">
				<div class="overlay">
					<div class="overlay-panel overlay-left">
						<h1>Course Connect</h1>
						<p>Because we failed 216 and needed an internship</p>
						<button class="ghost" id="signIn" onClick = {() => {document.getElementById('container').classList.remove("right-panel-active");}}>Sign In</button>
					</div>
					<div class="overlay-panel overlay-right">
						<h1>Hello, Friend!</h1>
						<p>Enter your personal details and start journey with us</p>
						<button class="ghost" id="signUp" onClick = {() => {document.getElementById('container').classList.add("right-panel-active");}}>Sign Up</button>
					</div>
				</div>
			</div>
		</div>

    );
}

export default SignUp_SignIn_Component;