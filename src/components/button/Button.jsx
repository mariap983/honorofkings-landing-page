import './button.scss'

/* The code below is a function that returns an HTML button element. 
The class of the button will be btn and it will have any additional 
classes passed to the component as props. */

const Button = props => {
    return (
        <button className={`btn ${props.className}`}>
            {props.children}
        </button>
    )
}

export default Button