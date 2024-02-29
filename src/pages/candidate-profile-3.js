import React from 'react'
import { Nav, Tab } from "react-bootstrap";
import { Link } from "gatsby";
// import PageWrapper from "../components/PageWrapper";
import ProfileSidebar from "../components/ProfileSidebar";

// import imgB1 from "../assets/image/l2/png/featured-job-logo-1.png";
// import imgB2 from "../assets/image/l1/png/feature-brand-1.png";
// import imgB3 from "../assets/image/svg/harvard.svg";
// import imgB4 from "../assets/image/svg/mit.svg";

import imgT1 from "../assets/image/l3/png/team-member-1.png";
import imgT2 from "../assets/image/l3/png/team-member-2.png";
import imgT3 from "../assets/image/l3/png/team-member-3.png";
import imgT4 from "../assets/image/l3/png/team-member-4.png";
import imgT5 from "../assets/image/l3/png/team-member-5.png";
import PageWrapper from "../components/PageWrapper";
import Sidebar from "../components/Sidebar";
import { Select } from "../components/Core";



import imgF from "../assets/image/svg/icon-fire-rounded.svg";
import iconL from "../assets/image/svg/icon-loaction-pin-black.svg";
import iconS from "../assets/image/svg/icon-suitecase.svg";
import iconC from "../assets/image/svg/icon-clock.svg";

