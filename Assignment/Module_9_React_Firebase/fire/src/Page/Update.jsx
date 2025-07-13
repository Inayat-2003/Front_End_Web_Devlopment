// UpdateProduct.jsx
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Mycontext from '../Context/data/Mycontext';

function Update() {
  const { editCar, editCarData, setEditCarData } = useContext(Mycontext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    carname: '',
    modelname: '',
    image: '',
    price: '',
  });

  useEffect(() => {
    let carToEdit = editCarData;

    if (!carToEdit) {
      const saved = localStorage.getItem('editCar');
      if (saved) {
        carToEdit = JSON.parse(saved);
        setEditCarData(carToEdit);
      }
    }

    if (!carToEdit) {
      alert('No car selected for update');
      navigate('/');
      return;
    }

    setFormData({
      carname: carToEdit.carname || '',
      modelname: carToEdit.modelname || '',
      image: carToEdit.image || '',
      price: carToEdit.price || '',
    });
  }, [editCarData, navigate, setEditCarData]);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedData = { id: editCarData.id, ...formData };
    await editCar(updatedData);
    localStorage.removeItem('editCar');
    alert('Car updated!');
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleUpdate} className="bg-gray-800 p-6 rounded-lg w-96">
        <h2 className="text-white text-xl font-bold mb-4">Update Car</h2>
        {['carname', 'modelname', 'image', 'price'].map((field) => (
          <div key={field} className="mb-4">
            <input
              type={field === 'price' ? 'number' : 'text'}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              required
              className="w-full px-3 py-2 rounded bg-gray-600 text-dark"
            />
          </div>
        ))}
        <button type="submit" className="w-full bg-orange-500 text-dark font-bold py-2 rounded">
          Update Car
        </button>
      </form>
    </div>
  );
}

export default Update;