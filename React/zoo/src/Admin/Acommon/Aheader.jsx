import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import { toast } from 'react-toastify'

function Aheader() {

  const redirect = useNavigate()

    useEffect(()=>{
        if(!localStorage.getItem("Aid")){
            redirect("/alogin")
        }
    })

    const logout=()=>{
        localStorage.removeItem("Aid")
        localStorage.removeItem("Aname")
        redirect("/alogin")
        toast.success("Logout successfully..!")
    }

  return (
    <div>
      <div>
        {/* Topbar Start */}
        <div className="container-fluid bg-light p-0 wow fadeIn" data-wow-delay="0.1s">
          <div className="row gx-0 d-none d-lg-flex">
            <div className="col-lg-7 px-5 text-start">
              <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                <small className="fa fa-map-marker-alt text-primary me-2" />
                <small>123 Street, New York, USA</small>
              </div>
              <div className="h-100 d-inline-flex align-items-center py-3">
                <small className="far fa-clock text-primary me-2" />
                <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
              </div>
            </div>
            <div className="col-lg-5 px-5 text-end">
              <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                <small className="fa fa-phone-alt text-primary me-2" />
                <small>+012 345 6789</small>
              </div>
              <div className="h-100 d-inline-flex align-items-center">
                <a className="btn btn-sm-square bg-white text-primary me-1" href="#"><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-sm-square bg-white text-primary me-1" href="#"><i className="fab fa-twitter" /></a>
                <a className="btn btn-sm-square bg-white text-primary me-1" href="#"><i className="fab fa-linkedin-in" /></a>
                <a className="btn btn-sm-square bg-white text-primary me-0" href="#"><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
        </div>
        {/* Topbar End */}
        {/* Navbar Start */}

        <nav
          className="navbar navbar-expand-lg bg-white navbar-light sticky-top py-lg-0 px-4 px-lg-5 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <Link to="/dash" className="navbar-brand p-0">
            <img className="img-fluid me-3" src="img/icon/icon-10.png" alt="Icon" />
            <h1 className="m-0 text-primary">Zoofari</h1>
          </Link>
          <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse py-4 py-lg-0" id="navbarCollapse">
            <div className="navbar-nav ms-auto">
              <NavLink to="/dash" className="nav-item nav-link">Dashboard</NavLink>
              <NavLink to="/animanage" className="nav-item nav-link">Animals</NavLink>
              <NavLink to="/servicemanage" className="nav-item nav-link">Service</NavLink>
            </div>
            {(() => {
              if (localStorage.getItem("Aid")) {
                return (
                  <>
                    <Link className="nav-item nav-link">Hi.. {localStorage.getItem("Aname")}</Link>
                  </>
                )
              }
            })()}

            {(() => {
              if (localStorage.getItem("Aid")) {
                return (
                  <>
                    <Link onClick={logout} className="nav-item nav-link">Logout</Link>
                  </>
                )
              }
              else {
                return (
                  <>
                    <Link to="/alogin" className="nav-item nav-link">Alogin</Link>
                  </>
                )
              }
            })()}
          </div>
        </nav>
        {/* Navbar End */}
      </div>
    </div>
  )
}

export default Aheader