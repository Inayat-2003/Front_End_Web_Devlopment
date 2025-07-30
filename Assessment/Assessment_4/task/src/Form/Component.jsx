import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

function Component() {

    const [form, setform] = useState({
        id: "",
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        status: ""
    })

    const getchnage = (e) => {
        setform({
            ...form,
            id: new Date().getTime().toString(),
            status: "unblock",
            [e.target.name]: e.target.value
        })
        console.log(form)
    }

    const getsubmit = async (e) => {
        e.preventDefault()

        try {

            if (!form.email.trim() || !form.password.trim() || !form.name.trim()) {
                console.log("pls require data")
                toast.error("pls require data")
                return false
            }

            const res = await axios.post("http://localhost:3000/users", form)
            console.log(res.data)
            toast.success("register data successfully..")
            setform({
                id: "",
                email: "",
                password: "",
                confirmPassword: "",
                firstName: "",
                lastName: "",
                status: ""
            })

        } catch (error) {
            console.log("Apd Data not Found..")
            toast.error("APi data not Found")
        }
    }

    return (
        <div>
            <div className="container">
                <h2><i className="fas fa-user-plus" /> Registration Form</h2>
                <form id="registrationForm" noValidate>
                    <div className="form">
                        <i className="fas fa-envelope" />
                        <input type="email" id="email" placeholder="Email" />
                    </div>
                    <div className="form">
                        <i className="fas fa-lock" />
                        <input type="password" id="password" placeholder="Password" />
                    </div>
                    <div className="form">
                        <i className="fas fa-lock" />
                        <input type="password" id="confirmPassword" placeholder="Confirm Password" />
                    </div>
                    <div className="form">
                        <i className="fas fa-user" />
                        <input type="text" id="firstName" placeholder="First Name" />
                    </div>
                    <div className="form">
                        <i className="fas fa-user" />
                        <input type="text" id="lastName" placeholder="Last Name" />
                    </div>
                    <div className="form">
                        <i className="fas fa-phone" />
                        <input type="text" id="mobile" placeholder="Mobile Number" maxLength={10} />
                    </div>
                    <div className="form">
                        <label htmlFor="country">Select Country:</label>
                        <select id="country">
                            <option value>-- Select Country --</option>
                            <option value="India">INDIA</option>
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                            <option value="UK">RUSSIA</option>
                            <option value="UK">CANDA</option>
                            <option value="UK">SOUTH-AFRICA</option>
                            <option value="UK">DUBAI</option>
                            <option value="UK">AUSTRALIA</option>
                        </select>
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>

    )
}

export default Component