import React from 'react'
import Header from '../Common/Header'
import Navs from '../Common/Navs'
import Footer from '../Common/Footer'
import { Helmet } from 'react-helmet'

function About() {
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
            <Navs title="About Us" name="About" />
 
            <div>
                {/* About Start */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                                <p><span className="text-primary me-2">#</span>Welcome To Zoofari</p>
                                <h1 className="display-5 mb-4">
                                    Why You Should Visit
                                    <span className="text-primary">Zoofari</span> Park!
                                </h1>
                                <p className="mb-4">
                                    Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No
                                    stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo
                                    nonumy clita sit at, sed sit sanctus dolor eos.
                                </p>
                                <h5 className="mb-3">
                                    <i className="far fa-check-circle text-primary me-3" />Free Car
                                    Parking
                                </h5>
                                <h5 className="mb-3">
                                    <i className="far fa-check-circle text-primary me-3" />Natural
                                    Environment
                                </h5>
                                <h5 className="mb-3">
                                    <i className="far fa-check-circle text-primary me-3" />Professional
                                    Guide &amp; Security
                                </h5>
                                <h5 className="mb-3">
                                    <i className="far fa-check-circle text-primary me-3" />World Best
                                    Animals
                                </h5>
                                <a className="btn btn-primary py-3 px-5 mt-3" href>Read More</a>
                            </div>
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="img-border">
                                    <img className="img-fluid" src="https://images.pexels.com/photos/16237228/pexels-photo-16237228.jpeg?_gl=1*klc5mp*_ga*MTY1NzI3MzM0NS4xNzQxMDY5MTE2*_ga_8JE65Q40S6*czE3NTE3MTkwMjEkbzE0JGcxJHQxNzUxNzIxOTkyJGo1OSRsMCRoMA.." alt />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* About End */}
                {/* Facts Start */}
                <div className="container-xxl bg-primary facts my-5 py-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="container py-5">
                        <div className="row g-4">
                            <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
                                <i className="fa fa-paw fa-3x text-primary mb-3" />
                                <h1 className="text-white mb-2" data-toggle="counter-up">12345</h1>
                                <p className="text-white mb-0">Total Animal</p>
                            </div>
                            <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
                                <i className="fa fa-users fa-3x text-primary mb-3" />
                                <h1 className="text-white mb-2" data-toggle="counter-up">12345</h1>
                                <p className="text-white mb-0">Daily Vigitors</p>
                            </div>
                            <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
                                <i className="fa fa-certificate fa-3x text-primary mb-3" />
                                <h1 className="text-white mb-2" data-toggle="counter-up">12345</h1>
                                <p className="text-white mb-0">Total Membership</p>
                            </div>
                            <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
                                <i className="fa fa-shield-alt fa-3x text-primary mb-3" />
                                <h1 className="text-white mb-2" data-toggle="counter-up">12345</h1>
                                <p className="text-white mb-0">Save Wild Life</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Facts End */}
                {/* Testimonial Start */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <h1 className="display-5 text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                            Our Clients Say!
                        </h1>
                        <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                            <div className="testimonial-item text-center">
                                <img className="img-fluid rounded-circle border border-2 p-2 mx-auto mb-4" src="img/testimonial-1.jpg" style={{ width: 100, height: 100 }} />
                                <div className="testimonial-text rounded text-center p-4">
                                    <p>
                                        Clita clita tempor justo dolor ipsum amet kasd amet duo justo
                                        duo duo labore sed sed. Magna ut diam sit et amet stet eos sed
                                        clita erat magna elitr erat sit sit erat at rebum justo sea
                                        clita.
                                    </p>
                                    <h5 className="mb-1">Patient Name</h5>
                                    <span className="fst-italic">Profession</span>
                                </div>
                            </div>
                            <div className="testimonial-item text-center">
                                <img className="img-fluid rounded-circle border border-2 p-2 mx-auto mb-4" src="img/testimonial-2.jpg" style={{ width: 100, height: 100 }} />
                                <div className="testimonial-text rounded text-center p-4">
                                    <p>
                                        Clita clita tempor justo dolor ipsum amet kasd amet duo justo
                                        duo duo labore sed sed. Magna ut diam sit et amet stet eos sed
                                        clita erat magna elitr erat sit sit erat at rebum justo sea
                                        clita.
                                    </p>
                                    <h5 className="mb-1">Patient Name</h5>
                                    <span className="fst-italic">Profession</span>
                                </div>
                            </div>
                            <div className="testimonial-item text-center">
                                <img className="img-fluid rounded-circle border border-2 p-2 mx-auto mb-4" src="img/testimonial-3.jpg" style={{ width: 100, height: 100 }} />
                                <div className="testimonial-text rounded text-center p-4">
                                    <p>
                                        Clita clita tempor justo dolor ipsum amet kasd amet duo justo
                                        duo duo labore sed sed. Magna ut diam sit et amet stet eos sed
                                        clita erat magna elitr erat sit sit erat at rebum justo sea
                                        clita.
                                    </p>
                                    <h5 className="mb-1">Patient Name</h5>
                                    <span className="fst-italic">Profession</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Testimonial End */}
            </div>


            <Footer />
        </div>
    )
}

export default About