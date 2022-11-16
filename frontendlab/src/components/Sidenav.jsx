import React, {useState} from 'react'
import './Sidenav.css'
import {NavLink} from 'react-router-dom'
import {FaCalendarAlt, FaUserAlt, FaDiceD6, FaBars, FaHome, FaSignOutAlt} from "react-icons/fa"
import namaUser from './Users'



const Sidenav = ({children}) => {
    const[isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem =[
        {
            path:'/',
            name:'Home',
            icon:<FaHome/>
        },
        {
            path:'/profile',
            name:'Profile',
            icon:<FaUserAlt/>
        },
        {
            path:'/module',
            name:'Module',
            icon:<FaDiceD6/>
        },
        {
            path:'/schedule',
            name:'Schedule',
            icon:<FaCalendarAlt/>
        },
        
    ]
    return (
       <div className='containerNav'>
         <div style={{width: isOpen ? "300px" : "50px"}} className="sidenav">
             <div className="top_section">
                 <h1 style={{display: isOpen ? "block" : "none"}} className='userSidebar'>Hi, {<namaUser/>}</h1>
                 <div style={{marginLeft: isOpen ? "200px" : "0"}} className="bars">
                    <FaBars onClick={toggle}/>
                 </div>
             </div>
             {
                menuItem.map((item, index)=>(
                    <NavLink to={item.path} key={index} className="link" activeclassName="active">
                        <div className="icon">{item.icon}</div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                    </NavLink>
                )) 
             }
             <NavLink to={'/logout'} className="linkBottom">
                <div className="icon">{<FaSignOutAlt/>}</div>
                <div style={{display: isOpen ? "block" : "none"}} className="link_text">{'Logout'}</div>
             </NavLink>
         </div>
         <main>{children}</main>
       </div>
    )
}

export default Sidenav;