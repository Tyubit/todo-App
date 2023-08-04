
import './App.scss'
import './_variables.scss'
import React, { useState, useEffect,useRef } from 'react'
import { PropTypes } from "prop-types";
import Header from './components/Header'
import Tasks from './components/Tasks'
import TaskControl from './components/TaskControl'
import TaskFilter from './components/TaskFilter';

function App() {
  const [todos, setTodos] = useState([])
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  const [lightTheme, setLightTheme] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const handelWindowResize = () => {
      setWindowSize(window.innerWidth)
    }

    window.addEventListener('resize', handelWindowResize)
    
    return () => {
      window.removeEventListener('resize',handelWindowResize)
    }
  }, [])

   //for task controll (Active,Completed)
  const [todosCopy, setNewCopy] = useState([...todos]);
  
  //save id ref for dragItem and dragOverItem
  let dragItem = useRef()
  let dragOverItem = useRef()

  const DragStart = (e,index) => {
    dragItem.current = index
  }

  const DragEnter = (e, index) => {
    dragOverItem.current = index
  }

  const handleDragSort = () => {
    //duplicate the main list
    const temp = [...todos]

    //copy the dragged li and deleting it from list
    const draggedItemContent = temp.splice(dragItem.current, 1)[0]

    //place dragged item in place we drop
    temp.splice(dragOverItem.current, 0, draggedItemContent)
    
    //reset
    dragItem.current = null;
    dragOverItem.current = null;
    setTodos(temp)
    setNewCopy(temp)
  }

  //change light/dark theme
  const changeTheme = () => {
    setLightTheme( !lightTheme ? true : false)
  }

  const AddTask = async (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task }
    setTodos([...todos, newTask])
    setNewCopy([...todos, newTask])
  }

  const showError = (str) => {
    setErrorMsg(str)
  }

  const onDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
    setNewCopy(todos.filter(todo => todo.id !== id))
  }

  const onComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ?
          { ...todo, isComplete: !todo.isComplete } : todo
      )
    )

    setNewCopy(
      todos.map((todo) =>
        todo.id === id ?
          { ...todo, isComplete: !todo.isComplete } : todo
      )
    )
  }

//task filters
  const showActive = () => {
    setNewCopy(todos.filter(todo => !todo.isComplete))
  }

  const showAll = () => { 
    setNewCopy([...todos])
  }

  const showCompleted = () => {
    setNewCopy(todos.filter(todo => todo.isComplete))
  }

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.isComplete))
    setNewCopy(todos.filter(todo => !todo.isComplete))
  }


  return (
    <div className={`page ${lightTheme ? "light-theme" : "dark-theme"} ${windowSize <= 375 ? "mobile" : ''}`}>
      <div className="container">

        <Header title="TODO"
          onAdd={AddTask}
          error={errorMsg}
          updateError={showError}
          changeTheme={changeTheme}
          isTheme ={lightTheme}  
        />
        
        {todos.length === 0 ? (
          <div className="no-tasks">
            <span>No Tasks</span>
          </div>) : (
          <Tasks tasks={todosCopy}
          onDelete={onDelete}
          onComplete={onComplete}
          DragStart={DragStart}
          DragEnter={DragEnter}
          handleDragSort={handleDragSort}
          />)}
        
        <TaskControl tasks={todos}
          showActive={showActive}
          showAll={showAll}
          showCompleted={showCompleted}
          clearCompleted={clearCompleted}
          windowSize={ windowSize} />
        
        {windowSize < 1000 &&
          <TaskFilter
          showAll={showAll}
          showActive={showActive}
          showCompleted={showCompleted}
          windowSize = {windowSize}/>
        }
        <p className='hint'>Drag and drop to reorder list</p>
      </div>

    </div>
  )
}

export default App
