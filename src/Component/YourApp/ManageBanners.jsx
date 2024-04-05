import React, { useEffect, useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { manageBannerStyle as styles } from "../../Styles/JSXStyles";
import "./style/managebanner.css";
import { apiUrl } from "../../Api-Service/apiConstants";
import { getData, postFormData, putData } from "../../Api-Service/apiHelper";

function ManageBanners() {
  const formData = new FormData();
  const [show, setShow] = useState(false);
  const [error, setError] = useState(null);
  const [editView, setEditView] = useState(false);
  const [bannerData, setBannerData] = useState([]);
  // const [bannerData1, setBannerData1] = useState([]);
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

  // const fetchData = async () => {
  //   try {
  //     let data = await middlewareService.fetchData();
  //     setBannerData(data);
  //   } catch (error) {
  //     console.log("Error: ", error);
  //   }
  // };

  const fetchData = async () => {
    try {
      const appResponse = await getData(apiUrl.GET_APP_BANNER);
      setBannerData(appResponse.data);
      // const webResponse = await getData(apiUrl.GET_WEB_BANNER);
      // setBannerData1(webResponse.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleEditChanges = (item) => {
    setEditView(!editView);
    setSelectedBannerData(item);
  };

  const handleSubmitChanges = (e) => {
    setShow(false);
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
  // const editBannerImageChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const fileType = file.type;
  //     if (!fileType.startsWith("image/")) {
  //       setError("Please upload a valid image file (PNG or JPEG).");
  //       return;
  //     }
  //     const maxSize = 800 * 600;
  //     if (file.size > maxSize) {
  //       setError("Image size should be 800px x 600px or smaller.");
  //       return;
  //     }
  //     setError(null);
  //     setEditBanner({ ...editBanner, screenImage: file }); // Assign the file to screenImage property
  //   }
  // };
  const handleInputChange = (e) => {
    setNewBanner({ ...newBanner, selectScreen: e.target.value });
  };

  const handleEditScreenSelection = (e) => {
    const selectedValue = e.target.value;
    setNewBanner((prevState) => ({
      ...prevState,
      screenName: selectedValue,
    }));
  };

  const handleEditScreenImage = (e) => {
    const selectedFile = e.target.files[0];
    setNewBanner((prevState) => ({
      ...prevState,
      screenImage: selectedFile,
    }));
  };

  console.log("editBanner", editBanner.screenName);
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

  const updateBanner = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("screenName", editBanner.selectScreen || "");
    if (editBanner.screenImage) {
      formData.append("bannerImage", editBanner.screenImage);
    }
    try {
      const response = await putData(
        `${apiUrl.EDIT_BANNERS}${selectedBannerData._id}`,
        formData
      );
      console.log("POST Request Success:", response);
      alert("Updated!");
      fetchData();
      setEditView(false);
      setEditBanner({ selectScreen: "", screenImage: null }); // Reset editBanner state
    } catch (error) {
      console.error("Error:", error);
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
                    Updated By:{moment(ele.updatedAt).format("MMM DD YYYY")}
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
              <Button variant="info" onClick={addBanner}>
                Save Changes
              </Button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      {/* banner edit ================= */}
      <Offcanvas
        show={editView}
        onHide={() => setEditView(false)}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{selectedBannerData.screenName} </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="">
            <label>
              <b>Select Landing Screen</b>
            </label>
            <select
              className="mt-2 mb-4"
              style={styles.selectField}
              onChange={handleEditScreenSelection}
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
                  onChange={handleEditScreenImage}
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
              <Button variant="info" onClick={updateBanner}>
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
