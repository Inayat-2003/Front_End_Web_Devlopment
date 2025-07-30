import React, { useEffect, useState } from 'react'
import Aheader from '../Acommon/Aheader'
import Anavs from '../Acommon/Anavs'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

function Animanage() {

    const [animals, setanimals] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    // all product
    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/our")
        // console.log(res.data)
        setanimals(res.data)
    }

    const [singleani, setsingleani] = useState({
        id: "",
        type: "",
        img: "",
        Aname: ""
    })

    const animal = async (id) => {
        const res = await axios.get(`http://localhost:3000/our/${id}`)
        console.log(res.data)
        setsingleani(res.data)
    }

    // delete product
    const deleteani = async (id) => {
        const res = await axios.delete(`http://localhost:3000/our/${id}`)
        // console.log(res.data)
        toast.success("Data deleted successfully..!")
        fetchdata()
    }

    // update model
    const [updateani, setupdateani] = useState(null)
    const [edited, setedited] = useState({
        id: "",
        type: "",
        img: "",
        Aname: ""
    })

    const saveedite = (data) => {
        setupdateani(data)
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

            const res = await axios.put(`http://localhost:3000/our/${edited.id}`, edited)
            // console.log(res.data)
            toast.success("updated successfullyy..!")
            fetchdata()
            setupdateani(null)
            setedited({
                id: "",
                type: "",
                img: "",
                Aname: ""
            })

        } catch (error) {
            console.log("Api data not Found", error)
            toast.error("Api data not Found")
        }
    }


    return (
        <div>
            <Aheader />
            <Anavs title="Service Manage" name="Service" />
            <div className="container">
                <h1 className='text-center'>Hello, this is Animal Manage</h1>
                   <Link to="/aniadd" className="btn btn-primary py-3 px-5 mt-3">Add Animal</Link>
                <table className="table">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Image</th>
                            <th scope="col">Type</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            animals && animals.map((data, index) => {
                                // console.log(data)
                                return (
                                    <tr className='text-center' key={index}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.Aname}</td>
                                        <td>
                                            <img src={data.img} style={{ width: "70px", height: "70px" }} alt="" />
                                        </td>
                                        <td>{data.type}</td>
                                        <td>
                                            <button className='btn btn-info' data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => animal(data.id)} >View</button>
                                            <button className='btn btn-success mx-2' onClick={() => saveedite(data)}>Edit</button>
                                            <button className='btn btn-danger' onClick={() => deleteani(data.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>

                {

                    updateani && (
                        <div className="conatiner py-5" >
                            <div className="col-lg-8 mx-auto wow fadeInRight" data-wow-delay="0.3">

                                <h1 className="display-5 mb-4">Animals Update</h1>

                                <form >
                                    <div className="row g-4">
                                         <div className="col-12">
                                            <div className="form-floating">
                                                <input name='name' value={edited.Aname} onChange={getchnage} type="text" className="form-control" id="name" placeholder="Animal Type" />
                                                <label htmlFor="message">Animal Name</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="url" value={edited.img} name='img' onChange={getchnage} className="form-control" id="animg" placeholder="Image" />
                                                <label htmlFor="subject">Animal image</label>
                                            </div>
                                        </div>
                                          <div className="col-12 ">
                                            <div className="form-floating">
                                                <input name='title' value={edited.type} onChange={getchnage} type="text" className="form-control" id="type" placeholder="Animal Type" />
                                                <label htmlFor="name">Animal Type</label>
                                            </div>
                                        </div>
                                       
                                        <div className="col-12">
                                            <div className="row">
                                                <div className="col">
                                                    <button className="btn btn-primary w-100 py-3" onClick={getupdate}>Animal Update</button>
                                                </div>
                                                <div className="col">
                                                    <button className="btn btn-primary w-100 py-3" onClick={() => setupdateani(null)}>Exit</button>
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
                                <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <div className="card" style={{ width: "100%" }}>
                                    <img src={singleani.img} style={{ height: "250px" }} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{singleani.id}</h5>
                                        <h5 className="card-title">{singleani.Aname}</h5>
                                        <p className="card-text">{singleani.type}</p>
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
}

export default Animanage