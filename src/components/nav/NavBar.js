import React, { useContext } from "react";
import { useHistory } from "react-router";
import { SettingContext } from "../../context/SettingsContext";
import { FaMoon } from "react-icons/fa";
import "./NavBar.css"


export const NavBar = () => {
    const history = useHistory();

    const { myFunction } = useContext(SettingContext)

    return (
        <nav>
            <div className="nav__logo">
                <img src={require("../../Images/Clipart-simple-clock.png").default} alt="nothing" />
            </div>
            <div className="nav__title">
                <h1>Productive Pomo</h1>
                <p><i>Focus and Flow</i></p>
            </div>
            <div className="nav__buttons">
                <button onClick={myFunction} className="theme--btn"><FaMoon /></button>
                <button className="btn" onClick={() => {
                    sessionStorage.removeItem("productivePomo_user");
                    history.push("/login")
                }}>Logout</button>
                <img src={require("../../Images/colbyryan.jpg").default} alt="User Profile" />
            </div>
        </nav>
    )
}