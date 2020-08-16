import React from 'react';
import './components.css';

function listItem({student, deleteItem, updateItem, studentSelectHandler, selectedId, valueUpdateHandler}) {
  return (
    <div className="flex-row">
        <div className="flex-item">
            <input type="radio" id={student.id} value={student.id} name="student" onChange={() => {studentSelectHandler(student.id)}}></input>
        </div>
        <div className="flex-item">            
            <div>
                {
                    student.id === selectedId &&
                    <input type="text" value={student.name} onChange={(e) => {valueUpdateHandler(e, student.id, 'name')}}/>
                }
                {
                    student.id != selectedId &&
                    <span>{student.name}</span>
                }
            </div>
            <div className="text-sm">Name</div>
        </div>
        <div className="flex-item">
            <div>
                {
                    student.id === selectedId &&
                    <input type="text" value={student.age} onChange={(e) => {valueUpdateHandler(e, student.id, 'age')}}/>
                }
                {
                    student.id != selectedId &&
                    <span>{student.age}</span>
                }
            </div>
            <div className="text-sm">Age</div>
        </div>
        <div className="flex-item">
            <div>
                {
                    student.id === selectedId &&
                    <input type="text" value={student.course} onChange={(e) => {valueUpdateHandler(e, student.id, 'course')}}/>
                }
                {
                    student.id != selectedId &&
                    <span>{student.course}</span>
                }
            </div>
            <div className="text-sm">Course</div>
        </div>
        <div className="flex-item">
            <div>
                {
                    student.id === selectedId &&
                    <input type="text" value={student.enrolled} onChange={(e) => {valueUpdateHandler(e, student.id, 'enrolled')}}/>
                }
                {
                    student.id != selectedId &&
                    <span>{student.enrolled}</span>
                }
            </div>
            <div className="text-sm">Enrolled</div>
        </div>
        <div className="flex-item" style={{alignSelf:"flex-end"}}>
            <button onClick={()=>deleteItem(student)}>Delete</button>
        </div>
        <div className="flex-item" style={{alignSelf:"flex-end"}}>
            <button onClick={()=>updateItem(student)}>Update</button>
        </div>
    </div>
  );
}

export default listItem;