const defaultCountries = [
  { value: "sp", label: "Singapore" },
  { value: "bd", label: "Bangladesh" },
  { value: "usa", label: "United States of America" },
  { value: "uae", label: "United Arab Emirates" },
  { value: "pk", label: "Pakistan" },
];
function candidateprofile3() {
  return (
//     <>
//     <div className="pl-lg-5">
//     <h4 className="font-size-6 font-weight-semibold mb-0">
//       Other experts
//     </h4>
//     <ul className="list-unstyled">
//       {/* <!-- Single List --> */}
//       <li className="border-bottom">
//         <Link
//           to="/#"
//           className="media align-items-center py-9 flex-wrap"
//         >
//           <div className="mr-7">
//             <img
//               className="square-72 rounded-3"
//               src={imgT1}
//               alt=""
//             />
//           </div>
//           <div className="">
//             <h4 className="mb-0 font-size-5 font-weight-semibold">
//               David Herison
//             </h4>
//             <p className="mb-0 font-size-3 heading-default-color">
//               UX/UI Designer
//             </p>
//             <span className="font-size-3 text-smoke">
//               <img className="mr-2" src={imgL} alt="" />
//               New York, USA
//             </span>
//           </div>
//         </Link>
//       </li>
//       {/* <!-- Single List End --> */}
//       {/* <!-- Single List --> */}
//       <li className="border-bottom">
//         <Link
//           to="/#"
//           className="media align-items-center py-9 flex-wrap"
//         >
//           <div className="mr-7">
//             <img
//               className="square-72 rounded-3"
//               src={imgT2}
//               alt=""
//             />
//           </div>
//           <div className="">
//             <h4 className="mb-0 font-size-5 font-weight-semibold">
//               Mark Zanitos
//             </h4>
//             <p className="mb-0 font-size-3 heading-default-color">
//               Lead Product Designer
//             </p>
//             <span className="font-size-3 text-smoke">
//               <img className="mr-2" src={imgL} alt="" />
//               New York, USA
//             </span>
//           </div>
//         </Link>
//       </li>
//       {/* <!-- Single List End --> */}
//       {/* <!-- Single List --> */}
//       <li className="border-bottom">
//         <Link
//           to="/#"
//           className="media align-items-center py-9 flex-wrap"
//         >
//           <div className="mr-7">
//             <img
//               className="square-72 rounded-3"
//               src={imgT3}
//               alt=""
//             />
//           </div>
//           <div className="">
//             <h4 className="mb-0 font-size-5 font-weight-semibold">
//               Anna Frankin
//             </h4>
//             <p className="mb-0 font-size-3 heading-default-color">
//               Visual Designer
//             </p>
//             <span className="font-size-3 text-smoke">
//               <img className="mr-2" src={imgL} alt="" />
//               New York, USA
//             </span>
//           </div>
//         </Link>
//       </li>
//       {/* <!-- Single List End --> */}
//       {/* <!-- Single List --> */}
//       <li className="border-bottom">
//         <Link
//           to="/#"
//           className="media align-items-center py-9 flex-wrap"
//         >
//           <div className="mr-7">
//             <img
//               className="square-72 rounded-3"
//               src={imgT4}
//               alt=""
//             />
//           </div>
//           <div className="">
//             <h4 className="mb-0 font-size-5 font-weight-semibold">
//               Jhony Vino
//             </h4>
//             <p className="mb-0 font-size-3 heading-default-color">
//               Creative Director
//             </p>
//             <span className="font-size-3 text-smoke">
//               <img className="mr-2" src={imgL} alt="" />
//               New York, USA
//             </span>
//           </div>
//         </Link>
//       </li>
//       {/* <!-- Single List End --> */}
//       {/* <!-- Single List --> */}
//       <li className="">
//         <Link
//           to="/#"
//           className="media align-items-center py-9 flex-wrap"
//         >
//           <div className="mr-7">
//             <img
//               className="square-72 rounded-3"
//               src={imgT5}
//               alt=""
//             />
//           </div>
//           <div className="">
//             <h4 className="mb-0 font-size-5 font-weight-semibold">
//               Aniasta Hemberg
//             </h4>
//             <p className="mb-0 font-size-3 heading-default-color">
//               Creative Director
//             </p>
//             <span className="font-size-3 text-smoke">
//               <img className="mr-2" src={imgL} alt="" />
//               New York, USA
//             </span>
//           </div>
//         </Link>
//       </li>
//       {/* <!-- Single List End --> */}
//     </ul>
//    </div>
//     </>
    <>
    <PageWrapper>
      <div className="bg-default-1 pt-26 pt-lg-28 pb-13 pb-lg-25">
        <div className="container">
          <div className="row">
            {/* <div className="col-12 col-lg-4 col-md-5 col-xs-8">
              <Sidebar />
            </div> */}
            {/* <!-- Main Body --> */}
            <div className="col-12">
              {/* <!-- form --> */}
              <form action="/" className="search-form">
                <div className="filter-search-form-2 search-1-adjustment bg-white rounded-sm shadow-7 pr-6 py-6 pl-6">
                  <div className="filter-inputs">
                    <div className="form-group position-relative w-lg-45 w-xl-40 w-xxl-45">
                      <input
                        className="form-control focus-reset pl-13"
                        type="text"
                        id="keyword"
                        placeholder="UI Designer"
                      />
                      <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6">
                        <i className="icon icon-zoom-2 text-primary font-weight-bold"></i>
                      </span>
                    </div>
                    {/* <!-- .select-city starts --> */}
                    <div className="form-group position-relative w-lg-55 w-xl-60 w-xxl-55">
                      <Select
                        options={defaultCountries}
                        className="pl-8 h-100 arrow-3 font-size-4 d-flex align-items-center w-100"
                        border={false}
                      />
                      <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6">
                        <i className="icon icon-pin-3 text-primary font-weight-bold"></i>
                      </span>
                    </div>
                    {/* <!-- ./select-city ends --> */}
                  </div>
                  <div className="button-block">
                    <button className="btn btn-primary line-height-reset h-100 btn-submit w-100 text-uppercase">
                      Search
                    </button>
                  </div>
                </div>
              </form>
              <div className="pt-12">
                <div className="d-flex align-items-center justify-content-between mb-6">
                  <h5 className="font-size-4 font-weight-normal text-gray">
                    <span className="heading-default-color">120</span>
                    results for{" "}
                    <span className="heading-default-color">UI Designer</span>
                  </h5>
                  <div className="d-flex align-items-center result-view-type">
                    <Link
                      to="/candidate-profile-3"
                      className="heading-default-color pl-5 font-size-6 hover-text-hitgray active"
                    >
                      <i className="fa fa-list-ul"></i>
                    </Link>
                    {/* <Link
                      to="/search-grid"
                      className="heading-default-color pl-5 font-size-6 hover-text-hitgray"
                    >
                      <i className="fa fa-th-large"></i>
                    </Link> */}
                  </div>
                </div>
                <div className="mb-8">
                  {/* <!-- Single Featured Job --> */}
                  <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3 ">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="media align-items-center">
                          <div className="square-72 d-block mr-8">
                            <img src={imgT1} alt="" />
                          </div>
                          <div>
                            <h3 className="mb-0">
                              <Link
                                to="/candidate-profile"
                                className="font-size-6 heading-default-color"
                              >
                                David Herison
                              </Link>
                            </h3>
                            <Link
                              to="/#"
                              className="font-size-3 text-default-color line-height-2"
                            >
                              UX/UI Designer
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 text-right pt-7 pt-md-5">
                        <div className="media justify-content-md-end">
                          <div className="image mr-5 mt-2">
                            <img src={imgF} alt="" />
                          </div>
                          <p className="font-weight-bold font-size-7 text-hit-gray mb-0">
                            <span className="text-black-2">80-90K</span> PLN
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row pt-8">
                      <div className="col-md-7">
                        <ul className="d-flex list-unstyled mr-n3 flex-wrap">
                          <li>
                            <Link
                              to="/#"
                              className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2"
                            >
                              Agile
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/#"
                              className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2"
                            >
                              Wireframing
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/#"
                              className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2"
                            >
                              Prototyping
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-5">
                        <ul className="d-flex list-unstyled mr-n3 flex-wrap mr-n8 justify-content-md-end">
                          <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                            <span
                              className="mr-4"
                              css={`
                                margin-top: -2px;
                              `}
                            >
                              <img src={iconL} alt="" />
                            </span>
                            <span className="font-weight-semibold">
                              Berlyn, UK
                            </span>
                          </li>
                          <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                            <span
                              className="mr-4"
                              css={`
                                margin-top: -2px;
                              `}
                            >
                              <img src={iconS} alt="" />
                            </span>
                            <span className="font-weight-semibold">
                              Full-time
                            </span>
                          </li>
                          <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                            <span
                              className="mr-4"
                              css={`
                                margin-top: -2px;
                              `}
                            >
                              <img src={iconC} alt="" />
                            </span>
                            <span className="font-weight-semibold">
                              9d ago
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Single Featured Job --> */}
                </div>
                <div className="mb-8">
                  {/* <!-- Single Featured Job --> */}
                  <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3 ">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="media align-items-center">
                          <div className="square-72 d-block mr-8">
                            <img src={imgT2} alt="" />
                          </div>
                          <div>
                            <h3 className="mb-0">
                              <Link
                                to="/candidate-profile"
                                className="font-size-6 heading-default-color"
                              >
                                Mark Zanitos
                              </Link>
                            </h3>
                            <Link
                              to="/#"
                              className="font-size-3 text-default-color line-height-2"
                            >
                              Lead Product Designer
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 text-right pt-7 pt-md-5">
                        <div className="media justify-content-md-end">
                          <div className="image mr-5 mt-2">
                            <img src={imgF} alt="" />
                          </div>
                          <p className="font-weight-bold font-size-7 text-hit-gray mb-0">
                            <span className="text-black-2">120-150K</span> PLN
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row pt-8">
                      <div className="col-md-7">
                        <ul className="d-flex list-unstyled mr-n3 flex-wrap">
                          <li>
                            <Link
                              to="/#"
                              className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2"
                            >
                              Visual Design
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/#"
                              className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2"
                            >
                              Wireframing
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/#"
                              className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2"
                            >
                              Scrum
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-5">
                        <ul className="d-flex list-unstyled mr-n3 flex-wrap mr-n8 justify-content-md-end">
                          <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                            <span
                              className="mr-4"
                              css={`
                                margin-top: -2px;
                              `}
                            >
                              <img src={iconL} alt="" />
                            </span>
                            <span className="font-weight-semibold">
                              Berlyn, UK
                            </span>
                          </li>
                          <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                            <span
                              className="mr-4"
                              css={`
                                margin-top: -2px;
                              `}
                            >
                              <img src={iconS} alt="" />
                            </span>
                            <span className="font-weight-semibold">
                              Full-time
                            </span>
                          </li>
                          <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                            <span
                              className="mr-4"
                              css={`
                                margin-top: -2px;
                              `}
                            >
                              <img src={iconC} alt="" />
                            </span>
                            <span className="font-weight-semibold">
                              9d ago
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Single Featured Job --> */}
                </div>
                <div className="mb-8">
                  {/* <!-- Single Featured Job --> */}
                  <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3 ">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="media align-items-center">
                          <div className="square-72 d-block mr-8">
                            <img src={imgT3} alt="" />
                          </div>
                          <div>
                            <h3 className="mb-0">
                              <Link
                                to="/#"
                                className="font-size-6 heading-default-color"
                              >
                       Anna Frankin                              
