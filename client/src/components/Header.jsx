import React from 'react'
import "../style.css"

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light fixed-top" id="ftco-navbar">
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="fa fa-bars"></span> Menu
                    </button>
                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <a className="brand" href="index.html">
                            <img src="" style={{ width: '150px' }} alt="image" />
                        </a>
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item active"><a href={"index.html"} className="nav-link">Home</a></li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Support Services</a>
                                <div className="dropdown-menu" aria-labelledby="dropdown04">
                                    <a className="dropdown-item" href="">Page 1</a>
                                    <a className="dropdown-item" href="">Page 2</a>
                                    <a className="dropdown-item" href="">Page 3</a>
                                    <a className="dropdown-item" href="">Page 4</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Resources</a>
                                <div className="dropdown-menu" aria-labelledby="dropdown04">
                                    <a className="dropdown-item" href="">Page 1</a>
                                    <a className="dropdown-item" href="">Page 2</a>
                                    <a className="dropdown-item" href="">Page 3</a>
                                    <a className="dropdown-item" href="">Page 4</a>
                                </div>
                            </li>
                            <li className="nav-item"><a href="" className="nav-link">Contact Us</a></li>
                        </ul>
                        <a href="/log" className="btn btn-def">Login</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}



