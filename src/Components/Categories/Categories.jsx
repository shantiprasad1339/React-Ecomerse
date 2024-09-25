import React from "react";
import "./Categories.css";
import men from "../../assets/Images/mencloths.jpg";
import women from "../../assets/Images/womencloth.jpg";
import kids from "../../assets/Images/kidscloth.jpg";
import iconic from "../../assets/Images/iconiccloths.jpg";

function Categories() {
  return (
    <>
    <div className="container-fluid categoriesPart">

      <div className="container ">
        <div className=" row">
          <div className="col-xl-3 col-md-6">
            <div class="cont">
              <div class="product-card">
                <div class="product-card__image">
                  <img src={men} alt="Red Nike Shoes" />
                </div>
                <div class="product-card__info">
                  <h2 class="product-card__title">MEN</h2>
                  <p class="product-card__description">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem, ipsum dolor.
                  </p>
                  <div class="product-card__price-row"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div class="cont">
              <div class="product-card">
                <div class="product-card__image">
                  <img src={women} alt="Red Nike Shoes" />
                </div>
                <div class="product-card__info">
                  <h2 class="product-card__title">WOMEN</h2>
                  <p class="product-card__description">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem, ipsum dolor.
                  </p>
                  <div class="product-card__price-row"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div class="cont">
              <div class="product-card">
                <div class="product-card__image">
                  <img
                  src={kids}
                    alt="Red Nike Shoes"
                  />
                </div>
                <div class="product-card__info">
                  <h2 class="product-card__title">KIDS</h2>
                  <p class="product-card__description">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem, ipsum dolor.
                  </p>
                  <div class="product-card__price-row"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div class="cont">
              <div class="product-card">
                <div class="product-card__image">
                  <img
                  src={iconic}
                    alt="Red Nike Shoes"
                  />
                </div>
                <div class="product-card__info">
                  <h2 class="product-card__title">ICONIC</h2>
                  <p class="product-card__description">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem, ipsum dolor.
                  </p>
                  <div class="product-card__price-row"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

    </>
  );
}

export default Categories;
