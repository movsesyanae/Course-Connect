import React, { useState} from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import './CourseSelectorStyle.css'








const CourseSelector = () => {

    const [course, setCourse] = useState({id: '', prof: 'Select Professor'});
    const [valid, setValid] = useState(false);
    const [courseList, setCourseList] = useState([]);
    const [errorCode, setErrorCode] = useState(0); 
    // 0 - all works well 
    // 1 - course isn't valid 
    // 2 - professor isn't selected
    // 3 - max number of courses already added

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
            <fieldset className = 'course-input-package' id = 'course-list'>
                <legend> Your Classes </legend>
                <ul>
                    <h3 className = 'course-list-element' id>
                       <div> Course ID </div>
                       <div> Professor</div>  
                    </h3>
                    {courseList.map( (tempCourse) => {
                        return (
                            <li> 
                                <div className = 'course-list-element'>
                                    <div>
                                        {tempCourse.id} 
                                    </div>
                                    <div>
                                        {tempCourse.prof} 
                                    </div>
                                    <div>
                                        <button className = 'close' onClick = {(e) => removeCourse(tempCourse)}  /> 
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
            <div> 
                <label htmlFor = 'profSelector'> Select your professor</label>
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


    return (
        <div className = 'course-selection-page'>

            {courseList.length > 0 ? <ShowCourseList /> : null}
            <fieldset className = 'course-input-package'>
                <legend> Add a course </legend>
                
                <div className = 'course-inputs'>
                    <div>
                        <label htmlFor = "course-id-input"> Course: </label>
                        <input 
                            type = "text" 
                            id = 'course-id-input' 
                            name = 'course' 
                            value = {course.id}
                            onChange = {(e) => {
                                checkCourseValid(e.target.value); 
                                setCourse({ id: e.target.value, prof: 'Select Professor' });
                            }
                            }
                        /> 
                    </div>
                    { valid == true ? <CreateProfessorDropdown /> : null }

                </div>

                <div>
                    <button type = 'submit' onClick = {addCourse}> Add Class </button>
                </div> 
                

            </fieldset>
            
            {errorCode !== 0 ? <DisplayErrorMessage /> : null}
            


        </div>
    

    );
}

export default CourseSelector;