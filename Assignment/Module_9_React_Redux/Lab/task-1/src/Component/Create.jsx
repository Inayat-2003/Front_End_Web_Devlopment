import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { carAdd } from '../Slice/carSlice'

function Create() {
    const redirect = useNavigate()

    const [form, setForm] = useState({
            id: "",
            company: "",
            model: "",
            price: "",
            image: ""
    })

    const getChange = (e) => {
        setForm({
            ...form,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
    }

    const dispatch = useDispatch()

    const getSubmit = (e) => {
        e.preventDefault()
        dispatch(carAdd({
            ...form,
            price: parseFloat(form.price)
        }))
        redirect("/")
        setForm({
            id: "",
            company: "",
            model: "",
            price: "",
            image: ""
        })
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <h1>Add New Car</h1>
                        <form onSubmit={getSubmit}>
                            <div className="mb-3">
                                <label htmlFor="company" className="form-label mb-0">Company Name</label>
                                <input type="text" name="company" onChange={getChange} value={form.company} className="form-control" id="company" placeholder="Enter company" required />
                            </div>
                              <div className="mb-3">
                                <label htmlFor="model" className="form-label mb-0">Model Name</label>
                                <input type="text" name="model" onChange={getChange} value={form.model} className="form-control" id="model" placeholder="Enter model name" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="price" className="form-label mb-0">Price</label>
                                <input type="text" name="price" onChange={getChange} value={form. price} className="form-control" id="price" placeholder="Enter price details" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="image" className="form-label mb-0">Shoe Image</label>
                                <input type="url" name="image" onChange={getChange} value={form.image} className="form-control" id="live_image" placeholder="Enter image URL" required />
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

export default Create