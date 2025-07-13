import React, { useContext } from 'react';
import Mycontext from '../Context/data/Mycontext';

function Add() {
  const {
    car,
    setCar,
    addCar,
  } = useContext(Mycontext);

  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCar(car);
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Add Form</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Car Name</label>
          <input
            type="text"
            className="form-control"
            name="carname"
            value={car.carname}
            onChange={handleChange}
            placeholder="e.g. Toyota"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Model Name</label>
          <input
            type="text"
            className="form-control"
            name="modelname"
            value={car.modelname}
            onChange={handleChange}
            placeholder="e.g. Camry"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input
            type="text"
            className="form-control"
            name="image"
            value={car.image}
            onChange={handleChange}
            placeholder="https://..."
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={car.price}
            onChange={handleChange}
            placeholder="e.g. 2999"
          />
        </div>
        <button
          type="submit"
          className="btn btn-info me-2"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default Add;