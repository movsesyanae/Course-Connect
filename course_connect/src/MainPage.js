import React, {useEffect, useState} from 'react';
import './mainPage.scss'
import {Auth, API, graphqlOperation} from 'aws-amplify'


const MainPage = (props) => {


    useEffect(() => {
        checkUser();
    }, [])

    async function checkUser() {
        console.log('doing this ');
        try {
            await Auth.currentSession();
        } catch(error) {
            props.returnObject({nextPage: 'sign-out', message: 'not signed in in main-page', error: error});
        }

    }

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