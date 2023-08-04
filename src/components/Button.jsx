import PropTypes from "react"
import '../styles/_button.scss'

const Button = ({ text, activeBtn, onClick }) => {
    return (
        <button className={`btn task-control-filter ${activeBtn == text ? 'active' : ''}`} onClick={onClick}> 
            {text}
        </button>
    )
}

Button.prototype = {
    text: PropTypes.string,
}

export default Button