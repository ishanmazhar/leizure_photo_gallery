import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, 
    Button, Modal, ModalHeader, ModalBody, Alert } from 'reactstrap'; 
import { NavLink } from 'react-router-dom';
import Auth from './Auth'; 

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false,
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen 
        })
    }

    render() {
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
                                <NavItem>
                                    <NavLink className="nav-link" to = "/aboutus">
                                        <span className="fa fa-info fa-lg"></span> About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to = "/menu">
                                        <span className="fa fa-list fa-lg"></span> Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to = "/contactus">
                                        <span className="fa fa-address-card fa-lg"></span> Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}>
                                        <span className="fa fa-sign-in fa-lg"></span> Login
                                    </Button>
                                </NavItem>
                            </Nav>
                         </Collapse>
                    </div>
                </Navbar>
                <Modal 
                    isOpen={this.state.isModalOpen} 
                    toggle={this.toggleModal}>
                    <ModalHeader 
                        toggle={this.toggleModal} 
                        style={{backgroundColor: "rgb(59, 50, 8)", color: "wheat"}}>Login / Sign Up</ModalHeader>
                    <ModalBody style={{backgroundColor: "rgb(82, 70, 16)"}}>
                        <Auth /> 
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Header