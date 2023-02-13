import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "./UserContext";
export default function Header() {
  //const [username,setUsername] = useState(null);
  const {setUserInfo, userInfo} = useContext(UserContext);
  useEffect(()=>{
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        //setUsername(userInfo.username);
        setUserInfo(userInfo);
      });
    });
  },[]);
  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;
  return (
    <div id="nav" className="pad">
    <header>
    <Link to="/" className="logo">
            <div id="nav--logo">
                <p>The</p>
                <h1>Siren</h1>
            </div>
        
    </Link>
    <nav>
    {username && (
          <>
            
            <Link to="/create" className="head-btn">Create new post</Link>
            <a onClick={logout} className="head-btn2">Logout ({username})</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login" className="head-btn">Login</Link>
            <Link to="/register" className="head-btn2">Register</Link>
          </>
        )}
      </nav>
  </header>
  <div id="nav--links">
                <a href="#">Home</a>
                <a href="#">Bollywood</a>
                <a href="#">Technology</a>
                <a href="#">Hollywood</a>
                <a href="#">Fitness</a>
                <a href="#"> Food</a>
            </div>
  </div>
  );
}