import React, { useState, useEffect, useRef} from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'








const CourseSelector = () => {

    const [course, setCourse] = useState({id: '', prof: 'Select Professor'});
    const [valid, setValid] = useState(false);
    const [courseList, setCourseList] = useState([]);

    const updateProfessor = (e) => {
        setCourse({ ...course, prof: e.target.name});
        // console.log(e.target.name);
    }

    const updateCourseList = () => {
        if(courseList.filter((element) => element.id === course.id).length == 0) {

            const newCourse = {id: course.id, prof: course.prof};
            setCourseList([...courseList, newCourse]);
        } else {
            // Create Message that cant add multiple versions of the same course 
        }
        
    }

    const removeCourse = (tempCourse) => {
        const index = courseList.indexOf(tempCourse);
        let newData = courseList.filter((courseInList) => courseInList !== tempCourse );
        setCourseList(newData);
    }

    const ShowCourseList = () => {
        return (
            <div>
                <h3> Course List </h3>
                <ul>
                {courseList.map( (tempCourse) => {
                    return (
                        <li> {tempCourse.id} -- {tempCourse.prof} 
                        <button type = 'submit' onClick = {(e) => removeCourse(tempCourse)}  > delete </button> </li>);
                })} 

                </ul>
            </div>
        );
    }

    const getProfessorList = (classId) => {
        return(['Kruskal', 'Teli', 'IDK']);
    }

    const CreateProfessorDropdown = (classId) => {
        const profList = getProfessorList(classId);
        console.log(profList)
        return (
            <div> 
                <label htmlFor = 'profSelector'> Select your professor</label>

                <DropdownButton id = 'profSelector' title = {course.prof} >

                {profList.map( (profName) => {
                    console.log(profName);
                    return(
                        <Dropdown.Item 
                            name = {profName} 
                            onClick = {updateProfessor} > {profName} </Dropdown.Item>
                    );
                } )}
                </DropdownButton>
            
            </div>
        );
    }

    const ResetProfessor = () => {
        return(null);
    }


    const addCourse = (e) => {
        updateCourseList();
    }

    const checkCourseValid = (courseId) => {
        if (courseId == 'CMSC351') {
            setValid(true);
        } else { 
            setValid(false);
        }

    }


    return (
        <div> 
            <div>

                {courseList.length > 0 ? <ShowCourseList /> : null}
                <h4> Add a course </h4>
                <label htmlFor = "course"> Course: </label>
                <input 
                    type = "text" 
                    id = 'course' 
                    name = 'course' 
                    value = {course.id}
                    onChange = {(e) => {
                        checkCourseValid(e.target.value); 
                        setCourse({ id: e.target.value, prof: 'Select Professor' });
                    }
                    }
                /> 


                { valid == true ? <CreateProfessorDropdown /> : null }


                


            </div>
            <div> 
                <button type = 'submit' onClick = {addCourse}> Add Class </button>
            </div>
        
        </div>

    );
}

export default CourseSelector;