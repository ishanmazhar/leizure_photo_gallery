import React, { Component } from 'react';
import { Formik } from 'formik';
import { Button, Modal, ModalHeader, ModalBody, Alert } from 'reactstrap';

import { connect } from 'react-redux'; 
import { auth } from '../redux/authActionCreators';

import Spinner from '../Spinner/Spinner'; 

const mapDispatchToProps = dispatch => {
    return {
        auth: (email, password, mode) => dispatch(auth(email, password, mode))
    }
}

const mapStateToProps = state => {
    return {
        authLoading: state.authLoading,
        authFailedMsg: state.authFailedMsg, 
    }
}

class Auth extends Component {
    state = {
        mode: "Login",
        isModalOpen: false,
    }

    switchModeHandler = () => {
        this.setState({ mode: this.state.mode === "Sign Up" ? "Login" : "Sign Up"})
    }

    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen 
        })
    }

    render() {
        let err = null;
        if (this.props.authFailedMsg !== null) {
            err = <Alert style={{
                    backgroundColor:"rgb(31, 26, 4)", 
                    color: "wheat",
                    textAlign: "center"
                }}>{this.props.authFailedMsg}</Alert>
        }
        let form = null;
        if (this.props.authLoading) {
            form = <Spinner />
        } else {
            form = (
                <Formik 
                initialValues={
                    {
                        email: "",
                        password: "",
                        passwordConfirm: "",
                    }
                }
                onSubmit={
                    (values) => {
                        console.log("Values: ", values);
                        this.props.auth(values.email, values.password, this.state.mode);
                    }
                }
                validate={(values) => {
                    const errors = {};

                    if(!values.email) {
                        errors.email = 'Required';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'Invalid Email Address';
                    }

                    if(!values.password) {
                        errors.password = 'Required';
                    } else if (values.password.length < 4) {
                        errors.password = 'Must be at least 4 characters';
                    }

                    if(this.state.mode === "Sign Up") {
                        if (!values.passwordConfirm) {
                            errors.passwordConfirm = 'Required';
                        } else if (values.password !== values.passwordConfirm) {
                            errors.passwordConfirm = 'Password field not matched'; 
                        }
                    }

                    // console.log ("Errors: ", errors)
                    return errors; 
                }}

            >
                {({ values, handleChange, handleSubmit, errors })=> (
                    <div style={{
                        border: "1px grey solid",
                        padding: "15px",
                        borderRadius: "7px", 
                    }}>
                        <button style={{
                            width: "100%",
                            backgroundColor: "rgb(31, 26, 4)",
                            color:"white"
                        }} className="btn btn-lg" onClick={this.switchModeHandler}>Switch to {this.state.mode === "Login" ? "Sign Up" : "Login"}</button>
                        <br />
                        <br />
                        <form onSubmit={handleSubmit}>
                            <input 
                                name="email"
                                placeholder="Enter Your Email"
                                className="form-control"
                                value={values.email}
                                onChange={handleChange}
                            />
                            <span style={{color:"red"}}>{errors.email}</span>
                            <br />
                            <input 
                                name="password"
                                placeholder="Password"
                                className="form-control"
                                value={values.password}
                                onChange={handleChange}
                            />
                            <span style={{color:"red"}}>{errors.password}</span>
                            <br />

                            {this.state.mode === "Sign Up" ? <div>
                                <input 
                                    name="passwordConfirm"
                                    placeholder="Confirm Password"
                                    className="form-control"
                                    value={values.passwordConfirm}
                                    onChange={handleChange}
                                />
                                <span style={{color:"red"}}>{errors.passwordConfirm}</span>
                                <br />
                            </div> : null} 

                            <button type="submit" className="btn btn-success">{this.state.mode === "Sign Up" ? "Sign Up" : "Login"}</button>
                        </form>
                    </div>)}
                </Formik>
            )
        }
        return (
            <div>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-sign-in fa-lg"></span> Login
                </Button>
                <Modal 
                    isOpen={this.state.isModalOpen} 
                    toggle={this.toggleModal}>
                    <ModalHeader 
                        toggle={this.toggleModal} 
                        style={{backgroundColor: "rgb(59, 50, 8)", color: "wheat"}}>Login / Sign Up</ModalHeader>
                    <ModalBody style={{backgroundColor: "rgb(82, 70, 16)"}}>
                        {err} 
                        {form} 
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth); 