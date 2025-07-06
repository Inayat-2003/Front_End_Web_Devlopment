import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Aheader from '../Acommon/Aheader'
import Anavs from '../Acommon/Anavs'

function Animals() {

    const [animals, setanimals] = useState([])

    useEffect(() => {
        fetch()
    }, [])

    const fetch = async () => {
        const res = await axios.get("http://localhost:3000/our")
        setanimals(res.data)
    }

    return (
        <div>
            <Aheader />
            <Anavs title="Animals Manage" name="Animals Manage" />
            <table class="table">
                <thead >
                    <tr className='text-center'>
                        <th scope="col">ID</th>
                        <th scope="col">Type</th>
                        <th scope="col">Name</th>
                        <th scope="col">Image</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        animals && animals.map((data, index) => {
                        return (
                            <tr className='text-center' key={index}>
                                <th scope="row">{data.id}</th>
                                <td>{data.type}</td>
                                <td>{data.Aname}</td>
                                <td><img src={data.img} style={{height:"70px", width:"70px"}} alt="" /></td>
                                <td>
                                    <button className="btn btn-info" >View</button>
                                    <button className="btn btn-success">Edit</button>
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        ) }
                    )
                    }
                </tbody>
            </table>

        </div>
    )
}

export default Animals