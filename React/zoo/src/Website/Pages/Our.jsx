import React, { useEffect, useState } from 'react'
import Header from '../Common/Header'
import Navs from '../Common/Navs'
import Footer from '../Common/Footer'
import { Helmet } from 'react-helmet'
import axios from 'axios'


function Our() {
    const [animal, setanimal] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/our")
        // console.log(res.data)
        setanimal(res.data)
    }

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
                            <a className="btn btn-primary py-3 px-5" href="#">Explore More Animals</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Animal End */}
            <div className="anicontainer">
            {
                animal && animal.map((data, index) => {
                    return (
                    <div className="card" key={index}>
                        <a className="animal-item" href={data.img} data-lightbox="animal">
                            <div className="position-relative">
                                <img className="img-fluid" src={data.img} alt="img" />
                                    <div className="animal-text p-4">
                                    <h5 className="text-white mb-0">{data.Aname}</h5>
                                    <p className="text-white small text-uppercase mb-0">{data.type}</p>
                                    </div>
                            </div>
                        </a>
                    </div>
                    )
                })
            }
             </div>
            <Footer />
             </div>
        )}
export default Our