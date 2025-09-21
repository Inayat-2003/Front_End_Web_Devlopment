import React, {useEffect, useState } from 'react'
import './style.css'
import axios from 'axios';
function Form() {

    const [form, setForm] = useState([]);
    const [userdata, setUserdata] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        birthdate: "",
        gender: "",
        address: ""
    })

    const fetchdata = async () => {
        const response = await axios.get("http://localhost:3000/users");
        setForm(response.data)
    }
    useEffect(() => {
        fetchdata();
    }, [])

    const getchange = (e) => {
        const { name, value } = e.target;
        setUserdata((prev) => ({
            ...prev, [name]: value
        }))
    }


    const [edit, setEdit] = useState(null);
    const getsubmit = async (e) => {
        e.preventDefault()
        try {
            if (edit) {
                await axios.put(`http://localhost:3000/users/${edit.id}`, userdata)
                setEdit(null);
            }
            else { await axios.post("http://localhost:3000/users", userdata) }

            fetchdata()
            setUserdata({
                firstname: "",
                lastname: "",
                email: "",
                phone: "",
                birthdate: "",
                gender: "",
                address: ""
            });
        }
        catch (error) {
            console.error("Error while submitting the form", error);
        }
    }

    const getedit = (data) => {
        setUserdata(data)
        setEdit(data)
    }

    const getdelete = async (id) => {
        await axios.delete(`http://localhost:3000/users/${id}`)
        fetchdata()
    }

    return (
        <div>
            <div className="container">
                <h2>Personal Information Manager</h2>
                <form onSubmit={getsubmit}>
                    <div className="form">
                        <label>First Name</label>
                        <input type="text" value={userdata.firstname} onChange={getchange} name='firstname' placeholder='First Name' required />
                    </div>
                    <div className="form">
                        <label>Last Name</label>
                        <input type="text" value={userdata.lastname} onChange={getchange} name='lastname' placeholder='Last Name' required />
                    </div>
                    <div>
                        <div className="form">
                            <label>Email</label>
                            <input type="email" value={userdata.email} onChange={getchange} name="email" placeholder="Email" required />
                        </div>
                        <div className="form">
                            <label>Phone</label>
                            <input type="tel" value={userdata.phone} onChange={getchange} name="phone" placeholder="Phone - 10 digits" pattern='[0-9]{10}' required />
                        </div>
                        <div>
                            <label>Birthdate:</label>
                            <input type="date" value={userdata.birthdate} onChange={getchange} name="birthdate" />
                        </div>
                        <fieldset className="form">
                            <div className="row">
                                <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
                                <div className="col-sm-10">
                                    <div className="form-check">
                                        <input className="form-check-input" value="male" checked={userdata.gender === 'male'} onChange={getchange} type="radio" name="gender" />
                                        <label className="form-check-label" htmlFor="gridRadios1">
                                            Male
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" value="female" checked={userdata.gender === 'female'} onChange={getchange} type="radio" name="gender" />
                                        <label className="form-check-label" htmlFor="gridRadios2">
                                            Female
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" value="other" checked={userdata.gender === 'other'} onChange={getchange} type="radio" name="gender" />
                                        <label className="form-check-label" htmlFor="gridRadios3">
                                            Other
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <div className="form">
                            <label>Address</label>
                            <input type="text" value={userdata.address} onChange={getchange} className="form-control" name="address" placeholder="1234 Main St" required />
                        </div>

                        <button type='submit'>{edit ? 'Update the Data' : "Submit the Data"}</button>
                    </div>
                </form>
            </div>
            <table>
                <thead>
                    <tr>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                        <td>Birthdate</td>
                        <td>Gender</td>
                        <td>Address</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {form.map((user) =>
                        <tr key={user.id}>
                            <td>{user.firstname}</td>
                            <td>{user.lastname}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.birthdate}</td>
                            <td>{user.gender}</td>
                            <td>{user.address}</td>
                            <td>
                                <button type="button" onClick={() => getedit(user)} className="btn btn-primary">Make changes</button>
                                <button type="button" onClick={() => getdelete(user.id)} className="btn btn-secondary">Delete</button>
                            </td>

                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Form