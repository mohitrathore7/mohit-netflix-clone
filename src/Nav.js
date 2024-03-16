import React,{useState, useEffect} from 'react'
import "./Nav.css";


function Nav() {

    const [show, handleshow] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 100){
                handleshow(true);
            } else handleshow(false);
        });
        return ()=>{
            window.removeEventListener("scroll", null);
        };
    },  []);




  return (
    <div className={`nav ${show && "nav__black"}`}>
    <img
    className="nav__logo"

src = "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
    /*
     src = "https://upload.wikipedia.org/wikipedia/commons/0/0f" 

     */
    alt = "Netflix logo"
     />
      
      <img
      className="nav__avatar"
      src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.webp"
      alt ="Netflix Logo"
       />
    </div>
  )
}

export default Nav
