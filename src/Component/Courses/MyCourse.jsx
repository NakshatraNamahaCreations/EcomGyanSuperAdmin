import React from "react";
import "./style/mycourses.css";

function MyCourse() {
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
    courseCardTag: {
      color: "rgb(255, 255, 255)",
      background: "rgb(253, 179, 6)",
      display: "flex",
      alignItems: "center",
      gap: "4px",
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
            onClick={() => window.location.assign("/courses/add")}
          >
            Create Course
          </button>
        </div>
      </div>
      <div className="mt-3">
        <div className="row">
          {Array.from({ length: 5 }).map((_, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="courseCard-0-1-330">
                <div
                  className="courseCardTag-0-1-331"
                  style={styles.courseCardTag}
                >
                  <i className="fa-solid fa-star"></i> Featured Course
                </div>
                <div className="courseCardImage-0-1-334">
                  <img
                    className="courseCardImage-0-1-334"
                    src="https://ali-cdn-wl-assets.classplus.co/production/single/glknlf/20ca6a66-7599-4661-b64b-a73715a2893b.png"
                    alt=""
                  />
                </div>
                <div className="courseCardContent-0-1-335">
                  <div className="courseCardTitle-0-1-336">
                    Ecom Gyan Amazon FBA Mastery Course(HINDI) | Lifetime Access
                    + UNLIMITED 1 on 1 Mentorship
                  </div>
                  <div className="courseCreatedBy-0-1-338">
                    Created by: You(Owner)
                  </div>
                  <div className="courseCardTags-0-1-333">
                    Lifetime Validity
                  </div>
                  <br />
                  <div className="courseCardPriceSection-0-1-337">
                    <div
                      style={{ color: "rgb(10, 22, 41)", fontWeight: "700" }}
                    >
                      ₹16997
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyCourse;
