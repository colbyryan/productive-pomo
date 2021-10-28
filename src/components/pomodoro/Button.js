import "./Timer.css"

const Button = ({ title, _callback }) => {
    return (
        <button className="main__btn" onClick={_callback}>{title}</button>
    )
}

export default Button
