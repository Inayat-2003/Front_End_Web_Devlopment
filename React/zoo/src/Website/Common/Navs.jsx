import React from 'react'

function Navs({title, name}) {
    return (
        <div>
            {/* Page Header Start */}
            <div className="container-fluid header-bg py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <h1 className="display-4 text-white mb-3 animated slideInDown">{title}</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item">
                                <a className="text-white" href="#">Home</a>
                            </li>
                            <li className="breadcrumb-item">
                                <a className="text-white" href="#">Pages</a>
                            </li>
                            <li className="breadcrumb-item text-primary active" aria-current="page">
                                {name}
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Page Header End */}

        </div>
    )
}

export default Navs