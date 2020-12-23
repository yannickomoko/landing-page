
import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

// import images

import pay from '../../images/pay.png';
import money from '../../images/transfert.png';
import clt from '../../images/client.png';


class Services extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (
            <React.Fragment>
                <section className="section bg-light" id="services">
                    <div className="container">
                        <Row>
                            <Col lg="8" className="offset-lg-2">
                                <h1 className="section-title text-center">Nos produits</h1>
                                <div className="section-title-border margin-t-20"></div>
                             </Col>
                        </Row>
                        <div className="row margin-t-30">
                            <Col lg="4" className="margin-t-20">
                                <div className="services-box">
                                    <div className="imgtext">
                                         <img src={pay} alt="Payemnt online" className="textImg" />
                                    </div>
                                    <div className="imgtext"> 
                                        <div className="media-body ml-4">
                                            <h4>Paiement en ligne</h4>
                                            <p className="pt-2 text-muted">Payez en ligne avec votre compte mobile money ou carte bancaire de manière simple et sécurisé</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" className="margin-t-20">
                                <div className="services-box">
                                    <div className="imgtext">
                                         <img src={money} alt="Transfert Money" className="textImg" />
                                    </div>
                                    <div className="imgtext"> 
                                        <div className="media-body ml-4">
                                            <h4>Transfert d'argent</h4>
                                            <p className="pt-2 text-muted">Effectuez des transferts d'argent directement sur des comptes mobiles money simplement.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" className="margin-t-20">
                                <div className="services-box">
                                    <div className="imgtext">
                                         <img src={clt} alt="Transfert Money" className="textImg" />
                                    </div>
                                    <div className="imgtext"> 
                                        <div className="media-body ml-4">
                                            <h4>Fidélisation client</h4>
                                            <p className="pt-2 text-muted">Procédez à l'achat de sms depuis votre compte iwomipay er améliorez vos interactions avec vos clients.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default Services;


