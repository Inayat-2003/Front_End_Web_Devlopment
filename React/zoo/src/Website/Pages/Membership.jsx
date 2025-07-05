import React from 'react'
import Header from '../Common/Header'
import Navs from '../Common/Navs'
import Footer from '../Common/Footer'
import { Helmet } from 'react-helmet'

function Membership() {
    return (
        <div>
             <Helmet>
                {/* <!-- JavaScript Libraries --> */}
                <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
                <script src="lib/wow/wow.min.js"></script>
                <script src="lib/easing/easing.min.js"></script>
                <script src="lib/waypoints/waypoints.min.js"></script>
                <script src="lib/counterup/counterup.min.js"></script>
                <script src="lib/owlcarousel/owl.carousel.min.js"></script>
                <script src="lib/lightbox/js/lightbox.min.js"></script>

                {/* <!-- Template Javascript --> */}
                <script src="js/main.js"></script>
            </Helmet>
            <Header/>
            <Navs title="Membership" name="Membership" />
            {/* Membership Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5 mb-5 align-items-end wow fadeInUp" data-wow-delay="0.1s">
                        <div className="col-lg-6">
                            <p><span className="text-primary me-2">#</span>Membership</p>
                            <h1 className="display-5 mb-0">
                                You Can Be A Proud Member Of
                                <span className="text-primary">Zoofari</span>
                            </h1>
                        </div>
                        <div className="col-lg-6 text-lg-end">
                            <a className="btn btn-primary py-3 px-5" href>Special Pricing</a>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="membership-item position-relative">
                                <img className="img-fluid" src="img/animal-lg-1.jpg" alt />
                                <h1 className="display-1">01</h1>
                                <h4 className="text-white mb-3">Popular</h4>
                                <h3 className="text-primary mb-4">$99.00</h3>
                                <p><i className="fa fa-check text-primary me-3" />10% discount</p>
                                <p>
                                    <i className="fa fa-check text-primary me-3" />2 adult and 2 child
                                </p>
                                <p>
                                    <i className="fa fa-check text-primary me-3" />Free animal
                                    exhibition
                                </p>
                                <a className="btn btn-outline-light px-4 mt-3" href>Get Started</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="membership-item position-relative">
                                <img className="img-fluid" src="img/animal-lg-2.jpg" alt />
                                <h1 className="display-1">02</h1>
                                <h4 className="text-white mb-3">Standard</h4>
                                <h3 className="text-primary mb-4">$149.00</h3>
                                <p><i className="fa fa-check text-primary me-3" />15% discount</p>
                                <p>
                                    <i className="fa fa-check text-primary me-3" />4 adult and 4 child
                                </p>
                                <p>
                                    <i className="fa fa-check text-primary me-3" />Free animal
                                    exhibition
                                </p>
                                <a className="btn btn-outline-light px-4 mt-3" href>Get Started</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="membership-item position-relative">
                                <img className="img-fluid" src="img/animal-lg-3.jpg" alt />
                                <h1 className="display-1">03</h1>
                                <h4 className="text-white mb-3">Premium</h4>
                                <h3 className="text-primary mb-4">$199.00</h3>
                                <p><i className="fa fa-check text-primary me-3" />20% discount</p>
                                <p>
                                    <i className="fa fa-check text-primary me-3" />6 adult and 6 child
                                </p>
                                <p>
                                    <i className="fa fa-check text-primary me-3" />Free animal
                                    exhibition
                                </p>
                                <a className="btn btn-outline-light px-4 mt-3" href>Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Membership End */}
        <Footer/>
        </div>
    )
}

export default Membership