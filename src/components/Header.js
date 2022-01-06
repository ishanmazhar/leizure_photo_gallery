import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, 
     Alert } from 'reactstrap'; 
import { NavLink } from 'react-router-dom';
import Auth from './Auth'; 
import Logout from './Logout'; 

import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        token: state.token, 
    }
}

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false,
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {

        let logout = null;
        if (this.props.token !== null)
            logout = (
                <NavItem>
                    <NavLink className="nav-link" to = "/logout">
                        Logout
                    </NavLink>
                </NavItem>
            )
        let login = null;
        if(this.props.token === null ) {
            login = ( <Auth />)
        } else {
            login = null 
        }
        return(
            <React.Fragment> 
                <Navbar dark expand = "md">
                    <div className="container">
                        <NavbarToggler onClick = {this.toggleNav} /> 
                        <NavbarBrand className="mr-auto">
                            <NavLink to = "/home">Leizure Gallery</NavLink>
                        </NavbarBrand>
                        <Collapse isOpen = {this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to = "/home">
                                        <span className="fa fa-home fa-lg"></span> Home
                                    </NavLink>
                                </NavItem>
                                {/* <NavItem>
                                    <NavLink className="nav-link" to = "/aboutus">
                                        <span className="fa fa-info fa-lg"></span> About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to = "/menu">
                                        <span className="fa fa-list fa-lg"></span> Menu
                                    </NavLink>
                                </NavItem> */}
                                <NavItem>
                                    <NavLink className="nav-link" to = "/contactus">
                                        <span className="fa fa-address-card fa-lg"></span> Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    {login}
                                </NavItem>
                                {logout}
                            </Nav>
                         </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default connect(mapStateToProps)(Header); 