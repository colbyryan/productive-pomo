import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom"
import "./Login.css"

export const Login = () => {
    const [loginUser, setLoginUser] = useState({ email: "" })
    const [existDialog, setExistDialog] = useState(false)

    const history = useHistory()

    const handleInputChange = (event) => {
        const newUser = { ...loginUser }
        newUser[event.target.id] = event.target.value
        setLoginUser(newUser)
    }

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?email=${loginUser.email}`).then(res => res.json())
            .then(user => user.length ? user[0] : false)
    }
    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists) {
                    sessionStorage.setItem("productivePomo_user", exists.id)
                    history.push("/")
                } else {
                    setExistDialog(true)
                }
            })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" open={existDialog}>
                <div>Your email was incorrect. Please try again.</div>
                <button className="button--close" onClick={e => setExistDialog(false)}>Close</button>
            </dialog>
            <section>

                <form className="form--login" onSubmit={handleLogin}>
                    <h1>Productive Pomo</h1>
                    <div className="second__login--container">
                        <fieldset className="fieldset__login">
                            <h2>Login</h2>
                            <p> Enter Email address </p>
                            <label htmlFor="inputEmail"></label>
                            <input type="email"
                                id="email"
                                className="form-control"
                                placeholder="Email address"
                                required autoFocus
                                value={loginUser.email}
                                onChange={handleInputChange} />
                        </fieldset>

                        <button type="submit">
                            Log in
                        </button>
                    </div>
                </form>

                <div className="login__buttons">

                    <section className="link--register">
                        <Link to="/register">Create an Account</Link>
                    </section>
                </div>
            </section>

        </main>
    )
}