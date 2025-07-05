import React from 'react'
import Header from '../Common/Header'
import Navs from '../Common/Navs'
import Footer from '../Common/Footer'
import { Helmet } from 'react-helmet'

function Testimonial() {
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
            <Navs title="Testimonial" name="Testimonial" />
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
        <Footer/>
        </div>
    )
}

export default Testimonial