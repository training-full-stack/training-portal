import React from 'react';
import './components.css';

function listItem({student, deleteItem}) {
  return (
    <div className="flex-row">
        <div className="flex-item">
            <div>
                {
                    student.name === '' &&
                    <input type="text"/>
                }
                {
                    student.name != '' &&
                    <span>{student.name}</span>
                }
            </div>
            <div className="text-sm">Name</div>
        </div>
        <div className="flex-item">
            <div>{student.age}</div>
            <div className="text-sm">Age</div>
        </div>
        <div className="flex-item">
            <div>{student.course}</div>
            <div className="text-sm">Course</div>
        </div>
        <div className="flex-item">
            <div>{student.enrolled}</div>
            <div className="text-sm">Enrolled</div>
        </div>
        <div className="flex-item" style={{alignSelf:"flex-end"}}>
            <button onClick={()=>deleteItem(student)}>Delete</button>
        </div>
    </div>
  );
}

export default listItem;
