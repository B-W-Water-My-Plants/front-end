import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../img/Plant.svg'
import {  Button } from 'antd';

const Navigation = () => {
  return (
    <>
    <nav id='navigation'>
        <div id='navBar' href='#home'>

          <div id='logoWrap'>
            <img id='logopic' src={Image} alt='logo' />
          </div>
        
        </div>

        <div id='navBtn'>
            
          <Button id="navBtns"><Link to='/login'>Login</Link></Button>

          <Button id="navBtns"><Link to='/signup'>Sign Up</Link></Button>
                
        </div>
    </nav>
    </>
  );
};
export default Navigation;