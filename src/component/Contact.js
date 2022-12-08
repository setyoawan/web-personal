import React, { Component } from "react";
import "../style/App.css"


class Contact extends Component {
    render() {
        return (
            <div className="main main2">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="row contact">
                                <div className="col-md-4 text-center">
                                    <div className="card mb-4 shadow ">
                                        <div className="card-body">                                            
                                            <i className="fal fa-map-marker-alt"></i>
                                            <h4>Nganjuk Regency</h4>
                                        </div>
                                    </div>
                                    <div className="card mb-4 shadow">
                                        <div className="card-body">
                                            <i className="fal fa-phone-alt"></i>                                            
                                            <h4>+62-8953-3153-5131</h4>                       
                                        </div>
                                    </div>    
                                    <div className="card mb-4 shadow">
                                        <div className="card-body">
                                        <i className="fal fa-envelope"></i>
                                        <h4><a href=""></a>Setyoawan8@gmail.com</h4>                      
                                        </div>
                                    </div>  
                                </div>
                                
                                <div className="col-md-8 mb-4">
                                    <div id="map" className="map">
                                        <iframe id="map" className="map shadow" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13019.854332341549!2d112.0602641672708!3d-7.531409913088423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7838130e833897%3A0xc51c6d0856d3ec0!2sLengkong%2C%20Nganjuk%20Regency%2C%20East%20Java!5e1!3m2!1sen!2sid!4v1586104806337!5m2!1sen!2sid"></iframe> 
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 copyright">
                        <div className="col text-center">
                            <p>Copy right {new Date().getFullYear()} <span>Setyo Awan Prakoso</span></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact