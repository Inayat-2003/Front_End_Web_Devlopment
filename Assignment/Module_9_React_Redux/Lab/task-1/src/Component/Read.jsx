import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { carDelete, carRead } from '../Slice/carSlice';

function Read() {
  const cars = useSelector((state) => state.cars?.cars ??[]);
  const dispatch = useDispatch();

  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    dispatch(carRead());
  }, [dispatch]);

  const handleView = (car) => {
    setSelectedCar(car);
    document.body.classList.add('modal-open'); // to prevent background scroll
  };

  const closeModal = () => {
    setSelectedCar(null);
    document.body.classList.remove('modal-open');
  };

  return (
    <div>
      <div className="container">
        <h1>Catalogue</h1>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th width={"15%"} >#ID</th>
                <th width={"20%"}>Company Name</th>
                <th width={"15%"}>Model Name</th>
                <th width={"20%"}>Price</th>
                <th width={"10%"}>Image</th>
                <th width={"16%"}>Action</th>
              </tr>
            </thead>
            <tbody>
              {cars && cars.map((car) => (
                <tr key={car.id}>
                  <th>{car.id}</th>
                  <td>{car.company}</td>
                  <td>{car.model}</td>
                  <td>${car.price}M.</td>
                  <td><img src={car.image} alt={car.company} style={{ width: '200px', height: '150px' }} /></td>
                  <td>
                    <button className="btn btn-info" onClick={() => handleView(car)}>View</button>
                    <Link to={`/edit/${car.id}`} className="btn btn-success mx-2">Edit</Link>
                    <button className="btn btn-danger" onClick={() => dispatch(carDelete(car.id))}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* conditional rendering */}
      {selectedCar && (
        <>
          {/* Modal Backdrop */}
          <div className="modal-backdrop fade show" style={{ zIndex: 900 }}></div>

          {/* Modal Content */}
          <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ zIndex: 900 }}>
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content rounded shadow-lg border-0">
                <div className="modal-header border-0">
                  <h5 className="modal-title fw-bold text-primary">{selectedCar.company}</h5>
                  <button type="button" className="btn-close" aria-label="Close" onClick={closeModal}></button>
                </div>
                <div className="modal-body">
                  <div className="row g-4">
                    <div className="col-md-5 d-flex justify-content-center align-items-center">
                      <div className="card border-0 bg-light rounded shadow-sm" style={{ maxWidth: "100%", overflow: "hidden" }}>
                        <img
                          src={selectedCar.image}
                          alt={selectedCar.company}
                          className="card-img-top img-fluid rounded"
                          style={{ objectFit: "contain", maxHeight: "350px" }}
                        />
                      </div>
                    </div>
                    <div className="col-md-7">
                      <ul className="list-group list-group-flush fs-6">
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                          <span className="fw-semibold text-secondary">ID:</span>
                          <span className="text-dark">{selectedCar.id}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                          <span className="fw-semibold text-secondary">Company Name</span>
                          <span className="badge bg-info text-dark">{selectedCar.company}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                          <span className="fw-semibold text-secondary">Model Name</span>
                          <span>{selectedCar.model}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                          <span className="fw-semibold text-secondary">Price</span>
                          <span>{selectedCar.price}</span>
                        </li>
                        
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="modal-footer border-0">
                  <button type="button" className="btn btn-outline-secondary px-4 py-2" onClick={closeModal}>Close</button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Read;