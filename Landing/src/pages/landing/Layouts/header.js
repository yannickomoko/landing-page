import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'reactstrap'; 
import ScrollspyNav from './Scrollspy';
import logo from '../../images/logo.png';
import french from '../../images/fr.png';
import English from '../../images/en.png';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            Tab: '', 
            lang: '',
            isOpen: false };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    /**
     * Sets active tab
     */
    setActiveTab = (tab, e) => {
        this.setState({ Tab: tab });
    } 

    render() {

        return (
            <React.Fragment>
                <div id="is-sticky">
                    <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky" id="nav-bar">
                        <div className="container">
                            <Link className="navbar-brand logo text-uppercase" to="/">
                                <img src={logo} alt="iwomipay" className="img-fluid hm" />
                            </Link>
                            <button className="navbar-toggler" onClick={this.toggleMenu} type="button">
                                <i className="mdi mdi-menu"></i>
                            </button>
                            <div className={this.state.isOpen ? "collapse navbar-collapse show" : "collapse navbar-collapse"} style={{ display : this.state.isOpen ? "inline-grid" : "" }} id="navbarCollapse">

                                <Navbar
                                    scrollTargetIds={["home", "features", "services", "about", "pricing", "blog", "contact"]}
                                    activeNavClass="active"
                                    scrollDuration="800"
                                    headerBackground="true"

                                    className={this.state.isOpen ? "navbar-nav ml-0 float-left" : "navbar-nav navbar-center"} >
                                        
                                    <ul className={this.state.isOpen ? "navbar-nav navbar-left" : "navbar-nav ml-auto navbar-left"} id="mySidenav">
                                        <li className="nav-item active"><a href="#home" className="nav-link">Accueil</a></li>
                                        <li className="nav-item"><a href="#services" className="nav-link">Nos Produits</a></li>
                                        <li className="nav-item"><a href="#features" className="nav-link">Sécurité</a></li>
                                        <li className="nav-item"><a href="#contact" className="nav-link">Contact</a> </li>
                                    </ul>

                                </Navbar>
                                <div className={this.state.isOpen ? "nav-button" : "nav-button ml-auto"}>
                                    <ul className="nav navbar-nav navbar-left">
                                        <li>
                                            <button type="button" className="btn btn-custom navbar-btn btn-rounded waves-effect waves-light">CONNEXION</button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="language">
                                    <span>
                                        <a href="#"  onClick={() => this.handleClick('fr')}>
                                            <img src={french} alt="Français" className="langue" />
                                        </a>
                                        <a href="#" onClick={() => this.handleClick('en')}>
                                            <img src={English} alt="Anglais" className="langue" />
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </React.Fragment >
        );
    }
}

export default Header;


