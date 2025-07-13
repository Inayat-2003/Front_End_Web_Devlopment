import React, { useState, useEffect } from 'react';
import Mycontext from './Mycontext';
import { collection, onSnapshot, doc, deleteDoc, setDoc, query } from 'firebase/firestore';
import { fireDb } from '../../Firebase/firebase';

function Mystate(props) {
  const [allCars, setAllCars] = useState([]);
  const [car, setCar] = useState({
    carname: '',
    modelname: '',
    image: '',
    price: '',
  });
  const [editCarData, setEditCarData] = useState(null);

  const getCars = () => {
    const q = query(collection(fireDb, 'Car'));
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const carsArray = QuerySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      }));
      setAllCars(carsArray);
    });
    return unsubscribe;
  };

  useEffect(() => {
    const unsubscribe = getCars();
    return () => unsubscribe();
  }, []);

const addCar = async (carData) => {
  try {
    const docRef = doc(collection(fireDb, 'Car'));
    await setDoc(docRef, carData);
    alert('Car added successfully');
  } catch (error) {
    console.log(error);
  }
};

  const editCar = async (updatedData) => {
    try {
      await setDoc(doc(fireDb, 'Car', updatedData.id), updatedData);
      alert('Car updated successfully');
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCar = async (car) => {
    try {
      await deleteDoc(doc(fireDb, 'Car', car.id));
      alert('Car deleted successfully');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Mycontext.Provider
      value={{
        allCars,
        getCars,
        setAllCars,
        car,
        setCar,
        deleteCar,
        editCar,
        addCar,
        editCarData,
        setEditCarData
      }}>
      {props.children}
    </Mycontext.Provider>
  );
}

export default Mystate;