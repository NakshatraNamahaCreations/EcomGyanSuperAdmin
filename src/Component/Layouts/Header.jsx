import React from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const { pathname } = location;

  switch (pathname) {
    case "/dashboard":
      return (
        <div>
          <div className="headerTitle-0-1-70">Hi Ronald C Matt,</div>
          <div className="headerDesc-0-1-71">
            <div>Welcome to your Dashboard</div>
          </div>
        </div>
      );
    case "/website/manage-pages":
      return (
        <div>
          <div className="headerTitle-0-1-70">Manage Your Website Pages</div>
          <div className="headerDesc-0-1-71">
            <div>You can add, remove or edit content of all pages</div>
          </div>
        </div>
      );

    case "/courses/course-list":
      return (
        <div>
          <div className="headerTitle-0-1-70">Your Courses</div>
          <div className="headerDesc-0-1-71">
            <div>Add/View courses of your brand</div>
          </div>
        </div>
      );
    case "/courses/add":
      return (
        <div>
          <div className="headerTitle-0-1-70">Create Course</div>
          <div className="headerDesc-0-1-71">
            <div>Add / view content of your course</div>
          </div>
        </div>
      );
    case "/courses/manage-coupons":
      return (
        <div>
          <div className="headerTitle-0-1-70">Manage Coupons</div>
          {/* <div className="headerDesc-0-1-71">
            <div>You can add, remove or edit content of all pages</div>
          </div> */}
        </div>
      );
    case "/app/manage-banners":
      return (
        <div>
          <div className="headerTitle-0-1-70"> Manage Banners</div>
          {/* <div className="headerDesc-0-1-71">
              <div>Add / view content of your course</div>
            </div> */}
        </div>
      );
    case "/content/free-material":
      return (
        <div>
          <div className="headerTitle-0-1-70"> Free Material</div>
          <div className="headerDesc-0-1-71">
            <div>Add / view free material for your visitors</div>
          </div>
        </div>
      );
    case "/campaigns/list":
      return (
        <div>
          <div className="headerTitle-0-1-70">Campaigns</div>
          <div className="headerDesc-0-1-71">
            <div>Create & manage campaigns</div>
          </div>
        </div>
      );
    case "/campaigns/create":
      return (
        <div>
          <div className="headerTitle-0-1-70">
            Create Your Marketing Campaign
          </div>
          <div className="headerDesc-0-1-71">
            <div>You can create Marketing Campaign for different usecases</div>
          </div>
        </div>
      );
    case "/campaigns/create/useractioncampaign/channel":
      return (
        <div>
          <div className="headerTitle-0-1-70">
            Create User Action Based Campaign
          </div>
          <div className="headerDesc-0-1-71">
            <div>
              Set campaign details, choose target audience and edit content
              before publishing campaign
            </div>
          </div>
        </div>
      );
    case "/people/users":
      return (
        <div>
          <div className="headerTitle-0-1-70">Users</div>
          <div className="headerDesc-0-1-71">
            <div>View, Filter & Manage all your users on site/app</div>
          </div>
        </div>
      );
    default:
      return "";
  }
};

export default Header;
