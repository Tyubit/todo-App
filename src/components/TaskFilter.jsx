import { useState } from 'react'
import Button from './Button.jsx'


const TaskFilter = ({ showActive, showAll, showCompleted,windowSize }) => {

    const [activeBtn, setActiveBtn] = useState('All')

    const handleClick = (action,id) => {
        const handleAction = () => { action }
        handleAction()
        setActiveBtn(id) 
    }
    return (
        <div className={`task-filter ${windowSize <= 375 ? "mobile" : ''}`}>
        <Button
            text='All'
            onClick={() => {showAll();setActiveBtn('All')
            }}
            activeBtn={ activeBtn} />
        <Button
            text='Active'
            onClick={() => { showActive(); setActiveBtn('Active') }}
            activeBtn={ activeBtn}/>
        <Button text='Completed'
            onClick={() => { showCompleted(); setActiveBtn('Completed') }}
            activeBtn={ activeBtn} />
    </div>
    )
}

export default TaskFilter