import React from 'react'

function Footer() {
    return (
        <div>

            {/*::footer_part start::*/}
            <footer className="footer_part">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-3">
                            <div className="single_footer_part">
                                <h4>About Agency</h4>
                                <p>The world has become so fast paced that people don’t want
                                    to stand by reading a page of information, they would much
                                    rather look at a presentation and understand the message.
                                    It has come to a point where images</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="single_footer_part">
                                <h4>Navigation Links</h4>
                                <ul className="list-unstyled">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Features</a></li>
                                    <li><a href="#">Services</a></li>
                                    <li><a href="#">Portfolio</a></li>
                                    <li><a href="#">team</a></li>
                                    <li><a href="#">Pricing</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="single_footer_part">
                                <h4>Newsletter</h4>
                                <p>Heaven fruitful doesn't over lesser in days. Appear creeping seasons deve behold bearing days
                                    open
                                </p>
                                <div id="mc_embed_signup">
                                    <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01" method="get" className="subscribe_form relative mail_part">
                                        <input type="email" name="email" id="newsletter-form-email" placeholder="Email Address" className="placeholder hide-on-focus" onfocus="this.placeholder = ''" onblur="this.placeholder = ' Email Address '" />
                                        <button type="submit" name="submit" id="newsletter-submit" className="email_icon newsletter-submit button-contactForm"><i className="far fa-paper-plane" /></button>
                                        <div className="mt-10 info" />
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="single_footer_part">
                                <h4>Instafeed</h4>
                                <div className="footer_img">
                                    <a href="#"><img src="img/footer_img/footer_1.png" alt="#" /></a>
                                    <a href="#"><img src="img/footer_img/footer_2.png" alt="#" /></a>
                                    <a href="#"><img src="img/footer_img/footer_3.png" alt="#" /></a>
                                    <a href="#"><img src="img/footer_img/footer_4.png" alt="#" /></a>
                                    <a href="#"><img src="img/footer_img/footer_5.png" alt="#" /></a>
                                    <a href="#"><img src="img/footer_img/footer_6.png" alt="#" /></a>
                                    <a href="#"><img src="img/footer_img/footer_7.png" alt="#" /></a>
                                    <a href="#"><img src="img/footer_img/footer_8.png" alt="#" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="copyright_text">
                                <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                    Copyright © All rights reserved | This template is made with <i className="ti-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="footer_icon social_icon">
                                <ul className="list-unstyled">
                                    <li><a href="#" className="single_social_icon"><i className="fab fa-facebook-f" /></a></li>
                                    <li><a href="#" className="single_social_icon"><i className="fab fa-twitter" /></a></li>
                                    <li><a href="#" className="single_social_icon"><i className="fas fa-globe" /></a></li>
                                    <li><a href="#" className="single_social_icon"><i className="fab fa-behance" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="img/overlay_2.png" alt="#" className="footer_overlay" />
            </footer>
            {/*::footer_part end::*/}


        </div>
    )
}

export default Footer