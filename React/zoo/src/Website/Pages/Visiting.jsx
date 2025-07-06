import React, { useEffect, useState } from 'react'
import Header from '../Common/Header'
import Navs from '../Common/Navs'
import Footer from '../Common/Footer'
import { Helmet } from 'react-helmet'
import axios from 'axios'


function Visiting() {
    const [visit, setvisit] = useState([])

    useEffect(() => {
        fetchvisit()
    }, [])

    const fetchvisit = async () => {
        const vis = await axios.get("http://localhost:3000/visit")
        setvisit(vis.data)
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
            <Navs title="Visiting Hours" name="Visiting" />
            {/* Visiting Hours Start */}
            <div className="container-xxl bg-primary visiting-hours py-5 wow fadeInUp" data-wow-delay="0.1s" style={{ margin: '6rem 0' }}>
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-md-6 wow fadeIn" data-wow-delay="0.3s">
                            <h1 className="display-6 text-white mb-5">Visiting Hours</h1>
                            {
                                visit && visit.map((data) => {
                                    return (<ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <span className="me-3">{data.day}</span>
                                            <span>{data.time}</span>
                                        </li></ul>
                                    );
                                })
                            }
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
            <Footer />
        </div>
    )
}

export default Visiting