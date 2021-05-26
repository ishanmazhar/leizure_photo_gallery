import React from 'react';

function Footer(props) {
    return(
        <div className="footer">
            <div className="container">
            <div className="row">
                <div className="col center">
                <p><a href="#">Gallery</a></p>
                </div>
                <div className="col center">
                    <p><a href="#">About Us</a></p>
                </div>
                <div className="col center">
                    <p><a href="#">Contact Us</a></p>
                </div>
            </div>
            </div>
            <div className="col-12 col-3 align-self-center">
                <div className="text-center">
                    <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                    <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                    <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                    <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                    <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                </div>
            </div>

            <div className="row center" style={{color:"burlywood"}}>
                ©2020. Leizure Tourism.  All rights reserved.
            </div>
            <div className="row center" style={{color:"burlywood"}}>
                <p>React App by Md. Mazharul Hasan Nur, FSMERN001, Bohubrihi</p>
            </div>
            <div className="row center" style={{color:"burlywood"}}>
                <p>Image Credit: Google Images</p>
            </div>
        </div>
    );
}

export default Footer;