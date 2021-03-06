import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Modal from '../../UI/Modal/Modal';
import Aux from '../../../hoc/Aux/Aux';

const sideDrawer = (props) => { 
    let attatchedClasses = [classes.SideDrawer, classes.Close];


    if( props.open ){
        attatchedClasses = [classes.SideDrawer, classes.Open];
        
    }

    return (
        <Aux>
         <Backdrop show={props.open} clicked={props.closed}/> 
        <div className={attatchedClasses.join(' ')} onClick={props.closed}>
            <Logo height="11%"/>
            <nav>
                <NavigationItems isAuthenticated={props.isAuth}/>
            </nav>
        </div>
        </Aux>
    );
};

export default sideDrawer;