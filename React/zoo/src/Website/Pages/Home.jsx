import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import { Link, NavLink } from 'react-router-dom'
import { Helmet } from 'react-helmet'

function Home() {
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

            <div>
                {/* Header Start */}
                <div className="container-fluid bg-dark p-0 mb-5">
                    <div className="row g-0 flex-column-reverse flex-lg-row">
                        <div className="col-lg-6 p-0 wow fadeIn" data-wow-delay="0.1s">
                            <div className="header-bg h-100 d-flex flex-column justify-content-center p-5">
                                <h1 className="display-4 text-light mb-5">
                                    Enjoy Wonderful Day With Your Family
                                </h1>
                                <div className="d-flex align-items-center pt-4 animated slideInDown">
                                    <a href className="btn btn-primary py-sm-3 px-3 px-sm-5 me-5">Read More</a>
                                    <button type="button" className="btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                        <span />
                                    </button>
                                    <h6 className="text-white m-0 ms-4 d-none d-sm-block">Watch Video</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <div className="owl-carousel header-carousel">
                                <div className="owl-carousel-item">
                                    <img className="img-fluid" src="https://images.pexels.com/photos/9357988/pexels-photo-9357988.jpeg?_gl=1*18fnkay*_ga*MTY1NzI3MzM0NS4xNzQxMDY5MTE2*_ga_8JE65Q40S6*czE3NTE3MTkwMjEkbzE0JGcxJHQxNzUxNzIwNTAxJGoxNCRsMCRoMA.." alt="" />
                                </div>
                                <div className="owl-carousel-item">
                                    <img className="img-fluid" src="https://images.pexels.com/photos/17402462/pexels-photo-17402462.jpeg?_gl=1*hbln4y*_ga*MTY1NzI3MzM0NS4xNzQxMDY5MTE2*_ga_8JE65Q40S6*czE3NTE3MTkwMjEkbzE0JGcxJHQxNzUxNzIwNjIwJGo1OSRsMCRoMA.." alt="" />
                                </div>
                                <div className="owl-carousel-item">
                                    <img className="img-fluid" src="https://images.pexels.com/photos/30234524/pexels-photo-30234524.jpeg?_gl=1*ppzavl*_ga*MTY1NzI3MzM0NS4xNzQxMDY5MTE2*_ga_8JE65Q40S6*czE3NTE3MTkwMjEkbzE0JGcxJHQxNzUxNzIwODQ0JGo0NCRsMCRoMA.." alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Header End */}
                {/* Video Modal Start */}
                <div className="modal modal-video fade" id="videoModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content rounded-0">
                            <div className="modal-header">
                                <h3 className="modal-title" id="exampleModalLabel">Youtube Video</h3>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                {/* 16:9 aspect ratio */}
                                <div className="ratio ratio-16x9">
                                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/DWRcNpR6Kdc" id="video" allowFullScreen allowscriptaccess="always" allow="autoplay" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Video Modal End */}
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
                                <Link to="/about" className="btn btn-primary py-3 px-5 mt-3">Read More</Link>
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
                                <img className="img-fluid mb-3" style={{ height: "200px" }} src="https://media.istockphoto.com/id/1305146004/vector/incorrect-or-wrong-parking-with-many-cars.jpg?s=612x612&w=0&k=20&c=zclZPUK6IZhN4Ztzu7uV_9fB0Q9xoO_BZ-tlUn6Zofs=" alt="Icon" />
                                <h5 className="mb-3">Car Parking</h5>
                                <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                                    sed diam stet diam sed stet.</span>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                                <img className="img-fluid mb-3" style={{ height: "200px" }} src="https://media.istockphoto.com/id/2219043648/vector/a-festive-selfie-shows-a-joyful-girl-with-her-dog-in-a-santa-hat-embodying-christmas-spirit.jpg?s=612x612&w=0&k=20&c=pEVbZ7RACbGpdRe5w0rh_8AFPJ1D-TW_lF1Bar4bHZQ=" alt="Icon" />
                                <h5 className="mb-3">Animal Photos</h5>
                                <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                                    sed diam stet diam sed stet.</span>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                                <img className="img-fluid mb-3" style={{ height: "200px" }} src="https://media.istockphoto.com/id/1189168548/vector/tourists-on-a-tour-of-the-city-the-guide-tells-about-the-sights-of-the-country-flat-2d.jpg?s=612x612&w=0&k=20&c=gljsBlar-EsFfFhFW3Gcuvk08bw3oeCrqjiXVllFFEI=" alt="Icon" />
                                <h5 className="mb-3">Guide Services</h5>
                                <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                                    sed diam stet diam sed stet.</span>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                                <img className="img-fluid mb-3" style={{ height: "200px" }} src="https://media.istockphoto.com/id/1226555763/vector/food-delivery-neon-banner-design.jpg?s=612x612&w=0&k=20&c=688IHIWtpSaoWjfm6_B0Fq1yc6Mk13RmUrw9ofrT27c=" alt="Icon" />
                                <h5 className="mb-3">Food &amp; Beverages</h5>
                                <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                                    sed diam stet diam sed stet.</span>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                                <img className="img-fluid mb-3" style={{ height: "200px" }} src="https://media.istockphoto.com/id/1309891849/vector/vector-green-logo-zoo-market-gradient-set-of-alphabet-letters-and-numbers.jpg?s=612x612&w=0&k=20&c=qE7EnjylwTgGMwuRZnnH8xbcUmB9cnVPVtZ8_tbDK1E=" alt="Icon" />
                                <h5 className="mb-3">Zoo Shopping</h5>
                                <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                                    sed diam stet diam sed stet.</span>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                                <img className="img-fluid mb-3" style={{ height: "200px" }} src="https://media.istockphoto.com/id/1209296298/vector/free-wifi-concept-abstract-low-polygonal-smartphone-with-wi-fi-sign-hotspot-signal-symbol.jpg?s=612x612&w=0&k=20&c=1IzM9VzVGJIwpOoUWjP_n6MZ2-IiAFyb1jMzDCVkz70=" alt="Icon" />
                                <h5 className="mb-3">Free Hi Speed Wi-Fi</h5>
                                <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                                    sed diam stet diam sed stet.</span>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                                <img className="img-fluid mb-3" style={{ height: "200px" }} src="https://media.istockphoto.com/id/1216928578/vector/isometric-playground-with-children-yard-with-kids-playing-park-with-sandpit-and-seesaw.jpg?s=612x612&w=0&k=20&c=hqlaIV7Geb32dE9U0GJLy3vZ_xTmJghEtPoEuzgofLY=" alt="Icon" />
                                <h5 className="mb-3">Play Ground</h5>
                                <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                                    sed diam stet diam sed stet.</span>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                                <img className="img-fluid mb-3" style={{ height: "200px" }} src="https://media.istockphoto.com/id/1217368803/vector/young-man-relaxing-at-couch-under-air-conditioner.jpg?s=612x612&w=0&k=20&c=YhdtVQrEhLT3H_AMc8-RHJWQk4_Sd-CZk3naMG327hI=" alt="Icon" />
                                <h5 className="mb-3">Rest House</h5>
                                <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                                    sed diam stet diam sed stet.</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Service End */}
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
                {/* Visiting Hours Start */}
                <div className="container-xxl bg-primary visiting-hours my-5 py-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="container py-5">
                        <div className="row g-5">
                            <div className="col-md-6 wow fadeIn" data-wow-delay="0.3s">
                                <h1 className="display-6 text-white mb-5">Visiting Hours</h1>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <span>Monday</span>
                                        <span>9:00AM - 6:00PM</span>
                                    </li>
                                    <li className="list-group-item">
                                        <span>Tuesday</span>
                                        <span>9:00AM - 6:00PM</span>
                                    </li>
                                    <li className="list-group-item">
                                        <span>Wednesday</span>
                                        <span>9:00AM - 6:00PM</span>
                                    </li>
                                    <li className="list-group-item">
                                        <span>Thursday</span>
                                        <span>9:00AM - 6:00PM</span>
                                    </li>
                                    <li className="list-group-item">
                                        <span>Friday</span>
                                        <span>9:00AM - 6:00PM</span>
                                    </li>
                                    <li className="list-group-item">
                                        <span>Saturday</span>
                                        <span>9:00AM - 6:00PM</span>
                                    </li>
                                    <li className="list-group-item">
                                        <span>Sunday</span>
                                        <span>Closed</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 text-light wow fadeIn" data-wow-delay="0.5s">
                                <h1 className="display-6 text-white mb-5">Contact Info</h1>
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td>Office</td>
                                            <td>123 Street, New York, USA</td>
                                        </tr>
                                        <tr>
                                            <td>Zoo</td>
                                            <td>123 Street, New York, USA</td>
                                        </tr>
                                        <tr>
                                            <td>Ticket</td>
                                            <td>
                                                <p className="mb-2">+012 345 6789</p>
                                                <p className="mb-0">ticket@example.com</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Support</td>
                                            <td>
                                                <p className="mb-2">+012 345 6789</p>
                                                <p className="mb-0">support@example.com</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Visiting Hours End */}
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

export default Home