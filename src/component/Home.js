import React, { Component } from "react";
import "../style/App.css"


class Home extends Component {

    render() {
        return (
            <div>
                <div className="main main1">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col text-center">
                                <img src={require('../img/awan.png')} className="img-fluid" alt="setyo awan photo"/>                                                            
                                <h1 className="display-4 animate__animated animate__fadeInUp animate__delay-1s"> <span>S</span>etyo <span>A</span>wan <span>P</span>rakoso</h1>
                                <p className="lead animate__animated animate__fadeInUp animate__delay-2s">Application Developer | Traveller</p>
                                <div className="social-media">
                                    <ul className="animate__animated animate__fadeInUp animate__delay-3s">                
                                        <li><a href="https://web.facebook.com/sakty.awan.75" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="https://twitter.com/kintong77" target="_blank"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="https://www.instagram.com/sidev__/?hl=tl" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/setyo-awan-prakoso-976a1b1a8/" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="https://github.com/setyoawan" target="_blank"><i className="fab fa-github"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        );
    }
}

export default Home

