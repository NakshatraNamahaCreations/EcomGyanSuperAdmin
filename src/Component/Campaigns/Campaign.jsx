import React from "react";
import "./style/campaign.css";
import DataTable from "react-data-table-component";
import { campaignsData } from "../../Global-data/JsonData";

function Campaign() {
  const styles = {
    inputStyle: {
      width: "20em",
      border: "1px solid rgb(216, 224, 240)",
      borderRadius: "16px",
      fontSize: "16px",
      backgroundColor: "white",
      outline: "none",
      backgroundPosition: "10px 10px",
      backgroundRepeat: "no-repeat",
      padding: "12px 18px 11px 44px",
      lineHeight: "24px",
      // boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    },
    createCourseBtn: {
      padding: "12px 20px",
      borderRadius: "16px",
      fontWeight: "600",
      fontSize: "18px",
      lineHeight: "24px",
      cursor: "pointer",
      border: "none",
      // width: "135px",
      color: "00007c",
      backgroundColor: "#9797ff61",
    },
  };

  const columns = [
    {
      name: "Campaign Name",
      selector: (row) => row.campaignName,
      sortable: true,
    },
    {
      name: "Campaign Type",
      selector: (row) => row.campaignType,
      sortable: true,
    },
    {
      name: "Channel Used",
      selector: (row) => row.channelUsed,
      sortable: true,
    },
    {
      name: "Start Time",
      selector: (row) => row.startTime,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: " Action",
      // selector: (row) => row.year,
      // sortable: true,
    },
  ];

  return (
    <div className="mt-3">
      <div className="d-flex justify-content-between mt-3">
        <div>
          <i
            className="fa-solid fa-magnifying-glass"
            style={{
              position: "absolute",
              margin: "16px",
              color: "#7d8592",
            }}
          ></i>
          <input
            type="text"
            name="search"
            placeholder="Search.."
            style={styles.inputStyle}
          />
        </div>
        <div className="">
          <button
            style={styles.createCourseBtn}
            onClick={() => window.location.assign("/campaigns/create")}
          >
            Create New Campaign
          </button>
        </div>
      </div>
      {/* Table */}
      <div className="TableHeaderContainer-0-1-672">
        <DataTable
          columns={columns}
          data={campaignsData}
          defaultSortFieldId={1}
        />
      </div>
    </div>
  );
}

export default Campaign;
