import React, {useState, useEffect} from 'react';
import './homePage.scss'
import axios from 'axios'

const HomePage = () => {
    const [dataFile, setDataFile] = useState({});
    const [textList, setTextList] = useState([]);
    const [currentUser, setCurrentUser] = useState(4);
    const [currentConvo, setCurrentConvo] = useState("323");
    const [rerun, setRerun] = useState(0);

    function textHandler (event) {
        if(event.key === 'Enter'){
            alert('deez nuts')
        }
    }

     function loadTexts() {
        //will have to change when connected to the server
        // fetch('../grace.json').then(response => response.json()).then(data => {console.log('attempting to display JSON');console.log(data)});
        
        // var textData = require('../grace.json');
        // textData = textData.parse(textData);
        // console.log(textData);
        // setTextList(textData.texts);
        // console.log(textList);
        for(let convo in dataFile) {
            if(dataFile[convo]["convoId"] == currentConvo) {
                setTextList(dataFile[convo]["texts"]);
            }
        }
    }

    const DisplayMessages = () => {
        if(textList.length > 0){
            return (
                <div id='messageArea'>
                    <div id ='innerMessageArea'>
                    {textList.map((text,index) => <DisplayMessage number={index} key = {index}/>)}
                    </div>
                </div>
            );
        } else {
            return <></>
        }
    }

    const DisplayMessage = (props) => {
        if(textList[props.number].from == currentUser)
        {
            return (
                <div id='messageBoxRec'>
                    <p>{textList[props.number].message}</p>
                </div>);
        } else {
            return (
                <div id='messageBoxSend'>
                    <p>{textList[props.number].message}</p>
                </div>);
        }
        
    }

    function contactClickHandler (obj) {
        console.log("attempting to switch texts from: " + obj["convoId"]);
        setCurrentConvo(obj["convoId"]);
        
    }

    const DisplayContacts = () => {
        
        console.log(dataFile);
        if(dataFile.length > 0) {
            console.log('attempting to return')
            return( 
                <div id='overFlowBox'>
                <div id='innerChatSelectBox'>
                {
                dataFile.map((obj,index) => <a href="#" onClick={(e) => {e.preventDefault();contactClickHandler(obj)}}><ContactBox focus={obj} key={index} /> </a>)
                }
                </div>
                </div>
            );
        } else {
            return <></>
        }
    }
    
    const ContactBox = (props) => {
        console.log(props.focus);
        return (
            <div id='contactBox'>
                <p>{props.focus["convoId"]}</p>
            </div>
        )
    }

    const ContactInfoBox = () => {
        return(
            <div id = 'contactInfoBox'>
                <div><p>Name: </p></div>
                <div><p>Shared courses: </p></div>
                <div><p>Looking for: </p></div>
                <div><p>Bio: </p></div>
                <div><p>Gender: </p></div>
                
            </div>
        )
    }
    
    const fetchData = async () => {
        const result = await axios.get('grace.json');
        const data = await result.data;
        
        return data;
        
    }
    
    useEffect(async () => {
        
       let data = await fetchData();
       setDataFile(data);
       loadTexts();

       if(rerun == 0) {
           setRerun(1);
       }
    },[rerun,currentConvo])



    return (
        <div id='outerHomePage'>
            <div id='upperContent'>
                <h1>Terp Connect</h1>
            </div>
            <div id = 'chatSelectBox'>
                <DisplayContacts/>
                <ContactInfoBox/>
            </div>

            <div id = 'chatBox'>
                <DisplayMessages />
                <div id='writingBox'>
                        <textarea onKeyPress = {(event) => {textHandler(event);}}>
                        </textarea>
                </div>

            </div>
        </div>
    ); 
}

export default HomePage;