import React from "react";
import "./Hero.css";
import banner1 from "../../assets/Images/banner1.jpg";
import banner2 from "../../assets/Images/banner2.jpg";
import banner3 from "../../assets/Images/banner3.jpg";
import banner4 from "../../assets/Images/banner4.jpg";

function Hero() {
  return (
    <>
      <div id="carouselExampleAutoplaying" class="carousel slide mainCarousel" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={banner1} class="d-block w-100" alt="..."/>
    </div>
    {/* <div class="carousel-item">
      <img src={banner2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={banner3} class="d-block w-100" alt="..."/>
    </div> */}
    <div class="carousel-item">
      <img src={banner4} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>



    </>
  );
}

export default Hero;
