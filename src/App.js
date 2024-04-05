import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Component/Layouts/Layout";
import Dashboard from "./Component/Dashboard";
import Login from "./Component/Login";
import "./App.css";
import ManagePages from "./Component/Website/ManagePages";
import Header from "./Component/Layouts/Header";
import MyCourse from "./Component/Courses/MyCourse";
import AddCourse from "./Component/Courses/AddCourse";
import ManageBanners from "./Component/YourApp/ManageBanners";
import ManageCoupons from "./Component/Courses/ManageCoupons";
import FreeMaterial from "./Component/Content/FreeMaterial";
import AddDocument from "./Component/Content/AddDocument";
import Campaign from "./Component/Campaigns/Campaign";
import CreateCampaign from "./Component/Campaigns/CreateCampaign";
import UserAction from "./Component/Campaigns/UserAction";
import Users from "./Component/Peoples/Users";
import UserProfile from "./Component/Peoples/UserProfile";
import AddModules from "./Component/Courses/AddModules";
import AddVideo from "./Component/Content/AddVideo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* dashboard */}
        <Route
          path="/dashboard"
          element={
            <Layout
              Children={
                <>
                  <Header />
                  <Dashboard />
                </>
              }
            />
          }
        />
        {/* website */}
        <Route
          path="/website/manage-pages"
          element={
            <Layout
              Children={
                <>
                  <Header />
                  <ManagePages />
                </>
              }
            />
          }
        />
        {/* Course */}
        <Route
          path="/courses/course-list"
          element={
            <Layout
              Children={
                <>
                  <Header />
                  <MyCourse />
                </>
              }
            />
          }
        />
        <Route
          path="/courses/add"
          element={
            <Layout
              Children={
                <>
                  <Header />
                  <AddCourse />
                </>
              }
            />
          }
        />
        <Route
          path="/courses/add-modules/:objectId/:couserTitle"
          element={
            <Layout
              Children={
                <>
                  <Header />
                  <AddModules />
                </>
              }
            />
          }
        />
        <Route
          path="/courses/manage-coupons"
          element={
            <Layout
              Children={
                <>
                  <Header />
                  <ManageCoupons />
                </>
              }
            />
          }
        />
        {/* Your App */}
        <Route
          path="/app/manage-banners"
          element={
            <Layout
              Children={
                <>
                  <Header />
                  <ManageBanners />
                </>
              }
            />
          }
        />
        {/* Content */}
        <Route
          path="/content/free-material"
          element={
            <Layout
              Children={
                <>
                  <Header />
                  <FreeMaterial />
                </>
              }
            />
          }
        />
        <Route
          path="/free-material/add-document"
          element={
            <Layout
              Children={
                <>
                  <Header />
                  <AddDocument />
                </>
              }
            />
          }
        />
        <Route
          path="/free-material/add-video"
          element={
            <Layout
              Children={
                <>
                  <Header />
                  <AddVideo />
                </>
              }
            />
          }
        />
        {/* Campaign */}
        <Route
          path="/campaigns/list"
          element={
            <Layout
              Children={
                <>
                  <Header />
                  <Campaign />
                </>
              }
            />
          }
        />
        <Route
          path="/campaigns/create"
          element={
            <Layout
              Children={
                <>
                  <Header />
                  <CreateCampaign />
                </>
              }
            />
          }
        />
        <Route
          path="/campaigns/create/useractioncampaign/channel"
          element={
            <Layout
              Children={
                <>
                  <Header />
                  <UserAction />
                </>
              }
            />
          }
        />
        {/* Peoples */}
        <Route
          path="/people/users"
          element={
            <Layout
              Children={
                <>
                  <Header />
                  <Users />
                </>
              }
            />
          }
        />
        <Route
          path="/people/users-profile"
          element={
            <Layout
              Children={
                <>
                  <Header />
                  <UserProfile />
                </>
              }
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