</Link>
                            </h3>
                            <Link
                              to="/#"
                              className="font-size-3 text-default-color line-height-2"
                            >
                             Visual Designer 
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 text-right pt-7 pt-md-5">
                        <div className="media justify-content-md-end">
                          <div className="image mr-5 mt-2">
                            <img src={imgF} alt="" />
                          </div>
                          <p className="font-weight-bold font-size-7 text-hit-gray mb-0">
                            <span className="text-black-2">100-120K</span> PLN
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row pt-8">
                      <div className="col-md-7">
                        <ul className="d-flex list-unstyled mr-n3 flex-wrap">
                          <li>
                            <Link
                              to="/#"
                              className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2"
                            >
                             Swift
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/#"
                              className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2"
                            >
                              Creative Director
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/#"
                              className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2"
                            >
                              X Code
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-5">
                        <ul className="d-flex list-unstyled mr-n3 flex-wrap mr-n8 justify-content-md-end">
                          <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                            <span
                              className="mr-4"
                              css={`
                                margin-top: -2px;
                              `}
                            >
                              <img src={iconL} alt="" />
                            </span>
                            <span className="font-weight-semibold">
                              Berlyn, UK
                            </span>
                          </li>
                          <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                            <span
                              className="mr-4"
                              css={`
                                margin-top: -2px;
                              `}
                            >
                              <img src={iconS} alt="" />
                            </span>
                            <span className="font-weight-semibold">
                              Full-time
                            </span>
                          </li>
                          <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                            <span
                              className="mr-4"
                              css={`
                                margin-top: -2px;
                              `}
                            >
                              <img src={iconC} alt="" />
                            </span>
                            <span className="font-weight-semibold">
                              9d ago
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Single Featured Job --> */}
                </div>
                <div className="mb-8">
                  {/* <!-- Single Featured Job --> */}
                  <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3 ">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="media align-items-center">
                          <div className="square-72 d-block mr-8">
                            <img src={imgT4} alt="" />
                          </div>
                          <div>
                            <h3 className="mb-0">
                              <Link
                                to="/#"
                                className="font-size-6 heading-default-color"
                              >
                                Jhony Vino
                              </Link>
                            </h3>
                            <Link
                              to="/#"
                              className="font-size-3 text-default-color line-height-2"
                            >
                              Creative Director
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 text-right pt-7 pt-md-5">
                        <div className="media justify-content-md-end">
                          <div className="image mr-5 mt-2">
                            <img src={imgF} alt="" />
                          </div>
                          <p className="font-weight-bold font-size-7 text-hit-gray mb-0">
                            <span className="text-black-2">80-90K</span> PLN
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row pt-8">
                      <div className="col-md-7">
                        <ul className="d-flex list-unstyled mr-n3 flex-wrap">
                          <li>
                            <Link
                              to="/#"
                              className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2"
                            >
                              Agile
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/#"
                              className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2"
                            >
                              Wireframing
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/#"
                              className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2"
                            >
                              Prototyping
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-5">
                        <ul className="d-flex list-unstyled mr-n3 flex-wrap mr-n8 justify-content-md-end">
                          <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                            <span
                              className="mr-4"
                              css={`
                                margin-top: -2px;
                              `}
                            >
                              <img src={iconL} alt="" />
                            </span>
                            <span className="font-weight-semibold">
                              Berlyn, UK
                            </span>
                          </li>
                          <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                            <span
                              className="mr-4"
                              css={`
                                margin-top: -2px;
                              `}
                            >
                              <img src={iconS} alt="" />
                            </span>
                            <span className="font-weight-semibold">
                              Full-time
                            </span>
                          </li>
                          <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                            <span
                              className="mr-4"
                              css={`
                                margin-top: -2px;
                              `}
                            >
                              <img src={iconC} alt="" />
                            </span>
                            <span className="font-weight-semibold">
                              9d ago
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Single Featured Job --> */}
                </div>
                <div className="mb-8">
                  {/* <!-- Single Featured Job --> */}
                  <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3 ">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="media align-items-center">
                          <div className="square-72 d-block mr-8">
                            <img src={imgT5} alt="" />
                          </div>
                          <div>
                            <h3 className="mb-0">
                              <Link
                                to="/candidate-profile"
                                className="font-size-6 heading-default-color"
                              >
                               Aniasta Hemberg
                              </Link>
                            </h3>
                            <Link
                              to="/#"
                              className="font-size-3 text-default-color line-height-2"
                            >
                              Oculus
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 text-right pt-7 pt-md-5">
                        <div className="media justify-content-md-end">
                          <div className="image mr-5 mt-2">
                            <img src={imgF} alt="" />
                          </div>
                          <p className="font-weight-bold font-size-7 text-hit-gray mb-0">
                            <span className="text-black-2">80-90K</span> PLN
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row pt-8">
                      <div className="col-md-7">
                        <ul className="d-flex list-unstyled mr-n3 flex-wrap">
                          <li>
                            <Link
                              to="/#"
                              className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2"
                            >
                              C++
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/#"
                              className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2"
                            >
                              JavaScprit
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/#"
                              className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2"
                            >
                              ReactJS
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-5">
                        <ul className="d-flex list-unstyled mr-n3 flex-wrap mr-n8 justify-content-md-end">
                          <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                            <span
                              className="mr-4"
                              css={`
                                margin-top: -2px;
                              `}
                            >
                              <img src={iconL} alt="" />
                            </span>
                            <span className="font-weight-semibold">
                              Berlyn, UK
                            </span>
                          </li>
                          <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                            <span
                              className="mr-4"
                              css={`
                                margin-top: -2px;
                              `}
                            >
                              <img src={iconS} alt="" />
                            </span>
                            <span className="font-weight-semibold">
                              Full-time
                            </span>
                          </li>
                          <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                            <span
                              className="mr-4"
                              css={`
                                margin-top: -2px;
                              `}
                            >
                              <img src={iconC} alt="" />
                            </span>
                            <span className="font-weight-semibold">
                              9d ago
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Single Featured Job --> */}
                </div>
                <div className="mb-8">
                  {/* <!-- Single Featured Job --> */}
                  {/* <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3 ">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="media align-items-center">
                          <div className="square-72 d-block mr-8">
                            <img src={imgT5} alt="" />
                          </div>
                          <div>
                            <h3 className="mb-0">
                              <Link
                                to="/#"
                                className="font-size-6 heading-default-color"
                              >
                                Product Designer
                              </Link>
                            </h3>
                            <Link
                              to="/#"
                              className="font-size-3 text-default-color line-height-2"
                            >
                              AirBnb
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 text-right pt-7 pt-md-5">
                        <div className="media justify-content-md-end">
                          <div className="image mr-5 mt-2">
                            <img src={imgF} alt="" />
                          </div>
                          <p className="font-weight-bold font-size-7 text-hit-gray mb-0">
                            <span className="text-black-2">80-90K</span> PLN
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row pt-8">
                      <div className="col-md-7">
                        <ul className="d-flex list-unstyled mr-n3 flex-wrap">
                          <li>
                            <Link
                              to="/#"
                              className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2"
                            >
                              Agile
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/#"
                              className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2"
                            >
                              Wireframing
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/#"
                              className="bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 px-6 py-1 font-size-3 text-black-2 mt-2"
                            >
                              Prototyping
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-5">
                        <ul className="d-flex list-unstyled mr-n3 flex-wrap mr-n8 justify-content-md-end">
                          <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                            <span
                              className="mr-4"
                              css={`
                                margin-top: -2px;
                              `}
                            >
                              <img src={iconL} alt="" />
                            </span>
                            <span className="font-weight-semibold">
                              Berlyn, UK
                            </span>
                          </li>
                          <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                            <span
                              className="mr-4"
                              css={`
                                margin-top: -2px;
                              `}
                            >
                              <img src={iconS} alt="" />
                            </span>
                            <span className="font-weight-semibold">
                              Full-time
                            </span>
                          </li>
                          <li className="mt-2 mr-8 font-size-small text-black-2 d-flex">
                            <span
                              className="mr-4"
                              css={`
                                margin-top: -2px;
                              `}
                            >
                              <img src={iconC} alt="" />
                            </span>
                            <span className="font-weight-semibold">
                              9d ago
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div> */}
                  {/* <!-- End Single Featured Job --> */}
                </div>
                <div className="text-center pt-5 pt-lg-13">
                  <Link
                    to="/#"
                    className="text-green font-weight-bold text-uppercase font-size-3"
                  >
                    Load More <i className="fas fa-sort-down ml-3"></i>
                  </Link>
                </div>
              </div>
              {/* <!-- form end --> */}
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  </>
  )
}

export default candidateprofile3;