import React, { Component } from "react";
import "../style/App.css"
import $ from 'jquery'

class Resume extends Component {

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
                                <div className="row resume">
                                    <div className="col-md-5">
                                        <h4>Last Project</h4>
                                        <p>some completed projects</p>
                                        <i className="far fa-arrow-right"></i>
                                    </div>
                                    <div className="col-md-7">
                                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                                            <div className="carousel-inner shadow">
                                                <div className="carousel-item active">
                                                    <img src={require('../img/project/restsap.png')} className="d-block w-100" alt="image for project"/>                                                    
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={require('../img/project/beauty-seriea.png')} className="d-block w-100" alt="image for project"/>                                                    
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={require('../img/project/movie-sap.png')} className="d-block w-100" alt="image for project"/>                                                    
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={require('../img/project/socah.png')} className="d-block w-100" alt="image for project"/>
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={require('../img/project/bangkalan.png')} className="d-block w-100" alt="image for project"/>                                                   
                                                </div>                                                                                                
                                            </div>
                                        </div>
                                    </div>                    
                                </div>                                
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row justify-content-center mt-5">
                            <div className="col-md-10">
                                <div className="row">                            
                                    <div className="col-md col-sm-12">
                                        <div className="card shadow gallery animate__animated animate__zoomIn animate__delay-1s">
                                            <img src={require('../img/project/movie-sap.png')} className="card-img-top" alt="image for project"/>
                                            <div className="card-body">
                                                <p className="card-text">SAP Movie</p>
                                                <a href="https://sapmovie27.web.app/" target="_blank">Go Visit</a>                        
                                            </div>
                                        </div>                
                                    </div>`

                                    <div className="col-md col-sm-12">
                                        <div className="card shadow gallery animate__animated animate__zoomIn animate__delay-2s">
                                            <img src={require('../img/project/socah.png')} className="card-img-top" alt="image for project"/>
                                            <div className="card-body">
                                                <p className="card-text">kecamatan Socah</p>                                                                            
                                                <a href="http://socahkec.bangkalankab.go.id/" target="_blank">Go Visit</a>                       
                                            </div>
                                        </div>                
                                    </div>`

                                    <div className="col-md col-sm-12 mb-4">
                                        <div className="card shadow gallery animate__animated animate__zoomIn animate__delay-3s">
                                            <img src={require('../img/project/bangkalan.png')} className="card-img-top" alt="image for project"/>
                                            <div className="card-body">                                        
                                                <p className="card-text">Kecamatan Bangkalan</p>
                                                <a href="http://bangkalankec.bangkalankab.go.id/" target="_blank">Go Visit</a>                        
                                            </div>
                                        </div>                
                                    </div>                        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}

export default Resume