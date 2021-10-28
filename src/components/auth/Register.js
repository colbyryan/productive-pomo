import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom";

export const Register = () => {
    const [registerUser, setRegisterUser] = useState({ fistName: "", lastName: "", email: "", image: "" })
    const [conflictDialog, setConflictDialog] = useState(false)

    const history = useHistory()

    const handleInputChange = (event) => {
        const newUser = { ...registerUser }
        newUser[event.target.id] = event.target.value
        setRegisterUser(newUser)
    }

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?email=${registerUser.email}`)
            .then(res => res.json())
            .then(user => !!user.length)
    }

    const handleRegister = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then((userExists) => {
                if (!userExists) {
                    fetch("http://localhost:8088/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: registerUser.email,
                            name: `${registerUser.firstName} ${registerUser.lastName}`,
                            image: registerUser.image
                        })
                    })
                        .then(res => res.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                sessionStorage.setItem("productivePomo_user", createdUser.id)
                                history.push("/")
                            }
                        })
                }
                else {
                    setConflictDialog(true)
                }
            })

    }

    return (
        <main style={{ textAlign: "center" }} className="login-main">

            <dialog className="dialog dialog--password" open={conflictDialog}>
                <div>Account with that email address already exists</div>
                <button className="button--close" onClick={e => setConflictDialog(false)}>Close</button>
            </dialog>
            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Please Register for an Account</h1>
                <div className="second__login--container--reg">
                    <fieldset className="fieldset__login--reg">
                        <label htmlFor="firstName" className="reg__form--title"> First Name </label>
                        <input type="text" name="firstName" id="firstName" className="form-control" placeholder="First name" required autoFocus value={registerUser.firstName} onChange={handleInputChange} />
                    </fieldset>
                    <fieldset className="fieldset__login--reg">
                        <label htmlFor="lastName" className="reg__form--title"> Last Name </label>
                        <input type="text" name="lastName" id="lastName" className="form-control" placeholder="Last name" required value={registerUser.lastName} onChange={handleInputChange} />
                    </fieldset>
                    <fieldset className="fieldset__login--reg">
                        <label htmlFor="inputEmail" className="email"> Email address </label>
                        <input type="email" name="email" id="email" className="form-control" placeholder="Email address" required value={registerUser.email} onChange={handleInputChange} />
                    </fieldset>
                    <fieldset className="fieldset__login--reg--img">
                        <label htmlFor="image"> Profile Picture </label>
                        <input type="file" accept="image/" id="image" value={registerUser.image} onChange={handleInputChange} />
                    </fieldset>
                    <fieldset className="fieldset__login--reg--buttons">
                        <button type="submit"> Sign in </button>
                        <button className="cancel"><Link to="/login">Cancel</Link></button>
                    </fieldset>
                </div>
            </form>


        </main >
    )
}