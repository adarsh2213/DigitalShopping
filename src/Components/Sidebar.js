import React from 'react'

export default function Sidebar() {
    return (
        <div class="p-2  firstline d-flex row ">
            <div className='col menu'>
                <div className='sm-3  sidebar'>
                    <nav class="navbar ">
                        <div class="container-fluid">
                            <div className="col-md-2">
                                <i className="bi bi-house-add-fill icon "></i>

                            </div>
                            <a class="navbar-brand text-white" href="dasbord">Dasbord</a>
                        </div>
                    </nav>
                    <nav class="navbar ">
                        <div class="container-fluid">
                            <div className="col-md-2">
                                <i class="bi bi-graph-up-arrow  icon "></i>

                            </div>
                            <a class="navbar-brand text-white" href="analytics">Analytics</a>
                        </div>
                    </nav>

                    <nav className="navbar ">
                        <div class="container-fluid">
                            <div className="col-md-2">
                                <i class="bi bi-box  icon "></i>
                            </div>
                            <a className="navbar-brand text-white" href="product">Products</a>
                        </div>
                    </nav>

                    <nav class="navbar">
                        <div class="container-fluid">
                            <div className="col-md-2">
                                <i class="bi bi-bag-fill  icon "></i>

                            </div>
                            <a className="navbar-brand text-white" href="#">
                                Reorders</a>
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

        </div>
    )
}
