import React, { useEffect, useState } from 'react'
import Aheader from '../Acommon/Aheader'
import Anavs from '../Acommon/Anavs'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Servicemanage() {
    
    const [services, setservices] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/service")
        setservices(res.data)
    }

    const [singlesrvc, setsinglesrvc] = useState({
        id: "",
        name: "",
        img: "",
        description: ""
    })

    const service = async (id) => {
        const res = await axios.get(`http://localhost:3000/service/${id}`)
        setsinglesrvc(res.data)
    }

    const deletesrvc = async (id) => {
        const res = await axios.delete(`http://localhost:3000/service/${id}`)
        alert("Data deleted successfully..!")
        fetchdata()
    }

    // update model
    const [updatesrvc, setupdatesrvc] = useState(null)
    const [edited, setedited] = useState({
        id: "",
        name: "",
        img: "",
        description: ""
    })

    const saveedite = (data) => {
        setupdatesrvc(data)
        setedited(data)
        console.log(data)
    }

    const getchnage = (e) => {
        setedited({
            ...edited,
            [e.target.name]: e.target.value
        })
        console.log(edited)
    }

    const getupdate = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.put(`http://localhost:3000/service/${edited.id}`, edited)
            alert("updated successfullyy..!")
            fetchdata()
            setupdatesrvc(null)
            setedited({
                id: "",
                name: "",
                img: "",
                description: ""
            })

        } catch (error) {
            console.log("Api data not Found", error)
            alert("Api data not Found")
        }
    }

    return (
        <div>
            <div>
                <Aheader />
                <Anavs title="Service Manage" name="Service" />
                <div className="container">
                    <h1 className='text-center'>Manage Services</h1>
                    <table className="table">
                        <thead>
                            <tr className='text-center'>
                                <th scope="col">#ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Image</th>
                                <th scope="col">Description</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                services && services.map((data, index) => {

                                    return (
                                        <tr className='text-center' key={index}>
                                            <th scope="row">{data.id}</th>
                                            <td>{data.name}</td>
                                            <td>
                                                <img src={data.image} style={{ width: "100px", height: "100px" }} alt="#" />
                                            </td>
                                            <td>{data.description}</td>
                                            <td>
                                                <button className='btn btn-info' data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => service(data.id)} >View</button>
                                                <button className='btn btn-success mx-2' onClick={() => saveedite(data)}>Edit</button>
                                                <button className='btn btn-danger' onClick={() => deletesrvc(data.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>

                    {

                        updatesrvc && (
                            <div className="conatiner py-5" >
                                <div className="col-lg-8 mx-auto wow fadeInRight" data-wow-delay="0.3">
                                    <h1 className="display-5 mb-4">Service Update</h1>
                                    <form >
                                        <div className="row g-4">
                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <input name='name' value={edited.name} onChange={getchnage} type="text" className="form-control" id="name" placeholder="Name" />
                                                    <label htmlFor="message">Service Name</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <input type="url" value={edited.image} name='img' onChange={getchnage} className="form-control" id="animg" placeholder="Image" />
                                                    <label htmlFor="subject">Service image</label>
                                                </div>
                                            </div>
                                            <div className="col-12 ">
                                                <div className="form-floating">
                                                    <input name='desc' value={edited.description} onChange={getchnage} type="text" className="form-control" id="type" placeholder="Desc" />
                                                    <label htmlFor="name">Service Desc</label>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <div className="row">
                                                    <div className="col">
                                                        <button className="btn btn-primary w-100 py-3" onClick={getupdate}>Update</button>
                                                    </div>
                                                    <div className="col">
                                                        <button className="btn btn-primary w-100 py-3" onClick={() => setupdatesrvc(null)}>Exit</button>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )
                    }
                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="staticBackdropLabel">Service</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                    <div className="card" style={{ width: "100%" }}>
                                        <img src={singlesrvc.img} style={{ height: "250px" }} className="card-img-top" alt="#" />
                                        <div className="card-body">
                                            <h5 className="card-title">{singlesrvc.id}</h5>
                                            <h5 className="card-title">{singlesrvc.name}</h5>
                                            <p className="card-text">{singlesrvc.description}</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            )
        </div>
    )
}

export default Servicemanage