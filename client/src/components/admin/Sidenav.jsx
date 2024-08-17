import React from 'react'
import "../../style.css"

export default function Sidenav() {
    return (
        <div>
            <nav className="sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-dark bg-dark navbar-expand-lg" id="navbar">

                <div className="sidenav-header">
                    <a className="brand" href="#">
                        <img src="../../images/" style={{width: '100px', height:'50px'}} alt="image"/>
                    </a>
                </div>
                <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse row m-auto ml-sm-5 " id="navbarNav">
                    <div className="navbar-nav col-md-10">

                        <a href="/" className="nav-item dash-link nav-link "> Dashboard <span className="sr-only">(current)</span> </a>
                        <a href="#" className="nav-item nav-link dash-link "> Student Management </a>
                        <a href="#" className="nav-item nav-link dash-link"> Staff Management </a>
                        <a href="#" className="nav-item nav-link dash-link"> Subject Management </a>
                        <a href="#" className="nav-item nav-link dash-link"> Payment Management </a>
                        <a href="#" className="nav-item nav-link dash-link"> Fees Management </a>
                        <a href="/exam" className="nav-item nav-link dash-link"> Exam Management </a>
                        <a href="#" className="nav-item nav-link dash-link"> Timetable Management </a>
                        <a href="#" className="nav-item nav-link dash-link"> Feedbacks/Suggestions </a>

                    </div>


                </div>

            </nav>
            <div className="container-fluid">


                <div className="row">
                    <div className="col-md-3">
                        {/* <h1 className="fredoka"> Hello Jhon ! </h1> */}
                    </div>
                    <div className="col-md-7">
                        <br/>
                        <h1 className="fredoka"> Hello Admin ! </h1>
                    </div>
                    <div className="col-md-2 " >
                        <br/>
                        <i className="fa fa-bell icon-dash d-inline mr-4 yellow">  </i>
                        <a href="#" className="btn btn-dash d-inline "> <i className="fa fa-user d-inline white icon-dash" style={{fontsize: '15px'}}>  </i> <span style={{ color: "white" }}>Log out</span></a>
                    </div>

                </div>
            </div>
        </div>
    )
}

