import Header from '../Common/Header';
import Footer from '../Common/Footer';

function Catalogue() {
  return (
    <div >
      <Header />
      <div className="container mt-5 pt-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div className="col">
            <div className="card h-100 shadow-sm border-0" style={{ backgroundColor: '#717abb' }}>
              <img src="https://images.pexels.com/photos/3954388/pexels-photo-3954388.jpeg" className="card-img-top rounded-top" alt="..." />
              <div className="card-body text-center">
                <h3 className="card-title fs-4">Mercedes-Benz G-Class</h3>
                <p className="card-text fw-bold text-danger">Price: $163,700</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow-sm border-0" style={{ backgroundColor: '#717abb' }}>
              <img src="https://images.pexels.com/photos/6462662/pexels-photo-6462662.png" className="card-img-top rounded-top" alt="..." />
              <div className="card-body text-center">
                <h3 className="card-title fs-4">Lamborgini</h3>
                <p className="card-text fw-bold text-danger">Price: $560,000</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow-sm border-0" style={{ backgroundColor: '#717abb' }}>
              <img src="https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg" className="card-img-top rounded-top" alt="..." />
              <div className="card-body text-center">
                <h3 className="card-title fs-4">BMW</h3>
                <p className="card-text fw-bold text-danger">Price: $475,000</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow-sm border-0" style={{ backgroundColor: '#717abb' }}>
              <img src="https://images.pexels.com/photos/3894065/pexels-photo-3894065.jpeg" className="card-img-top rounded-top" alt="..." />
              <div className="card-body text-center">
                <h3 className="card-title fs-4">Rolls Royce Boat Tail</h3>
                <p className="card-text fw-bold text-danger">Price: $28 Million</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow-sm border-0" style={{ backgroundColor: '#717abb' }}>
              <img src="https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg" className="card-img-top rounded-top" alt="..." />
              <div className="card-body text-center">
                <h3 className="card-title fs-4">Rolls Royce Phantom</h3>
                <p className="card-text fw-bold text-danger">Price: $517,750</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow-sm border-0" style={{ backgroundColor: '#717abb' }}>
              <img src="https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg" className="card-img-top rounded-top" alt="..." />
              <div className="card-body text-center">
                <h3 className="card-title fs-4">Mercedes-Benz G-Class S-680</h3>
                <p className="card-text fw-bold text-danger">Price: $240,500</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow-sm border-0" style={{ backgroundColor: '#717abb' }}>
              <img src="https://images.pexels.com/photos/3954388/pexels-photo-3954388.jpeg" className="card-img-top rounded-top" alt="..." />
              <div className="card-body text-center">
                <h3 className="card-title fs-4">Mercedes-Benz Classic</h3>
                <p className="card-text fw-bold text-danger">Price: $63,560</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow-sm border-0" style={{ backgroundColor: '#717abb' }}>
              <img src="https://images.pexels.com/photos/119435/pexels-photo-119435.jpeg" className="card-img-top rounded-top" alt="..." />
              <div className="card-body text-center">
                <h3 className="card-title fs-4">Jeep</h3>
                <p className="card-text fw-bold text-danger">Price: $101,890</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow-sm border-0" style={{ backgroundColor: '#717abb' }}>
              <img src="https://images.pexels.com/photos/7402641/pexels-photo-7402641.jpeg" className="card-img-top rounded-top" alt="..." />
              <div className="card-body text-center">
                <h3 className="card-title fs-4">Thar</h3>
                <p className="card-text fw-bold text-danger">Price: $24,400</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Catalogue;