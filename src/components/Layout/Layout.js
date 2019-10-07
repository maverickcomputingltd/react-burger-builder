import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import {connect} from 'react-redux';

class Layout extends Component{
    
    state = {
        showSideDrawer : true
    };

    sideDrawerClosedHander = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
                return {showSideDrawer: !prevState.showSideDrawer}
        })
    }

    render(){
        return (
            <Aux>
            <Toolbar 
                isAuth={this.props.isAuthenticated}
                drawerToggleClicked={this.sideDrawerToggleHandler}/>
            <SideDrawer 
                            isAuth={this.props.isAuthenticated}
                            closed={this.sideDrawerClosedHander}
                        open={this.state.showSideDrawer}
            />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )

    }
    
    }

const mapStateToProps = state => {
    return{
        isAuthenticated: state.auth.token !== null
    };
};      

export default connect(mapStateToProps)(Layout);