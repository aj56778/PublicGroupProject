import "./App.css"
import image from './icon.webp'
import {useState} from 'react';


export default function CoverPage (props) {
    const [user, setUser] = useState("");
const [pass, setPass] = useState("");
function enter () {
    setUser(document.getElementById("username").value);
    setPass(document.getElementById("password").value);
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}
    return (
        <div className="App-form">
            <form>
                <label >Username: </label>
                <input type="text" id="username" name="username"></input>
                <label>Password: </label>
                <input type="text" id="password" name="password"></input>
                <button onClick={enter}>Submit</button>
            </form>
        </div>
    )
}
