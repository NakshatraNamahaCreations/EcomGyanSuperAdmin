import React from "react";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";
// import { FaBarsStaggered, FaBookOpen } from "react-icons";
import { RiDashboardFill } from "react-icons/ri";
import { FaBookOpen, FaGlobe, FaUserAlt, FaUserFriends } from "react-icons/fa";
import {
  FaNoteSticky,
  FaMobileRetro,
  FaUniversalAccess,
} from "react-icons/fa6";
import { SiGoogleanalytics } from "react-icons/si";
import { MdCampaign, MdOutlineElectricalServices } from "react-icons/md";
function SideBar() {
  const location = useLocation();
  const { pathname } = location;
  // console.log("pathname", pathname);
  const getBorderLeft = (path) => {
    return pathname === path ? "2px solid #00007c6b" : "";
  };
  const getColor = (path) => {
    return pathname === path ? "rgb(0, 0, 124)" : "";
  };
  const getBorderRadius = (path) => {
    return pathname === path ? "25px" : "";
  };
  const getBackgroundColor = (path) => {
    return pathname === path ? "#00007c6b" : "";
  };
  return (
    <div>
      <Sidebar>
        <Menu>
          <div style={{ padding: "24px 0px", textAlign: "center" }}>
            <h3 style={{ color: "#00007c" }}>Ecom Gyan</h3>
          </div>
          {/* Dashboard===================== */}
          <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/dashboard" />}
            icon={<RiDashboardFill className="sidebar-icons" />}
            style={{
              borderLeft: getBorderLeft("/dashboard"),
              color: getColor("/dashboard"),
              // borderRadius: getBorderRadius("/dashboard"),
            }}
          >
            Dashboard
          </MenuItem>
          <SubMenu
            className="sidebar-font-menu"
            label="Website"
            icon={<FaGlobe className="sidebar-icons" />}
            // style={{ borderLeft: getBorderLeft(pathname) }}
          >
            <MenuItem
              className="sidebar-font-submenu"
              component={<Link to="/website/manage-pages" />}
              style={{
                borderLeft: getBorderLeft("/website/manage-pages"),
                color: getColor("/website/manage-pages"),
                // borderRadius: getBorderRadius("/website/manage-pages"),
              }}
            >
              Manage Pages
            </MenuItem>
            {/* <MenuItem
              className="sidebar-font-submenu"
              component={<Link to="#" />}
              style={{
                borderLeft: getBorderLeft("#"),
                color: getColor("#"),
                // borderRadius: getBorderRadius("#"),
              }}
            >
              Domain Integrations
            </MenuItem> */}
          </SubMenu>
          {/* Courses===================== */}
          <SubMenu
            className="sidebar-font-menu"
            label="Courses"
            icon={<FaBookOpen className="sidebar-icons" />}
          >
            <MenuItem
              className="sidebar-font-submenu"
              component={<Link to="/courses/course-list" />}
              style={{
                borderLeft: getBorderLeft("/courses/course-list"),
                color: getColor("/courses/course-list"),
                // borderRadius: getBorderRadius("#"),
              }}
            >
              My Courses
            </MenuItem>
            {/* <MenuItem
              className="sidebar-font-submenu"
              component={<Link to="#" />}
            >
              Global Courses
            </MenuItem> */}
            <MenuItem
              className="sidebar-font-submenu"
              component={<Link to="/courses/manage-coupons" />}
              style={{
                borderLeft: getBorderLeft("/courses/manage-coupons"),
                color: getColor("/courses/manage-coupons"),
                // borderRadius: getBorderRadius("#"),
              }}
            >
              Manage Coupon
            </MenuItem>
            {/* <MenuItem
              className="sidebar-font-submenu"
              component={<Link to="#" />}
            >
              Backend Addition
            </MenuItem> */}
          </SubMenu>
          {/* Content===================== */}
          <SubMenu
            className="sidebar-font-menu"
            label="Content"
            icon={<FaNoteSticky className="sidebar-icons" />}
          >
            <MenuItem
              className="sidebar-font-submenu"
              component={<Link to="/content/free-material" />}
              style={{
                borderLeft: getBorderLeft("/content/free-material"),
                color: getColor("/content/free-material"),
                // borderRadius: getBorderRadius("#"),
              }}
            >
              Free Material
            </MenuItem>
          </SubMenu>
          {/* Your App===================== */}
          <SubMenu
            className="sidebar-font-menu"
            label="Your App"
            icon={<FaMobileRetro className="sidebar-icons" />}
          >
            {/* <MenuItem
              className="sidebar-font-submenu"
              component={<Link to="#" />}
            >
              Configure App
            </MenuItem> */}
            <MenuItem
              className="sidebar-font-submenu"
              component={<Link to="/app/manage-banners" />}
              style={{
                borderLeft: getBorderLeft("/app/manage-banners"),
                color: getColor("/app/manage-banners"),
                // borderRadius: getBorderRadius("#"),
              }}
            >
              Manage Banners
            </MenuItem>
            <MenuItem
              className="sidebar-font-submenu"
              component={<Link to="#" />}
              style={{
                borderLeft: getBorderLeft("#"),
                color: getColor("#"),
                // borderRadius: getBorderRadius("#"),
              }}
            >
              Marketing Dashboard
            </MenuItem>
          </SubMenu>
          {/* <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/dashboard" />}
            icon={<FaUserFriends className="sidebar-icons" />}
          >
            1:1 Sessions
          </MenuItem> */}
          <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/dashboard" />}
            icon={<SiGoogleanalytics className="sidebar-icons" />}
          >
            Analytics
          </MenuItem>

          {/* People===================== */}
          <SubMenu
            className="sidebar-font-menu"
            label="People"
            icon={<FaUserAlt className="sidebar-icons" />}
          >
            <MenuItem
              className="sidebar-font-submenu"
              component={<Link to="/people/users" />}
              style={{
                borderLeft: getBorderLeft("/people/users"),
                color: getColor("/people/users"),
              }}
            >
              Users
            </MenuItem>
            <MenuItem
              className="sidebar-font-submenu"
              component={<Link to="#" />}
              style={{
                borderLeft: getBorderLeft("#"),
                color: getColor("#"),
              }}
            >
              Team Members
            </MenuItem>
          </SubMenu>

          <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/campaigns/list" />}
            icon={<MdCampaign className="sidebar-icons" />}
            style={{
              borderLeft: getBorderLeft("/campaigns/list"),
              color: getColor("/campaigns/list"),
              // borderRadius: getBorderRadius("#"),
            }}
          >
            Campaigns
          </MenuItem>

          {/* student */}

          <SubMenu
            className="sidebar-font-menu"
            label="Self Service"
            icon={<MdOutlineElectricalServices className="sidebar-icons" />}
          >
            <MenuItem
              className="sidebar-font-submenu"
              component={<Link to="#" />}
            >
              Add Students
            </MenuItem>
          </SubMenu>

          {/* <MenuItem
            className="sidebar-font-menu"
            component={<Link to="/dashboard" />}
            icon={<FaUniversalAccess className="sidebar-icons" />}
          >
            User Controls
          </MenuItem> */}
        </Menu>
      </Sidebar>
    </div>
  );
}

export default SideBar;
