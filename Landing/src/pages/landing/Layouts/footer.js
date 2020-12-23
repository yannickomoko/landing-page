
import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (
            <React.Fragment>
                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 margin-t-20">
                                <img src={logo} alt="iwomipay" className="img-fluid hm" />
                                <div className="text-muted margin-t-20">
                                    <ul className="list-unstyled footer-list">
                                        <li><Link onClick={evt => {  evt.preventDefault(); } } to="#">A propos</Link></li>
                                        <li><Link  onClick={evt => {  evt.preventDefault(); } } to="#">Sécurité</Link></li>
                                        <li><Link onClick={evt => {  evt.preventDefault(); } } to="#">Mentions légales</Link></li>
                                        <li><Link onClick={evt => {  evt.preventDefault(); } } to="#">Contact</Link></li>
                                        <li><Link onClick={evt => {  evt.preventDefault(); } } to="#">CGU</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 margin-t-20">
                                <h4>Produits</h4>
                                <div className="text-muted margin-t-20">
                                    <ul className="list-unstyled footer-list">
                                        <li><Link onClick={evt => {  evt.preventDefault(); } } to="#">Paiement en ligne </Link></li>
                                        <li><Link onClick={evt => {  evt.preventDefault(); } } to="#">Transfert d'argent</Link></li>
                                        <li><Link onClick={evt => {  evt.preventDefault(); } } to="#">TPE IwomiPay</Link></li>
                                        <li><Link onClick={evt => {  evt.preventDefault(); } } to="#">Fidélisation client</Link></li>
                                        <li><Link onClick={evt => {  evt.preventDefault(); } } to="#">Intégration</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 margin-t-20">
                                <h4>Ressources</h4>
                                <div className="text-muted margin-t-20">
                                    <ul className="list-unstyled footer-list">
                                        <li><Link onClick={evt => {  evt.preventDefault(); } } to="">Développeurs</Link></li>
                                        <li><Link onClick={evt => {  evt.preventDefault(); } } to="">FAQ</Link></li>
                                        <li><Link onClick={evt => {  evt.preventDefault(); } } to="">Contact</Link></li>
                                        <li><Link onClick={evt => {  evt.preventDefault(); } } to="">Etat des services </Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 margin-t-20">
                                <h4>Newsletter</h4>
                                <div className="text-white margin-t-20">
                                    <p>In an ideal world this text</p>
                                </div>
                                <form className="form subscribe">
                                    <input placeholder="Email" className="form-control" required />
                                    <Link onClick={evt => {  evt.preventDefault(); } } to="#" className="submit"><i className="pe-7s-paper-plane"></i></Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment >
        );
    }
}

export default Footer;


