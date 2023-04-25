import "./App.css"
import image from './icon.webp'
import {useState} from 'react';
import axios from 'axios';
import {useCookies} from 'react-cookie';

export default function CoverPage () {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [_, setCookies] = useCookies(["access_token"])
    const enter = async (event) => {
        event.preventDefault();
        setUser(document.getElementById("username").value);
        setPass(document.getElementById("password").value);
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        try {
            await axios.post("http://localhost:3001/auth/register", {
                user,
                pass
            });
            console.log("new user added");
        }
        catch (err) {
            console.log(err);
        } 
    }
    return (
        <div className="App">
      <header className="App-header"></header>
      <div class="logo">VICI</div>
      
      <div className="arrow"></div>
      <div class="triangle"></div>
      <div className="App-Register">
            <h1 className="RegisterH1">Sign-Up</h1>
            <br className="specialBR"></br>
            <form>
                <label >Username: </label>
                <input type="text" id="username" name="username"></input><br/>
                <label>Password: </label>
                <input type="text" id="password" name="password"></input><br/>
                <button onClick={enter}>Sign-Up</button>
            </form>
        </div>
    </div>
        
    )
}
