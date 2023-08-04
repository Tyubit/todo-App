import cross from "../assets/icon-cross.svg"
import check from "../assets/icon-check.svg"
import "../styles/todo.scss"
import React from "react"

const Task = ({ task,index, onDelete, onComplete, handleDragSort, DragStart, DragEnter }) => {

    return (
        <li className="todo" draggable
            onDragStart={e => DragStart(e,index)}
            onDragEnter={e => DragEnter(e,index)}
            onDragEnd={handleDragSort}> 
            <div className="left-side">
                <div className="style-checkbox list-elem">
                    <input type="checkbox" name="complete" defaultChecked={ task.isComplete} onClick={() => onComplete(task.id)}/>
                    <label htmlFor="checkbox"><img src={check} alt="check" /></label>
                </div>
                <span className={`text ${task.isComplete? "completed" : ""}`}>{task.text}</span>
            </div>
            <img src={cross} alt="cross" onClick={() => onDelete(task.id)} />
        </li>
    )
}

export default Task