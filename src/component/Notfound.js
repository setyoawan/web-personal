import React, { Component } from 'react'
import '../style/App.css'

class Notfound extends Component {
    render() {
        return (
            <div className="main main-blank">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col text-center">
                            <h2>404</h2>
                            <h4>Page Not Found!</h4>                            
                            <p>copy right 2022 <span>setyo awan prakoso</span></p>                        
                        </div>
                    </div>
                </div>                
            </div>            
        )
    }
}

export default Notfound
