import Logo from './Logo.png';
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
      <img src={Logo} className='image'></img>
    </div>
  )
}
function DescriptionComponent () {
  return (
    <div className='App-descript'>
      <h1>Hello there!</h1>
      <p>Instructions: For title, choose out of the following: hairstyle, top, bottom, and shoes. Then, browse the internet for the image and copy its image address. Paste that address into the box.</p>
      <h1>Let's start of with a hairstyle... Pick something modern that stands out in the crowd!</h1>
      <h1>Then, follow it up with a top... Make sure to focus on the contrast of the shirt... If the hairstyle shows more skin, use dark colors to contrast it!</h1>
      <h1>Next, time to pick out bottoms... This apparel should only compliment the top and not match it. This should bring out the qualities and designs of the shirt.</h1>
      <h1>Last piece of the puzzle are the footwear... This is the conclusion to your entire clothing peace. For this, worry about two things: comfort and if it supplements your top. Unlike the bottoms, footwear should match the vibe and design of the top.</h1>
    </div>
  )
}
export default App;
