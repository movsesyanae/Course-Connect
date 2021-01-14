import React, { useState} from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import './CourseSelectorStyle.css'








const CourseSelector = (props) => {

    const [course, setCourse] = useState({id: '', prof: 'Select Professor'});
    const [valid, setValid] = useState(false);
    const [courseList, setCourseList] = useState([]);
    const [errorCode, setErrorCode] = useState(0); 
    // 0 - all works well 
    // 1 - course isn't valid 
    // 2 - professor isn't selected
    // 3 - max number of courses already added


    const getUserObject = () => {
        return ({id: 1234, passHash: 4321});
    }

    const createJSON = () => {
        const pls = {user: getUserObject(), courseList: courseList, action: 3};
        console.log(pls);
    }

    const updateProfessor = (e) => {
        setCourse({ ...course, prof: e.target.name});
    }

    const updateCourseList = () => {

        const newCourse = {id: course.id.toUpperCase(), prof: course.prof};
        setCourseList([...courseList, newCourse]);
        
        
    }

    const removeCourse = (tempCourse) => {
        const index = courseList.indexOf(tempCourse);
        let newData = courseList.filter((courseInList) => courseInList !== tempCourse );
        setCourseList(newData);
    }

    const ShowCourseList = () => {
        return (
            <fieldset className = 'course-selection-page course-display-package' id = 'course-list'>
                <legend> Your Classes </legend>
                <ul className = 'course-display-package'>
                    <h3 className = 'course-list-element' id>
                       <div id='course-label'> Course ID </div>
                       <div> Professor</div>  
                    </h3>
                    {courseList.map( (tempCourse) => {
                        return (
                            <li className = 'course-list-element'> 
                                <div id = 'course-list-element'>
                                    <div>
                                        {tempCourse.id} 
                                    </div>
                                    <div>
                                        {tempCourse.prof} 
                                    </div>
                                    <div>
                                        <button className = 'remove-class-btn' onClick = {(e) => removeCourse(tempCourse)}>&times;</button> 
                                    </div>
                                </div> 

                            </li>);
                    })} 

                </ul>
            </fieldset>
        );
    }

    const getProfessorList = (classId) => {
        var json = require('./classes.json');
        return(json[classId.toUpperCase()]);
    }

    const CreateProfessorDropdown = () => {
        const profList = getProfessorList(course.id);
        return (
            <div className = 'dropdown-package'> 
                <label htmlFor = 'profSelector' id = 'professor-label'> Professor:</label>
                <DropdownButton 
                    drop = 'down' 
                    id = 'professor-dropdown' 
                    // variant="secondary" 
                    title = {course.prof} 
                    // as = 'button'
                    className = 'professor-button'
                    alignRight >

                    <div className = 'grace-pls'>
                        {profList.map( (profName) => {
                            return(
                                <Dropdown.Item 
                                    name = {profName}
                                    id = 'professor-dropdown-item'
                                    as = 'button'
                                    className = 'professor-button'
                                    onClick = {updateProfessor} > {profName} </Dropdown.Item>
                            );
                        } )}
                    </div>
                </DropdownButton>
            </div>
        );
    }

    const ResetProfessor = () => {
        return(null);
    }


    const addCourse = (e) => {
        // 0 - all works well 
        // 1 - max number of courses already added
        // 2 - course isn't valid 
        // 3 - professor isn't selected
        // 4 - course is already added

        if (courseList.length >= 7) {
            setErrorCode(1);
        } else if (!valid) {
            setErrorCode(2);
        } else if (course.prof === 'Select Professor') {
            setErrorCode(3);
        } else if (courseList.filter((element) => element.id === course.id.toUpperCase()).length > 0) {
            setErrorCode(4);
        }
        else {
            setErrorCode(0);
            updateCourseList();
        }

    }

    const DisplayErrorMessage = () => {
        var errorMessage = '';
        switch (errorCode) {
            case 1:
                errorMessage = 'You have already the maximum amount of courses'
                break;

            case 2:
                errorMessage = 'Please enter a valid UMD Course ID'
                break;
            
            case 3:
                errorMessage = 'Please select your professor'
                break;
            
            case 4:
                errorMessage = 'You have already added this course'
                break;
        
            default:
                break;
        }

        return (
            <div className="alert">
                <ref className="closebtn" onClick = {(e) => setErrorCode(0)}>&times;</ref>
                {errorMessage}
            </div> 
        )

    }

    const checkCourseValid = (courseId) => {
        var json = require('./classes.json'); //(with path)
        // var returnArray = ['Damn Shadi'];
        // const course_id = 'CMSC352';
        // if(json.hasOwnProperty(course_id)){
        //     returnArray = json[course_id]
        // }
        if (json.hasOwnProperty(courseId.toUpperCase())) {
            setValid(true);
        } else { 
            setValid(false);
        }

    }

    const handleSubmit = () => {
        //do server call

        //make next page main page
        props.nextPage(0);
    }


    return (
        <main className = 'course-selection-page'>
        

            {courseList.length > 0 ? <ShowCourseList /> : null}
            <fieldset className = 'course-input-package course-selection-page' id = 'class-selector'>
                <legend> Add a course </legend>
                
                <div className = 'course-inputs'>
                    
                    <div className = 'course-id-input'>
                        <label htmlFor = "course-id-input"> Course: </label>
                        <input 
                            type = "text" 
                            id = 'course-id-input' 
                            name = 'course'
                            className = 'course-selection-page' 
                            value = {course.id}
                            onChange = {(e) => {
                                checkCourseValid(e.target.value.toUpperCase()); 
                                setCourse({ id: e.target.value.toUpperCase(), prof: 'Select Professor' });
                            }
                            }
                        /> 
                    </div>
                    
                    { valid ? <CreateProfessorDropdown /> : null }

                </div>

                <div>
                    <button className = 'add-class-btn' type = 'submit' onClick = {(e) => {addCourse();}}> Add Class </button>
                </div> 
                

            </fieldset>

            <button className = 'add-class-btn' id = 'submit-courses-btn' type = 'submit' onClick = {(e) => {handleSubmit;}}> Submit Class List </button>
            
            
            {errorCode !== 0 ? <DisplayErrorMessage /> : null}

            


        </main>
    

    );
}

export default CourseSelector;