import React from "react";
import "./style/adddocument.css";
import { Button } from "react-bootstrap";

function AddDocument() {
  return (
    <div class="bodyContainer-0-1-281">
      <div class="listContainer-0-1-295">
        <div style={{ display: "flex", justifyContent: "end" }}>
          {" "}
          <Button>Add</Button>
        </div>
        <div class="heading-0-1-294">Contents</div>
        <div class="container-0-1-369">
          {Array.from({ length: 3 }, (_, i) => (
            <div class="root-0-1-372 root-d105-0-1-723 listItem-0-1-370">
              <div class="content-0-1-373 flex1-0-1-385">
                <svg
                  width="80"
                  height="60"
                  viewBox="0 0 80 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon-0-1-374 icon-d106-0-1-724 flex0-0-1-386"
                >
                  <rect width="80" height="60" rx="4" fill="#F2FBFE"></rect>
                  <path
                    d="M43.1429 13H29.4286C28.5193 13 27.6472 13.3612 27.0042 14.0042C26.3612 14.6472 26 15.5193 26 16.4286V43.8571C26 44.7665 26.3612 45.6385 27.0042 46.2815C27.6472 46.9245 28.5193 47.2857 29.4286 47.2857H50C50.9093 47.2857 51.7814 46.9245 52.4244 46.2815C53.0673 45.6385 53.4286 44.7665 53.4286 43.8571V23.2857L43.1429 13Z"
                    fill="#EB5757"
                    stroke="#FF8888"
                    stroke-width="1.71429"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path d="M43.1426 13V23.2857H53.4283" fill="#FF8888"></path>
                  <path
                    d="M43.1426 13V23.2857H53.4283"
                    stroke="#FF8888"
                    stroke-width="1.71429"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M32.4336 35.0445V29.8125H34.9022C35.4142 29.8125 35.8165 29.9405 36.109 30.1965C36.4062 30.4479 36.5547 30.8456 36.5547 31.3896C36.5547 31.7279 36.4839 32.0205 36.3422 32.2674C36.205 32.5142 36.0107 32.7039 35.7593 32.8365C35.5079 32.9645 35.2222 33.0285 34.9022 33.0285H33.661V35.0445H32.4336ZM34.7307 31.9656C35.1376 31.9656 35.341 31.7874 35.341 31.4308C35.341 31.2616 35.2885 31.1336 35.1833 31.0468C35.0827 30.9554 34.9319 30.9096 34.7307 30.9096H33.661V31.9656H34.7307Z"
                    fill="white"
                  ></path>
                  <path
                    d="M37.1144 35.0445V29.8125H38.6984C39.5898 29.8125 40.2733 30.0365 40.7487 30.4845C41.2241 30.9325 41.4618 31.5771 41.4618 32.4182C41.4618 33.2639 41.2241 33.9131 40.7487 34.3656C40.2733 34.8182 39.5898 35.0445 38.6984 35.0445H37.1144ZM38.6847 33.9474C39.1967 33.9474 39.583 33.8239 39.8435 33.5771C40.1041 33.3256 40.2344 32.9394 40.2344 32.4182C40.2344 31.9291 40.0973 31.5565 39.823 31.3005C39.5487 31.0399 39.1693 30.9096 38.6847 30.9096H38.3418V33.9474H38.6847Z"
                    fill="white"
                  ></path>
                  <path
                    d="M43.3173 35.0445H42.0898V29.8125H45.6624V30.9096H43.3173V31.8834H45.4361V32.9736H43.3173V35.0445Z"
                    fill="white"
                  ></path>
                </svg>
                <div class="rightContentCont-0-1-375 rightContentCont-d107-0-1-725 flex1-0-1-385">
                  <p class="heading-0-1-376 heading-d108-0-1-726 textTruncate-0-1-387">
                    Ecom gyan ebook2023.pdf
                  </p>
                  <p class="subHeading-0-1-377 subHeading-d109-0-1-727">
                    Ronald C Matt
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <form class="blankStyle">
        <input
          class="blankStyle"
          type="file"
          multiple=""
          accept=".doc,.docx,application/pdf,.png,.jpg,.xls,.xlsx,.csv"
        />
        <input class="blankStyle" type="reset" multiple="" />
      </form>
    </div>
  );
}

export default AddDocument;
