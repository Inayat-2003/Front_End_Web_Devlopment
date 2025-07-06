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
                            <img className="img-fluid mb-3" style={{height:"200px"}} src="https://media.istockphoto.com/id/1305146004/vector/incorrect-or-wrong-parking-with-many-cars.jpg?s=612x612&w=0&k=20&c=zclZPUK6IZhN4Ztzu7uV_9fB0Q9xoO_BZ-tlUn6Zofs=" alt="Icon" />
                            <h5 className="mb-3">Car Parking</h5>
                            <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                                sed diam stet diam sed stet.</span>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                            <img className="img-fluid mb-3" style={{height:"200px"}} src="https://media.istockphoto.com/id/2219043648/vector/a-festive-selfie-shows-a-joyful-girl-with-her-dog-in-a-santa-hat-embodying-christmas-spirit.jpg?s=612x612&w=0&k=20&c=pEVbZ7RACbGpdRe5w0rh_8AFPJ1D-TW_lF1Bar4bHZQ=" alt="Icon" />
                            <h5 className="mb-3">Animal Photos</h5>
                            <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                                sed diam stet diam sed stet.</span>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                            <img className="img-fluid mb-3" style={{height:"200px"}} src="https://media.istockphoto.com/id/1189168548/vector/tourists-on-a-tour-of-the-city-the-guide-tells-about-the-sights-of-the-country-flat-2d.jpg?s=612x612&w=0&k=20&c=gljsBlar-EsFfFhFW3Gcuvk08bw3oeCrqjiXVllFFEI=" alt="Icon" />
                            <h5 className="mb-3">Guide Services</h5>
                            <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                                sed diam stet diam sed stet.</span>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                            <img className="img-fluid mb-3" style={{height:"200px"}} src="https://media.istockphoto.com/id/1226555763/vector/food-delivery-neon-banner-design.jpg?s=612x612&w=0&k=20&c=688IHIWtpSaoWjfm6_B0Fq1yc6Mk13RmUrw9ofrT27c=" alt="Icon" />
                            <h5 className="mb-3">Food &amp; Beverages</h5>
                            <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                                sed diam stet diam sed stet.</span>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <img className="img-fluid mb-3" style={{height:"200px"}} src="https://media.istockphoto.com/id/1309891849/vector/vector-green-logo-zoo-market-gradient-set-of-alphabet-letters-and-numbers.jpg?s=612x612&w=0&k=20&c=qE7EnjylwTgGMwuRZnnH8xbcUmB9cnVPVtZ8_tbDK1E=" alt="Icon" />
                            <h5 className="mb-3">Zoo Shopping</h5>
                            <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                                sed diam stet diam sed stet.</span>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                            <img className="img-fluid mb-3" style={{height:"200px"}} src="https://media.istockphoto.com/id/1209296298/vector/free-wifi-concept-abstract-low-polygonal-smartphone-with-wi-fi-sign-hotspot-signal-symbol.jpg?s=612x612&w=0&k=20&c=1IzM9VzVGJIwpOoUWjP_n6MZ2-IiAFyb1jMzDCVkz70=" alt="Icon" />
                            <h5 className="mb-3">Free Hi Speed Wi-Fi</h5>
                            <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                                sed diam stet diam sed stet.</span>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                            <img className="img-fluid mb-3" style={{height:"200px"}} src="https://media.istockphoto.com/id/1216928578/vector/isometric-playground-with-children-yard-with-kids-playing-park-with-sandpit-and-seesaw.jpg?s=612x612&w=0&k=20&c=hqlaIV7Geb32dE9U0GJLy3vZ_xTmJghEtPoEuzgofLY=" alt="Icon" />
                            <h5 className="mb-3">Play Ground</h5>
                            <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                                sed diam stet diam sed stet.</span>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                            <img className="img-fluid mb-3" style={{height:"200px"}} src="https://media.istockphoto.com/id/1217368803/vector/young-man-relaxing-at-couch-under-air-conditioner.jpg?s=612x612&w=0&k=20&c=YhdtVQrEhLT3H_AMc8-RHJWQk4_Sd-CZk3naMG327hI=" alt="Icon" />
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