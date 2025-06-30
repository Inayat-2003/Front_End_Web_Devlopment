import React from 'react'
import Footer from '../Common/Footer'
import Header from '../Common/Header'

function Home() {
  return (
    <div>
      <Header />
      <div id="carouselExampleCaptions" className="carousel slide ">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg" className="d-block" style={{ width: '100%', height: '700px' }} alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h4>Ferrari</h4>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://images.pexels.com/photos/39855/lamborghini-brno-racing-car-automobiles-39855.jpeg" className="d-block" style={{ width: '100%', height: '700px' }}  alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h4>Lamborgini</h4>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://images.pexels.com/photos/14240209/pexels-photo-14240209.jpeg" className="d-block" style={{ width: '100%', height: '700px' }}  alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h4>Audi</h4>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://images.pexels.com/photos/3894065/pexels-photo-3894065.jpeg" className="d-block" style={{ width: '100%', height: '700px' }} alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h4>Rolls Royce</h4>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev"  type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <Footer />
    </div>
  )
}

export default Home