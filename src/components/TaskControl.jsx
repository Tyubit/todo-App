import '../styles/taskcontrol.scss'
import Button from './Button.jsx'
import TaskFilter from './TaskFilter'

const TaskControl = ({ tasks,clearCompleted,showActive, showAll, showCompleted,windowSize}) => {

    return (
        <div className="task-control">
            <span className="task-count">{ tasks.length} items left</span>

            {windowSize >= 1000 &&
                <TaskFilter
                showActive={showActive}
                showAll={showAll}
                showCompleted={showCompleted}
            />}
            
            <Button text='Clear Completed' onClick={ clearCompleted} />
        </div>
    )
}

export default TaskControl