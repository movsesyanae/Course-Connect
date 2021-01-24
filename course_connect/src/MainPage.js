import React from 'react';
import './mainPage.scss'

const MainPage = (props) => {


    return(
        <div className = 'main-page' id='mainBox'>
            <h2> Welcome to Course Connect </h2>
            <p> We're still working on the website, but don't worry - you'll be able to talk to your classmates soon</p>
            <div id = 'description'>
                <h4>How it works</h4>
                <p>fgkfdkjgfkgnknsdfk <br />jsdfdsfsfsfsddssdfn</p>
            </div>
            <button onClick = {(e) => {props.returnObject({nextPage: 'course-selection'})}}> Update Classes </button>
            <button onClick = {(e) => {props.returnObject({nextPage: 'sign-out'})}}> Sign Out </button>
        </div>
    );

}

export default MainPage;