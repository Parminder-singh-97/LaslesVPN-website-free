import React from "react";

const Hero = () => {
  return (
    <>
      <div className="container pt-sm-5 pt-md-0 pt-lg-0 pt-5  vh-100 d-flex justify-content-between align-items-center " id="Hero">
        <div className="row mx-4" >

          <div className="col-sm-12 col-md-6 col-lg-6 col-12 d-flex flex-column text-start gap-4 " data-aos="fade-up" data-aos-duration="2000" >
            <h2>
              Want anything to be easy with{" "}
              <span className="h1 fw-bold"> LaslesVPN. </span>
            </h2>

            <p>
              Provide a network for all your needs with ease and fun using
              LaslesVPN discover interesting features from us.
            </p>
            <div>
              <button className="orange btn shadow rounded-pill ">
                Get Started
              </button>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-12" data-aos="fade-up" data-aos-duration="2000">
            <img
              src="/hero-img/hero1.svg"
              alt="Hero1"
              className="img-fluid pt-4"
            />
          </div>

        </div>
      </div>
    </>
  );
};

export default Hero;
