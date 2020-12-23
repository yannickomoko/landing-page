
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Col, Row } from 'reactstrap'; 
import buld from '../../images/buld.png'; 
import lock from '../../images/unlock.png'; 
import dash from '../../images/back-office.png';

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (
            <React.Fragment>
                <section className="section" id="features">
                <div className="container">
                        <Row>
                            <Col lg="8" className="offset-lg-2">
                                <h1 className="section-title text-center">Les avantages pour votre business</h1>
                                <div className="section-title-border margin-t-20"></div>
                             </Col>
                        </Row>
                        <div className="row margin-t-30">
                            <Col lg="4" className="margin-t-20">
                                <div className="services-box">
                                    <div className="imgtext">
                                         <img src={buld} alt="Buld" className="textImg" />
                                    </div>
                                    <div className="imgtext"> 
                                        <div className="media-body ml-4">
                                            <h4>Simplicité</h4>
                                            <p className="pt-2 text-muted">En une seule intégration, plus rapide et moins coûteuse, offrez à vos clients une expérience de paiement en ligne simplifiée</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                             
                            <Col lg="4" className="margin-t-20">
                                <div className="services-box">
                                    <div className="imgtext">
                                         <img src={lock} alt="Unlock" className="textImg" />
                                    </div>
                                    <div className="imgtext"> 
                                        <div className="media-body ml-4">
                                            <h4>Sécurité</h4>
                                            <p className="pt-2 text-muted"> Votre argent est en sécurité dans un compte unique dématérialisé.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col lg="4" className="margin-t-20">
                                <div className="services-box">
                                    <div className="imgtext">
                                         <img src={dash} alt="Back-office" className="textImg" />
                                    </div>
                                    <div className="imgtext"> 
                                        <div className="media-body ml-4">
                                            <h4>Gestion simplifiée</h4>
                                            <p className="pt-2 text-muted">Gérez simplement vos transactions depuis votre backoffice. Visualisez et optimisez vos revenus sur la base des données que nous collectons pour vous.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </div>
                    </div>
                </section>
            </React.Fragment >
        );
    }
}

export default About;


