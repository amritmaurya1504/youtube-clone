import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import './Header.css';
import { Link } from "react-router-dom";
const Header = () => {

    const [inpSearch , setInpSearch] = useState('');

    return (
        <>
            <div classname="main_Div" style={
                {
                    display:'flex',
                    justifyContent:'space-between',
                    alignItems:'center',
                    padding:'20px',
                    position:'sticky',
                    top:'0',
                    zIndex:'100',
                    background:'white'
                }
            }>
                <div className="header_left">
                    <MenuIcon />
                    <Link to="/">
                    <img className="youtube_logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="" />
                    </Link>
                </div>
                <div className="header_center">
                    <input value={inpSearch} onChange={(e) => setInpSearch(e.target.value)} type="text" placeholder="Search" />
                    <Link to={`/search/${inpSearch}`}>
                    <SearchIcon className="search_icon"/>
                    </Link>
                </div>
                <div className="header_right">
                    <VideoCallIcon className="right_icon"/>
                    <AppsIcon className="right_icon"/>
                    <NotificationsIcon className="right_icon"/>
                    <img src="https://i.ibb.co/ZVphLJq/amrit.jpg" className="account_logo right_icon" alt=""/>
                </div>
            </div>
        </>
    )
}

export default Header
