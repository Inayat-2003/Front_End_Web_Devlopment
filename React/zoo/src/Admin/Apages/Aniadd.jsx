import React, { useState } from 'react'
import Aheader from '../Acommon/Aheader'
import Anavs from '../Acommon/Anavs'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Aniadd() {

    const redirect = useNavigate()

    const [form, setform] = useState({
        id: "",
        type: "",
        img: "",
        name: ""
    })

    // form halding 
    const getchnage = (e) => {
        setform({
            ...form,
            // new id
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
        console.log(form)
    }

    // submit data api 

    const getsubmit = async (e) => {
        e.preventDefault()

        try {

            if (form.type == "" || form.name == "" || form.img == "") {
                console.log("Pls fill required field...!")
                toast.error("Pls fill required field...!")
                return false
            }

            const res = await axios.post("http://localhost:3000/our", form)
            console.log(res.data)
            redirect("/animals")
            toast.success("Animal Added successfully..!")
            setform({
                id: "",
                type: "",
                img: "",
                name: ""
            })

        } catch (error) {
            console.log("Api data not Found..!")
        }
    }

    return (
        <div>
            <Aheader />
            <Anavs title="Animal Add" name="Aniadd" />
            <div className="conatiner py-5" >
                <div className="col-lg-8 mx-auto wow fadeInRight" data-wow-delay="0.3">
                    <h1 className="display-5 mb-4">Animal Add</h1>

                    <form onSubmit={getsubmit}>
                        <div className="row g-4">
                            <div className="col-12 ">
                                <div className="form-floating">
                                    <input value={form.name} name='name' onChange={getchnage} type="text" className="form-control" id="name" placeholder="Animal Name" />
                                    <label htmlFor="name">Animal Name</label>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="url" value={form.img} name='img' onChange={getchnage} className="form-control" id="animg" placeholder="Image" />
                                    <label htmlFor="subject">Animal image</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                     <input value={form.type} name='type' onChange={getchnage} type="text" className="form-control" id="type" placeholder="Animal Type" />
                                    <label htmlFor="message">Animal Type</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3">Add</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Aniadd