import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import "./style/managebanner.css";

function ManageBanners() {
  const [show, setShow] = useState(false);
  const [error, setError] = useState(null);
  const [seteditView, setEditView] = useState(false);

  const [bannerImage, setBannerImage] = useState(null);
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

  const handleBannerImageChange = (e) => {
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
      setBannerImage(file);
    }
  };

  const handleSubmitChanges = (e) => {
    setShow(false);
  };
  const handleEditChanges = (e) => {
    setEditView(false);
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
        {Array.from({ length: 5 }).map((_, i) => (
          <div className="col-md-4" key={i}>
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
                      src="https://cdn-wl-assets.classplus.co/production/single/glknlf/56a04f27-bee7-4b5a-bdd9-29e2c6b63ba0.png"
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
                  <div class="Banner__Main__Left__Content__ImageSection--Select--Note">
                    Select screen to open on tapping banner
                  </div>
                  <div class="Banner__Main__Left__Content__ImageSection--Select--Action">
                    <div class="Banner__Main__Left__Content__ImageSection--Select--Action--Selected">
                      YouTube Video
                    </div>
                    <div
                      class="Banner__Main__Left__Content__ImageSection--Select--Action--Change"
                      onClick={() => setEditView(true)}
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
            {bannerImage && (
              <div style={styles.bannerImageCont}>
                <img
                  src={URL.createObjectURL(bannerImage)}
                  alt={bannerImage}
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
      </Offcanvas>
    </div>
  );
}

export default ManageBanners;
