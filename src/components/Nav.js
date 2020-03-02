import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../img/Plant.svg'
import {  Button } from 'antd';

import {useHistory} from 'react-router-dom'


const Navigation = () => {

  const history = useHistory();
  
  const logout = () => {
    localStorage.removeItem('token');
    history.push('/login');

  }
  return (
    <>
    <nav id='navigation'>
        
          <div id='logoWrap'>
            <img id='logopic' src={Image} alt='logo' />
          </div>
        
        

        <div className="header">
            <p id='H1SignIn'>Water My Plants</p>
        </div>

        {localStorage.getItem('token') && (
        <div id='navBtn'>
        
          <Button  id="navBtns" onClick={() => logout()}><Link>Log out</Link></Button>
 
        </div>
        )}
    </nav>
    </>
  );
};
export default Navigation;