import Task from './Task.jsx'
import '../styles/_list.scss'

const Tasks = ({ tasks, onDelete, onComplete, handleDragSort, DragStart, DragEnter }) => {
    return (
        <ul className="list">
            {tasks.map((task,index) => (
                <Task key={task.id}
                    index={index}
                    task={task}
                    onDelete={onDelete}
                    onComplete={onComplete}
                    DragStart={DragStart}
                    DragEnter={DragEnter}
                    handleDragSort={handleDragSort}/>
            ))}
        </ul>
    )
}

export default Tasks