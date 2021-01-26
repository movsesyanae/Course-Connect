import React from 'react';
import './mainPage.scss'

const MainPage = (props) => {


    return(
        // <div className = 'main-page' id='mainBox'>
        //     <h2> Welcome to Course Connect </h2>
        //     <p> We're still working on the website, but don't worry - you'll be able to talk to your classmates soon</p>
        //     <div id = 'description'>
        //         <h4>How it works</h4>
        //         <p>fgkfdkjgfkgnknsdfk <br />jsdfdsfsfsfsddssdfn</p>
        //     </div>
        //     <button onClick = {(e) => {props.returnObject({nextPage: 'course-selection'})}}> Update Classes </button>
        //     <button onClick = {(e) => {props.returnObject({nextPage: 'sign-out'})}}> Sign Out </button>
        // </div>
        <body>
            <div id='menuOuterScreen'>
                <div id='areaBox'>
                    <div id='title'>
                        <p>Welcome to Course Connect</p>
                    </div>
                    <div id='text1'>
                        <p>We're still working on the website, but don't worry - you'll be able to talk to your classmates soon (next monday..hopefully..)</p>
                    </div>
                    <div id='text2'>
                        <p>Every week you get paired with one person from each of your classes.<br/>Please update your classes if you have not yet done so</p>
                    </div>
                    <div id = 'btn-and-btn'>
                    <button id='btn1' onClick = {(e) => {props.returnObject({nextPage: 'course-selection'})}}> Update Classes </button>
                    <button id='btn2' onClick = {(e) => {props.returnObject({nextPage: 'sign-out'})}}> Sign Out </button>
                    </div>
                </div>
            </div>
        </body>
    );

}

export default MainPage;