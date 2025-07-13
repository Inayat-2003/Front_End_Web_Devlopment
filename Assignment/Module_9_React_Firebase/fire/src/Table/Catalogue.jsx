import React, { useContext } from 'react';
import Mycontext from '../Context/data/Mycontext';
import { Link, useNavigate } from 'react-router-dom';

function Catalogue() {
  const context = useContext(Mycontext);
  const navigate = useNavigate();
  const { allCars, deleteCar, setEditCarData } = context;

  const handleEdit = (data) => {
    setEditCarData(data);
    console.log(data)
    navigate('/updatecar');
  };

  return (
    <div className="container my-5">
      <div className="card shadow">
        <div className="card-body bg-dark text-white d-flex flex-wrap justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-2 mb-2 mb-md-0">
            <h5 className="mb-0 fw-semibold">React Firebase CRUD</h5>
          </div>
          <Link to="/addproduct">
            <button className="btn btn-secondary">Add Car</button>
          </Link>
        </div>
      </div>

      <div className="table-responsive mt-4 shadow rounded">
        <table className="table table-bordered table-hover table-dark text-white align-middle">
          <thead className="table-secondary text-dark">
            <tr>
              <th scope="col">S.No.</th>
              <th scope="col">Model Name</th>
              <th scope="col">Car image</th>
              <th scope="col">Car Name</th>
              <th scope="col">Price</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {allCars.length > 0 ? (
              allCars.map((car, index) => (
                <tr key={car.id}>
                  <td>{index + 1}</td>
                  <td>{car.modelname}</td>
                  <td>
                    <img src={car.image} alt={car.modelname} width="80" />
                  </td>
                  <td>{car.carname}</td>
                  <td>{car.price} $</td>
                  <td>
                    <button
                      onClick={() => handleEdit(car)}
                      className="btn btn-sm btn-success m-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteCar(car)}
                      className="btn btn-sm btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" style={{ textAlign: "center" }}>
                  No cars found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Catalogue;