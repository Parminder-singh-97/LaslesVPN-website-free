import React from "react";

const Plans = () => {
  return (
    <>
      <section id="Plans">
        <div className="container my-5">
          <div className="row text-center pb-5" data-aos="fade-up" data-aos-duration="2000">
            <h1>Choose Your Plan</h1>
            <p className="text-center w-50 m-auto">
              Let's choose the package that is best for you and explore it
              happily and cheerfully.
            </p>
          </div>

          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4 col-12 mt-2  " data-aos="fade-up" data-aos-duration="1000">
              <div
                className="card d-flex flex-column hover "
                style={{ width: "100%", height: "700px" }}
              >
                <div className="d-flex justify-content-center align-items-center pt-5">
                  <img
                    src="/icon/Free.png"
                    className="card-img-top  "
                    alt="Free"
                    style={{ width: 120 }}
                  />
                </div>
                <div className="card-body p-4 d-flex flex-column justify-content-between align-items-center">
                  <div>
                    <h5 className="card-title text-center pb-4">Free Plan</h5>
                    <p>
                      {" "}
                      <img src="/icon/OK-tick.png" alt="" /> Unlimited Bandwitch
                    </p>
                    <p>
                      {" "}
                      <img src="/icon/OK-tick.png" alt="" /> Encrypted
                      Connection
                    </p>
                    <p>
                      {" "}
                      <img src="/icon/OK-tick.png" alt="" /> No Traffic Logs
                    </p>
                    <p>
                      {" "}
                      <img src="/icon/OK-tick.png" alt="" /> Works on All
                      Devices
                    </p>
                  </div>

                  <div className="text-center">
                    <h2>Free</h2>
                    <button className="btn btn-outline-warning px-5 rounded-pill text-black border-2 fw-4">
                      {" "}
                      Select
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4 col-12 mt-2  " data-aos="fade-up" data-aos-duration="2000">
              <div
                className="card d-flex flex-column hover "
                style={{ width: "100%", height: "700px" }}
              >
                <div className="d-flex justify-content-center align-items-center pt-5">
                  <img
                    src="/icon/Free.png"
                    className="card-img-top  "
                    alt="Free"
                    style={{ width: 120 }}
                  />
                </div>
                <div className="card-body p-4 d-flex flex-column justify-content-between align-items-center">
                  <div>
                    <h5 className="card-title text-center pb-4">
                      Standard Plan
                    </h5>
                    <p>
                      {" "}
                      <img src="/icon/OK-tick.png" alt="" /> Unlimited Bandwitch
                    </p>
                    <p>
                      {" "}
                      <img src="/icon/OK-tick.png" alt="" /> Encrypted
                      Connection
                    </p>
                    <p>
                      {" "}
                      <img src="/icon/OK-tick.png" alt="" /> Yes Traffic Logs
                    </p>
                    <p>
                      {" "}
                      <img src="/icon/OK-tick.png" alt="" /> Works on All
                      Devices
                    </p>
                    <p>
                      {" "}
                      <img src="/icon/OK-tick.png" alt="" /> Connect Anyware
                    </p>
                  </div>

                  <div className="text-center">
                    <h2>9$ / mo</h2>
                    <button className="btn btn-outline-warning px-5 rounded-pill text-black border-2 fw-4">
                      {" "}
                      Select
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4 col-12 mt-2  " data-aos="fade-up" data-aos-duration="3000">
              <div
                className="card d-flex flex-column hover "
                style={{ width: "100%", height: "700px" }}
              >
                <div className="d-flex justify-content-center align-items-center pt-5">
                  <img
                    src="/icon/Free.png"
                    className="card-img-top  "
                    alt="Free"
                    style={{ width: 120 }}
                  />
                </div>
                <div className="card-body p-4 d-flex flex-column justify-content-between align-items-center">
                  <div>
                    <h5 className="card-title text-center pb-4">
                      Premium Plan
                    </h5>
                    <p>
                      {" "}
                      <img src="/icon/OK-tick.png" alt="" /> Unlimited Bandwitch
                    </p>
                    <p>
                      {" "}
                      <img src="/icon/OK-tick.png" alt="" /> Encrypted
                      Connection
                    </p>
                    <p>
                      {" "}
                      <img src="/icon/OK-tick.png" alt="" /> No Traffic Logs
                    </p>
                    <p>
                      {" "}
                      <img src="/icon/OK-tick.png" alt="" /> Works on All
                      Devices
                    </p>
                    <p>
                      {" "}
                      <img src="/icon/OK-tick.png" alt="" /> Connect Anyware
                    </p>
                    <p>
                      {" "}
                      <img src="/icon/OK-tick.png" alt="" /> Get New Features
                    </p>
                  </div>

                  <div className="text-center">
                    <h2>12$ / mo</h2>
                    <button className="  btn btn-outline-warning px-5 rounded-pill text-black border-2 fw-4">
                      {" "}
                      Select
                    </button>
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

export default Plans;
