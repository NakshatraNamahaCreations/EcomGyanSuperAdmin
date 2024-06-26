import React from "react";

function Dashboard() {
  return (
    <div className="mt-3">
      <div class="row">
        <div class="col-lg-4">
          <div class="card card-border-1 border-left-3 border-left-accent text-center mb-lg-0">
            <div class="card-body">
              <h4 class="h2 mb-0">$1,569.00</h4>
              <div>Earnings this month</div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card card-border-1 text-center mb-lg-0">
            <div class="card-body">
              <h4 class="h2 mb-0">$3,917.80</h4>
              <div>Account Balance</div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card card-border-1 text-center mb-lg-0">
            <div class="card-body">
              <h4 class="h2 mb-0">$10,211.50</h4>
              <div>Total Sales</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
