import React, { useState } from "react";
import Chart from "react-apexcharts";

export default function Analytics() {
  const [test, setText] = useState(0);
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [2015, 2016, 2017, 2018, 2019, 2000, 2021, 2022, 2023],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  });

  return (
    <>
      <div class="d-flex ">
        <div class="p-2  firstline d-flex row ">
          <div className="col menu">
            <div className="sm-3  sidebar">
              <nav class="navbar ">
                <div class="container-fluid">
                  <div className="col-md-2">
                    <i className="bi bi-house-add-fill icon "></i>
                  </div>
                  <a class="navbar-brand text-white" href="header">
                    Dasbord
                  </a>
                </div>
              </nav>
              <nav class="navbar ">
                <div class="container-fluid">
                  <div className="col-md-2">
                    <i class="bi bi-graph-up-arrow  icon "></i>
                  </div>
                  <a class="navbar-brand text-white" href="analytics">
                    Analytics
                  </a>
                </div>
              </nav>

              <nav className="navbar ">
                <div class="container-fluid">
                  <div className="col-md-2">
                    <i class="bi bi-box  icon "></i>
                  </div>
                  <a className="navbar-brand text-white" href="product">
                    Products
                  </a>
                </div>
              </nav>

              <nav class="navbar">
                <div class="container-fluid">
                  <div className="col-md-2">
                    <i class="bi bi-bag-fill  icon "></i>
                  </div>
                  <a className="navbar-brand text-white" href="#">
                    Reorders
                  </a>
                </div>
              </nav>

              <nav class="navbar">
                <div class="container-fluid">
                  <div className="col-md-2">
                    <i class="bi bi-bag-fill  icon "></i>
                  </div>
                  <a className="navbar-brand text-white" href="#">
                    Marketing
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>

        <div class="secondline row container-fluid ">
          <div class="p-2 searchbar row   mb-3">
            <div className="col-md-8 d-flex ">
              <h4>Store Overview</h4>

              <div className="form-inputs">
                <input
                  className="form-control  mx-4"
                  type="text"
                  placeholder="Search any product..."
                />
              </div>
              <div>
                {" "}
                <i class="bi bi-search icon3"></i>
              </div>
            </div>

            <div className="col-md-2 p-2 pt-2 pb-2">
              <a className="nav-link active" aria-current="page" href="#">
                Welcome ,Adarsh
              </a>
            </div>

            <div className="col-md-2 pb-2 mb-2">
              <div class="dropdown ">
                <a
                  className="nav-link active ms-3 dropdown-toggle"
                  aria-expanded="false"
                  data-bs-toggle="dropdown"
                  aria-current="page"
                  href="#"
                >
                  {" "}
                  <i class="bi bi-person-fill icon2"></i>
                </a>

                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="/profile">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Account Setting
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="content">
            <h1>Analytics</h1>
            <div className=" container text-center">
              <div class="container text-center mt-5">
                <div class="row ">
                  <div class="col ">
                    <Chart
                      options={state.options}
                      series={state.series}
                      type="bar"
                      width="90%"
                    />
                  </div>
                  <div class="col ">
                    <Chart
                      options={state.options}
                      series={state.series}
                      // type="radar"
                      type="line"
                      width="90%"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
