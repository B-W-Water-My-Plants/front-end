import React from 'react';


import {Link} from 'react-router-dom';



const Drawer = () => {

    return( 
        // Navigation BAR
        <nav id="page-nav">
            {/* HAMBURGER */}
            <label htmlFor="hamburger">&#9776;</label>
            <input type="checkbox" id="hamburger"/>
            {/* MENU ITEMS */}
            <ul>
                <li className="hamBtn"><Link to='/addplant'>Add Plant</Link></li>
                <li className="hamBtn"><Link to='/dashboard'>DashBoard</Link></li>
            </ul>
        </nav>

    )
}

export default Drawer;