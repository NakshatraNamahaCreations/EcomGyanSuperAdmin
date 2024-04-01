import React, { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { Button } from "react-bootstrap";
import "./style/addcourse.css";

function AddCourse() {
  const [thumbnailImage, setThumbnailImage] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [error, setError] = useState(null);
  const [videoError, setVideoError] = useState(null);
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const styles = {
    courseInput: {
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
      // width: "200px",
      // height: "150px",
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
  };
  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file type
      const fileType = file.type;
      if (!fileType.startsWith("image/")) {
        // Display an error message on the screen
        setError("Please upload a valid image file (PNG or JPEG).");
        return;
      }
      // Check file size
      const maxSize = 800 * 600; // 800px x 600px
      if (file.size > maxSize) {
        // Display an error message on the screen
        setError("Image size should be 800px x 600px or smaller.");
        return;
      }
      // Clear any previous errors
      setError(null);
      // Set thumbnail image
      setThumbnailImage(file);
    }
  };

  // const handleVideoUpload = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     // Check file type
  //     const fileType = file.type;
  //     if (!fileType.startsWith("video/")) {
  //       // Display an error message on the screen
  //       setVideoError(
  //         "Please upload a valid video file (mp4 or mkv or x-m4v)."
  //       );
  //       return;
  //     }
  //     // Check file size
  //     const maxSize = 5242880; //  KB (5GB)
  //     if (file.size > maxSize) {
  //       // Display an error message on the screen
  //       setError("Max. upto 5Gb per video");
  //       return;
  //     }
  //     // Clear any previous errors
  //     setVideoError(null);
  //     // Set thumbnail image
  //     setVideoFile(file);
  //   }
  // };

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file type
      const fileType = file.type;
      if (!fileType.startsWith("video/")) {
        setVideoError(
          "Please upload a valid video file (mp4 or mkv or x-m4v)."
        );
        return;
      }
      // Clear any previous errors
      setVideoError(null);
      // Set video file
      setVideoFile(file);
    }
  };

  //   console.log("thumbnailImage", thumbnailImage, error);
  //dropdown with search in react js?
  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
  ];

  const calculateEffectiveAmount = (price, discount) => {
    const discountedAmount = Number(price) * (1 - Number(discount) / 100);
    return discountedAmount.toFixed(2);
  };

  return (
    <div className="addCourseMain-0-1-55 mt-3">
      <div className="p-4">
        <div className="row">
          <div className="col-md-6">
            <label className="mb-1 course-lable-title">
              <i class="fa-solid fa-greater-than"></i> Title
            </label>
            <div className="">
              <label>
                <b>Name</b>
              </label>
              <br />
              <input
                className="mt-2"
                type="text"
                name="search"
                placeholder="Enter course name"
                style={styles.courseInput}
              />
            </div>

            <div>
              <label>
                <b>Description</b>
              </label>
              <br />
              <textarea
                className="mt-2 h-32"
                type="text"
                name="search"
                placeholder="Enter course description here..."
                style={styles.courseInput}
              />
            </div>
            <div
              className="mt-2 mb-2"
              style={{ border: "1px dashed #e4e6e8" }}
            ></div>

            <div className="mb-3">
              <div className="row">
                <label className="mb-1 course-lable-title">
                  <i class="fa-solid fa-greater-than"></i> Free Materials
                </label>
                <div className="col-6">
                  <label>
                    <b>Documents</b>
                  </label>

                  <Autocomplete
                    className="mt-2"
                    disablePortal
                    id="combo-box-demo"
                    // style={styles.courseInput}
                    options={top100Films}
                    // sx={{ width: 300 }}
                    renderInput={(params) => (
                      <TextField {...params} label="Select documents" />
                    )}
                  />
                </div>
                <div className="col-6">
                  <label>
                    <b>Video</b>
                  </label>

                  <Autocomplete
                    className="mt-2"
                    disablePortal
                    id="combo-box-demo"
                    // style={styles.courseInput}
                    options={top100Films}
                    // sx={{ width: 300 }}
                    renderInput={(params) => (
                      <TextField {...params} label="Select video" />
                    )}
                  />
                </div>
              </div>
            </div>

            <div
              className="mb-3"
              style={{ border: "1px dashed #e4e6e8" }}
            ></div>

            <div className="row mb-5">
              <label className="mb-1 course-lable-title">
                <i class="fa-solid fa-greater-than"></i> Upload Image/Video
              </label>

              <div className="col-md-6">
                <div>
                  <label>
                    <b>Add Thumbnail Image</b>
                  </label>
                </div>
                <input
                  accept="image/gif,image/jpeg,image/jpeg,image/png,image/webp,image/vnd.wap.wbmp,image/svg+xml,image/tiff"
                  style={{ display: "none" }}
                  id="icon-button-file"
                  type="file"
                  onChange={(e) => handleThumbnailChange(e)}
                />
                <label
                  className="btn btn-outline-primary mt-2"
                  style={{ padding: "14px 18px", fontSize: "12px" }}
                  htmlFor="icon-button-file"
                >
                  <i class="fa-solid fa-upload"></i> Upload thumbnail Image
                </label>
                <br />
                {thumbnailImage && (
                  <div style={styles.thumbnailImgCont}>
                    <img
                      src={URL.createObjectURL(thumbnailImage)}
                      // alt={thumbnailImage.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        marginTop: "20px",
                      }}
                    />
                  </div>
                )}
                <span style={styles.imgStateText}>
                  {error && <div style={{ color: "red" }}>{error}</div>}
                </span>
              </div>
              {/* <div className="col-md-6 mb-4">
                <label>
                  <b>Add Video</b>
                </label>
                <br />

                <input
                  // accept="video/mp4,video/mkv,video/x-m4v,video/*"
                  accept="video/mp4,video/mkv,video/x-m4v"
                  style={{ display: "none" }}
                  id="video-file-input"
                  type="file"
                  onChange={(e) => handleVideoUpload(e)}
                />
                <label
                  className="btn btn-outline-primary mt-2"
                  style={{ padding: "14px 18px", fontSize: "12px" }}
                  htmlFor="video-file-input"
                >
                  <i class="fa-solid fa-upload"></i> Upload from your pc
                </label>
                <br />
                <br />
                {videoFile && (
                  <div style={styles.thumbnailImgCont}>
                    <video controls style={{ maxWidth: "100%" }}>
                      <source
                        src={URL.createObjectURL(videoFile)}
                        type={videoFile.type}
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
                <br />
                <span style={styles.imgStateText}>
                  {videoError && (
                    <div style={{ color: "red" }}>{videoError}</div>
                  )}
                </span>
              </div> */}
            </div>
            {/* <div className="mb-4">
              <label>
                <b>Add Thumbnail</b>
              </label>
              <br />
              <input
                accept="video/mp4,video/mkv,video/x-m4v"
                style={{ display: "none" }}
                id="video-file-input"
                type="file"
                onChange={(e) => handleVideoUpload(e)}
              />
              <label
                className="btn btn-outline-primary mt-2"
                style={{ padding: "14px 18px", fontSize: "12px" }}
                htmlFor="video-file-input"
              >
                Upload Video
              </label>
              {videoFile && (
                <div>
                  <p>Selected Video: {videoFile.name}</p>
                  <video controls style={{ maxWidth: "100%" }}>
                    <source
                      src={URL.createObjectURL(videoFile)}
                      type={videoFile.type}
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
              {videoError && <div style={{ color: "red" }}>{videoError}</div>}
            </div> */}
          </div>
          <div className="col-md-6">
            <label className="mb-1 course-lable-title">
              <i class="fa-solid fa-greater-than"></i> Course Validity
            </label>
            <div className="mb-2">
              <label>
                <b>Course Duration Type</b>
              </label>
              <br />
              <select className="mt-2" style={styles.selectField}>
                <option value="">Select Course Duration</option>
                <option value="Single Validity">Single Validity</option>
                <option value="Multiple Validity">Multiple Validity</option>
                <option value="Lifetime Validity">Lifetime Validity</option>
                <option value="Course Expiry Date">Course Expiry Date</option>
              </select>
              <br />
              <span
                class="help-block"
                style={{ fontSize: "12px", marginLeft: "13px" }}
              >
                Course will expire after a fixed period of time for all students
                based on their purchase date.
              </span>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="mb-4">
                  <input
                    className="mt-2"
                    type="text"
                    name="search"
                    placeholder="Enter validity"
                    style={styles.courseInput}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-4">
                  <select className="mt-2" style={styles.selectField}>
                    <option value="Days">Days</option>
                    <option value="Month">Month</option>
                    <option value="Year">Year</option>
                  </select>
                </div>
              </div>
            </div>
            <div
              className="mb-3"
              style={{ border: "1px dashed #e4e6e8" }}
            ></div>
            <div className="row">
              <label className="mb-1 course-lable-title">
                <i class="fa-solid fa-greater-than"></i> Pricing & Discount
              </label>
              <div className="col-md-4">
                <label>
                  <b>Price</b>
                </label>
                <br />
                <input
                  className="mt-2"
                  type="number"
                  min={1}
                  placeholder="Enter price"
                  style={styles.courseInput}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="col-md-4">
                <label>
                  <b>Discount</b>
                </label>
                <br />
                <input
                  className="mt-2"
                  type="number"
                  min={0}
                  placeholder="Enter discount"
                  style={styles.courseInput}
                  onChange={(e) => setDiscount(e.target.value)}
                />
              </div>
              <div className="col-md-4">
                <label>
                  <b>Effective price</b>
                </label>
                <br />
                <div className="mt-2" style={styles.courseInput}>
                  {calculateEffectiveAmount(price, discount)}
                </div>
              </div>
            </div>
            <div className="row mt-3">
              {/* <div className="mb-4">
                <label>
                  <b>Add Video</b>
                </label>
                <br />

                <input
                  // accept="video/mp4,video/mkv,video/x-m4v,video/*"
                  accept="video/mp4,video/mkv,video/x-m4v"
                  style={{ display: "none" }}
                  id="video-file-input"
                  type="file"
                  onChange={(e) => handleVideoUpload(e)}
                />
                <label
                  className="btn btn-outline-primary mt-2"
                  style={{ padding: "14px 18px", fontSize: "12px" }}
                  htmlFor="video-file-input"
                >
                  <i class="fa-solid fa-upload"></i> Upload from your pc
                </label>
                <br />
                <br />
                {videoFile && (
                  <div style={styles.thumbnailImgCont}>
                    <video controls style={{ maxWidth: "150%" }}>
                      <source
                        src={URL.createObjectURL(videoFile)}
                        type={videoFile.type}
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
                <br />
                <span style={styles.imgStateText}>
                  {videoError && (
                    <div style={{ color: "red" }}>{videoError}</div>
                  )}
                </span>
              </div> */}
            </div>
          </div>
        </div>
        <div className="footerNavContainer-0-1-444 footerNavContainer-d0-0-1-457">
          <Button
            className="px-5 py-2"
            variant="outline-info"
            onClick={() => window.location.assign("/courses/course-list")}
          >
            <i class="fa-solid fa-arrow-left-long"></i> &nbsp; Back
          </Button>
          <Button
            className="ms-2 px-5"
            variant="info"
            onClick={() => window.location.assign("/courses/add-modules")}
          >
            Add Modules &nbsp; <i class="fa-solid fa-arrow-right-long"></i>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AddCourse;
