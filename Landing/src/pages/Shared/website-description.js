
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class WebsiteDescription extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    render() {
        
        return (
            <React.Fragment>
                <section className="section bg-web-desc">
                    <div className="bg-overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="text-white">Béneficiez dès maintenant des avantages de notre solution</h2>
                                <Link to="#" onClick={evt => {  evt.preventDefault(); } } className="btn btn-bg-white margin-t-30 waves-effect waves-light">Ouvrir un compte</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment >
        );
    }
}

export default WebsiteDescription;


