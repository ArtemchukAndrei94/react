import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/profile' className={classes.link}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs' className={classes.link + ' ' +  classes.active}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/' className={classes.link + ' ' +  classes.active}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/' className={classes.link + ' ' +  classes.active}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/' className={classes.link + ' ' +  classes.active}>Settings</NavLink>
            </div>
        </nav>
    );

}

export default Navbar;