import React from 'react'
import Aheader from '../Acommon/Aheader'
import Anavs from '../Acommon/Anavs'

function Dashboard() {
  return (
    <div>
        <Aheader/>
        <Anavs title="Admin Dashboard" name="Dash" />

    <div className="d-flex" style={{ height: '100vh' }}>
      
       
      <div className="p-3 w-100">
        <h1>Admin Dashboard</h1>
        <p>Welcome to the admin dashboard.</p>
      </div>
    </div>
    </div>
  )
}

export default Dashboard