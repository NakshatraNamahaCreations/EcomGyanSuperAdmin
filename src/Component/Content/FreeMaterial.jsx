import React from "react";
import "./style/freematerial.css";

function FreeMaterial() {
  return (
    <div class="bodyContainer-0-1-55 mt-4">
      <div
        class="container-0-1-87"
        onClick={() => window.location.assign("/free-material/add-document")}
      >
        <div class="iconContainer-0-1-88">
          <i
            class="fa-solid fa-file-lines"
            style={{ color: "#146ebe", fontSize: "50px" }}
          ></i>
        </div>
        <div class="heading-0-1-89">Document</div>
        <div class="description-0-1-90">
          File type Includes .doc, .docx, .pdf, .png, .jpg, .csv etc
        </div>
        {/* </a> */}
      </div>
      <div
        class="container-0-1-87"
        onClick={() => window.location.assign("/free-material/add-video")}
      >
        <div class="iconContainer-0-1-88">
          <i
            class="fa-brands fa-youtube"
            style={{ color: "#ff0000", fontSize: "50px" }}
          ></i>
        </div>
        <div class="heading-0-1-89">Video</div>
        <div class="description-0-1-90">Supported link : Youtube URL</div>
      </div>
    </div>
  );
}

export default FreeMaterial;
