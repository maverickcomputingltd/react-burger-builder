import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import Button from '../../UI/Button/Button';
import Navigationitems from '../NavigationItems/NavigationItems';
import DrawToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawToggle clicked={props.drawerToggleClicked}/>
        <Logo />
        <nav className={classes.DesktopOnly}>
            <Navigationitems isAuthenticated={props.isAuth}/>
        </nav>
    </header>
);

export default toolbar;