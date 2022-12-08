import React, { Component } from "react";
import "../style/App.css"
import $ from 'jquery'

class About extends Component {

    componentDidMount() {
        $('.carousel').carousel()
    }
    render() {
        return (
            <div>
                <div className="main main2">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-10">                        
                                <div className="row about">
                                    <div className="col-md-4 mb-4 text-center">
                                        <img src={require('../img/sap2.jpg')} className="shadow img-fluid" alt=""/>
                                        <img src={require('../img/sap2.jpg')} className="shadow img-fluid custom" alt="setyo awan"/>
                                    </div>
                                    <div className="col-md-8">
                                        <p><span>Hello,</span> I’m a Setyo Awan Prakoso, Application Developer based on Nganjuk Regency. I have experience in website design & building and customization. Also I am good at presentation skill and project management.</p>
                                        <p><span>Age</span> 25</p>
                                        <p><span>Residence</span> Indonesia</p>
                                        <p><span>Address</span> Lengkong, Nganjuk Regency, East Java</p>
                                        <p><span>e-mail</span> Setyoawan8@gmail.com</p>
                                        <p><span>Phone</span> +62 8953 3153 5131</p>
                                    </div>                    
                                </div>                                
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row mt-3">
                            <div className="col">
                                <div className="row justify-content-center about2">                            
                                    <div className="col-md-4">
                                        <h4>Education</h4>                                        
                                        <div className="row">
                                            <div className="col mb-4">
                                                <div className="drawer shadow animate__animated animate__zoomIn animate__delay-1s">
                                                    <a href="https://www.trunojoyo.ac.id/"><img src={require('../img/utm-min.png')} className="img-fluid" alt="cisco logo"/></a>
                                                </div>
                                            </div> 
                                            <div className="col-md-7 animate__animated animate__fadeIn animate__delay-2s">
                                                <p>Information System</p>
                                                <p>Trunojoyo University</p>
                                                <p><span>Aug 2016 - Jul 2020</span></p>
                                            </div>                                                                                     
                                        </div>                                   
                                    </div>
                                    <div className="col-md-6">
                                        <h4>Courses</h4>
                                        <div className="row">
                                            <div className="col-md col-sm-12 mb-4">
                                                <div className="drawer shadow animate__animated animate__zoomIn animate__delay-2s">
                                                <a href="https://www.dicoding.com/" target="_blank"><img src={require('../img/courses/dicoding.png')} className="img-fluid" alt="dicoding logo"/></a>
                                                </div>                                                
                                            </div>
                                            <div className="col-md col-sm-12 mb-4">
                                                <div className="drawer shadow animate__animated animate__zoomIn animate__delay-3s">
                                                <a href="https://digitalent.kominfo.go.id/" target="_blank"><img src={require('../img/courses/dts.png')} className="img-fluid" alt="dts logo"/></a>
                                                </div>                                                
                                            </div> 
                                            <div className="col-md col-sm-12 mb-4">
                                                <div className="drawer shadow animate__animated animate__zoomIn animate__delay-4s">
                                                <a href="https://buildwithangga.com/" target="_blank"><img src={require('../img/courses/bwa.png')} className="img-fluid" alt="bwa logo"/></a>
                                                </div>                                             
                                            </div>                                            
                                            <div className="col-md col-sm-12 mb-4">
                                                <div className="drawer shadow animate__animated animate__zoomIn animate__delay-5s">
                                                    <a href="https://sekolahkoding.com/" target="_blank"><img src={require('../img/courses/sk.png')} className="img-fluid" alt="sekolah koding logo"/></a> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>                   
                                </div>
                            </div>
                        </div>
                        
                        <div class="row mt-3">
                            <div class="col">
                                <div class="row justify-content-center about2">
                                    <div class="col-md-6">
                                        <h4>Working</h4>
                                        <div class="row">
                                            <div class="col mb-4">
                                                <div class="drawer shadow animate__animated animate__zoomIn animate__delay-1s">
                                                    <a href="https://sisi.id/" target="_blank">
                                                        <img src={require('../img/working/sisi-logo.png')} className="img-fluid" title="PT. Sinergi Informatika Semen Indonesia" alt="sisi logo"/>
                                                    </a>
                                                </div>
                                            </div>
                                            
                                            <div class="col-md-8 caption-work animate__animated animate__fadeIn animate__delay-2s">
                                                <p>PT. Sinergi Informatika Semen Indonesia</p>                                                
                                                <p>Application Support & Developer</p>
                                                <p><span>Sep 2020 - Present</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}

export default About