import React from "react";
import "./Products.css";
import demo1 from "./demoimages/demo1.jpg";
import demo2 from "./demoimages/demo2.jpg";
import demo3 from "./demoimages/demo3.jpg";
import demo4 from "./demoimages/demo4.jpg";
import demo5 from "./demoimages/demo5.jpg";
import demo6 from "./demoimages/demo6.jpg";
import demo7 from "./demoimages/demo7.jpg";
import demo8 from "./demoimages/demo8.jpg";

function Products() {
  return (
    <div>
      <div className="first container-fluid bg-trasparent my-4 p-3">
        <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
          
          
          <div className="col hp">
            <div className="card h-100 shadow-sm">
              <a href="/">
                <img src={demo1} className="card-img-top" alt="product.title" />
              </a>

              <div className="label-top shadow-sm">CAP</div>
              <div className="card-body">
                <div className="clearfix mb-3">
                  <span className="float-start badge rounded-pill bg-success">
                    PRICE HERE
                  </span>
                </div>
                <h5 className="card-title">
                  <a target="_blank" href="/">
                    ARMY CAP , Cap With Army Design
                  </a>
                </h5>

                <div className="d-grid gap-2 my-4">
                  <a href="/" className="btn btn-warning bold-btn">
                    View Product
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col hp">
            <div className="card h-100 shadow-sm">
              <a href="/">
                <img src={demo2} className="card-img-top" alt="product.title" />
              </a>

              <div className="label-top shadow-sm">Tee Combos</div>
              <div className="card-body">
                <div className="clearfix mb-3">
                  <span className="float-start badge rounded-pill bg-success">
                    PRICE HERE
                  </span>
                </div>
                <h5 className="card-title">
                  <a target="_blank" href="/">
                    T-Shirt Combo , 2 Black Tees 
                  </a>
                </h5>

                <div className="d-grid gap-2 my-4">
                  <a href="/" className="btn btn-warning bold-btn">
                    View Product
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col hp">
            <div className="card h-100 shadow-sm">
              <a href="/">
                <img src={demo3} className="card-img-top" alt="product.title" />
              </a>

              <div className="label-top shadow-sm">COMBO</div>
              <div className="card-body">
                <div className="clearfix mb-3">
                  <span className="float-start badge rounded-pill bg-success">
                    PRICE HERE
                  </span>
                </div>
                <h5 className="card-title">
                  <a target="_blank" href="/">
                    Black Tee And Lower Combo
                  </a>
                </h5>

                <div className="d-grid gap-2 my-4">
                  <a href="/" className="btn btn-warning bold-btn">
                    View Product
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col hp">
            <div className="card h-100 shadow-sm">
              <a href="/">
                <img src={demo4} className="card-img-top" alt="product.title" />
              </a>

              <div className="label-top shadow-sm">COMBO</div>
              <div className="card-body">
                <div className="clearfix mb-3">
                  <span className="float-start badge rounded-pill bg-success">
                    PRICE HERE
                  </span>
                </div>
                <h5 className="card-title">
                  <a target="_blank" href="/">
                  Blue Tee And Lower Combo
                  </a>
                </h5>

                <div className="d-grid gap-2 my-4">
                  <a href="/" className="btn btn-warning bold-btn">
                    View Product
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col hp">
            <div className="card h-100 shadow-sm">
              <a href="/">
                <img src={demo5} className="card-img-top" alt="product.title" />
              </a>

              <div className="label-top shadow-sm">SHIRT</div>
              <div className="card-body">
                <div className="clearfix mb-3">
                  <span className="float-start badge rounded-pill bg-success">
                    PRICE HERE
                  </span>
                </div>
                <h5 className="card-title">
                  <a target="_blank" href="/">
                    Two Shirt Combo
                  </a>
                </h5>

                <div className="d-grid gap-2 my-4">
                  <a href="/" className="btn btn-warning bold-btn">
                    View Product
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col hp">
            <div className="card h-100 shadow-sm">
              <a href="/">
                <img src={demo6} className="card-img-top" alt="product.title" />
              </a>

              <div className="label-top shadow-sm">LOWER</div>
              <div className="card-body">
                <div className="clearfix mb-3">
                  <span className="float-start badge rounded-pill bg-success">
                    PRICE HERE
                  </span>
                </div>
                <h5 className="card-title">
                  <a target="_blank" href="/">
                    ARMY LOWER , Lower With Army Effects
                  </a>
                </h5>

                <div className="d-grid gap-2 my-4">
                  <a href="/" className="btn btn-warning bold-btn">
                    View Product
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col hp">
            <div className="card h-100 shadow-sm">
              <a href="/">
                <img src={demo7} className="card-img-top" alt="product.title" />
              </a>

              <div className="label-top shadow-sm">TEES</div>
              <div className="card-body">
                <div className="clearfix mb-3">
                  <span className="float-start badge rounded-pill bg-success">
                    PRICE HERE
                  </span>
                </div>
                <h5 className="card-title">
                  <a target="_blank" href="/">
                    Pair of Two White Shirts
                  </a>
                </h5>

                <div className="d-grid gap-2 my-4">
                  <a href="/" className="btn btn-warning bold-btn">
                    View Product
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col hp">
            <div className="card h-100 shadow-sm">
              <a href="/">
                <img src={demo8} className="card-img-top" alt="product.title" />
              </a>

              <div className="label-top shadow-sm">JACKETS</div>
              <div className="card-body">
                <div className="clearfix mb-3">
                  <span className="float-start badge rounded-pill bg-success">
                    PRICE HERE
                  </span>
                </div>
                <h5 className="card-title">
                  <a target="_blank" href="/">
                    Green Jackets
                  </a>
                </h5>

                <div className="d-grid gap-2 my-4">
                  <a href="/" className="btn btn-warning bold-btn">
                    View Product
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Products;

// {/* Heree */}
// <div className="col hp">
//   <div className="card h-100 shadow-sm">
//     <a href="/">
//       <img src={demo1} className="card-img-top" alt="product.title" />
//     </a>

//     <div className="label-top shadow-sm">
//       {/* <a className="text-white" href="/">
//         CAP
//       </a> */}
//       CAP
//     </div>
//     <div className="card-body">
//       <div className="clearfix mb-3">
//         <span className="float-start badge rounded-pill bg-success">
//           PRICE HERE
//         </span>

//         {/* <span className="float-end">
//           <a
//             href="/"
//             className="small text-muted text-uppercase aff-link"
//           >
//             reviews
//           </a>
//         </span> */}

//       </div>
//       <h5 className="card-title">
//         <a target="_blank" href="/">
//           ARMY CAP , Description Here
//         </a>
//       </h5>

//       <div className="d-grid gap-2 my-4">
//         <a href="/" className="btn btn-warning bold-btn">
//           View Product
//         </a>
//       </div>

//       {/* <div className="clearfix mb-1">
//         <span className="float-start">
//           <a href="/">
//             <i className="fas fa-question-circle"></i>
//           </a>
//         </span>

//         <span className="float-end">
//           <i
//             className="far fa-heart"
//             StyleHTMLAttributes="cursor: pointer"
//           ></i>
//         </span>
//       </div> */}
//     </div>
//   </div>
// </div>

// {/* till Here */}
