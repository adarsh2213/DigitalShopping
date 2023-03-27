import React, { useState } from "react";

import Chart from "react-apexcharts";

function Header() {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
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
      <div class="d-flex main">
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
          <div class="p-2 searchbar row   pt-4 mb-3">
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
          <div class="container text-center">
            <div>
              <h3 className="text-start">Activity</h3>
            </div>
            <div class="row  grid gap-3">
              <div class="col p-2 g-col-6">
                <div className="oderpanding rounded">
                  <i class="bi bi-hourglass-bottom icon"></i>
                  <p>oderpanding</p>
                  <p>200</p>
                </div>
              </div>
              <div class="col p-2 g-col-6">
                <div className="orderstatus rounded">
                  <i class="bi bi-arrow-up-right-circle-fill icon"></i>
                  <p>orderstatus</p>
                  <p>100</p>
                </div>
              </div>
              <div class="col p-2 g-col-6">
                <div className="ordercancel rounded ">
                  <i class="bi bi-trash3 icon"></i>
                  <p>ordercancel</p>
                  <p>5</p>
                </div>
              </div>

              <div class="col p-2 g-col-6">
                <div className="todayincome rounded">
                  <i class="bi bi-currency-exchange icon"></i>
                  <p>Today Income</p>
                  <p>$255</p>
                </div>
              </div>

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
                      type="radar"
                      width="90%"
                    />
                  </div>
                </div>
              </div>

              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Order Id</th>
                    <th scope="col">Payment Method</th>
                    <th scope="col">Order Date</th>
                    <th scope="col">Delivery date</th>
                    <th scope="col ">Status</th>
                    <th scope="col">Total</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Online</td>
                    <td>20/06/2022</td>
                    <td>20/06/2022</td>
                    <td className="table-success ">Pandind</td>
                    <td>$255</td>
                    <td>Update</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Online</td>
                    <td>20/06/2022</td>
                    <td>20/06/2022</td>
                    <td className="table-danger">Pandind</td>
                    <td>$255</td>
                    <td>Update</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Online</td>
                    <td>20/06/2022</td>
                    <td>20/06/2022</td>
                    <td className="table-warning">Pandind</td>
                    <td>$255</td>
                    <td>Update</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Online</td>
                    <td>20/06/2022</td>
                    <td>20/06/2022</td>
                    <td className="table-success">Pandind</td>
                    <td>$255</td>
                    <td>Update</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Online</td>
                    <td>20/06/2022</td>
                    <td>20/06/2022</td>
                    <td className="table-warning">Pandind</td>
                    <td>$255</td>
                    <td>Update</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Online</td>
                    <td>20/06/2022</td>
                    <td>20/06/2022</td>
                    <td className="table-success">Pandind</td>
                    <td>$255</td>
                    <td>Update</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Online</td>
                    <td>20/06/2022</td>
                    <td>20/06/2022</td>
                    <td className="table-warning">Pandind</td>
                    <td>$255</td>
                    <td>Update</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Online</td>
                    <td>20/06/2022</td>
                    <td>20/06/2022</td>
                    <td className="table-success">Pandind</td>
                    <td>$255</td>
                    <td>Update</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Online</td>
                    <td>20/06/2022</td>
                    <td>20/06/2022</td>
                    <td className="table-warning">Pandind</td>
                    <td>$255</td>
                    <td>Update</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Online</td>
                    <td>20/06/2022</td>
                    <td>20/06/2022</td>
                    <td className="table-warning">Pandind</td>
                    <td>$255</td>
                    <td>Update</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Online</td>
                    <td>20/06/2022</td>
                    <td>20/06/2022</td>
                    <td className="table-success">Pandind</td>
                    <td>$255</td>
                    <td>Update</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Online</td>
                    <td>20/06/2022</td>
                    <td>20/06/2022</td>
                    <td className="table-warning">Pandind</td>
                    <td>$255</td>
                    <td>Update</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
