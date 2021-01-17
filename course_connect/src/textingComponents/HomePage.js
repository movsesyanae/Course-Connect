import React, { useState} from 'react';
import './homePage.scss'

const HomePage = () => {

    function textHandler (event) {
        if(event.key === 'Enter'){
            alert('deez nuts')
        }
    }

    return (
        <div id='outerHomePage'>
            <div id='upperContent'>
                <h1>Terp Connect</h1>
            </div>
            <div id = 'chatSelectBox'>

            </div>

            <div id = 'chatBox'>
                <div id='writingBox'>
                        <textarea onKeyPress = {(event) => {textHandler(event);}}>
                        </textarea>
                </div>

            </div>
        </div>
    ); 
}

export default HomePage;