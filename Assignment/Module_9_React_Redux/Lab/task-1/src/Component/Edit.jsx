import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { carRead, carUpdate } from '../Slice/carSlice'

function Edit() {
    const redirect = useNavigate()
    const { id } = useParams()
    const dispatch = useDispatch()

    const { cars, loading } = useSelector((state) => state.cars)
    const [carData, setCarData] = useState({
        id: "",
        company: "",
        model: "",
        price: "",
        image: ""
    })
    useEffect(() => {
        dispatch(carRead());
    }, [dispatch]);

    useEffect(() => {
        if (cars.length > 0) {
            const singleCar = cars.find((p) => p.id.toString() === id)
            if (singleCar) {
                setCarData({
                    id: singleCar.id,
                    company: singleCar.company,
                    model: singleCar.model,
                    price: singleCar.price,
                    image: singleCar.image
                })
            }
        }
    }, [id, cars]);

    const getChange = (e) => {
        setCarData({
            ...carData,
            [e.target.name]: e.target.value
        })
    }

    const getSubmit = (e) => {
        e.preventDefault()
        dispatch(carUpdate({
            ...carData,
            price: parseFloat(carData.price) // ensure price is a number
        }))
        redirect("/")
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <h1>Edit Car</h1>
                        <form onSubmit={getSubmit}>
                            <div className="mb-3">
                                <label htmlFor="company" className="form-label mb-0">Company Name</label>
                                <input type="text" name="company" onChange={getChange} value={carData.company} className="form-control" id="company" placeholder="Enter company name" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="model" className="form-label mb-0">Model</label>
                                <input type="text" name="model" onChange={getChange} value={carData.model} className="form-control" id="model" placeholder="Enter model name" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="price" className="form-label mb-0">Price</label>
                                <input type="text" name="price" onChange={getChange} value={carData.price} className="form-control" id="price" placeholder="Enter price" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="image" className="form-label mb-0">Car Image</label>
                                <input type="url" name="image" onChange={getChange} value={carData.image} className="form-control" id="live_image" placeholder="Enter image URL" required />
                            </div>
                            <div className="mb-3">
                                <input type="submit" className="btn btn-primary" value="Add Car" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edit