import React from 'react'

function Header() {
    return (
        <div>

            {/*::header part start::*/}
            <header className="main_menu home_menu">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <a className="navbar-brand" href="index.html"> <img src="img/logo.png" alt="logo" /> </a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="menu_icon"><i className="fas fa-bars" /></span>
                                </button>
                                <div className="collapse navbar-collapse main-menu-item" id="navbarSupportedContent">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a className="nav-link" href="index.html">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="about.html">about</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="packages.html">packages</a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Blog
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <a className="dropdown-item" href="blog.html"> blog</a>
                                                <a className="dropdown-item" href="single-blog.html">Single blog</a>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                pages
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
                                                <a className="dropdown-item" href="elements.html">Elements</a>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="contact.html">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                                <a className="btn_1 d-none d-lg-block" href="#">Hot Line 052</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            {/* Header part end*/}

            {/* banner part start*/}
            <section className="banner_part">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="banner_text">
                                <div className="banner_text_iner">
                                    <h5>Best way to tour</h5>
                                    <h1>Lorem ipsum dolor amet consec</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* banner part start*/}


        </div>
    )
}

export default Header