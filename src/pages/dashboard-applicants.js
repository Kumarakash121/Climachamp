import React, { useContext } from "react";
import { Link } from "gatsby";
import PageWrapper from "../components/PageWrapper";
import { Select } from "../components/Core";
import GlobalContext from "../context/GlobalContext";
import CountUp from "react-countup";
import LazyLoad from "react-lazyload";
import imgP1 from "../assets/image/table-one-profile-image-1.png";
import imgP2 from "../assets/image/table-one-profile-image-2.png";
import imgP3 from "../assets/image/table-one-profile-image-3.png";
import imgP4 from "../assets/image/table-one-profile-image-4.png";
import imgP5 from "../assets/image/table-one-profile-image-5.png";
import { useState } from "react";
// import { Svg, Polyline } from 'react-native-svg';
import '../scss/button.css';


const defaultJobs = [
  { value: "pd", label: "Product Designer" },
  { value: "gd", label: "Graphics Designer" },
  { value: "fd", label: "Frontend Developer" },
  { value: "bd", label: "Backend Developer" },
  { value: "cw", label: "Content Writer" },
];

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  borderRadius: '20px',
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.3s, color 0.3s',
  margin: '5px',
};

const DashboardApplicants = () => {
  const gContext = useContext(GlobalContext);
  const [activeStep, setActiveStep] = useState(0);

  const handleStepClick = (index) => {
    setActiveStep(index);
  };
  return (
    <>
      <PageWrapper
        headerConfig={{
          button: "profile",
          isFluid: true,
          bgClass: "bg-default",
          reveal: false,
        }}
      >
        <div className="dashboard-main-container mt-25 mt-lg-31">
          <div className="container">
            <div className="mb-14">
              <div className="row mb-11 align-items-center">
                <div className="col-lg-6 mb-lg-0 mb-4">
                  <h3 className="font-size-6 mb-0">Applicants List (12)</h3>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex flex-wrap align-items-center justify-content-lg-end">
                    <p className="font-size-4 mb-0 mr-6 py-2">Filter by Job:</p>
                    <div className="h-px-48">
                      <Select
                        options={defaultJobs}
                        className="pl-0 h-100 arrow-3 arrow-3-black min-width-px-273  text-black-2 d-flex align-items-center w-100"
                        border={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
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
            <div>
        
     
      <div className="steps-container">
      <div 
        className={`steps ${activeStep === 0 ? 'active' : ''}`}
        onClick={() => handleStepClick(0)}
      >
        <span>Received(256)</span>
      </div>
      <div
        className={`steps ${activeStep === 1 ? 'active' : ''}`}
        onClick={() => handleStepClick(1)}
      >
        <span>Messaged(25)</span>
      </div>
      <div
        className={`steps ${activeStep === 2 ? 'active' : ''}`}
        onClick={() => handleStepClick(2)}
      >
        <span>Hired(0)</span>
      </div>
    </div>
     
    </div>
              <div className="bg-white shadow-8 pt-7 rounded pb-8 px-11">
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="pl-0  border-0 font-size-4 font-weight-normal"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        >
                          Applied as
                        </th>
                        <th
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        >
                          Applied on
                        </th>
                        <th
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        ></th>
                        <th
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        ></th>
                        <th
                          scope="col"
                          className="border-0 font-size-4 font-weight-normal"
                        ></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border border-color-2">
                        <th scope="row" className="pl-6 border-0 py-7 pr-0">
                          <Link
                            to="/candidate-profile"
                            className="media min-width-px-235 align-items-center"
                          >
                            <div className="circle-36 mr-6">
                              <img src={imgP1} alt="" className="w-100" />
                            </div>
                            <h4 className="font-size-4 mb-0 font-weight-semibold text-black-2">
                              Nicolas Bradley
                            </h4>
                          </Link>
                        </th>
                        <td className="table-y-middle py-7 min-width-px-235 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            Senior Project Manager
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            12 July, 2020
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <div className="">
                            <a
                              href="/#"
                              className="font-size-3 font-weight-bold text-black-2 text-uppercase"
                              onClick={(e) => {
                                e.preventDefault();
                                gContext.toggleApplicationModal();
                              }}
                            >
                              View Application
                            </a>
                          </div>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-110 pr-0">
                          <div className="">
                            <Link
                              to="/contact"
                              className="font-size-3 font-weight-bold text-green text-uppercase"
                            >
                              Contact
                            </Link>
                          </div>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-100 pr-0">
                          <div className="">
                            <Link
                              to="/#"
                              className="font-size-3 font-weight-bold text-red-2 text-uppercase"
                            >
                              Reject
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr className="border border-color-2">
                        <th scope="row" className="pl-6 border-0 py-7 pr-0">
                          <Link
                            to="/candidate-profile"
                            className="media min-width-px-235 align-items-center"
                          >
                            <div className="circle-36 mr-6">
                              <img src={imgP2} alt="" className="w-100" />
                            </div>
                            <h4 className="font-size-4 mb-0 font-weight-semibold text-black-2">
                              Elizabeth Gomez
                            </h4>
                          </Link>
                        </th>
                        <td className="table-y-middle py-7 min-width-px-235 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            Senior Project Manager
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            14 July, 2020
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <div className="">
                            <a
                              href="/#"
                              className="font-size-3 font-weight-bold text-black-2 text-uppercase"
                              onClick={(e) => {
                                e.preventDefault();
                                gContext.toggleApplicationModal();
                              }}
                            >
                              View Application
                            </a>
                          </div>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-110 pr-0">
                          <div className="">
                            <Link
                              to="/contact"
                              className="font-size-3 font-weight-bold text-green text-uppercase"
                            >
                              Contact
                            </Link>
                          </div>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-100 pr-0">
                          <div className="">
                            <Link
                              to="/#"
                              className="font-size-3 font-weight-bold text-red-2 text-uppercase"
                            >
                              Reject
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr className="border border-color-2">
                        <th scope="row" className="pl-6 border-0 py-7 pr-0">
                          <Link
                            to="/candidate-profile"
                            className="media min-width-px-235 align-items-center"
                          >
                            <div className="circle-36 mr-6">
                              <img src={imgP3} alt="" className="w-100" />
                            </div>
                            <h4 className="font-size-4 mb-0 font-weight-semibold text-black-2">
                              Joe Wade
                            </h4>
                          </Link>
                        </th>
                        <td className="table-y-middle py-7 min-width-px-235 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            Head of Marketing
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            14 July, 2020
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <div className="">
                            <a
                              href="/#"
                              className="font-size-3 font-weight-bold text-black-2 text-uppercase"
                              onClick={(e) => {
                                e.preventDefault();
                                gContext.toggleApplicationModal();
                              }}
                            >
                              View Application
                            </a>
                          </div>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-110 pr-0">
                          <div className="">
                            <Link
                              to="/contact"
                              className="font-size-3 font-weight-bold text-green text-uppercase"
                            >
                              Contact
                            </Link>
                          </div>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-100 pr-0">
                          <div className="">
                            <Link
                              to="/#"
                              className="font-size-3 font-weight-bold text-red-2 text-uppercase"
                            >
                              Reject
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr className="border border-color-2">
                        <th scope="row" className="pl-6 border-0 py-7 pr-0">
                          <Link
                            to="/candidate-profile"
                            className="media min-width-px-235 align-items-center"
                          >
                            <div className="circle-36 mr-6">
                              <img src={imgP4} alt="" className="w-100" />
                            </div>
                            <h4 className="font-size-4 mb-0 font-weight-semibold text-black-2">
                              Roger Hawkins
                            </h4>
                          </Link>
                        </th>
                        <td className="table-y-middle py-7 min-width-px-235 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            UI Designer
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            16 July, 2020
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <div className="">
                            <a
                              href="/#"
                              className="font-size-3 font-weight-bold text-black-2 text-uppercase"
                              onClick={(e) => {
                                e.preventDefault();
                                gContext.toggleApplicationModal();
                              }}
                            >
                              View Application
                            </a>
                          </div>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-110 pr-0">
                          <div className="">
                            <Link
                              to="/contact"
                              className="font-size-3 font-weight-bold text-green text-uppercase"
                            >
                              Contact
                            </Link>
                          </div>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-100 pr-0">
                          <div className="">
                            <Link
                              to="/#"
                              className="font-size-3 font-weight-bold text-red-2 text-uppercase"
                            >
                              Reject
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr className="border border-color-2">
                        <th scope="row" className="pl-6 border-0 py-7 pr-0">
                          <Link
                            to="/candidate-profile"
                            className="media min-width-px-235 align-items-center"
                          >
                            <div className="circle-36 mr-6">
                              <img src={imgP5} alt="" className="w-100" />
                            </div>
                            <h4 className="font-size-4 mb-0 font-weight-semibold text-black-2">
                              Marie Green
                            </h4>
                          </Link>
                        </th>
                        <td className="table-y-middle py-7 min-width-px-235 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            Senior Project Manager
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <h3 className="font-size-4 font-weight-normal text-black-2 mb-0">
                            21 July, 2020
                          </h3>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-170 pr-0">
                          <div className="">
                            <a
                              href="/#"
                              className="font-size-3 font-weight-bold text-black-2 text-uppercase"
                              onClick={(e) => {
                                e.preventDefault();
                                gContext.toggleApplicationModal();
                              }}
                            >
                              View Application
                            </a>
                          </div>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-110 pr-0">
                          <div className="">
                            <Link
                              to="/contact"
                              className="font-size-3 font-weight-bold text-green text-uppercase"
                            >
                              Contact
                            </Link>
                          </div>
                        </td>
                        <td className="table-y-middle py-7 min-width-px-100 pr-0">
                          <div className="">
                            <Link
                              to="/#"
                              className="font-size-3 font-weight-bold text-red-2 text-uppercase"
                            >
                              Reject
                            </Link>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="pt-2">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination pagination-hover-primary rounded-0 ml-n2">
                      <li className="page-item rounded-0 flex-all-center">
                        <a
                          href="/#"
                          className="page-link rounded-0 border-0 px-3active"
                          aria-label="Previous"
                        >
                          <i className="fas fa-chevron-left"></i>
                        </a>
                      </li>
                      <li className="page-item">
                        <a
                          href="/#"
                          className="page-link border-0 font-size-4 font-weight-semibold px-3"
                        >
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a
                          href="/#"
                          className="page-link border-0 font-size-4 font-weight-semibold px-3"
                        >
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a
                          href="/#"
                          className="page-link border-0 font-size-4 font-weight-semibold px-3"
                        >
                          3
                        </a>
                      </li>
                      <li className="page-item disabled">
                        <a
                          href="/#"
                          className="page-link border-0 font-size-4 font-weight-semibold px-3"
                        >
                          ...
                        </a>
                      </li>
                      <li className="page-item ">
                        <a
                          href="/#"
                          className="page-link border-0 font-size-4 font-weight-semibold px-3"
                        >
                          7
                        </a>
                      </li>
                      <li className="page-item rounded-0 flex-all-center">
                        <a
                          href="/#"
                          className="page-link rounded-0 border-0 px-3"
                          aria-label="Next"
                        >
                          <i className="fas fa-chevron-right"></i>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default DashboardApplicants;
