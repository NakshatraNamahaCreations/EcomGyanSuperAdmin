import React, { useState } from "react";
import "./style/users.css";
import DataTable from "react-data-table-component";
import { usersData } from "../../Global-data/JsonData";
import { Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

function Users() {
  const [openCanvas, setOpenCanvas] = useState({});
  const [showUsers, setShowUser] = useState(false);
  const handleOpeningCanvas = (row) => {
    setOpenCanvas(row);
    setShowUser(true);
  };
  const handleClosingCanvas = () => setShowUser(false);

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
      name: "User Info",
      selector: (row) => (
        <>
          <div
            style={{
              color: "#00ade7",
              fontWeight: "700",
              paddingBottom: "6px",
              cursor: "pointer",
            }}
            onClick={() => handleOpeningCanvas(row)}
          >
            {row.name}
          </div>
          <div>{row.mobileNumber}</div>
        </>
      ),
      sortable: true,
    },
    {
      name: "Date of Joining",
      selector: (row) => row.dateOfJoining,
      sortable: true,
    },
    {
      name: "App Downloads",
      selector: (row) => "",
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
        {/* <div className="">
          <button
            style={styles.createCourseBtn}
            onClick={() => window.location.assign("/campaigns/create")}
          >
            Create New Campaign
          </button>
        </div> */}
      </div>
      {/* Table */}
      <div className="TableHeaderContainer-0-1-672">
        <DataTable columns={columns} data={usersData} defaultSortFieldId={1} />
      </div>
      {/* open canvas */}
      <Offcanvas show={showUsers} onHide={handleClosingCanvas} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{openCanvas.name} </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div
            class="bodyContainer-0-1-581 undefined"
            id="bodyContainerSideDrawer"
          >
            <div class="container-0-1-1442">
              <div class="subHeader-0-1-1443">Basic Information</div>
              <div class="basicInfoContainer-0-1-1444">
                <div class="infoRow-0-1-1445">
                  <img
                    src="https://ali-cdn-cp-assets-public.classplus.co/CampaignManager/e9296b40d1307ae14b192d251cf4d635"
                    width="16px"
                    height="16px"
                    alt=""
                  />
                  <div class="label-0-1-1446">Name : </div>
                  <div class="info-0-1-1447">{openCanvas.name} </div>
                </div>
                <div class="infoRow-0-1-1445">
                  <img
                    src="https://ali-cdn-cp-assets-public.classplus.co/CampaignManager/0df743398951317bb08ae0dfb8b85c98"
                    width="16px"
                    height="16px"
                    alt=""
                  />
                  <div class="label-0-1-1446">Mobile Number : </div>
                  <div class="info-0-1-1447">{openCanvas.mobileNumber}</div>
                </div>
                <div class="infoRow-0-1-1445">
                  <img
                    src="https://ali-cdn-cp-assets-public.classplus.co/CampaignManager/f05a83406b93ac4f6a2e5e039d0b565f"
                    width="16px"
                    height="16px"
                    alt=""
                  />
                  <div class="label-0-1-1446">Email : </div>
                  <div class="info-0-1-1447">{openCanvas.email} </div>
                </div>
              </div>
              <div class="subHeader-0-1-1443">Courses</div>
              <div class="courseSnapshotContainer-0-1-1448">
                <div class="label-0-1-1446">No Courses Purchased Yet</div>
              </div>
              <div class="subHeader-0-1-1443">Login Devices</div>
              <div class="testsContainer-0-1-1457">
                <div class="container-0-1-1461">
                  <div class="left-0-1-1462">
                    <div class="deviceName-0-1-1465">
                      <img src="/diy/assets/mobile-d5f06a76..svg" alt="" />
                    </div>
                    <div class="middle-0-1-1467">
                      <div class="device-0-1-1466">Mobile-Android</div>
                      <div class="loginTime-0-1-1468">
                        Last Login : 3:15 pm, Mar 23
                      </div>
                    </div>
                  </div>
                  <div class="right-0-1-1463">
                    <button class="button-0-1-134 button-d195-0-1-1470 reportButton-0-1-1469 secondary-0-1-136 secondary-d197-0-1-1472  ">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footerContainer-0-1-639">
            <Link
              userid="118146927"
              class="button-0-1-146 button-d35-0-1-724  primary-0-1-147 primary-d36-0-1-725"
              style={{ textDecoration: "none", color: "white" }}
              to={`/people/users-profile?${openCanvas._id}`}
            >
              View Full Profile
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Users;
