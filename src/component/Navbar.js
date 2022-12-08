import React, { Component } from 'react'
import '../style/App.css'
import $ from 'jquery'
import { Route, NavLink, HashRouter, Switch } from "react-router-dom"
import Home from "./Home"
import About from './About'
import Resume from './Resume'
import Contact from './Contact'
import Notfound from './Notfound'


class Navbar extends Component {

    componentDidMount() {
        $('.nav-link').on('click', function() {
            $('.navbar-collapse').collapse('hide');
        })
    }

    render() {
        return (
            <HashRouter>                   
            <nav className="navbar navbar-expand-md fixed-top">
                <div className="container brand">
                    <NavLink to="/" className="navbar-brand">SAP<span> .</span></NavLink>
                    <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span>
                            <i className="fas fa-bars"></i>
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/">Home<span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/resume">Portfolio</NavLink>
                            </li> 
                            <li className="nav-item">
                                <NavLink className="nav-link" to="contact">Contact</NavLink>
                            </li>                    
                        </ul>
                    </div>
                </div>
            </nav> 

            <main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/resume" component={Resume} />
                    <Route exact path="/contact" component={Contact} />     
                    <Route exact component={Notfound} />
                </Switch>
            </main>   
            </HashRouter>        
        )
    }
}

export default Navbar