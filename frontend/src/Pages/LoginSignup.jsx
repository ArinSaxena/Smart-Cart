import "./CSS/LoginSignup.css";

import {useState} from "react";

const LoginSignup = () => {
    return (  
        <div className="LoginSignup">
        <div className="container">
        <h1>Sign Up</h1>
        <form className="inputValue">
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <div className="checkBox">
                <input type="checkbox" id="conditions"/>
                <label htmlFor="conditions">I accept the <a href="/terms">terms</a> and <a href="/conditions">conditions</a></label>
            </div>
            <button>Sign up</button>
        </form>
        <p>Alresady have an account? <a href="/login">Login</a></p>

        </div>

        </div>
    );
}
 
export default LoginSignup;