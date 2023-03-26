/* eslint-disable no-unused-vars */
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="container my-5">
        <footer
          className="text-center text-lg-start text-dark"
          StyleHTMLAttributes="background-color: #ECEFF1"
        >
          <section>
            <div className="line">
              <hr />
            </div>
          </section>

          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Tees And Company</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto " />
                  <p className="para">
                    Tees&Company (T&C) is a registered brand which customised a
                    schools and colleges dresses for the students, various types
                    jerseys for different sports and officials t-shirts for
                    advertising, in the best price. T&C is a concept of youths
                    for designing a various types of ideas through t-shirts in
                    all over india.
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Products</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    StyleHTMLAttributes="width: 60px; background-color: #7c4dff; height: 2px"
                  />
                  <p>
                    <a href="#!" className="text-dark">
                      Biowash cotton 190 to 200 GSM
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">
                      2way lycra 170 to 180 GSM
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">
                      4way lycra 220 to 230 GSM
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">
                      Parasuit 230 to 240 GSM
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">
                      PP 150 to 160 GSM
                    </a>
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Products</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    StyleHTMLAttributes="width: 60px; background-color: #7c4dff; height: 2px"
                  />
                  <p>
                    <a href="#!" className="text-dark">
                      Azlone (squirt absorbing) 170 to 180 GSM
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">
                      Dryfit 170 to 180 GSM
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">
                      Metty cotton 220 to 230
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">
                      Metty spun 200 to 210 GSM
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">
                      Hozri cotton 240 to 250 GSM
                    </a>
                  </p>{" "}
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold">Contact</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    StyleHTMLAttributes="width: 60px; background-color: #7c4dff; height: 2px"
                  />
                  <p>
                    <i className="fas fa-home mr-3"></i> Triveni Residency
                    ghwarighat road Jabalpur , Madhya Pradesh{" "}
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3"></i>{" "}
                    teesandcompany@gmail.co.in
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3"></i> +91 8839249259
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div
            className="text-center p-3"
            StyleHTMLAttributes="background-color: rgba(0, 0, 0, 0.2)"
          >
            © 2020 Copyright:
            <a className="text-dark" href="/">
              Tees & Company
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
