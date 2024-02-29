import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing2/Hero";
import Brands from "../sections/landing1/Brands";
import Categories from "../sections/landing1/Categories";
import Content1 from "../sections/landing2/Content1";
import FeaturedJobs from "../sections/landing1/FeaturedJobs";
import Content2 from "../sections/landing1/Content2";
import JobDetails from "./job-details";
import DashboardMain from "./dashboard-main";
import Searchlist from "./search-list";
import SidebarDashboard from "../components/SidebarDashboard";
import CandidateProfile3 from "./candidate-profile-3";
import CandidateProfile from "./candidate-profile";
import Recommended from "./recommended";
const IndexPage = () => {
  return (
    <Router>
      <PageWrapper
        headerConfig={{
          bgClass: "dynamic-sticky-bg",
        }}
      >
        <Hero />
        {/* <Brands /> */}
        {/* <Categories /> */}
        <Content1 />
        {/* <FeaturedJobs /> */}
        <Content2 />
        <Routes>
        {/* <Route path="/recommended" element={<Recommended/>}></Route> */}
          {/* <Route path="/recommended" element={<Recommended/>}></Route> */}
          
        </Routes>
       {/* <JobDetails/> */}
       {/* <DashboardMain/> */}
       {/* <CandidateProfile3/> */}
       {/* <Searchlist/> */}
       
      </PageWrapper>
    </Router>
  );
};
export default IndexPage;
