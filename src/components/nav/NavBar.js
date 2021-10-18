import React from "react";
import { useHistory } from "react-router";


export const NavBar = () => {
    const history = useHistory();

    return (
        <nav>
            <img src="" alt="" />
            <p>test</p>
            <button className="btn" onClick={() => {
                sessionStorage.removeItem("productivePomo_user");
                history.push("/login")
            }}>Logout</button>
            <img src="" alt="" />
        </nav>
    )
}