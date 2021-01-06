import React, { useState, useEffect, useRef} from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'



















const CourseViewer = () => {

}














const CourseSelector = () => {

    const [course, setCourse] = useState({id: '', prof: 'Select Professor'})
    const [valid, setValid] = useState('false')

    const updateProfessor = (e) => {
        setCourse({ ...course, prof: e.target.name});
        // console.log(e.target.name);
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

    const addCourse = (e) => {
        console.log(course.id, course.prof)
    }


    return (
        <div> 
            <div>
                    <div> The course is Valid:  {valid}</div>

                <label htmlFor = "course"> Course: </label>
                <input 
                    type = "text" 
                    id = 'course' 
                    name = 'course' 
                    value = {course.id}
                    onChange = {(e) => {
                        const tempCourse = course
                        tempCourse.id = e.target.value 
                        if (e.target.value == 'CMSC351') {
                            setValid('true');
                        } else { 
                            setValid('false');
                            setCourse({ ...course, prof: 'Select Professor'});
                        }
                        setCourse({ ...course, id: e.target.value});
                    }
                    }
                /> 


                { valid == 'true' ? <CreateProfessorDropdown /> : null }


                


            </div>
            <div> 
                <button type = 'submit' onClick = {addCourse}> Add Class </button>
            </div>
        
        </div>

    );
}

export default CourseSelector;