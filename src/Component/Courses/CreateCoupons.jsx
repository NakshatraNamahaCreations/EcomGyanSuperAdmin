import React, { useState } from "react";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import "./style/createcoupons.css";

function CreateCoupons({ handleClose }) {
  const [eligibleCourses, setEligibleCourses] = useState(false);
  const [eligibleStudents, setEligibleStudents] = useState(false);
  //   console.log("showCreateCoupon", showCreateCoupon);
  const styles = {
    courseInput: {
      width: "100%",
      border: "1px solid rgb(216, 224, 240)",
      borderRadius: "5px",
      fontSize: "16px",
      backgroundColor: "white",
      outline: "none",
      backgroundPosition: "10px 10px",
      backgroundRepeat: "no-repeat",
      padding: "10px 12px",
      lineHeight: "24px",
      // boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    },
    inputStyle: {
      width: "50%",
      border: "1px solid rgb(216, 224, 240)",
      borderRadius: "5px",
      fontSize: "16px",
      backgroundColor: "white",
      outline: "none",
      backgroundPosition: "10px 10px",
      backgroundRepeat: "no-repeat",
      padding: "11px 43px",
      lineHeight: "24px",
      // boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    },
    imgStateText: {
      fontSize: "14px",
      fontStyle: "normal",
      fontFamily: "inherit",
      fontWeight: "600",
      lineHeight: "16px",
      paddingLeft: "11px",
      color: "rgb(239, 105, 30)",
    },
    thumbnailImgCont: {
      width: "200px",
      height: "150px",
    },
    selectField: {
      width: "100%",
      border: "1px solid rgb(216, 224, 240)",
      borderRadius: "16px",
      fontSize: "16px",
      backgroundColor: "white",
      outline: "none",
      backgroundPosition: "10px 10px",
      backgroundRepeat: "no-repeat",
      padding: "12px 18px 11px 13px",
      lineHeight: "24px",
      // boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    },
    CouponFormRequired: {
      color: "#ff4058",
    },
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Courses with selling price below this minimum order value will not be
      eligible for this coupon to be assigned.
    </Tooltip>
  );

  return (
    <div className="addCourseMain-0-1-55 mt-3">
      <div className="sc-chPdSV cSOvUT">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ cursor: "pointer", margin: "6px 10px 0px 0px" }}>
            <svg
              width="18"
              height="12"
              viewBox="0 0 18 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={handleClose}
            >
              <path
                d="M18 5H3.83L7.41 1.41L6 0L0 6L6 12L7.41 10.59L3.83 7H18V5Z"
                fill="black"
              ></path>
            </svg>
          </div>
          <div className="sc-kGXeez cQTWuf">Create Coupon Code</div>
        </div>
      </div>
      {!eligibleCourses && !eligibleStudents ? (
        <>
          <div className="p-4">
            <div className="row">
              <div className="col-md-6 mb-2">
                <label>
                  <b style={{ fontWeight: "500" }}>
                    Offer Name <span style={styles.CouponFormRequired}>*</span>
                  </b>
                </label>
                <br />
                <input
                  className="mt-2"
                  type="text"
                  placeholder="Enter offer name"
                  style={styles.courseInput}
                />
              </div>
              <div className="col-md-6 mb-2">
                <label>
                  <b style={{ fontWeight: "500" }}>
                    Coupon Code <span style={styles.CouponFormRequired}>*</span>
                  </b>
                </label>
                <br />
                <input
                  className="mt-2"
                  placeholder="Enter coupon code"
                  type="text"
                  style={styles.courseInput}
                />
              </div>

              <div className="col-md-6 mb-2">
                <label>
                  <b style={{ fontWeight: "500" }}>
                    Discount Amount
                    <span style={styles.CouponFormRequired}>*</span>
                  </b>
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
                  <b style={{ fontWeight: "500" }}>
                    Minimum Order
                    <OverlayTrigger
                      placement="right"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <i
                        class="fa-solid fa-circle-exclamation"
                        style={{ color: "#0D9FE2", fontSize: "13px" }}
                      ></i>
                    </OverlayTrigger>
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
                  <b style={{ fontWeight: "500" }}>
                    Start Date <span style={styles.CouponFormRequired}>*</span>
                  </b>
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
                  <b style={{ fontWeight: "500" }}>
                    Start Time <span style={styles.CouponFormRequired}>*</span>
                  </b>
                </label>

                <input
                  className="mt-2"
                  type="time"
                  style={styles.courseInput}
                />
              </div>
              <div className="col-md-6 mb-2">
                <label>
                  <b style={{ fontWeight: "500" }}>
                    End Date <span style={styles.CouponFormRequired}>*</span>
                  </b>
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
                  <b style={{ fontWeight: "500" }}>
                    End Time <span style={styles.CouponFormRequired}>*</span>
                  </b>
                </label>

                <input
                  className="mt-2"
                  type="time"
                  style={styles.courseInput}
                />
              </div>
              <div className="col-md-6 mb-2">
                <label>
                  <b style={{ fontWeight: "500" }}>
                    Coupon Type <span style={styles.CouponFormRequired}>*</span>
                  </b>
                </label>
                <div className="mt-2">
                  <span>
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                    />
                    &nbsp;&nbsp;
                    <label for="html">Public Coupon</label>
                    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                  </span>
                  <span>
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                    />
                    &nbsp;&nbsp;
                    <label for="html">Private Coupon</label>
                  </span>
                </div>
              </div>
              <div className="col-md-6 mb-2">
                <label>
                  <b style={{ fontWeight: "500" }}>
                    Course Selection Type
                    <span style={styles.CouponFormRequired}>*</span>
                  </b>
                </label>
                <div className="mt-2">
                  <span>
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                    />
                    &nbsp;&nbsp;
                    <label for="html">Assign to all courses</label>
                    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                  </span>
                  <span>
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                    />
                    &nbsp;&nbsp;
                    <label for="html">Assign to Specific courses</label>
                  </span>
                </div>
              </div>
              <div className="col-md-6 mb-5 mt-2">
                <label>
                  <b style={{ fontWeight: "500" }}>
                    Number of times code can be used
                    <span style={styles.CouponFormRequired}>*</span>
                  </b>
                </label>
                <br />
                <input
                  className="mt-2"
                  type="number"
                  placeholder="Enter the limit here"
                  style={styles.courseInput}
                />
              </div>
              <div className="col-md-6 mb-5 mt-2">
                <label>
                  <b style={{ fontWeight: "500" }}>
                    Usage per student
                    <span style={styles.CouponFormRequired}>*</span>
                  </b>
                </label>
                <br />
                <input
                  className="mt-2"
                  type="number"
                  placeholder="Enter the limit here"
                  style={styles.courseInput}
                />
              </div>
              {/* <div className="text-center mt-2">
            <Button
              variant="info"
              //   onClick={handleSubmitChanges}
            >
              Save Changes
            </Button>
          </div> */}
            </div>
          </div>
          <div className="footerNavContainer-0-1-444 footerNavContainer-d0-0-1-457">
            <Button
              className="px-5 py-2"
              variant="outline-info"
              onClick={handleClose}
            >
              <i class="fa-solid fa-arrow-left-long"></i> &nbsp; Back
            </Button>
            <Button
              className="ms-2 px-5"
              variant="info"
              onClick={() => setEligibleCourses(true)}
            >
              Next &nbsp; <i class="fa-solid fa-arrow-right-long"></i>
            </Button>
          </div>
        </>
      ) : (
        ""
      )}
      {eligibleCourses && !eligibleStudents ? (
        <>
          <div className="p-4">
            <div className="mb-3">
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
                placeholder="Search for a course..."
                style={styles.inputStyle}
              />
            </div>
            <div className="d-flex justify-between">
              <label>
                <b style={{ fontWeight: "500" }}>Eligible Courses</b>
              </label>
              <label>
                <b
                  style={{
                    fontWeight: "500",
                    color: "#009ae0",
                    cursor: "pointer",
                  }}
                >
                  Select All
                </b>
              </label>
            </div>
            <div className="mt-3 mb-5">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  className="couponCourseCard_courseItemContainer__2-TnK false"
                  key={index}
                >
                  <div>
                    <img
                      src="https://ali-cdn-wl-assets.classplus.co/production/single/glknlf/30413e9a-0af1-41ec-9e77-35379ef4daa7.png"
                      class="couponCourseCard_courseImage__2ntZ_"
                      alt=""
                    />
                  </div>
                  <div class="couponCourseCard_couponCourse__3fJhE">
                    <div class="couponCourseCard_courseContent__1P3CJ">
                      <div class="couponCourseCard_courseName__2-xWb">
                        Ecom Gyan Amazon FBA Mastery Course(HINDI) | Lifetime
                        Access + UNLIMITED 1 on 1 Mentorship
                      </div>
                      <div class="couponCourseCard_createdByName__2O01k">
                        Ronald C Matt
                      </div>
                      <div class="couponCourseCard_priceDetails__34_y_">
                        <div class="couponCourseCard_finalPrice__FGjk2">
                          ₹ 8,997
                        </div>
                        <div class="couponCourseCard_price__3cQVD ms-3">
                          ₹ 8,997
                        </div>
                        <div class="couponCourseCard_prompt__1yTks">0% OFF</div>
                      </div>
                    </div>
                    <div>
                      <div class="ui fitted checkbox">
                        <input
                          type="checkbox"
                          id="vehicle1"
                          name="vehicle1"
                          value="Bike"
                        />
                        <label></label>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="footerNavContainer-0-1-444 footerNavContainer-d0-0-1-457">
            <Button
              className="px-5 py-2"
              variant="outline-info"
              onClick={() => setEligibleCourses(false)}
            >
              <i class="fa-solid fa-arrow-left-long"></i> &nbsp; Back
            </Button>
            <Button className="ms-2 px-5" variant="info" onClick={handleClose}>
              {/* Finish &nbsp; <i class="fa-solid fa-arrow-right-long"></i> */}
            </Button>
          </div>
        </>
      ) : (
        ""
      )}
      {/* <>
      {!eligibleCourses && eligibleStudents ? (
        <>
          <div className="p-4">
            <div className="mb-3">
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
                placeholder="Search for a course..."
                style={styles.inputStyle}
              />
            </div>
            <div className="d-flex justify-between">
              <label>
                <b style={{ fontWeight: "500" }}>Eligible Courses</b>
              </label>
              <label>
                <b
                  style={{
                    fontWeight: "500",
                    color: "#009ae0",
                    cursor: "pointer",
                  }}
                >
                  Select All
                </b>
              </label>
            </div>
            <div className="mt-3 mb-5">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  className="couponCourseCard_courseItemContainer__2-TnK false"
                  key={index}
                >
                  <div>
                    <img
                      src="https://ali-cdn-wl-assets.classplus.co/production/single/glknlf/30413e9a-0af1-41ec-9e77-35379ef4daa7.png"
                      class="couponCourseCard_courseImage__2ntZ_"
                      alt=""
                    />
                  </div>
                  <div class="couponCourseCard_couponCourse__3fJhE">
                    <div class="couponCourseCard_courseContent__1P3CJ">
                      <div class="couponCourseCard_courseName__2-xWb">
                        Ecom Gyan Amazon FBA Mastery Course(HINDI) | Lifetime
                        Access + UNLIMITED 1 on 1 Mentorship
                      </div>
                      <div class="couponCourseCard_createdByName__2O01k">
                        Ronald C Matt
                      </div>
                      <div class="couponCourseCard_priceDetails__34_y_">
                        <div class="couponCourseCard_finalPrice__FGjk2">
                          
                          ₹ 8,997
                        </div>
                        <div class="couponCourseCard_price__3cQVD ms-3">
                          ₹ 8,997
                        </div>
                        <div class="couponCourseCard_prompt__1yTks">0% OFF</div>
                      </div>
                    </div>
                    <div>
                      <div class="ui fitted checkbox">
                        <input
                          type="checkbox"
                          id="vehicle1"
                          name="vehicle1"
                          value="Bike"
                        />
                        <label></label>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="footerNavContainer-0-1-444 footerNavContainer-d0-0-1-457">
            <Button
              className="px-5 py-2"
              variant="outline-info"
              onClick={() => setEligibleStudents(false)}
            >
              <i class="fa-solid fa-arrow-left-long"></i> &nbsp; Back
            </Button>
            <Button
              className="ms-2 px-5"
              variant="info"
              onClick={() => setEligibleStudents(true)}
            >
              Next &nbsp; <i class="fa-solid fa-arrow-right-long"></i>
            </Button>
          </div>
        </>
      ) : (
        ""
      )}
      </> */}
    </div>
  );
}

export default CreateCoupons;
// -> what is the html for this symbol?
