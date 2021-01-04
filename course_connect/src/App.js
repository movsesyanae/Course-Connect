import logo from './logo.svg';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <p> First message </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}


        <p> Ok this will be the first page </p>

        <form> 
          <label>
            Name:
            <input 
            type = "text" 
            name = "name"
            />
            <input type="submit" value="Submit" />

          </label>
        </form>



      </header>
    </div>
  );
}

// export class App extends Component {
  
//   responceGoogle = (responce) => {
//     console.log(responce);
//     console.log(responce.profileObj);
//   }
  
//   render() {
//     return (
//       <div>
//         <GoogleLogin
//         clientId = "606162410258-f9oiloe1b0p6rmvr8vhlfulhqv8qc4a0.apps.googleusercontent.com"
//         buttonText = "Login"
//         onSuccess = {this.responceGoogle}
//         onFailure = {this.responceGoogle}
//         cookiePolicy = {"single_host_origin"}
//         />
//       </div>
//     )
//   }
// }

export default App;
