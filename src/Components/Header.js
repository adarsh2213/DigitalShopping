
import React, { useState } from 'react'
import Chart from "react-apexcharts";

function Header() {
    const [state, setState] = useState({
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
        },
        series: [
            {
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            }
        ]


    })



    return (
        <>
            <div className='main'>
                <div className="container text-center mx-0">
                    <div className=" d-flex row new">
                        <div className="col-sm-2 side">
                            <div>
                                <h1 className='text-info'>Happy More</h1>
                            </div>
                            <div className='sm-3  sidebar'>
                                <nav class="navbar ">
                                    <div class="container-fluid">
                                        <div className="col-md-2">
                                            <i className="bi bi-house-add-fill icon "></i>

                                        </div>
                                        <a class="navbar-brand text-white" href="#">Dasbord</a>
                                    </div>
                                </nav>
                                <nav class="navbar ">
                                    <div class="container-fluid">
                                        <div className="col-md-2">
                                            <i class="bi bi-graph-up-arrow  icon "></i>

                                        </div>
                                        <a class="navbar-brand text-white" href="#">Analytics</a>
                                    </div>
                                </nav>

                                <nav className="navbar ">
                                    <div class="container-fluid">
                                        <div className="col-md-2">
                                            <i class="bi bi-box  icon "></i>
                                        </div>
                                        <a className="navbar-brand text-white" href="#">Products</a>
                                    </div>
                                </nav>

                                <nav class="navbar">
                                    <div class="container-fluid">
                                        <div className="col-md-2">
                                            <i class="bi bi-bag-fill  icon "></i>

                                        </div>
                                        <a className="navbar-brand text-white" href="#">Order re</a>
                                    </div>
                                </nav>

                                <nav class="navbar">
                                    <div class="container-fluid">
                                        <div className="col-md-2">
                                            <i class="bi bi-bag-fill  icon "></i>

                                        </div>
                                        <a className="navbar-brand text-white" href="#">Marketing</a>
                                    </div>
                                </nav>
                            </div>
                        </div>

                        <div className="col">
                            <div className="row second pt-4 shadow p-2 mb-3 ">

                                <div className="col-md-8 d-flex ">
                                    <h4>Store Overview</h4>

                                    <div className="form-inputs">

                                        <input className="form-control  mx-5" type="text" placeholder="Search any product..." />

                                    </div>
                                    <div> <i class="bi bi-search icon"></i></div>
                                </div>

                                <div className="col-md-2 p-2 pt-2 pb-2">

                                    <a className="nav-link active" aria-current="page" href="#">Welcome ,Adarsh</a>

                                </div>

                                <div className="col-md-2 pb-2 mb-2">

                                    <div class="dropdown ">
                                        <a className="nav-link active ms-3 dropdown-toggle" aria-expanded="false" data-bs-toggle="dropdown" aria-current="page" href="#"> <i class="bi bi-person-fill icon"></i></a>


                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Profile</a></li>
                                            <li><a class="dropdown-item" href="#">Account Setting</a></li>
                                            <li><a class="dropdown-item" href="#">Logout</a></li>
                                        </ul>
                                    </div>




                                </div>

                            </div>
                            <div class="container text-center">
                                <div>
                                    <h3 className='text-start' >Activity</h3>
                                </div>
                                <div class="row product">
                                    <div class="col">
                                        <div className='oderpanding rounded'>
                                            <i class="bi bi-hourglass-bottom icon"></i>
                                            <p>oderpanding</p>
                                            <p>200</p>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div className='orderstatus rounded'>
                                            <i class="bi bi-arrow-up-right-circle-fill icon"></i>
                                            <p>orderstatus</p>
                                            <p>100</p>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div className='ordercancel rounded ' >
                                            <i class="bi bi-trash3 icon"></i>
                                            <p>ordercancel</p>
                                            <p>5</p>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div className='todayincome rounded' >
                                            <i class="bi bi-currency-exchange icon"></i>
                                            <p>Today Income</p>
                                            <p>$255</p>
                                        </div>
                                    </div>

                                    <div class="container text-center">
                                        <div class="row">
                                            <div class="col">
                                                <Chart
                                                    options={state.options}
                                                    series={state.series}
                                                    type="bar"
                                                    width="90%"
                                                />
                                            </div>
                                            <div class="col">

                                                <Chart
                                                    options={state.options}
                                                    series={state.series}
                                                    type="radar"
                                                    width="90%"
                                                />
                                            </div>

                                        </div>
                                    </div>








                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header