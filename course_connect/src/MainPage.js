import React from 'react';

const MainPage = (props) => {


    return(
        <div>
            <h2> Welcome to Course Connect </h2>
            <h4> We're still working on the website, but son't worry - you'll be able to talk to your classmates soon</h4>
            <button onClick = {(e) => {props.nextPage(2)}}> Update Classes </button>
            <button onClick = {(e) => {props.nextPage(0)}}> Sign Out </button>
        </div>
    );

}

export default MainPage;