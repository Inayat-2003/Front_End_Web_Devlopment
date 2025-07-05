import React from 'react'
import Header from '../Common/Header'
import Navs from '../Common/Navs'
import Footer from '../Common/Footer'
import { Helmet } from 'react-helmet'

function Services() {
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
            <Header />
            <Navs title="Services" name="Services" />
            {/* Service Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="col-lg-6">
                            <p><span className="text-primary me-2">#</span>Our Services</p>
                            <h1 className="display-5 mb-0">
                                Special Services For
                                <span className="text-primary">Zoofari</span> Visitors
                            </h1>
                        </div>
                        <div className="col-lg-6">
                            <div className="bg-primary h-100 d-flex align-items-center py-4 px-4 px-sm-5">
                                <i className="fa fa-3x fa-mobile-alt text-white" />
                                <div className="ms-4">
                                    <p className="text-white mb-0">Call for more info</p>
                                    <h2 className="text-white mb-0">+012 345 6789</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-5 gx-4">
                        <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <img className="img-fluid mb-3" src="img/icon/icon-2.png" alt="Icon" />
                            <h5 className="mb-3">Car Parking</h5>
                            <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                                sed diam stet diam sed stet.</span>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                            <img className="img-fluid mb-3" src="img/icon/icon-3.png" alt="Icon" />
                            <h5 className="mb-3">Animal Photos</h5>
                            <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                                sed diam stet diam sed stet.</span>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                            <img className="img-fluid mb-3" src="img/icon/icon-4.png" alt="Icon" />
                            <h5 className="mb-3">Guide Services</h5>
                            <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                                sed diam stet diam sed stet.</span>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                            <img className="img-fluid mb-3" src="img/icon/icon-5.png" alt="Icon" />
                            <h5 className="mb-3">Food &amp; Beverages</h5>
                            <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                                sed diam stet diam sed stet.</span>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <img className="img-fluid mb-3" src="img/icon/icon-6.png" alt="Icon" />
                            <h5 className="mb-3">Zoo Shopping</h5>
                            <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                                sed diam stet diam sed stet.</span>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                            <img className="img-fluid mb-3" src="img/icon/icon-7.png" alt="Icon" />
                            <h5 className="mb-3">Free Hi Speed Wi-Fi</h5>
                            <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                                sed diam stet diam sed stet.</span>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                            <img className="img-fluid mb-3" src="img/icon/icon-8.png" alt="Icon" />
                            <h5 className="mb-3">Play Ground</h5>
                            <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                                sed diam stet diam sed stet.</span>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                            <img className="img-fluid mb-3" src="img/icon/icon-9.png" alt="Icon" />
                            <h5 className="mb-3">Rest House</h5>
                            <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                                sed diam stet diam sed stet.</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Service End */}


            <Footer />
        </div>
    )
}

export default Services