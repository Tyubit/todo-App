import React from 'react'
import { useState } from 'react'

const AddTask = ({ onAdd, updateError}) => {
    const [text, setText] = useState('')
    const isComplete = false

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            updateError('Type task first')
            return
        } updateError('')

        onAdd({ text, isComplete })
        setText(' ')
    }

    function noTextError() {
        return {
            render: (
                <span>Type task first</span>
            ),
        }
    }

return (
    <form className="todo-input " onSubmit={onSubmit}>
        <div className="style-checkbox">
            <input className ="header-checkbox" type="checkbox" name="complete" />
            <label htmlFor="checkbox"></label>
        </div>
        <input className={`input}`} type="text" placeholder="Create a new todo..." onKeyDown={(e) => setText(e.target.value)}/>
    </form>
)
}

export default AddTask