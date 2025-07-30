import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

function RegistrationForm() {
    const [form, setform] = useState({
        id: "",
        email: "",
        password: "",
        confirmPassword: "",
        firstname: "",
        lastname: "",
        phone: "",
        address: "",
        country: "",
        town: "",
        region: "",
        zip: "",
        status: ""
    });

    const getChange = (e) => {
        const { name, value } = e.target;
        setform((prev) => ({
            ...prev,
            id: new Date().getTime().toString(),
            status: "unblock",
            [name]: value
        }));
    };

    const getSubmit = async (e) => {
        e.preventDefault()

        if (form.password !== form.confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }

        const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!emailRegex.test(form.email)) {
            toast.error("Invalid email format.");
            return;
        }

        if (form.phone && !/^[0-9]{10}$/.test(form.phone)) {
            toast.error("Phone must be 10 digits.");
            return;
        }

        if (form.zip && !/^[0-9]{4,10}$/.test(form.zip)) {
            toast.error("ZIP code must be between 4 to 10 digits.");
            return;
        }

        try {
            const res = await axios.post("http://localhost:3000/users", form);
            console.log(res.data);
            toast.success("Registration successful!");

            // Reset form
            setform({
                id: "",
                email: "",
                password: "",
                confirmPassword: "",
                firstname: "",
                lastname: "",
                phone: "",
                address: "",
                country: "",
                town: "",
                region: "",
                zip: "",
                status: ""
            });
        } catch (error) {
            console.error("API error:", error);
            toast.error("API error. Please try again.");
        }
    };

    return (
        <div className="container">
            <h2><i className="fas fa-user-plus" /> Registration Form</h2>
            <form onSubmit={getSubmit}>

                <div className="form">
                    <label>Email:</label>
                    <input type="email" name="email" value={form.email} onChange={getChange} placeholder="Email" required/>
                </div>

                <div className="form">
                    <label>Password:</label>
                    <input type="password" name="password" value={form.password} onChange={getChange} placeholder="Password" required />
                </div>

                <div className="form">
                    <label>Confirm Password:</label>
                    <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={getChange} placeholder="Re-enter Password" required/>
                </div>

                <div className="form">
                    <label>First Name:</label>
                    <input type="text" name="firstname" value={form.firstname} onChange={getChange} placeholder="First Name" required />
                </div>

                <div className="form">
                    <label>Last Name:</label>
                    <input type="text" name="lastname" value={form.lastname} onChange={getChange} placeholder="Last Name"/>
                </div>

                <div className="form">
                    <label>Phone Number:</label>
                    <input type="text" name="phone" maxLength={10} value={form.phone} onChange={getChange} placeholder="Mobile Number"  />
                </div>

                <div className="form">
                    <label>Address:</label>
                    <textarea name="address" value={form.address} onChange={getChange} rows="3" style={{width:440}} placeholder="Enter your address"  />
                </div>

                <div className="form">
                    <label>Town / City:</label>
                    <input type="text" name="town" value={form.town} onChange={getChange} placeholder="Town / City"/>
                </div>

                <div className="form">
                    <label>Region / State:</label>
                    <input type="text" name="region" value={form.region} onChange={getChange} placeholder="Region / State"/>
                </div>

                <div className="form">
                    <label>ZIP / Postal Code:</label>
                    <input type="text"name="zip" value={form.zip} onChange={getChange} placeholder="ZIP / Postal Code"/>
                </div>

                <div className="form">
                    <label>Country:</label>
                    <select
                        name="country"
                        value={form.country}
                        onChange={getChange}
                    >
                        <option value="">-- Select Country --</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="Russia">Russia</option>
                        <option value="Canada">Canada</option>
                        <option value="South Africa">South Africa</option>
                        <option value="Dubai">Dubai</option>
                        <option value="Australia">Australia</option>
                    </select>
                </div>

                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default RegistrationForm;
