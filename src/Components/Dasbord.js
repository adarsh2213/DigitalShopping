import React, { useState } from "react";
import Chart from "react-apexcharts";

export default function Dasbord() {
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
      </div>
    </div>
  );
}
