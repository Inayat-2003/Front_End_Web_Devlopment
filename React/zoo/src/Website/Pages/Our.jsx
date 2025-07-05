import React from 'react'
import Header from '../Common/Header'
import Navs from '../Common/Navs'
import Footer from '../Common/Footer'
import { Helmet } from 'react-helmet'

function Our() {
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
            <Navs title="Our Animals" name="Our Animals" />
            
            {/* Animal Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5 mb-5 align-items-end wow fadeInUp" data-wow-delay="0.1s">
                        <div className="col-lg-6">
                            <p><span className="text-primary me-2">#</span>Our Animals</p>
                            <h1 className="display-5 mb-0">
                                Let`s See Our <span className="text-primary">Zoofari</span> Awsome
                                Animals
                            </h1>
                        </div>
                        <div className="col-lg-6 text-lg-end">
                            <a className="btn btn-primary py-3 px-5" href>Explore More Animals</a>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="row g-4">
                                <div className="col-12">
                                    <a className="animal-item" href="img/animal-md-1.jpg" data-lightbox="animal">
                                        <div className="position-relative">
                                            <img className="img-fluid" src="img/animal-md-1.jpg" alt />
                                            <div className="animal-text p-4">
                                                <p className="text-white small text-uppercase mb-0">Animal</p>
                                                <h5 className="text-white mb-0">Elephant</h5>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-12">
                                    <a className="animal-item" href="img/animal-lg-1.jpg" data-lightbox="animal">
                                        <div className="position-relative">
                                            <img className="img-fluid" src="img/animal-lg-1.jpg" alt />
                                            <div className="animal-text p-4">
                                                <p className="text-white small text-uppercase mb-0">Animal</p>
                                                <h5 className="text-white mb-0">Elephant</h5>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="row g-4">
                                <div className="col-12">
                                    <a className="animal-item" href="img/animal-lg-2.jpg" data-lightbox="animal">
                                        <div className="position-relative">
                                            <img className="img-fluid" src="img/animal-lg-2.jpg" alt />
                                            <div className="animal-text p-4">
                                                <p className="text-white small text-uppercase mb-0">Animal</p>
                                                <h5 className="text-white mb-0">Elephant</h5>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-12">
                                    <a className="animal-item" href="img/animal-md-2.jpg" data-lightbox="animal">
                                        <div className="position-relative">
                                            <img className="img-fluid" src="img/animal-md-2.jpg" alt />
                                            <div className="animal-text p-4">
                                                <p className="text-white small text-uppercase mb-0">Animal</p>
                                                <h5 className="text-white mb-0">Elephant</h5>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="row g-4">
                                <div className="col-12">
                                    <a className="animal-item" href="img/animal-md-3.jpg" data-lightbox="animal">
                                        <div className="position-relative">
                                            <img className="img-fluid" src="img/animal-md-3.jpg" alt />
                                            <div className="animal-text p-4">
                                                <p className="text-white small text-uppercase mb-0">Animal</p>
                                                <h5 className="text-white mb-0">Elephant</h5>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-12">
                                    <a className="animal-item" href="img/animal-lg-3.jpg" data-lightbox="animal">
                                        <div className="position-relative">
                                            <img className="img-fluid" src="img/animal-lg-3.jpg" alt />
                                            <div className="animal-text p-4">
                                                <p className="text-white small text-uppercase mb-0">Animal</p>
                                                <h5 className="text-white mb-0">Elephant</h5>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Animal End */}


            <Footer />
        </div>
    )
}

export default Our