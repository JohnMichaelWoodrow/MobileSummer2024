import React, {useState} from 'react';

const NavBar = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setLoggedIn(!loggedIn);
    }
    return (
        <nav>
          <h1>Assignment 1</h1>
          <button onClick={handleLoginClick}>
            {loggedIn ? 'Logout' : 'Login'}
          </button>
        </nav>
      );
    };
    
export default NavBar;


