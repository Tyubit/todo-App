import '../styles/header.scss'
import MoonIcon from "../assets/icon-moon.svg"
import SunIcon from '../assets/icon-sun.svg'
import checkbox from '../assets/icon-check.svg'
import { useState } from 'react'
import AddTask from './AddTask'

const Header = ({ title, onAdd, error, updateError, changeTheme,isTheme}) => {
    return (
        <header className="header">
            <div className="title-switch">
                <h1 className="title">{title}</h1>
                <img src={`${isTheme ? MoonIcon : SunIcon}`} alt="SwitchIcon" onClick={changeTheme}/>
            </div>
            <span className='error'>{ error}</span>
            <AddTask onAdd={onAdd} updateError={ updateError}/>
        </header>
    )
}

export default Header