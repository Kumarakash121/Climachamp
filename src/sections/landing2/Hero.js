import React from "react";
import { Button } from "react-bootstrap";

import { Select } from "../../components/Core";
import imgP from "../../assets/image/patterns/globe-pattern.png";

const defaultCountries = [
  { value: "usa", label: "United States of America" },
  { value: "uk", label: "United Kingdom" },
  
];

const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <div className="position-relative z-index-1 bg-squeeze pt-26 dark-mode-texts">
        <div className="pos-abs-tr h-100">
          <img src={imgP} alt="" className="h-100" />
        </div>
        <div className="container position-static">
          <div className="row position-relative align-items-center position-static">
            <div
              className="col-xxl-7 col-xl-8 col-lg-9 pt-lg-23 pb-lg-33 pb-md-28 pb-xs-26 pb-29 pt-md-20"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              <div className="row">
                <div className="col-xxl-8 col-xl-7 col-md-8 col-sm-10">
                <h1 className="font-size-5 mb-5 pr-md-20 pr-lg-0" style={{ color: '#4cae9b',fontSize:'20px',fontStyle:'Neue Haas Grotesk Display Pro Roman' }}>
              Hire Sustainability, Climate Tech, ESG
              Professionals For Your Next Project

              </h1>

              <h1 className="font-size-5 mb-8 pr-md-20 pr-lg-0" style={{ color: '#2b2b2b',fontSize:'20px',fontStyle:'Neue Haas Grotesk Display Pro Roman' }} >
              Search For Projects that need your
              skills to accomplish the goals.


              </h1>

              <button 
  className="mb-8 " 
  style={{
    backgroundColor: '#25ae81',
    borderRadius: '8px',
    padding: '10px 20px',
    color: 'white',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',  // Added to horizontally center the text
  }}
>
  Get Started
</button>         
                </div>
              </div>
            </div>
            {/* <!-- Hero Form --> */}
            <div className="col-lg-11 col-12 translateY-50 pos-abs-bl">
              <form
                action="/"
                className="search-form"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="500"
              >
                <div className="filter-search-form-2 bg-white rounded-sm shadow-7 pr-8 py-7 pl-6">
                  <div className="filter-inputs">
                    <div className="form-group position-relative">
                      <input
                        className="form-control focus-reset pl-13"
                        type="text"
                        id="keyword"
                        placeholder="Type Job title, keywords"
                      />
                      <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6">
                        <i className="icon icon-zoom-2 text-primary font-weight-bold"></i>
                      </span>
                    </div>
                    {/* <!-- .select-city starts --> */}
                    <div className="form-group position-relative">
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
                    <Button
                      type="submit"
                      className="line-height-reset h-100 btn-submit w-100 text-uppercase"
                      style={{backgroundColor:'#25ae81'}}
                    >
                      Search
                    </Button>
                  </div>
                </div>
              </form>
            </div>
            {/* <!-- End Hero Form --> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
