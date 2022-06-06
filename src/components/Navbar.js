import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-success" >
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">JM Group</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle active" to="/Sliding" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Designs
                                    </Link>
                                    <ul id="drop" className="dropdown-menu bg-success" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" to="/Sliding">Sliding Gates</Link></li>
                                        <li><Link className="dropdown-item" to="/Grills">Grills</Link></li>
                                        <li><Link className="dropdown-item" to="/Doors">Safety Doors</Link></li>
                                        <li><Link className="dropdown-item" to="/Railings">Railings</Link></li>
                                    </ul>
                                </li>
                                <Link className="nav-link active" aria-current="page" to="/ContactUs">Contact Us </Link>

                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
