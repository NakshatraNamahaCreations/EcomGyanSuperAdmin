import { Box, Step, StepLabel, Stepper, Typography } from "@mui/material";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const steps = ["Create Modules", "Add Content"];

function AddModules() {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [videoFile, setVideoFile] = useState(null);
  const [documentRead, setDocumentRead] = useState(null);
  const [thumbnailImage, setThumbnailImage] = useState(null);
  const [zipFileRead, setZipFileRead] = useState(null);

  // setting state
  // const [moduleName, setModuleName] = useState("");
  // const [moduleDesc, setModuleDesc] = useState("");
  const [moduleItems, setModuleItems] = useState([
    {
      moduleId: "",
      moduleTitle: "",
      description: "",
    },
  ]);
  const handleAddModule = () => {
    let newItemList = moduleItems;
    setModuleItems((prevModules) => [...prevModules, newItemList]);
  };

  //  error message
  const [error, setError] = useState(null);
  const [videoError, setVideoError] = useState(null);
  const [moduleErrMsg, setModuleErrMsg] = useState(null);

  // depends on state
  const [enableVideo, setEnableVideo] = useState(false);
  const [enableDocument, setEnableDocument] = useState(false);
  const [enableImage, setEnableImage] = useState(false);
  const [enableZip, setEnableZip] = useState(false);

  // opring  modal
  const [showAddContentModal, setShowAddContentModal] = useState(false);

  const handleOpenAddContentModal = () => setShowAddContentModal(true);
  const handleCloseAddContentModal = () => setShowAddContentModal(false);

  // const addModules =  (e) => {

  const handleImageUpload = (e) => {
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

  const handleDocumentUpload = (e) => {
    const file = e.target.files[0];

    setDocumentRead(file);
  };
  console.log("videoFile", videoFile, "thumbnailImage", thumbnailImage);

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

  const handleZipUpload = (e) => {
    const file = e.target.files[0];

    setZipFileRead(file);
  };
  console.log("videoFile", videoFile, "thumbnailImage", thumbnailImage);

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    // if (moduleName === "") {
    //   setModuleErrMsg("Module name cannot be empty.");
    // } else {

    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
    // }
  };

  const handleBack = () => {
    setModuleErrMsg(null);
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    // setActiveStep(0);
    window.location.assign("/courses/course-list");
  };
  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <Button className="ms-5 mt-2 mb-2" onClick={handleAddModule}>
              + Add Modules
            </Button>
            {moduleItems.map((ele, index) => (
              <div className="mt-2 px-5 row" key={index}>
                <h6 className="course-lable-title">
                  <i class="fa-brands fa-modx"></i> {`Module ${index + 1}`}
                </h6>
                <div className="col-md-6">
                  <label>
                    <b>Module Name</b>
                  </label>
                  <br />
                  <input
                    className="mt-2"
                    type="text"
                    name="search"
                    placeholder="Enter module name"
                    style={styles.courseInput}
                  />
                  {moduleErrMsg && (
                    <p style={styles.errorText}>{moduleErrMsg}</p>
                  )}
                </div>
                <div className="col-md-6">
                  <label>
                    <b>Module Description</b>
                  </label>
                  <br />
                  <textarea
                    className="mt-2 "
                    type="text"
                    name="search"
                    placeholder="Enter module description here..."
                    style={styles.courseInput}
                  />
                </div>
              </div>
            ))}
            <br />
            <br />
            <br />
          </>
        );
      case 1:
        return (
          <>
            <Typography>
              <div className="mt-2 row">
                <div className="col-md-3">
                  <div className="root-0-1-1416 flex0-0-1-1408 mt-3">
                    <p className="text1-0-1-1417 flex0-0-1-1408">Add content</p>
                    <div className="addContentList-0-1-1418">
                      <div className="tooltipWrapper-0-1-1200 undefined">
                        <button
                          type="button"
                          className="root-0-1-1471 addContentListItem-0-1-1419"
                          onClick={() => {
                            handleOpenAddContentModal();
                            setEnableVideo(true);
                            setEnableDocument(false);
                            setEnableImage(false);
                            setEnableZip(false);
                          }}
                        >
                          <div className="iconCont-0-1-1472 iconCont-d124-0-1-2580 flex0-0-1-1408 ">
                            <img
                              src="https://ali-cdn-cp-assets-public.classplus.co/cp-store-ui-revamp/Icons/video-circle_diy.svg"
                              alt=""
                            />
                          </div>
                          <span className="text-0-1-1473 text-d125-0-1-2581 flex1-0-1-1407 textTruncate-0-1-1406  ">
                            Video{" "}
                          </span>
                        </button>
                      </div>
                      <div class="tooltipWrapper-0-1-1200 undefined">
                        <button
                          type="button"
                          class="root-0-1-1471 addContentListItem-0-1-1419"
                          onClick={() => {
                            handleOpenAddContentModal();
                            setEnableDocument(true);
                            setEnableVideo(false);
                            setEnableImage(false);
                            setEnableZip(false);
                          }}
                        >
                          <div class="iconCont-0-1-1472 iconCont-d128-0-1-2586 flex0-0-1-1408 ">
                            <img
                              src="https://ali-cdn-cp-assets-public.classplus.co/cp-store-ui-revamp/Icons/document_diy.svg"
                              alt=""
                            />
                          </div>
                          <span class="text-0-1-1473 text-d129-0-1-2587 flex1-0-1-1407 textTruncate-0-1-1406  ">
                            Document{" "}
                          </span>
                        </button>
                      </div>
                      <div class="tooltipWrapper-0-1-1200 undefined">
                        <button
                          type="button"
                          class="root-0-1-1471 addContentListItem-0-1-1419"
                          onClick={() => {
                            handleOpenAddContentModal();
                            setEnableVideo(false);
                            setEnableDocument(false);
                            setEnableImage(true);
                            setEnableZip(false);
                          }}
                        >
                          <div class="iconCont-0-1-1472 iconCont-d130-0-1-2589 flex0-0-1-1408 ">
                            <img
                              src="https://ali-cdn-cp-assets-public.classplus.co/cp-store-ui-revamp/Icons/image_diy.svg"
                              alt=""
                            />
                          </div>
                          <span class="text-0-1-1473 text-d131-0-1-2590 flex1-0-1-1407 textTruncate-0-1-1406  ">
                            Image{" "}
                          </span>
                        </button>
                      </div>
                      <div class="tooltipWrapper-0-1-1200 undefined">
                        <button
                          type="button"
                          class="root-0-1-1471 addContentListItem-0-1-1419"
                          onClick={() => {
                            handleOpenAddContentModal();
                            setEnableVideo(false);
                            setEnableDocument(false);
                            setEnableImage(false);
                            setEnableZip(true);
                          }}
                        >
                          <div class="iconCont-0-1-1472 iconCont-d132-0-1-2592 flex0-0-1-1408 ">
                            <img
                              src="https://ali-cdn-cp-assets-public.classplus.co/cp-store-ui-revamp/Icons/zip_diy.svg"
                              alt=""
                            />
                          </div>
                          <span class="text-0-1-1473 text-d133-0-1-2593 flex1-0-1-1407 textTruncate-0-1-1406  ">
                            Zip File{" "}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-9">
                  <table class="table mb-5">
                    <thead>
                      <tr>
                        <th className="text-center" scope="col">
                          #
                        </th>
                        <th className="text-center" scope="col">
                          Module Name
                        </th>
                        {/* <th className="text-center" scope="col">
                          Description
                        </th> */}
                        <th className="text-center" scope="col">
                          Video
                        </th>
                        <th className="text-center" scope="col">
                          Document
                        </th>
                        <th className="text-center" scope="col">
                          Image
                        </th>
                        <th className="text-center" scope="col">
                          Zip File
                        </th>
                        <th className="text-center" scope="col">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.from({ length: 3 }).map((_, i) => (
                        <tr>
                          <th
                            className="courseOverviewDesc-0-1-1131 text-center"
                            scope="row"
                          >
                            <div className="mt-4">Module {i + 1}</div>
                          </th>
                          <td className="courseOverviewDesc-0-1-1131 text-center moduleTable-Details">
                            <div className="mt-4">
                              {`Big Reason Behind Changing My Youtube Channel Name!!!`.substring(
                                0,
                                35
                              )}
                              ...
                            </div>
                          </td>
                          {/* <td className="courseOverviewDesc-0-1-1131 text-center moduleTable-Details">
                            <div className="mt-4">
                              {`Big Reason Behind Changing My Youtube Channel Name!!!`.substring(
                                0,
                                35
                              )}
                              ...
                            </div>
                          </td> */}
                          <td className="courseOverviewDesc-0-1-1131 text-center ">
                            <div className="mt-4">
                              {/* <video
                              controls
                              autoPlay
                              style={{ width: "150px", height: "115px" }}
                            >
                              <source
                                src="https://www.w3schools.com/tags/movie.mp4"
                                type="video/mp4"
                              />
                            </video> */}
                              2{" "}
                            </div>
                          </td>
                          <td className="courseOverviewDesc-0-1-1131 text-center">
                            <div className="mt-4">
                              {/* <i
                                class="fa-regular fa-file-lines"
                                style={{ color: "#146ebe", fontSize: "40px" }}
                              ></i> */}
                              5
                            </div>
                          </td>
                          <td className="courseOverviewDesc-0-1-1131 text-center">
                            <div className="mt-4">
                              {/* <img
                              src="https://images.pexels.com/photos/6758294/pexels-photo-6758294.jpeg"
                              alt=""
                              style={{ width: "150px", height: "115px" }}
                            /> */}
                              1
                            </div>
                          </td>
                          <td className="courseOverviewDesc-0-1-1131 text-center">
                            <div className="mt-4">
                              {/* <i
                                class="fa-regular fa-file-zipper"
                                style={{ color: "#146ebe", fontSize: "40px" }}
                              ></i> */}
                              1
                            </div>
                          </td>
                          <td className="courseOverviewDesc-0-1-1131 text-center">
                            <div className="mt-4">
                              <Link to="#">View Details</Link>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <br />
              <br />
              <br />
            </Typography>
          </>
        );
      default:
        return null;
    }
  };

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
    addModules: {
      width: "100%",
      border: "1px solid rgb(216, 224, 240)",
      borderRadius: "9px",
      fontSize: "16px",
      backgroundColor: "white",
      outline: "none",
      backgroundPosition: "10px 10px",
      backgroundRepeat: "no-repeat",
      padding: "10px",
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
    errorText: {
      fontSize: "13px",
      color: "red",
      fontWeight: "500",
    },
  };
  return (
    <div>
      <div className="headerTitle-0-1-70">
        {/* course title */}
        GYANADDA UGC NET Paper 2 (Geography) Mock Test 2024
      </div>
      <div className="headerDesc-0-1-71">
        <div>Add / view content of your course</div>
      </div>
      <div className="addCourseMain-0-1-55 mt-3">
        {/* <div className="p-4"> */}
        {/* <div className="row">
            <div className="col-md-8">
              <div className="mb-4">
                <label>
                  <b>Module Name</b>
                </label>
                <br />
                <input
                  className="mt-2"
                  type="text"
                  name="search"
                  placeholder="Enter module name"
                  style={styles.courseInput}
                />
              </div>
              <div className="mb-4">
                <label>
                  <b>Module Description</b>
                </label>
                <br />
                <textarea
                  className="mt-2 h-32"
                  type="text"
                  name="search"
                  placeholder="Enter module description here..."
                  style={styles.courseInput}
                />
              </div>
              <Button className="px-5 py-2" variant="outline-info">
                Add Module
              </Button>
            </div>
            <div className="col-md-4">
              <div class="root-0-1-1416 flex0-0-1-1408">
                <p class="text1-0-1-1417 flex0-0-1-1408">Add content</p>
                <div class="addContentList-0-1-1418">
                  <div class="tooltipWrapper-0-1-1200 undefined">
                    <button
                      type="button"
                      class="root-0-1-1471 addContentListItem-0-1-1419"
                      onClick={() => {
                        handleOpenAddContentModal();
                        setEnableVideo(true);
                        setEnableDocument(false);
                        setEnableImage(false);
                        setEnableZip(false);
                      }}
                    >
                      <div class="iconCont-0-1-1472 iconCont-d124-0-1-2580 flex0-0-1-1408 ">
                        <img
                          src="https://ali-cdn-cp-assets-public.classplus.co/cp-store-ui-revamp/Icons/video-circle_diy.svg"
                          alt=""
                        />
                      </div>
                      <span class="text-0-1-1473 text-d125-0-1-2581 flex1-0-1-1407 textTruncate-0-1-1406  ">
                        Video{" "}
                      </span>
                    </button>
                  </div>

                  <div class="tooltipWrapper-0-1-1200 undefined">
                    <button
                      type="button"
                      class="root-0-1-1471 addContentListItem-0-1-1419"
                      onClick={() => {
                        handleOpenAddContentModal();
                        setEnableDocument(true);
                        setEnableVideo(false);
                        setEnableImage(false);
                        setEnableZip(false);
                      }}
                    >
                      <div class="iconCont-0-1-1472 iconCont-d128-0-1-2586 flex0-0-1-1408 ">
                        <img
                          src="https://ali-cdn-cp-assets-public.classplus.co/cp-store-ui-revamp/Icons/document_diy.svg"
                          alt=""
                        />
                      </div>
                      <span class="text-0-1-1473 text-d129-0-1-2587 flex1-0-1-1407 textTruncate-0-1-1406  ">
                        Document{" "}
                      </span>
                    </button>
                  </div>
                  <div class="tooltipWrapper-0-1-1200 undefined">
                    <button
                      type="button"
                      class="root-0-1-1471 addContentListItem-0-1-1419"
                      onClick={() => {
                        handleOpenAddContentModal();
                        setEnableVideo(false);
                        setEnableDocument(false);
                        setEnableImage(true);
                        setEnableZip(false);
                      }}
                    >
                      <div class="iconCont-0-1-1472 iconCont-d130-0-1-2589 flex0-0-1-1408 ">
                        <img
                          src="https://ali-cdn-cp-assets-public.classplus.co/cp-store-ui-revamp/Icons/image_diy.svg"
                          alt=""
                        />
                      </div>
                      <span class="text-0-1-1473 text-d131-0-1-2590 flex1-0-1-1407 textTruncate-0-1-1406  ">
                        Image{" "}
                      </span>
                    </button>
                  </div>
                  <div class="tooltipWrapper-0-1-1200 undefined">
                    <button
                      type="button"
                      class="root-0-1-1471 addContentListItem-0-1-1419"
                      onClick={() => {
                        handleOpenAddContentModal();
                        setEnableVideo(false);
                        setEnableDocument(false);
                        setEnableImage(false);
                        setEnableZip(true);
                      }}
                    >
                      <div class="iconCont-0-1-1472 iconCont-d132-0-1-2592 flex0-0-1-1408 ">
                        <img
                          src="https://ali-cdn-cp-assets-public.classplus.co/cp-store-ui-revamp/Icons/zip_diy.svg"
                          alt=""
                        />
                      </div>
                      <span class="text-0-1-1473 text-d133-0-1-2593 flex1-0-1-1407 textTruncate-0-1-1406  ">
                        Zip File{" "}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br />
          <table class="table mb-5">
            <thead>
              <tr>
                <th className="text-center" scope="col">
                  #
                </th>
                <th className="text-center" scope="col">
                  Module Name
                </th>
                <th className="text-center" scope="col">
                  Description
                </th>
                <th className="text-center" scope="col">
                  Video
                </th>
                <th className="text-center" scope="col">
                  Document
                </th>
                <th className="text-center" scope="col">
                  Image
                </th>
                <th className="text-center" scope="col">
                  Zip File
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 3 }).map((_, i) => (
                <tr>
                  <th
                    className="courseOverviewDesc-0-1-1131 text-center"
                    scope="row"
                  >
                    <div className="mt-4">Module {i + 1}</div>
                  </th>
                  <td className="courseOverviewDesc-0-1-1131 text-center moduleTable-Details">
                    <div className="mt-4">
                      {`Big Reason Behind Changing My Youtube Channel Name!!!`.substring(
                        0,
                        35
                      )}
                      ...
                    </div>
                  </td>
                  <td className="courseOverviewDesc-0-1-1131 text-center moduleTable-Details">
                    <div className="mt-4">
                      {`Big Reason Behind Changing My Youtube Channel Name!!!`.substring(
                        0,
                        35
                      )}
                      ...
                    </div>
                  </td>
                  <td className="courseOverviewDesc-0-1-1131 text-center ">
                    <video
                      controls
                      autoPlay
                      style={{ width: "150px", height: "115px" }}
                    >
                      <source
                        src="https://www.w3schools.com/tags/movie.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </td>
                  <td className="courseOverviewDesc-0-1-1131 text-center">
                    <div className="mt-4">
                      <i
                        class="fa-regular fa-file-lines"
                        style={{ color: "#146ebe", fontSize: "40px" }}
                      ></i>
                    </div>
                  </td>
                  <td className="courseOverviewDesc-0-1-1131 text-center">
                    <img
                      src="https://images.pexels.com/photos/6758294/pexels-photo-6758294.jpeg"
                      alt=""
                      style={{ width: "150px", height: "115px" }}
                    />
                  </td>
                  <td className="courseOverviewDesc-0-1-1131 text-center">
                    <div className="mt-4">
                      <i
                        class="fa-regular fa-file-zipper"
                        style={{ color: "#146ebe", fontSize: "40px" }}
                      ></i>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table> */}
        <Box>
          <Stepper
            className="mt-3"
            activeStep={activeStep}
            style={{ padding: "20px 240px" }}
          >
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          <div>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  <div>
                    <img
                      style={{
                        // position: "relative",
                        // left: "50%",
                        // right: "50%",
                        transform: "translate(150%, -4%)",
                        width: "25%",
                        mixBlendMode: "hard-light",
                      }}
                      // src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMyQkI2NzM7fQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjMwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT48cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDg5LDI1NS45YzAtMC4yLDAtMC41LDAtMC43YzAtMS42LDAtMy4yLTAuMS00LjdjMC0wLjktMC4xLTEuOC0wLjEtMi44YzAtMC45LTAuMS0xLjgtMC4xLTIuNyAgYy0wLjEtMS4xLTAuMS0yLjItMC4yLTMuM2MwLTAuNy0wLjEtMS40LTAuMS0yLjFjLTAuMS0xLjItMC4yLTIuNC0wLjMtMy42YzAtMC41LTAuMS0xLjEtMC4xLTEuNmMtMC4xLTEuMy0wLjMtMi42LTAuNC00ICBjMC0wLjMtMC4xLTAuNy0wLjEtMUM0NzQuMywxMTMuMiwzNzUuNywyMi45LDI1NiwyMi45UzM3LjcsMTEzLjIsMjQuNSwyMjkuNWMwLDAuMy0wLjEsMC43LTAuMSwxYy0wLjEsMS4zLTAuMywyLjYtMC40LDQgIGMtMC4xLDAuNS0wLjEsMS4xLTAuMSwxLjZjLTAuMSwxLjItMC4yLDIuNC0wLjMsMy42YzAsMC43LTAuMSwxLjQtMC4xLDIuMWMtMC4xLDEuMS0wLjEsMi4yLTAuMiwzLjNjMCwwLjktMC4xLDEuOC0wLjEsMi43ICBjMCwwLjktMC4xLDEuOC0wLjEsMi44YzAsMS42LTAuMSwzLjItMC4xLDQuN2MwLDAuMiwwLDAuNSwwLDAuN2MwLDAsMCwwLDAsMC4xczAsMCwwLDAuMWMwLDAuMiwwLDAuNSwwLDAuN2MwLDEuNiwwLDMuMiwwLjEsNC43ICBjMCwwLjksMC4xLDEuOCwwLjEsMi44YzAsMC45LDAuMSwxLjgsMC4xLDIuN2MwLjEsMS4xLDAuMSwyLjIsMC4yLDMuM2MwLDAuNywwLjEsMS40LDAuMSwyLjFjMC4xLDEuMiwwLjIsMi40LDAuMywzLjYgIGMwLDAuNSwwLjEsMS4xLDAuMSwxLjZjMC4xLDEuMywwLjMsMi42LDAuNCw0YzAsMC4zLDAuMSwwLjcsMC4xLDFDMzcuNywzOTguOCwxMzYuMyw0ODkuMSwyNTYsNDg5LjFzMjE4LjMtOTAuMywyMzEuNS0yMDYuNSAgYzAtMC4zLDAuMS0wLjcsMC4xLTFjMC4xLTEuMywwLjMtMi42LDAuNC00YzAuMS0wLjUsMC4xLTEuMSwwLjEtMS42YzAuMS0xLjIsMC4yLTIuNCwwLjMtMy42YzAtMC43LDAuMS0xLjQsMC4xLTIuMSAgYzAuMS0xLjEsMC4xLTIuMiwwLjItMy4zYzAtMC45LDAuMS0xLjgsMC4xLTIuN2MwLTAuOSwwLjEtMS44LDAuMS0yLjhjMC0xLjYsMC4xLTMuMiwwLjEtNC43YzAtMC4yLDAtMC41LDAtMC43ICBDNDg5LDI1Niw0ODksMjU2LDQ4OSwyNTUuOUM0ODksMjU2LDQ4OSwyNTYsNDg5LDI1NS45eiIgaWQ9IlhNTElEXzNfIi8+PGcgaWQ9IlhNTElEXzFfIj48bGluZSBjbGFzcz0ic3QxIiBpZD0iWE1MSURfMl8iIHgxPSIyMTMuNiIgeDI9IjM2OS43IiB5MT0iMzQ0LjIiIHkyPSIxODguMiIvPjxsaW5lIGNsYXNzPSJzdDEiIGlkPSJYTUxJRF80XyIgeDE9IjIzMy44IiB4Mj0iMTU0LjciIHkxPSIzNDUuMiIgeTI9IjI2Ni4xIi8+PC9nPjwvc3ZnPg=="
                      src="https://gifdb.com/images/high/animated-transparent-background-check-mark-lb1gygckicpca0fb.gif"
                      alt=""
                    />
                    <h3
                      style={{
                        // textAlign: "center",
                        // position: "relative",
                        // left: "42%",
                        // right: "50%",
                        marginLeft: "414px",
                      }}
                    >
                      Couser Published
                    </h3>
                  </div>
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button onClick={handleReset}>Done</Button>
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Button
                    className="px-5 py-2"
                    variant="outline-info"
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    <i class="fa-solid fa-arrow-left-long"></i> &nbsp;Back
                  </Button>
                  <Button
                    className="ms-2 px-5"
                    onClick={handleNext}
                    variant="info"
                  >
                    {activeStep === steps.length - 1
                      ? "Publish Campaign"
                      : "Next"}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </div>
        </Box>
        {/* <div className="footerNavContainer-0-1-444 footerNavContainer-d0-0-1-457">
          <Button
            className="px-5 py-2"
            variant="outline-info"
            onClick={() => window.location.assign("/courses/add")}
          >
            <i class="fa-solid fa-arrow-left-long"></i> &nbsp; Back
          </Button>
          <Button className="ms-2 px-5" variant="info">
            Publish
          </Button>
        </div> */}
        {/* </div> */}
      </div>
      {/* Add Content modal opeing============================== */}
      <Modal
        show={showAddContentModal}
        onHide={handleCloseAddContentModal}
        animation={false}
        backdrop="static"
        centered
        // size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {enableVideo
              ? "Add Video"
              : enableDocument
              ? "Add Document"
              : enableImage
              ? "Add Image"
              : enableZip
              ? "Add Zip File"
              : ""}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {enableVideo ? (
              <>
                <Button>Add +</Button>

                <div className="mt-2">
                  {/* <div className="col-md-4">
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
                    style={{ padding: "8px 13px", fontSize: "15px" }}
                    htmlFor="video-file-input"
                  >
                    <i class="fa-solid fa-cloud-arrow-up"></i> Upload from your
                    pc
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
                      <span style={styles.imgStateText}>
                        {videoError && (
                          <div style={{ color: "red" }}>{error}</div>
                        )}
                      </span>
                    </div>
                  )}
                </div> */}

                  <div>
                    <div>
                      <label>
                        <b>Select Module *</b>
                      </label>
                      <br />
                      <select style={styles.addModules}>
                        <option>---Choose---</option>
                        <option>dsd</option>
                      </select>
                    </div>
                    {/* <br /> */}
                    <div>
                      <label>
                        <b>Video Name *</b>
                      </label>
                      <br />
                      <input
                        className="mt-2"
                        type="text"
                        name="Video Name"
                        placeholder="Video name"
                        style={styles.addModules}
                      />
                    </div>{" "}
                    {/* <br /> */}
                    <div>
                      <label>
                        <b>Video Link *</b>
                      </label>
                      <br />
                      <input
                        className="mt-2"
                        type="text"
                        name="Video Link"
                        placeholder="Video link"
                        style={styles.addModules}
                      />
                    </div>
                    {/* <br /> */}
                    <div>
                      <label>
                        <b>Description</b>
                      </label>
                      <br />
                      <textarea
                        className="mt-2 h-20"
                        type="text"
                        name="Description"
                        placeholder="Description here..."
                        style={styles.addModules}
                      />
                    </div>
                  </div>
                </div>
              </>
            ) : enableDocument ? (
              <div className="row">
                <div className="col-md-4">
                  <input
                    accept="application/pdf"
                    style={{ display: "none" }}
                    id="pdf-file-input"
                    type="file"
                    onChange={(e) => handleDocumentUpload(e)}
                  />
                  <label
                    className="btn btn-primary mt-2"
                    style={{ padding: "8px 13px", fontSize: "15px" }}
                    htmlFor="pdf-file-input"
                  >
                    Select Document
                  </label>
                  <br />
                  <br />
                  {documentRead && (
                    <div>
                      <img
                        src="https://classplusapp.com/diy/assets/pdfListIcon-4737e94f..svg"
                        alt=""
                        style={{ width: "160px" }}
                      />
                    </div>
                  )}
                </div>
                <div className="col-md-8">
                  <div>
                    <label>
                      <b>Document Name *</b>
                    </label>
                    <br />
                    <input
                      className="mt-2"
                      type="text"
                      name="Document Name"
                      placeholder="Document name"
                      style={styles.addModules}
                    />
                  </div>
                  <div>
                    <label>
                      <b>Description</b>
                    </label>
                    <br />
                    <textarea
                      className="mt-2 h-20"
                      type="text"
                      name="Description"
                      placeholder="Description here..."
                      style={styles.addModules}
                    />
                  </div>
                </div>
              </div>
            ) : enableImage ? (
              <div className="row">
                <div className="col-md-4">
                  <input
                    accept="image/gif,image/jpeg,image/jpeg,image/png,image/webp,image/vnd.wap.wbmp,image/svg+xml,image/tiff"
                    style={{ display: "none" }}
                    id="image-file-input"
                    type="file"
                    onChange={(e) => handleImageUpload(e)}
                  />
                  <label
                    className="btn btn-primary mt-2"
                    style={{ padding: "8px 13px", fontSize: "15px" }}
                    htmlFor="image-file-input"
                  >
                    Select Image
                  </label>
                  <br />
                  <br />
                  {thumbnailImage && (
                    <div>
                      <img
                        src={URL.createObjectURL(thumbnailImage)}
                        alt=""
                        style={{ width: "160px" }}
                      />
                      <span style={styles.imgStateText}>
                        {error && <div style={{ color: "red" }}>{error}</div>}
                      </span>
                    </div>
                  )}
                </div>
                <div className="col-md-8">
                  <div>
                    <label>
                      <b>Image Name *</b>
                    </label>
                    <br />
                    <input
                      className="mt-2"
                      type="text"
                      name="Image Name"
                      placeholder="Image name"
                      style={styles.addModules}
                    />
                  </div>
                  <div>
                    <label>
                      <b>Description</b>
                    </label>
                    <br />
                    <textarea
                      className="mt-2 h-20"
                      type="text"
                      name="Description"
                      placeholder="Description here..."
                      style={styles.addModules}
                    />
                  </div>
                </div>
              </div>
            ) : enableZip ? (
              <div className="row">
                <div className="col-md-4">
                  <input
                    // accept="video/mp4,video/mkv,video/x-m4v,video/*"
                    accept=".zip,.rar,.7zip"
                    style={{ display: "none" }}
                    id="video-file-input"
                    type="file"
                    onChange={(e) => handleZipUpload(e)}
                  />
                  <label
                    className="btn btn-outline-primary mt-2"
                    style={{ padding: "8px 13px", fontSize: "15px" }}
                    htmlFor="video-file-input"
                  >
                    Choose files
                  </label>
                  <br />
                  <br />
                  {zipFileRead && (
                    <div style={styles.thumbnailImgCont}>
                      <img
                        src="https://ali-cdn-cp-assets-public.classplus.co/cp-store-ui-revamp/Icons/zip_diy.svg"
                        alt=""
                        style={{ width: "160px" }}
                      />
                    </div>
                  )}
                </div>
                <div className="col-md-8">
                  <div>
                    <label>
                      <b>Zip Name *</b>
                    </label>
                    <br />
                    <input
                      className="mt-2"
                      type="text"
                      name="Zip Name"
                      placeholder="Zip name"
                      style={styles.addModules}
                    />
                  </div>
                  <div>
                    <label>
                      <b>Description</b>
                    </label>
                    <br />
                    <textarea
                      className="mt-2 h-20"
                      type="text"
                      name="Description"
                      placeholder="Description here..."
                      style={styles.addModules}
                    />
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button>Done</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddModules;
