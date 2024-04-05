import React, { useEffect, useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import "./style/managepages.css";
import { getData, postFormData } from "../../Api-Service/apiHelper";
import { apiUrl } from "../../Api-Service/apiConstants";

function ManagePages() {
  const formData = new FormData();
  const [show, setShow] = useState(false);
  const [error, setError] = useState(null);
  const [seteditView, setEditView] = useState(false);
  const [bannerData, setBannerData] = useState([]);
  const [selectedBannerData, setSelectedBannerData] = useState({});
  const [newBanner, setNewBanner] = useState([
    { selectScreen: "", screenImage: null },
  ]);
  const [editBanner, setEditBanner] = useState([
    {
      selectScreen: "",
      screenImage: null,
    },
  ]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const appResponse = await getData(apiUrl.GET_WEB_BANNER);
      setBannerData(appResponse.data);
      // const webResponse = await getData(apiUrl.GET_WEB_BANNER);
      // setBannerData1(webResponse.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleBannerImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file.type;
      if (!fileType.startsWith("image/")) {
        setError("Please upload a valid image file (PNG or JPEG).");
        return;
      }
      const maxSize = 800 * 600;
      if (file.size > maxSize) {
        setError("Image size should be 800px x 600px or smaller.");
        return;
      }
      setError(null);
      setNewBanner({ ...newBanner, screenImage: e.target.files[0] });
    }
  };

  const handleInputChange = (e) => {
    setNewBanner({ ...newBanner, selectScreen: e.target.value });
  };

  const styles = {
    uploadImage: {
      border: "1px dashed #25cff2",
    },
    insideBox: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#25cff2",
    },

    bannerImageCont: {
      width: "200px",
      height: "150px",
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
    selectField: {
      width: "100%",
      border: "1px solid rgb(216, 224, 240)",
      // borderRadius: "16px",
      fontSize: "16px",
      backgroundColor: "white",
      outline: "none",
      backgroundPosition: "10px 10px",
      backgroundRepeat: "no-repeat",
      padding: "12px 18px 11px 13px",
      lineHeight: "20px",
      // boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    },
  };

  // const handleBannerImageChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     // Check file type
  //     const fileType = file.type;
  //     if (!fileType.startsWith("image/")) {
  //       // Display an error message on the screen
  //       setError("Please upload a valid image file (PNG or JPEG).");
  //       return;
  //     }
  //     // Check file size
  //     const maxSize = 800 * 600; // 800px x 600px
  //     if (file.size > maxSize) {
  //       // Display an error message on the screen
  //       setError("Image size should be 800px x 600px or smaller.");
  //       return;
  //     }
  //     // Clear any previous errors
  //     setError(null);
  //     // Set thumbnail image
  //     setBannerImage(file);
  //   }
  // };

  const handleSubmitChanges = (e) => {
    setShow(false);
  };
  const handleEditChanges = (e) => {
    setEditView(false);
  };

  const addBanner = async (e) => {
    e.preventDefault();
    if (!newBanner.selectScreen || !newBanner.screenImage) {
      alert("please fill all fields");
    } else {
      formData.append("screenName", newBanner.selectScreen);
      formData.append("bannerImage", newBanner.screenImage);
      formData.append("bannerType", "app");
      try {
        const response = await postFormData(apiUrl.CREATE_BANNERS, formData);
        console.log("POST Request Success:", response);
        alert("Added");
        fetchData();
        setShow(false);
        setNewBanner("");
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };
  return (
    <div className=" mt-4">
      <Button
        className="px-5 py-2"
        variant="info"
        onClick={() => setShow(true)}
      >
        Add Banners
      </Button>
      <div className="row">
        {bannerData.map((ele, index) => (
          <div className="col-md-4" key={index}>
            <div style={{ backgroundColor: "white" }}>
              <div class="Banner__Main__Left__Content__ImageSection">
                <div>
                  <div class="Banner__Main__Left__Content__ImageSection--Top">
                    <div class="Banner__Main__Left__Content__ImageSection--Top--Label">
                      Image
                    </div>
                    <button class="Banner__Main__Left__Content__ImageSection--Top--Remove">
                      <img
                        src="https://ali-cdn-cloudn.classplus.co/web/bannerAssests/Bin.svg"
                        alt=""
                      />
                      Remove
                    </button>
                  </div>
                  <div class="UploadedImageArea" id="UploadedImageArea">
                    <img
                      class="panel-body-image Banner__Main__Left__Content__ImageSection--Image"
                      src={`${apiUrl.IMAGEURL}/banners/${ele.bannerImage}`}
                      alt="notificationImage"
                      id="UploadedImage"
                      style={{ maxWidth: "100%", maxHeight: "100%" }}
                    />
                    <div class="UploadedImageArea__Change" id="ChangeIcon">
                      <div class="UploadedImageArea__Change--Button">
                        <img
                          src="https://ali-cdn-cloudn.classplus.co/web/bannerAssests/Pen.svg"
                          alt=""
                        />
                        Change
                      </div>
                    </div>
                  </div>
                </div>
                <div class="Banner__Main__Left__Content__ImageSection--Select">
                  {/* <div class="Banner__Main__Left__Content__ImageSection--Select--Note">
                    Select screen to open on tapping banner
                  </div> */}
                  <div class="Banner__Main__Left__Content__ImageSection--Select--Action">
                    <div class="Banner__Main__Left__Content__ImageSection--Select--Action--Selected">
                      {ele.screenName}
                    </div>
                    <div
                      class="Banner__Main__Left__Content__ImageSection--Select--Action--Change"
                      onClick={() => handleEditChanges(ele)}
                    >
                      Change
                    </div>
                  </div>
                </div>
                {/* <div class="Banner__Main__Left__Content__ImageSection--BannerTimer">
                <div class="Banner__Main__Left__Content__ImageSection--BannerTimer--ToggleSection">
                  <div class="Banner__Main__Left__Content__ImageSection--BannerTimer--ToggleSection--Note">
                    Remove banner automatically after fixed date
                  </div>
                  <div class="ui fitted toggle checkbox Banner__Main__Left__Content__ImageSection--BannerTimer--ToggleSection--Switch">
                    <input
                      class="hidden"
                      readonly=""
                      tabindex="0"
                      type="checkbox"
                      value=""
                    />
                    <label></label>
                  </div>
                </div>
              </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* add================= */}
      <Offcanvas show={show} onHide={() => setShow(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add New Banner</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="">
            <label>
              <b>Select Landing Screen</b>
            </label>
            <select
              className="mt-2 mb-4"
              style={styles.selectField}
              onChange={handleInputChange}
            >
              <option value="">Select</option>
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
                  onChange={handleBannerImageChange}
                />
                <label htmlFor="icon-button-file">Upload Banner Image</label>
              </div>
            </div>
            {newBanner.screenImage && (
              <div style={styles.bannerImageCont}>
                <img
                  src={URL.createObjectURL(newBanner.screenImage)}
                  alt={newBanner.screenImage}
                  style={{ width: "100%", height: "100%", marginTop: "20px" }}
                />
              </div>
            )}
            <span style={styles.imgStateText}>
              {" "}
              {error && <div style={{ color: "red" }}>{error}</div>}
            </span>
            <div className="text-center mt-2">
              <Button variant="info" onClick={handleSubmitChanges}>
                Save Changes
              </Button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      {/* banner edit ================= */}
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
            {editBanner.screenImage ? (
              <div style={styles.bannerImageCont}>
                <img
                  src={URL.createObjectURL(editBanner.screenImage)}
                  alt={editBanner.screenImage}
                  style={{ width: "100%", height: "100%", marginTop: "20px" }}
                />
              </div>
            ) : (
              <div style={styles.bannerImageCont}>
                <img
                  src={`${apiUrl.IMAGEURL}/banners/${selectedBannerData.bannerImage}`}
                  // src={selectedBannerData.bannerImage}
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
      </Offcanvas>
    </div>
  );
}

export default ManagePages;
