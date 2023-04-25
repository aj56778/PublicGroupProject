import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import CoverPage from './CoverPage';
import Component from './component.js';
import image from "./image-placeholder.jpg";
import Register from './Register';
import { useNavigate } from 'react-router-dom';
function App() {
  const navigate = useNavigate();
  const isLoggedIn = false;
  return (
    <div className="App">
      <header className="App-header"></header>
      <div class="logo">VICI</div>
      <div>
      {/* {isLoggedIn ? (
        <button class="bttn specialButtons" id="logout" onClick={() => isLoggedIn=false}>Logout</button>
      ) : ( */}
        <button class="bttn specialButtons" id="signup" onClick={navigate('/Register')}>Sign Up</button>
        <button class="bttn specialButtons" id="login" onClick={() => {isLoggedIn=true}}>Login</button>
      {/* )} */}
      </div>
      
      <div className="arrow"></div>
      <div class="triangle"></div>
      
      <CoverPage type="Login"></CoverPage>
      <div className='flex'>
      <ImageComponent></ImageComponent>
      <DescriptionComponent></DescriptionComponent>
      <Component></Component>
      </div>
    </div>
  );
}

function ImageComponent () {
  return (
    <div className='App-image'>
      <img src={image} className='image'></img>
    </div>
  )
}
function DescriptionComponent () {
  return (
    <div className='App-descript'>
      <p>
        This is a placeholder for description section... TO BE CONTINUED
      </p>
    </div>
  )
}
export default App;
