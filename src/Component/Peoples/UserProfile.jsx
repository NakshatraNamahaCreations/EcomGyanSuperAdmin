import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "./style/userprofile.css";
import { usersData } from "../../Global-data/JsonData";
// import  API from "@aws-amplify/api

function UserProfile() {
  const location = useLocation();
  const queryString = location.search.substring(1); // Remove the leading '?'
  console.log("location", queryString);
  const [showCourses, setShowCourses] = useState(false);

  const fetchingUserProfile = usersData.find((e) => e._id === queryString);

  const regex = /\b\w/g;
  const matches = fetchingUserProfile.name.match(regex);
  if (matches) {
    const initials = matches.join("").toUpperCase();
    console.log(initials);
  } else {
    console.log("No matches found.");
  }
  const styles = {
    thumbnailImgCont: {
      width: "200px",
      height: "150px",
    },
  };
  return (
    <div>
      <div className="d-flex justify-between">
        <div className="headerTitle-0-1-70 ">{fetchingUserProfile?.name}</div>
        {showCourses ? (
          <div className="mt-2">
            <Button
              className="ms-2 px-5"
              variant="info"
              onClick={() => setShowCourses(false)}
            >
              <i class="fa-solid fa-arrow-left-long"></i> &nbsp;Basic Details
            </Button>
          </div>
        ) : (
          ""
        )}
      </div>
      {!showCourses ? (
        <div
          class="contentContainer-0-1-1108 mt-3"
          style={{ marginBottom: "6rem" }}
        >
          <div class="contentRight-0-1-1109">
            <div class="infoContainer-0-1-1116">
              <div class="items-0-1-1119">
                {" "}
                <div class="itemContainer-0-1-1110">
                  <div class="itemLabel-0-1-1111">Name</div>
                  <div class="itemValue-0-1-1112">
                    {fetchingUserProfile.name}
                  </div>
                </div>
                <div class="divider-0-1-1113"></div>{" "}
                <div class="itemContainer-0-1-1110">
                  <div class="itemLabel-0-1-1111">Mobile Number</div>
                  <div class="itemValue-0-1-1112">
                    {fetchingUserProfile.mobileNumber}
                  </div>
                </div>
                <div class="divider-0-1-1113"></div>{" "}
                <div class="itemContainer-0-1-1110">
                  <div class="itemLabel-0-1-1111">Email</div>
                  <div class="itemValue-0-1-1112">
                    {fetchingUserProfile.email}
                  </div>
                </div>
                <div class="divider-0-1-1113"></div>
              </div>
              <div class="profilePic-0-1-1117">
                <div class="profileImageContainer-0-1-1127">
                  <div class="studentInitials-0-1-1128">{matches} </div>
                </div>
              </div>
            </div>
          </div>
          <div class="contentLeft-0-1-1120">
            <div
              class="container-0-1-1131"
              onClick={(e) => setShowCourses(true)}
            >
              <div class="icon-0-1-1133">
                <img
                  class="iconImage-0-1-1132"
                  src="https://ali-cdn-cp-assets-public.classplus.co/CampaignManager/1548f055a16d393a45816fe8d097b6c3"
                />
              </div>
              <div class="labels-0-1-1136">
                <div class="header-0-1-1134">Courses</div>
                <div class="subtext-0-1-1135">1 Courses</div>
              </div>
            </div>
            {/* <div class="container-0-1-1137">
            <div class="icon-0-1-1139">
              <img
                class="iconImage-0-1-1138"
                src="https://ali-cdn-cp-assets-public.classplus.co/CampaignManager/dd647cf2644c399ab57b6e916b5b33cc"
              />
            </div>
            <div class="labels-0-1-1142">
              <div class="header-0-1-1140">Performance</div>
              <div class="subtext-0-1-1141">0 Tests</div>
            </div>
          </div>
          <div class="container-0-1-1143">
            <div class="icon-0-1-1145">
              <img
                class="iconImage-0-1-1144"
                src="https://storage.googleapis.com/prod-diy-public/assets/icons/tabIcons/svg/assignment.svg"
              />
            </div>
            <div class="labels-0-1-1148" />
            <div class="header-0-1-1146">Assignment</div>
            <div class="subtext-0-1-1147">0 Assignments</div>
          </div> */}
          </div>
        </div>
      ) : (
        <div className="row showcourse-0-1-1109 mt-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <div className="col-md-4 mb-3">
              <div>
                {/* <video controls style={{ maxWidth: "150%" }}>
                  <source
                    // src={URL.createObjectURL(videoFile)}
                    // type={videoFile.type}
                    src="https://youtu.be/ZeY07Asv4KE"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video> */}
                <iframe
                  // width="100"
                  // height=" 100"
                  style={{ maxWidth: "200%", borderRadius: "20px" }}
                  src="https://www.youtube.com/embed/ZeY07Asv4KE"
                  title="Big Reason Behind Changing My Youtube Channel Name!!!"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                  aria-current
                ></iframe>
                <div class="courseName-0-1-1713">
                  Ecom Gyan Amazon FBA Mastery Course(HINDI) | Lifetime Access +
                  UNLIMITED 1 on 1 Mentorship
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="footerNavContainer-0-1-444 footerNavContainer-d0-0-1-457">
        <Button
          className="px-5 py-2"
          variant="outline-info"
          onClick={() => window.location.assign("/people/users")}
        >
          <i class="fa-solid fa-arrow-left-long"></i> &nbsp; Back
        </Button>{" "}
        {/* <Button className="ms-2 px-5" variant="info">
            Save
          </Button> */}
      </div>
    </div>
  );
}

export default UserProfile;
