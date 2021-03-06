import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../img/Plant.svg'
import {  Button } from 'antd';

import {useHistory} from 'react-router-dom'

import Drawer from './Drawer'


const Navigation = () => {

  const history = useHistory();
  
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user_id')
    history.push('/');

  }
  return (
    <>
    <nav id='navigation'>
        
          <div id='logoWrap'>
            <a href='https://watermyplantsui.netlify.com/'>
            <img id='logopic' src={Image} alt='logo' />
            </a>
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

    {localStorage.getItem('token') && (
      <Drawer />
      )}
    
    </>
  );
};
export default Navigation;