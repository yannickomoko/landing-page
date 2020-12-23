import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Layout css
import '../css/colors/green.css';

// Layouts
import Header from './Layouts/header';
import Footer from './Layouts/footer';
import FooterAlt from './Layouts/footer-alt';

// Shared 
import  About from './Shared/about';
import  Services from './Shared/services';
import  WebsiteDescription from './Shared/website-description'; 
import  ContactUs from './Shared/contact-us';
 

class Index1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal () {
        this.setState({isOpen: true})
      }

    componentDidMount()
    {
      document.body.classList = "";
      document.getElementById('nav-bar').classList.add('navbar-white');
    }


    render() {

        return (
            <React.Fragment>
                {/*  Header */}
                <Header />

                {/* Home Section */}
                <section className="section bg-home home-half" id="home" data-image-src="images/bg-home.jpg">
                    <div className=""></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6"></div>
                            <div className="col-lg-6 text-white"> 
                                <h2 className="home-title"><strong className="text-iwomi">IwomiPay,</strong>La solution de paiement partenaire de croissance</h2>
                                <p className="padding-t-15 home-desc mx-auto">Accédez à un marché de plus de 100 millions de porte-monnaies électroniques</p>
                                <Link to="#"  onClick={evt => {  evt.preventDefault(); } } className="btn btn-custom margin-t-30 waves-effect waves-light">Ouvrir un compte</Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About */}
                <About />
                
                {/* Services */}
                <Services />
                
                {/* Website Description */}
                <WebsiteDescription /> 
             
                {/* ContactUs */}
                <ContactUs />

                {/* Footer */}
                <Footer />

                {/* Footer Alt */}
                <FooterAlt />

            </React.Fragment >
        );
    }
}

export default Index1;


