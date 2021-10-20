const Button = ({ title, _callback }) => {
    return (
        <button onClick={_callback}>{title}</button>
    )
}

export default Button
