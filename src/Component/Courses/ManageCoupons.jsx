import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import CreateCoupons from "./CreateCoupons";
import "./style/managecoupons.css";
import { getData } from "../../Api-Service/apiHelper";
import { apiUrl } from "../../Api-Service/apiConstants";
import moment from "moment";

function ManageCoupons() {
  const [show, setShow] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const [couponList, setCouponList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const couponRes = await getData(apiUrl.GET_ALL_COUPON);
      setCouponList(couponRes.data);
      // const webResponse = await getData(apiUrl.GET_WEB_BANNER);
      // setBannerData1(webResponse.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  console.log("couponList", couponList);
  return (
    <div className=" mt-4">
      {!show && (
        <>
          <Button
            className="px-5 py-2"
            variant="info"
            onClick={() => setShow(true)}
            style={{ fontWeight: "600", color: "white" }}
          >
            Create Coupon
          </Button>
          <div className="row">
            {couponList.map((coupon, index) => (
              <div className="col-md-12" key={index}>
                <div
                  class="infinite-scroll-component"
                  style={{ height: "auto", overflow: "unset" }}
                >
                  <div class="CouponListCard_couponListCard__SX0FT">
                    <div class="CouponListCard_couponInfo__10kC8">
                      <div>
                        <h2>₹ {coupon.discountAmount} OFF</h2>
                        <span class="sc-jzJRlG jgIAfD">
                          {coupon.couponCode}
                        </span>
                      </div>
                    </div>
                    <div>
                      <div class="cp-flex j-between">
                        <div>
                          <div class="CouponListCard_couponName__3d9xG">
                            {coupon.offerName}
                          </div>
                          <div class="fontSmall ">
                            {/* Created by Ronald C Matt */}
                            <span class="circle mx1o6 fontGray"></span>
                            <span class="CouponListCard_capitalizeText___Tgcj textPrimary">
                              {coupon.couponType}
                            </span>
                          </div>
                        </div>
                        <div class="f-center-xy">
                          <span class="sc-VigVT dbJHrw" color="#52B062">
                            Active
                          </span>
                          <div
                            role="listbox"
                            aria-expanded="false"
                            class="ui dropdown "
                            tabindex="0"
                            style={{
                              float: "right",
                              cursor: "pointer",
                              marginLeft: "8px",
                            }}
                          >
                            <div
                              class="text"
                              role="alert"
                              aria-live="polite"
                            ></div>
                            <i
                              class="fa-solid fa-ellipsis-vertical CouponListCard_threeDots__1ExY8"
                              onClick={() => setShowDropDown(!showDropDown)}
                            ></i>
                            {showDropDown && (
                              <div class="menu transition CouponListCard_threeDotsMenu__18VGG">
                                <div class="item an-dr-menu">
                                  <a href="/coupons/65f44901a192c01c125619d8/edit">
                                    <div class="flexrow alignCenter CouponListCard_couponMenuListItem__2N4JD">
                                      <i class="fa-regular fa-pen-to-square"></i>
                                      <span
                                        class="fontMedium ms-2"
                                        style={{ color: "rgba(0, 0, 0, 0.87)" }}
                                      >
                                        Details
                                      </span>
                                    </div>
                                  </a>
                                </div>
                                <div class="item an-dr-menu">
                                  <a href="/coupons/65f44901a192c01c125619d8/edit">
                                    <div class="flexrow alignCenter CouponListCard_couponMenuListItem__2N4JD">
                                      <i class="fa-regular fa-circle-check"></i>
                                      <span class="fontMedium ms-2">
                                        Make Inactive
                                      </span>
                                    </div>
                                  </a>
                                </div>
                                <div class="item an-dr-menu">
                                  <a href="/coupons/65f44901a192c01c125619d8/edit">
                                    <div class="flexrow alignCenter CouponListCard_couponMenuListItem__2N4JD">
                                      <i class="fa-solid fa-clock-rotate-left"></i>
                                      <span class="fontMedium ms-2">
                                        View Edit History
                                      </span>
                                    </div>
                                  </a>
                                </div>
                                <div class="item an-dr-menu">
                                  <a href="/coupons/65f44901a192c01c125619d8/edit">
                                    <div class="flexrow alignCenter CouponListCard_couponMenuListItem__2N4JD">
                                      <i class="fa-regular fa-trash-can"></i>
                                      <span class="fontMedium ms-2">
                                        Delete
                                      </span>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div
                        class="cp-flex j-between fontSmall"
                        // style={{ marginTop: "3rem" }}
                      >
                        <div>
                          <div
                            class="sc-bxivhb delGVt"
                            format="YYYY/MM/DD, hh:mm a"
                          >
                            {/* <img
                              class="sc-ifAKCX gJUBjn"
                              src="/static/media/clock-circle-o.a29510d2.svg"
                              alt="dropdown icon"
                              
                            /> */}
                            {/* <i class="fa-solid fa-ellipsis-vertical sc-ifAKCX gJUBjn"></i> */}

                            <span>
                              {" "}
                              {moment(coupon.startDate).format("ll")},{" "}
                              {coupon.startTime}{" "}
                            </span>
                            <span>
                              {" "}
                              - {moment(coupon.endDate).format("ll")}{" "}
                              {coupon.endTime}
                            </span>
                          </div>
                          <span class="CouponListCard_divider__2I5BA">|</span>
                          <button class="sc-jTzLTM dQcZQY" color="primary">
                            Used 0 times
                          </button>
                        </div>
                        <button class="sc-jTzLTM dQcZQY" color="primary">
                          Show Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      {show && (
        <CreateCoupons showCreateCoupon={show} handleClose={handleClose} />
      )}
      {/* <Offcanvas show={show} onHide={() => setShow(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Create Coupon Code</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="row">
            <div className="col-md-6 mb-2">
              <label>
                <b>Discount Amount*</b>
              </label>
              <br />
              <input
                className="mt-2"
                type="number"
                placeholder="Enter discount amount"
                style={styles.courseInput}
              />
            </div>
            <div className="col-md-6 mb-2">
              <label>
                <b>
                  Minimum Order <span style={{ fontSize: "11px" }}></span>
                </b>
              </label>
              <br />
              <input
                className="mt-2"
                min={1}
                type="number"
                style={styles.courseInput}
              />
            </div>
            <div className="col-md-6 mb-2">
              <label>
                <b>Start Date*</b>
              </label>

              <input
                className="mt-2"
                type="date"
                min={new Date().toISOString().split("T")[0]}
                style={styles.courseInput}
              />
            </div>
            <div className="col-md-6 mb-2">
              <label>
                <b>Start Time*</b>
              </label>

              <input className="mt-2" type="time" style={styles.courseInput} />
            </div>
            <div className="col-md-6 mb-2">
              <label>
                <b>End Date*</b>
              </label>

              <input
                className="mt-2"
                type="date"
                min={new Date().toISOString().split("T")[0]}
                style={styles.courseInput}
              />
            </div>
            <div className="col-md-6 mb-2">
              <label>
                <b>End Time*</b>
              </label>

              <input className="mt-2" type="time" style={styles.courseInput} />
            </div>
            <div className="text-center mt-2">
              <Button variant="info" onClick={handleSubmitChanges}>
                Save Changes
              </Button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <Offcanvas
        show={seteditView}
        onHide={() => setEditView(false)}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Edit Banner</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="">
            <label>
              <b>Select Landing Screen</b>
            </label>
            <select className="mt-2 mb-4" style={styles.selectField}>
              <option value="Store Tab">Store Tab</option>
              <option value="Specific Course(s)">Specific Course(s)</option>
              <option value="Category of Courses">Category of Courses</option>
              <option value="External Link">External Link</option>
              <option value="Youtube Video">Youtube Video</option>
              <option value="Free Course material">Free Course material</option>
            </select>
            <div style={styles.uploadImage}>
              <div className="d-flex p-2" style={styles.insideBox}>
                <i class="fa-solid fa-circle-plus me-1"></i>{" "}
                <input
                  accept="image/gif,image/jpeg,image/jpeg,image/png,image/webp,image/vnd.wap.wbmp,image/svg+xml,image/tiff"
                  style={{ display: "none" }}
                  id="icon-button-file"
                  type="file"
                  onChange={(e) => handleBannerImageChange(e)}
                />
                <label htmlFor="icon-button-file">Upload Banner Image</label>
              </div>
            </div>
            {bannerImage ? (
              <div style={styles.bannerImageCont}>
                <img
                  src={URL.createObjectURL(bannerImage)}
                  alt={bannerImage}
                  style={{ width: "100%", height: "100%", marginTop: "20px" }}
                />
              </div>
            ) : (
              <div style={styles.bannerImageCont}>
                <img
                  src="/20ca6a66-7599-4661-b64b-a73715a2893b.png"
                  // src={URL.createObjectURL(bannerImage)}
                  // alt={thumbnailImage.name}
                  style={{ width: "100%", height: "100%", marginTop: "20px" }}
                />
              </div>
            )}
            <span style={styles.imgStateText}>
              {error && <div style={{ color: "red" }}>{error}</div>}
            </span>
            <div className="text-center mt-2">
              <Button variant="info" onClick={handleEditChanges}>
                Update
              </Button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas> */}
    </div>
  );
}

export default ManageCoupons;
