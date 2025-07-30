import React from 'react'
import Aheader from '../Acommon/Aheader'
import Anavs from '../Acommon/Anavs'

function Dashboard() {
  return (
    <div>
        <Aheader/>
        <Anavs title="Admin Dashboard" name="Dash" />

    <div className="d-flex" style={{ height: '100vh' }}>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-white bg-success"
        style={{ width: '280px' }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-4">Admin Panel</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className="nav-link text-white">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              Users
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              Settings
            </a>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>Admin</strong>
          </a>
          <ul
            className="dropdown-menu dropdown-menu-dark text-small shadow"
            aria-labelledby="dropdownUser1"
          >
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="p-3 w-100">
        <h1>Admin Dashboard</h1>
        <p>Welcome to the admin dashboard.</p>
      </div>
    </div>
    </div>
  )
}

export default Dashboard