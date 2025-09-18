import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'

function Home() {
  return (
    <div>
      <Header />
      <div>
        {/* banner part start*/}
        <section className="search_your_country">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="search_form">
                  <form action="#">
                    <div className="form-row">
                      <div className="col-lg-9">
                        <div className="search_form_iner">
                          <select className="custom_select" id="inlineFormCustomSelect">
                            <option selected>country</option>
                            <option value={1}>One</option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
                          </select>
                          <select className="custom_select" id="inlineFormCustomSelect1">
                            <option selected>city</option>
                            <option value={1}>One</option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <a href="#" className="search_btn">search</a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <div className="single_donation_item">
                  <img src="img/icon/money_bag.svg" alt="#" />
                  <h4>donation</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing
                    elit sed do eiusmod tempor incididunt ut labore et
                    dolore magna </p>
                  <a href="#" className="read_btn">read more</a>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="single_donation_item">
                  <img src="img/icon/money_bag.svg" alt="#" />
                  <h4>donation</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing
                    elit sed do eiusmod tempor incididunt ut labore et
                    dolore magna </p>
                  <a href="#" className="read_btn">read more</a>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="single_donation_item">
                  <img src="img/icon/money_bag.svg" alt="#" />
                  <h4>donation</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing
                    elit sed do eiusmod tempor incididunt ut labore et
                    dolore magna </p>
                  <a href="#" className="read_btn">read more</a>
                </div>
              </div>
            </div>
          </div>
          <img src="img/animate_icon/Shape-1.png" alt className="feature_icon_1" />
          <img src="img/animate_icon/Shape-2.png" alt className="feature_icon_2" />
        </section>
        {/* banner part start*/}
        {/* feature_part start*/}
        <section className="feature_part padding_top">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-7">
                <div className="feature_img">
                  <img src="img/about_img.png" alt="#" />
                </div>
              </div>
              <div className="col-lg-5">
                <div className="feature_part_text">
                  <img src="img/section_tittle_img.png" alt="#" />
                  <h2>Amazing tour</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                    ipsum suspendisse ultrices gravida Risus commodo viverra maecenas
                    accumsan lacus vel facilisis. </p>
                  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt
                    ut</span>
                  <div className="row">
                    <div className="col-sm-6 col-md-4">
                      <div className="feature_part_text_iner">
                        <img src="img/icon/tour_icon_1.png" alt="#" />
                        <h4>london</h4>
                        <p>35 Places</p>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                      <div className="feature_part_text_iner">
                        <img src="img/icon/tour_icon_2.png" alt="#" />
                        <h4>Kashmir</h4>
                        <p>75 Places</p>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                      <div className="feature_part_text_iner">
                        <img src="img/icon/tour_icon_3.png" alt="#" />
                        <h4>chaina</h4>
                        <p>85 Places</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img src="img/animate_icon/Shape-1.png" alt="#" className="feature_icon_1" />
          <img src="img/animate_icon/Shape-2.png" alt="#" className="feature_icon_2" />
          <img src="img/animate_icon/Shape-3.png" alt="#" className="feature_icon_3" />
        </section>
        {/* upcoming_event part start*/}
        {/* use sasu part end*/}
        <section className="popular_place padding_top">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5">
                <div className="section_tittle text-center">
                  <img src="img/section_tittle_img.png" alt="#" />
                  <h2>Most Popular <span>place</span> </h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    sed  do eiusmod tempor incididunt ut</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-sm-6">
                <div className="single_popular_place">
                  <img src="img/icon/place_icon_1.png" alt="#" />
                  <h4>Life of Egeft</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor</p>
                  <a href="#" className="btn1">book now</a>
                </div>
              </div><div className="col-lg-4 col-sm-6">
                <div className="single_popular_place">
                  <img src="img/icon/place_icon_2.png" alt="#" />
                  <h4>Biking in Norway</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor</p>
                  <a href="#" className="btn1">book now</a>
                </div>
              </div><div className="col-lg-4 col-sm-6">
                <div className="single_popular_place">
                  <img src="img/icon/place_icon_3.png" alt="#" />
                  <h4>Tour of iceland</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor</p>
                  <a href="#" className="btn1">book now</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* use sasu part end*/}
        {/* about_us part start*/}
        <section className="place_details section_padding">
          <div className="container-fluid">
            <div className="row justify-content-between">
              <div className="col-md-6 col-lg-6">
                <div className="place_detauls_text">
                  <div className="row justify-content-center">
                    <div className="col-lg-8 col-xl-6">
                      <div className="place_details_content">
                        <img src="img/section_tittle_img.png" alt="#" />
                        <h2>Amazing tour</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                          ipsum suspendisse ultrices gravida Risus commodo viverra maecenas
                          accumsan lacus vel facilisis. </p>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt
                          ut</span>
                      </div>
                    </div>
                  </div>
                  <img src="img/plase_details_1.png" alt="#" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="place_details_img">
                  <img src="img/plase_details_2.png" alt="#" />
                </div>
              </div>
            </div>
          </div>
          <div className="view_all_btn">
            <a href="#" className="view_btn">view all</a>
          </div>
        </section>
        {/* about_us part end*/}
        {/* pricing part start*/}
        <section className="tour_package section_padding">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-6">
                <div className="tour_package_cotent owl-carousel">
                  <div className="single_tour_package">
                    <img src="img/tour_plan_1.png" alt="#" />
                    <div className="tour_pack_content">
                      <h4>Sawpalo, Brasil</h4>
                      <p> Lorem ipsum dolor sit amet, consectetur adipi
                        elit sed do eiusmod tempor incididunt</p>
                      <div className="tour_content_rating">
                        <ul>
                          <li><a href="#"><i className="fas fa-star" /></a></li>
                          <li><a href="#"><i className="fas fa-star" /></a></li>
                          <li><a href="#"><i className="fas fa-star" /></a></li>
                          <li><a href="#"><i className="fas fa-star" /></a></li>
                          <li><a href="#"><i className="fas fa-star" /></a></li>
                        </ul>
                        <a href="#" className="btn1">join now</a>
                      </div>
                    </div>
                  </div>
                  <div className="single_tour_package">
                    <img src="img/tour_plan_2.png" alt="#" />
                    <div className="tour_pack_content">
                      <h4>Sawpalo, Brasil</h4>
                      <p> Lorem ipsum dolor sit amet, consectetur adipi
                        elit sed do eiusmod tempor incididunt</p>
                      <div className="tour_content_rating">
                        <ul>
                          <li><a href="#"><i className="fas fa-star" /></a></li>
                          <li><a href="#"><i className="fas fa-star" /></a></li>
                          <li><a href="#"><i className="fas fa-star" /></a></li>
                          <li><a href="#"><i className="fas fa-star" /></a></li>
                          <li><a href="#"><i className="fas fa-star" /></a></li>
                        </ul>
                        <a href="#" className="btn1">join now</a>
                      </div>
                    </div>
                  </div>
                  <div className="single_tour_package">
                    <img src="img/tour_plan_1.png" alt="#" />
                    <div className="tour_pack_content">
                      <h4>Sawpalo, Brasil</h4>
                      <p> Lorem ipsum dolor sit amet, consectetur adipi
                        elit sed do eiusmod tempor incididunt</p>
                      <div className="tour_content_rating">
                        <ul>
                          <li><a href="#"><i className="fas fa-star" /></a></li>
                          <li><a href="#"><i className="fas fa-star" /></a></li>
                          <li><a href="#"><i className="fas fa-star" /></a></li>
                          <li><a href="#"><i className="fas fa-star" /></a></li>
                          <li><a href="#"><i className="fas fa-star" /></a></li>
                        </ul>
                        <a href="#" className="btn1">join now</a>
                      </div>
                    </div>
                  </div>
                  <div className="single_tour_package">
                    <img src="img/tour_plan_2.png" alt="#" />
                    <div className="tour_pack_content">
                      <h4>Sawpalo, Brasil</h4>
                      <p> Lorem ipsum dolor sit amet, consectetur adipi
                        elit sed do eiusmod tempor incididunt</p>
                      <div className="tour_content_rating">
                        <ul>
                          <li><a href="#"><i className="fas fa-star" /></a></li>
                          <li><a href="#"><i className="fas fa-star" /></a></li>
                          <li><a href="#"><i className="fas fa-star" /></a></li>
                          <li><a href="#"><i className="fas fa-star" /></a></li>
                          <li><a href="#"><i className="fas fa-star" /></a></li>
                        </ul>
                        <a href="#" className="btn1">join now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-xl-3 offset-lg-1 col-sm-6">
                <div className="tour_pack_content">
                  <img src="img/section_tittle_img.png" alt="#" />
                  <h2>tour package</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    sed  do eiusmod tempor incididunt ut</p>
                  <a href="#" className="btn_1">join now</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* pricing part end*/}
        {/* cta part start*/}
        <section className="cta_part section_padding">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-8 col-xl-7">
                <div className="cta_text text-center">
                  <h5>Join Our Newsletter</h5>
                  <h2>Subscribe to get Updated
                    with new offers</h2>
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Enter email address" aria-label="Recipient's username with two button addons" aria-describedby="button-addon4" />
                    <div className="input-group-append" id="button-addon4">
                      <a href="#" className="subs_btn">subscribe now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* cta part end*/}
        {/* blog part start*/}
        <section className="blog_part padding_top">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="section_tittle">
                  <img src="img/section_tittle_img.png" alt="#" />
                  <h2>our blog</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    sed  do eiusmod tempor incididunt ut</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <div className="single_blog_part">
                  <img src="img/blog/blog_1.png" alt="#" />
                  <div className="blog_text">
                    <h2>Luxerious Car Rental</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                    <ul>
                      <li>
                        <i className="ti-calendar" />
                        <p>13th Dec</p>
                      </li>
                      <li>
                        <i className="ti-heart" />
                        <p>15</p>
                      </li>
                      <li>
                        <i className="far fa-comment-dots" />
                        <p>10</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="single_blog_part">
                  <img src="img/blog/blog_2.png" alt="#" />
                  <div className="blog_text">
                    <h2>Luxerious Car Rental</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                    <ul>
                      <li>
                        <i className="ti-calendar" />
                        <p>13th Dec</p>
                      </li>
                      <li>
                        <i className="ti-heart" />
                        <p>15</p>
                      </li>
                      <li>
                        <i className="far fa-comment-dots" />
                        <p>10</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="single_blog_part">
                  <img src="img/blog/blog_3.png" alt="#" />
                  <div className="blog_text">
                    <h2>Luxerious Car Rental</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                    <ul>
                      <li>
                        <i className="ti-calendar" />
                        <p>13th Dec</p>
                      </li>
                      <li>
                        <i className="ti-heart" />
                        <p>15</p>
                      </li>
                      <li>
                        <i className="far fa-comment-dots" />
                        <p>10</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img src="img/overlay_1.png" alt="#" className="blog_img" />
        </section>
        {/* blog part end*/}
      </div>


      <Footer />
    </div>
  )
}

export default Home