import React, { Component } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

import Header from './Header';
import DisplayCard from './DisplayCard'; 
import Footer from './Footer';
import PlaceDetails from './PlaceDetails';
import Logout from './Logout'; 
import Contact from './Contact'; 
// import Auth from './Auth'; 

import { connect } from 'react-redux'; 

import { authCheck } from '../redux/authActionCreators';

const mapStateToProps = state => {
    return {
        ratargul: state.places.ratargul,
        nilgiri: state.places.nilgiri, 
        jaflong: state.places.jaflong,
        bandarban: state.places.bandarban, 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        authCheck: () => dispatch(authCheck())
    }
}


class Main extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.authCheck(); 
    }
    render() {
        return(
            <div>
                <Header />
                <Route exact path="/home"> 
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md m-1">
                                <DisplayCard place={this.props.jaflong.filter((site) => site.featured)} path="jaflong" /> 
                            </div>
                            <div className="col-12 col-md m-1">
                                <DisplayCard place={this.props.bandarban.filter((site) => site.featured)} path="bandarban" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md m-1">
                                <DisplayCard place={this.props.ratargul.filter((site) => site.featured)} path="ratargul" /> 
                            </div>
                            <div className="col-12 col-md m-1">
                                <DisplayCard place={this.props.nilgiri.filter((site) => site.featured)} path="nilgiri" />
                            </div>
                        </div>
                    </div>
                </Route>
                <Route path="/jaflong" component={() => <PlaceDetails place={this.props.jaflong} dbPath="jaflong" />} />
                <Route path="/bandarban" component={() => <PlaceDetails place={this.props.bandarban} dbPath="bandarban" />} /> 
                <Route path="/ratargul" component={() => <PlaceDetails place={this.props.ratargul} dbPath="ratargul" />} />
                <Route path="/nilgiri" component={() => <PlaceDetails place={this.props.nilgiri} dbPath="nilgiri" />} />
                <Route path="/contactus" component={Contact} /> 
                <Switch>
                    <Route path="/logout" component={Logout} /> 
                    <Redirect to="/home" />
                </Switch>
                {/* <Switch>
                    <Route path="/login" component={Auth} /> 
                    <Redirect to="/home" />
                </Switch> */}

                <Footer />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);