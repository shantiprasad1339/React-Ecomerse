import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/Images/logo.png";
function Navbar() {
  return (
    <>
      <div className="container-fluid">
        <div className="row marque">
          <marquee behavior="" direction="">
            <i
              class="fa-solid fa-bolt-lightning"
              style={{ color: "white", marginLeft: "5px", marginRight: "5px" }}
            ></i>
            sit amet consectetur adipisicing elit. Nisi repellat aliquam totam
            commodi laborum temporibus exercitationem{" "}
            <i
              class="fa-solid fa-bolt-lightning"
              style={{ color: "white", marginLeft: "5px", marginRight: "5px" }}
            ></i>
            reiciendis quod cumque aliquid.{" "}
            <i
              class="fa-solid fa-bolt-lightning"
              style={{ color: "white", marginLeft: "5px", marginRight: "5px" }}
            ></i>
          </marquee>
        </div>
      </div>
      <MainNav />
    </>
  );
}

export default Navbar;

export function MainNav() {
  return (
    <>
      <nav className="navbar">
        <div className="navLogo">
          <img src={logo} alt="SiteLogo" />
        </div>
        <div className="middlesection">
          <div className="Searchinputfield">
            <input type="text" placeholder="Search Here" />
            <button className="">
              search <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <ul className="navlists">
            <li>Shop</li>
            <li>Categories</li>
            <li>Trending</li>
            <li>ContactUs</li>
          </ul>
        </div>

        <div className="logIn">
          <button className="LogIn-button">Login</button>
          <i className="fa-solid fa-cart-shopping cart-Logo">
            <p>2</p>
          </i>
        </div>
      </nav>
    </>
  );
}
