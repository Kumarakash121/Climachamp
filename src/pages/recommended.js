import React from "react";
import { useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import { Link } from "gatsby";
import CountUp from "react-countup";
import LazyLoad from "react-lazyload";
import PageWrapper from "../components/PageWrapper";
import { Select } from "../components/Core";
import GlobalContext from "../context/GlobalContext";
import ProfileSidebar from "../components/ProfileSidebar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import imgB1 from "../assets/image/l1/png/feature-brand-1.png";
import imgB2 from "../assets/image/l1/png/feature-brand-4.png";
import imgB3 from "../assets/image/l1/png/feature-brand-5.png";
import imgB4 from "../assets/image/l3/png/github-mark.png";
import imgB5 from "../assets/image/l3/png/universal.png";

import imgT1 from "../assets/image/l3/png/team-member-1.png";
import imgT2 from "../assets/image/l3/png/team-member-2.png";
import imgT3 from "../assets/image/l3/png/team-member-3.png";
import imgT4 from "../assets/image/l3/png/team-member-4.png";
import imgT5 from "../assets/image/l3/png/team-member-5.png";

import imgL from "../assets/image/svg/icon-loaction-pin-black.svg";

const Recommended = () => {

  const [isFavorited, setIsFavorited] = useState(false);
  const [hire,setHire]=useState(0);
  const [invite,setInvite]=useState(0);

  const handleToggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };
  const handleInviteToJob=()=>{
    setInvite(invite+1);
  }
  const handleHire=()=>{
    setHire(hire+1);
  }

  return (
    <>
      <PageWrapper headerConfig={{ button: "profile" }}>
        <div className="bg-default-2 pt-22 pt-lg-25 pb-13 pb-xxl-32">
          <div className="container">
            {/* <!-- back Button --> */}
            <div className="row justify-content-center">
              <div className="col-12 dark-mode-texts">
                <div className="mb-9">
                  <Link to="/dashboard-jobs" className="d-flex align-items-center ml-4">
                    {" "}
                    <i className="icon icon-small-left bg-white circle-40 mr-5 font-size-7 text-black font-weight-bold shadow-8"></i>
                    <span className="text-uppercase font-size-3 font-weight-bold text-gray">
                      Back
                    </span>
                  </Link>
                </div>
                </div>
                </div>
            {/* <!-- back Button End --> */}
            <div className="row mb-7">
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-sm-6">
                {/* <!-- Single Category --> */}
                <a
                  href="/#"
                  className="media bg-white rounded-4 pl-8 pt-9 pb-9 pr-7 hover-shadow-1 mb-9 shadow-8"
                >
                  <div className="text-blue bg-blue-opacity-1 circle-56 font-size-6 mr-7">
                    <i className="fas fa-briefcase"></i>
                  </div>
                  {/* <!-- Category Content --> */}
                  <div className="">
                    <h5 className="font-size-8 font-weight-semibold text-black-2 line-height-reset font-weight-bold mb-1">
                      <LazyLoad>
                        <span className="counter">
                          <CountUp duration={6} end={5} />
                        </span>
                      </LazyLoad>
                    </h5>
                    <p className="font-size-4 font-weight-normal text-gray mb-0">
                      Posted Jobs
                    </p>
                  </div>
                </a>
                {/* <!-- End Single Category --> */}
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-sm-6">
                {/* <!-- Single Category --> */}
                <a
                  href="/#"
                  className="media bg-white rounded-4 pl-8 pt-9 pb-9 pr-7 hover-shadow-1 mb-9 shadow-8"
                >
                  <div className="text-pink bg-pink-opacity-1 circle-56 font-size-6 mr-7">
                    <i className="fas fa-user"></i>
                  </div>
                  {/* <!-- Category Content --> */}
                  <div className="">
                    <h5 className="font-size-8 font-weight-semibold text-black-2 line-height-reset font-weight-bold mb-1">
                      <LazyLoad>
                        <span className="counter">
                          <CountUp duration={4} end={256} />
                        </span>
                      </LazyLoad>
                    </h5>
                    <p className="font-size-4 font-weight-normal text-gray mb-0">
                      Total Applicants
                    </p>
                  </div>
                </a>
                {/* <!-- End Single Category --> */}
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-sm-6">
                {/* <!-- Single Category --> */}
                <a
                  href="/#"
                  className="media bg-white rounded-4 pl-8 pt-9 pb-9 pr-7 hover-shadow-1 mb-9 shadow-8"
                >
                  <div className="text-orange bg-orange-opacity-1 circle-56 font-size-6 mr-7">
                    <i className="fas fa-eye"></i>
                  </div>
                  {/* <!-- Category Content --> */}
                  <div className="">
                    <h5 className="font-size-8 font-weight-semibold text-black-2 line-height-reset font-weight-bold mb-1">
                      <LazyLoad>
                        <span className="counter">
                          <CountUp
                            duration={4}
                            decimal="."
                            decimals={1}
                            end={16.5}
                          />
                        </span>
                        K
                      </LazyLoad>
                    </h5>
                    <p className="font-size-4 font-weight-normal text-gray mb-0">
                      Jobs View
                    </p>
                  </div>
                </a>
                {/* <!-- End Single Category --> */}
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-sm-6">
                {/* <!-- Single Category --> */}
                <a
                  href="/#"
                  className="media bg-white rounded-4 pl-8 pt-9 pb-9 pr-7 hover-shadow-1 mb-9 shadow-8"
                >
                  <div className="text-egg-blue bg-egg-blue-opacity-1 circle-56 font-size-6 mr-7">
                    <i className="fas fa-mouse-pointer"></i>
                  </div>
                  {/* <!-- Category Content --> */}
                  <div className="">
                    <h5 className="font-size-8 font-weight-semibold text-black-2 line-height-reset font-weight-bold mb-1">
                      <LazyLoad>
                        <span className="counter">
                          <CountUp
                            duration={4}
                            decimal="."
                            decimals={1}
                            end={18.6}
                          />
                        </span>
                        %
                      </LazyLoad>
                    </h5>
                    <p className="font-size-4 font-weight-normal text-gray mb-0">
                      Applied Rate
                    </p>
                  </div>
                </a>
                {/* <!-- End Single Category --> */}
              </div>
            </div>
            {/*  */}
            <div className="row">
              {/* <!-- Left Sidebar Start --> */}
              <div className="col-12 col-xxl-3 col-lg-4 col-md-5 mb-11 mb-lg-0">
              <div className="col-12 col-xl-3 col-lg-4 col-md-5 col-sm-6">
                <div className="pt-11 pt-lg-0 pl-lg-5">
                  <h4 className="font-size-6 font-weight-semibold mb-0">
                    Similar Companies
                  </h4>
                  <ul className="list-unstyled">
                    {/* <!-- Single List --> */}
                    <li className="border-bottom">
                      <Link to="/#" className="media align-items-center py-9">
                        <div className="mr-7">
                          <img
                            className="square-72 rounded-5"
                            src={imgB1}
                            alt=""
                          />
                        </div>
                        <div className="mt-n4">
                          <h4 className="mb-0 font-size-6 font-weight-semibold">
                            Google INC.
                          </h4>
                          <p className="mb-0 font-size-4">Online Marketplace</p>
                        </div>
                      </Link>
                    </li>
                    {/* <!-- Single List End --> */}
                    {/* <!-- Single List --> */}
                    <li className="border-bottom">
                      <Link to="/#" className="media align-items-center py-9">
                        <div className="mr-7">
                          <img
                            className="square-72 rounded-5"
                            src={imgB2}
                            alt=""
                          />
                        </div>
                        <div className="mt-n4">
                          <h4 className="mb-0 font-size-6 font-weight-semibold">
                            Uber
                          </h4>
                          <p className="mb-0 font-size-4">
                            Ride Sharing Company
                          </p>
                        </div>
                      </Link>
                    </li>
                    {/* <!-- Single List End --> */}
                    {/* <!-- Single List --> */}
                    <li className="border-bottom">
                      <Link to="/#" className="media align-items-center py-9">
                        <div className="mr-7">
                          <img
                            className="square-72 rounded-5"
                            src={imgB3}
                            alt=""
                          />
                        </div>
                        <div className="mt-n4">
                          <h4 className="mb-0 font-size-6 font-weight-semibold">
                            Facebook
                          </h4>
                          <p className="mb-0 font-size-4">Social Network</p>
                        </div>
                      </Link>
                    </li>
                    {/* <!-- Single List End --> */}
                    {/* <!-- Single List --> */}
                    <li className="border-bottom">
                      <Link to="/#" className="media align-items-center py-9">
                        <div className="mr-5">
                          <img
                            className="square-72 rounded-5"
                            src={imgB4}
                            alt=""
                          />
                        </div>
                        <div className="mt-n4">
                          <h4 className="mb-0 font-size-6 font-weight-semibold">
                            GitHub
                          </h4>
                          <p className="mb-0 font-size-4">Online Software</p>
                        </div>
                      </Link>
                    </li>
                    {/* <!-- Single List End --> */}
                    {/* <!-- Single List --> */}
                    <li className="">
                      <Link to="/#" className="media align-items-center py-9">
                        <div className="mr-7">
                          <img
                            className="square-72 rounded-5"
                            src={imgB5}
                            alt=""
                          />
                        </div>
                        <div className="mt-n4">
                          <h4 className="mb-0 font-size-6 font-weight-semibold">
                            Uniliver
                          </h4>
                          <p className="mb-0 font-size-4">Manufacturer</p>
                        </div>
                      </Link>
                    </li>
                    {/* <!-- Single List End --> */}
                  </ul>
                </div>
              </div>
              </div>
              {/* <!-- Left Sidebar End --> */}
              {/* <!-- Middle Content --> */}
              <div className="col-12 col-xxl-6 col-lg-8 col-md-7 order-2 order-xl-1">
                <Tab.Container id="left-tabs-example" defaultActiveKey="one">
                  <div className="bg-white rounded-4 shadow-9">
                    {/* <!-- Tab Section Start --> */}
                    <Nav
                      className="nav border-bottom border-mercury pl-12"
                      role="tablist"
                    >
                      <li className="tab-menu-items nav-item pr-12">
                        <Nav.Link
                          eventKey="one"
                          className="text-uppercase font-size-3 font-weight-bold text-default-color py-3 px-0"
                        >
                          Overview
                        </Nav.Link>
                      </li>

                      <li className="tab-menu-items nav-item pr-12">
                        <Nav.Link
                          eventKey="two"
                          className="text-uppercase font-size-3 font-weight-bold text-default-color py-3 px-0"
                        >
                          Contact
                        </Nav.Link>
                      </li>
                      <li className="tab-menu-items nav-item pr-12">
                        <Nav.Link
                          eventKey="one"
                          className="text-uppercase font-size-3 font-weight-bold text-default-color py-3 px-0"
                        >
                          Contract Terms
                        </Nav.Link>
                      </li>
                    </Nav>
                    {/* <!-- Tab Content --> */}
                    <Tab.Content>
                      <Tab.Pane eventKey="one">
                        {/* <!-- Excerpt Start --> */}
                        <div className="pr-xl-0 pr-xxl-14 p-5 px-xs-12 pt-7 pb-5">
                        <div className="d-flex-row align-items-center">
                       
 
  <div
      onClick={handleToggleFavorite}
      style={{
        cursor: 'pointer',
        color: isFavorited ? 'green' : 'black',
        border: '1px solid green',
        borderRadius: '50%',
        padding: '8px',
        display: 'inline-block',
      }}
    >
      <FontAwesomeIcon icon={faHeart}   />
    </div>
  <button
    className="btn btn-success text-white ml-2 mb-3" 
    onClick={handleInviteToJob}  // Add your onClick handler
  >
    Invite to Job
  </button>
  <Link to='/hire'>
  <button
    className="btn btn-outline-black text-success ml-3 mb-3" 
    // onClick={handleHire}  // Add your onClick handler
  >
    Hire
  </button>
  </Link>
  <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
    Cover letter
  </h4>
</div>
                          <p className="font-size-4 mb-8">
                            A talented professional with an academic background
                            in IT and proven commercial development experience
                            as C++ developer since 1999. Has a sound knowledge
                            of the software development life cycle. Was involved
                            in more than 140 software development outsourcing
                            projects.
                          </p>
                          <p className="font-size-4 mb-8">
                            Programming Languages: C/C++, .NET C++, Python,
                            Bash, Shell, PERL, Regular expressions, Python,
                            Active-script.
                          </p>
                        </div>
                        {/* <!-- Excerpt End --> */}
                        {/* <!-- Skills --> */}
                        <div className="border-top pr-xl-0 pr-xxl-14 p-5 pl-xs-12 pt-7 pb-5">
                          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                            Skills
                          </h4>
                          <ul className="list-unstyled d-flex align-items-center flex-wrap">
                            <li>
                              <Link
                                to="/#"
                                className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center"
                              >
                                Agile
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/#"
                                className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center"
                              >
                                Wireframing
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/#"
                                className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center"
                              >
                                Prototyping
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/#"
                                className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center"
                              >
                                Information
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/#"
                                className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center"
                              >
                                Waterfall Model
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/#"
                                className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center"
                              >
                                New Layout
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/#"
                                className="bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center"
                              >
                                Browsing
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="font-size-6 ml-10  text-black-2 font-weight-semibold">Proposal Bid</div>
                        <h3 className="font-size-6 ml-10  text-black-2 font-weight-semibold">$100 F.P</h3>
                        {/* <!-- Skills End --> */}
                        {/* <!-- Card Section Start --> */}
                        <div className="border-top p-5 pl-xs-12 pt-7 pb-5">
                          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                            Work Exprerience
                          </h4>
                          {/* <!-- Single Card --> */}
                          <div className="w-100">
                            <div className="d-flex align-items-center pr-11 mb-9 flex-wrap flex-sm-nowrap">
                              <div className="square-72 d-block mr-8 mb-7 mb-sm-0">
                                <img src={imgB1} alt="" />
                              </div>
                              <div className="w-100 mt-n2">
                                <h3 className="mb-0">
                                  <Link
                                    to="/#"
                                    className="font-size-6 text-black-2 font-weight-semibold"
                                  >
                                    Lead Product Designer
                                  </Link>
                                </h3>
                                <Link
                                  to="/#"
                                  className="font-size-4 text-default-color line-height-2"
                                >
                                  Airabnb
                                </Link>
                                <div className="d-flex align-items-center justify-content-md-between flex-wrap">
                                  <Link
                                    to="/#"
                                    className="font-size-4 text-gray mr-5"
                                  >
                                    Jun 2017 - April 2020- 3 years
                                  </Link>
                                  <Link
                                    to="/#"
                                    className="font-size-3 text-gray"
                                  >
                                    <span
                                      className="mr-4"
                                      css={`
                                        margin-top: -2px;
                                      `}
                                    >
                                      <img src={imgL} alt="" />
                                    </span>
                                    New York, USA
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Single Card End --> */}
                          {/* <!-- Single Card --> */}
                          <div className="w-100">
                            <div className="d-flex align-items-center pr-11 mb-9 flex-wrap flex-sm-nowrap">
                              <div className="square-72 d-block mr-8 mb-7 mb-sm-0">
                                <img src={imgB2} alt="" />
                              </div>
                              <div className="w-100 mt-n2">
                                <h3 className="mb-0">
                                  <Link
                                    to="/#"
                                    className="font-size-6 text-black-2 font-weight-semibold"
                                  >
                                    Senior UI/UX Designer
                                  </Link>
                                </h3>
                                <Link
                                  to="/#"
                                  className="font-size-4 text-default-color line-height-2"
                                >
                                  Google Inc
                                </Link>
                                <div className="d-flex align-items-center justify-content-md-between flex-wrap">
                                  <Link
                                    to="/#"
                                    className="font-size-3 text-gray mr-5"
                                  >
                                    Jun 2017 - April 2020- 3 years
                                  </Link>
                                  <Link
                                    to="/#"
                                    className="font-size-3 text-gray"
                                  >
                                    <span
                                      className="mr-4"
                                      css={`
                                        margin-top: -2px;
                                      `}
                                    >
                                      <img src={imgL} alt="" />
                                    </span>
                                    New York, USA
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Single Card End --> */}
                        </div>
                        {/* <!-- Card Section End --> */}
                        {/* <!-- Card Section Start --> */}
                        <div className="border-top p-5 pl-xs-12 pt-7 pb-5">
                          <h4 className="font-size-6 mb-7 mt-5 text-black-2 font-weight-semibold">
                            Education
                          </h4>
                          {/* <!-- Single Card --> */}
                          <div className="w-100">
                            <div className="d-flex align-items-center pr-11 mb-9 flex-wrap flex-sm-nowrap">
                              <div className="square-72 d-block mr-8 mb-7 mb-sm-0">
                                <img src={imgB3} alt="" />
                              </div>
                              <div className="w-100 mt-n2">
                                <h3 className="mb-0">
                                  <Link
                                    to="/#"
                                    className="font-size-6 text-black-2"
                                  >
                                    Masters in Art Design
                                  </Link>
                                </h3>
                                <Link
                                  to="/#"
                                  className="font-size-4 text-default-color line-height-2"
                                >
                                  Harvard University
                                </Link>
                                <div className="d-flex align-items-center justify-content-md-between flex-wrap">
                                  <Link
                                    to="/#"
                                    className="font-size-3 text-gray mr-5"
                                  >
                                    Jun 2017 - April 2020- 3 years
                                  </Link>
                                  <Link
                                    to="/#"
                                    className="font-size-3 text-gray"
                                  >
                                    <span
                                      className="mr-4"
                                      css={`
                                        margin-top: -2px;
                                      `}
                                    >
                                      <img src={imgL} alt="" />
                                    </span>
                                    Brylin, USA
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Single Card End --> */}
                          {/* <!-- Single Card --> */}
                          <div className="w-100">
                            <div className="d-flex align-items-center pr-11 mb-9 flex-wrap flex-sm-nowrap">
                              <div className="square-72 d-block mr-8 mb-7 mb-sm-0">
                                <img src={imgB4} alt="" />
                              </div>
                              <div className="w-100 mt-n2">
                                <h3 className="mb-0">
                                  <Link
                                    to="/#"
                                    className="font-size-6 text-black-2"
                                  >
                                    Bachelor in Software Engineering{" "}
                                  </Link>
                                </h3>
                                <Link
                                  to="/#"
                                  className="font-size-4 text-default-color line-height-2"
                                >
                                  Manipal Institute of Technology
                                </Link>
                                <div className="d-flex align-items-center justify-content-md-between flex-wrap">
                                  <Link
                                    to="/#"
                                    className="font-size-3 text-gray mr-5"
                                  >
                                    Fed 2012 - April 2016 - 4 years
                                  </Link>
                                  <Link
                                    to="/#"
                                    className="font-size-3 text-gray"
                                  >
                                    <span
                                      className="mr-4"
                                      css={`
                                        margin-top: -2px;
                                      `}
                                    >
                                      <img src={imgL} alt="" />
                                    </span>
                                    New York, USA
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Single Card End --> */}
                        </div>
                        {/* <!-- Card Section End --> */}
                      </Tab.Pane>
                      <Tab.Pane eventKey="two">
                        {/* <!-- Excerpt Start --> */}
                        <div className="pr-xl-11 p-5 pl-xs-12 pt-9 pb-11">
                          <form action="/">
                            <div className="row">
                              <div className="col-12 mb-7">
                                <label
                                  htmlFor="name3"
                                  className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                                >
                                  Your Name
                                </label>
                                <input
                                  id="name3"
                                  type="text"
                                  className="form-control"
                                  placeholder="Jhon Doe"
                                />
                              </div>
                              <div className="col-lg-6 mb-7">
                                <label
                                  htmlFor="email3"
                                  className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                                >
                                  E-mail
                                </label>
                                <input
                                  id="email3"
                                  type="email"
                                  className="form-control"
                                  placeholder="example@gmail.com"
                                />
                              </div>
                              <div className="col-lg-6 mb-7">
                                <label
                                  htmlFor="subject3"
                                  className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                                >
                                  Subject
                                </label>
                                <input
                                  id="subject3"
                                  type="text"
                                  className="form-control"
                                  placeholder="Special contract"
                                />
                              </div>
                              <div className="col-lg-12 mb-7">
                                <label
                                  htmlFor="message3"
                                  className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                                >
                                  Message
                                </label>
                                <textarea
                                  name="message"
                                  id="message3"
                                  placeholder="Type your message"
                                  className="form-control h-px-144"
                                ></textarea>
                              </div>
                              <div className="col-lg-12 pt-4">
                                <button className="btn btn-primary text-uppercase w-100 h-px-48">
                                  Send Now
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                        {/* <!-- Excerpt End --> */}
                      </Tab.Pane>
                    </Tab.Content>
                    {/* <!-- Tab Content End --> */}
                    {/* <!-- Tab Section End --> */}
                  </div>
                </Tab.Container>
              </div>
              {/* <!-- Middle Content --> */}
              {/* <!-- Right Sidebar Start --> */}
              <div className="col-12 col-xxl-3 col-md-4 offset-xxl-0 offset-lg-4 offset-md-5 order-3 order-xl-2 mt-xxl-0 mt-md-12">
                <div className="pl-lg-5">
                  <h4 className="font-size-6 font-weight-semibold mb-0">
                    Other experts
                  </h4>
                  <ul className="list-unstyled">
                    {/* <!-- Single List --> */}
                    <li className="border-bottom">
                      <Link
                        to="/#"
                        className="media align-items-center py-9 flex-wrap"
                      >
                        <div className="mr-7">
                          <img
                            className="square-72 rounded-3"
                            src={imgT1}
                            alt=""
                          />
                        </div>
                        <div className="">
                          <h4 className="mb-0 font-size-5 font-weight-semibold">
                            David Herison
                          </h4>
                          <p className="mb-0 font-size-3 heading-default-color">
                            UX/UI Designer
                          </p>
                          <span className="font-size-3 text-smoke">
                            <img className="mr-2" src={imgL} alt="" />
                            New York, USA
                          </span>
                        </div>
                      </Link>
                    </li>
                    {/* <!-- Single List End --> */}
                    {/* <!-- Single List --> */}
                    <li className="border-bottom">
                      <Link
                        to="/#"
                        className="media align-items-center py-9 flex-wrap"
                      >
                        <div className="mr-7">
                          <img
                            className="square-72 rounded-3"
                            src={imgT2}
                            alt=""
                          />
                        </div>
                        <div className="">
                          <h4 className="mb-0 font-size-5 font-weight-semibold">
                            Mark Zanitos
                          </h4>
                          <p className="mb-0 font-size-3 heading-default-color">
                            Lead Product Designer
                          </p>
                          <span className="font-size-3 text-smoke">
                            <img className="mr-2" src={imgL} alt="" />
                            New York, USA
                          </span>
                        </div>
                      </Link>
                    </li>
                    {/* <!-- Single List End --> */}
                    {/* <!-- Single List --> */}
                    <li className="border-bottom">
                      <Link
                        to="/#"
                        className="media align-items-center py-9 flex-wrap"
                      >
                        <div className="mr-7">
                          <img
                            className="square-72 rounded-3"
                            src={imgT3}
                            alt=""
                          />
                        </div>
                        <div className="">
                          <h4 className="mb-0 font-size-5 font-weight-semibold">
                            Anna Frankin
                          </h4>
                          <p className="mb-0 font-size-3 heading-default-color">
                            Visual Designer
                          </p>
                          <span className="font-size-3 text-smoke">
                            <img className="mr-2" src={imgL} alt="" />
                            New York, USA
                          </span>
                        </div>
                      </Link>
                    </li>
                    {/* <!-- Single List End --> */}
                    {/* <!-- Single List --> */}
                    <li className="border-bottom">
                      <Link
                        to="/#"
                        className="media align-items-center py-9 flex-wrap"
                      >
                        <div className="mr-7">
                          <img
                            className="square-72 rounded-3"
                            src={imgT4}
                            alt=""
                          />
                        </div>
                        <div className="">
                          <h4 className="mb-0 font-size-5 font-weight-semibold">
                            Jhony Vino
                          </h4>
                          <p className="mb-0 font-size-3 heading-default-color">
                            Creative Director
                          </p>
                          <span className="font-size-3 text-smoke">
                            <img className="mr-2" src={imgL} alt="" />
                            New York, USA
                          </span>
                        </div>
                      </Link>
                    </li>
                    {/* <!-- Single List End --> */}
                    {/* <!-- Single List --> */}
                    <li className="">
                      <Link
                        to="/#"
                        className="media align-items-center py-9 flex-wrap"
                      >
                        <div className="mr-7">
                          <img
                            className="square-72 rounded-3"
                            src={imgT5}
                            alt=""
                          />
                        </div>
                        <div className="">
                          <h4 className="mb-0 font-size-5 font-weight-semibold">
                            Aniasta Hemberg
                          </h4>
                          <p className="mb-0 font-size-3 heading-default-color">
                            Creative Director
                          </p>
                          <span className="font-size-3 text-smoke">
                            <img className="mr-2" src={imgL} alt="" />
                            New York, USA
                          </span>
                        </div>
                      </Link>
                    </li>
                    {/* <!-- Single List End --> */}
                  </ul>
                </div>
              </div>
              {/* <!-- Right Sidebar End --> */}
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default Recommended;
