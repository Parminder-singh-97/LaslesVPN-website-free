import React from "react";

const WeHave = () => {
  return (
    <>
      <section id="weHave">


        <div className="container shadow mb-5 p-4" data-aos="fade-up" data-aos-duration="2000">


          <div className="row align-items-center ">
            <div className="col-sm-12 col-md-4 col-lg-4 col-12 border-end p-5 text-center d-flex justify-content-center align-items-center ">
              <div className="card mb-3 border-0" style={{ maxWidth: 150, height: 50 }}>
                <div className="row g-0 ">
                  <div className="col-md-4 d-flex justify-content-center align-items-center ">
                    <img
                      src="/icon/user.png"
                      className="img-fluid rounded-start"
                      alt="user"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h6 className="card-title fw-bolder p-0 m-0">90+</h6>
                      <p className="card-text p-0 m-0">Users</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-sm-12 col-md-4 col-lg-4 col-12 p-5 text-center d-flex justify-content-center align-items-center">

            <div className="card mb-3 border-0" style={{ maxWidth: 150, height: 50 }}>
                <div className="row g-0 ">
                  <div className="col-md-4 d-flex justify-content-center align-items-center ">
                    <img
                      src="/icon/location.png"
                      className="img-fluid rounded-start"
                      alt="user"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h6 className="card-title fw-bolder p-0 m-0">30+</h6>
                      <p className="card-text p-0 m-0 text-nowrap">Locations</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-12 border-start p-5 text-center d-flex justify-content-center align-items-center">

            <div className="card mb-3 border-0" style={{ maxWidth: 150, height: 50 }}>
                <div className="row g-0 ">
                  <div className="col-md-4 d-flex justify-content-center align-items-center ">
                    <img
                      src="/icon/Server.png"
                      className="img-fluid rounded-start"
                      alt="user"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h6 className="card-title fw-bolder p-0 m-0">50+</h6>
                      <p className="card-text p-0 m-0">Servers</p>
                    </div>
                  </div>
                </div>
              </div>
                
            </div>
          </div>



        </div>



      </section>
    </>
  );
};

export default WeHave;
