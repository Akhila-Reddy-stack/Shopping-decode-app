import React from "react";
import "../../styles/sidebar.scss";
import { Row } from "reactstrap";
import user from "../../Images/user/userImg.png";
import scan from "../../Images/user/barcodebg.png";
import offer from "../../Images/user/offer.png";
import account from "../../Images/user/account.png";
import MenuIcon from "@material-ui/icons/Menu";
import headerIcon from "../../Images/user/morrisons.png";
import CancelIcon from "@material-ui/icons/Cancel";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonIcon from "@material-ui/icons/Person";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import RoomIcon from "@material-ui/icons/Room";
class SideNav extends React.Component {
  state = {
    state: {
      showNav: false,
    },
  };

  openNavClick = (e) => {
    e.preventDefault();
    this.openNav();
  };

  closeNavClick = (e) => {
    e.preventDefault();
    this.closeNav();
  };

  openNav = () => {
    this.setState({
      showNav: true,
    });
    document.getElementById("overlay").style.display = "block";
    document.addEventListener("keydown", this.handleEscKey);
  };

  closeNav = () => {
    this.setState({
      showNav: false,
    });
    document.getElementById("overlay").style.display = "none";
    document.removeEventListener("keydown", this.handleEscKey);
  };

  handleEscKey = (e) => {
    if (e.key === "Escape") {
      this.closeNav();
    }
  };

  openNav = () => {
    var element;
    element = document.getElementById("myNav");
    element.classList.add("mystyle");
    // document.getElementsByClassName("carousel-indicators").style.opacity = 0;
  };
  closeNav = () => {
    // document.getElementById("myNav").style.width = "0%";
    var element;
    element = document.getElementById("myNav");
    element.classList.remove("mystyle");
  };

  render() {
    const { showNav } = this.state;
    let navCoverStyle = { width: showNav ? "100%" : "0" };
    let sideNavStyle = { width: showNav ? "100%" : "0" };

    return (
      <React.Fragment>
        <div class="s-nav">
          <div id="myNav" class="overlay">
            <CancelIcon
              className="cancelicon close-nav "
              onClick={this.closeNavClick}
            />
            <div class="overlay-content">
              <div>
                <Row>
                  <div class="card  card-head nav-item nav-icon">
                    <img src={user} class="navimguser" />{" "}
                    <span class="nav-title user-head">Hello, User</span>
                  </div>
                  <br /> <br />
                </Row>
                <Row>
                  <Link to="/scan" className="list-nav">
                    <div class="card card-list nav-item">
                      <img src={scan} class="navimg" />{" "}
                      <span class="nav-title">
                        Scan
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <i class="fa fa-arrow-circle-right sidenav-right"></i>
                      </span>
                    </div>
                  </Link>
                </Row>
                <Row>
                  <Link to="#" className="list-nav">
                    <div class="card  card-list nav-item">
                      <img src={account} class="navimg" />{" "}
                      <span class="nav-title">
                        Account{" "}
                        <i class="fa fa-arrow-circle-right sidenav-right"></i>
                      </span>
                    </div>
                  </Link>
                </Row>
                <Row>
                  <Link to="#" className="list-nav">
                    <div class="card  card-list nav-item">
                      <img src={offer} class="navimg" />
                      <span class="nav-title">
                        Offer &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        <i class="fa fa-arrow-circle-right sidenav-right"></i>
                      </span>
                    </div>
                  </Link>
                </Row>
                <div class="card sign-out" onClick={this.closeNavClick}>
                  <span class="logout">
                    {" "}
                    <i class="fa fa-sign-out" aria-hidden="true">
                      {" "}
                    </i>{" "}
                    <span class="nav-title">Logout </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <span onClick={this.openNav} class="open-nav">
            <MenuIcon className="menubar" />
            <img className="headerIcon" src={headerIcon} />
          </span>
          <div class="r-icons">
            <ul class="r-icons mx-auto">
              <li class="nav-item"></li>
              <li class="nav-item pl-item">
                <a class="nav-link">
                  <RoomIcon className="marRight" />
                </a>
                <br />
                <div class="place">Chennai</div>
              </li>
              <li class="nav-item sl-item">
                {/* <a class="nav-link" href="#"> */}

                <i
                  class="fa fa-sign-in marRight fontsign"
                  // className="marRight"
                  aria-hidden="true"
                ></i>
                <div class="nav-signin">SignIn </div>
                {/* <HeadsetMicIcon className="marRight" /> */}
                {/* </a> */}
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <PersonIcon className="marRight" />
                </a>
              </li>
            
              <li class="nav-item">
                <a class="nav-link" href="hotel">
                  <Link to="/cart" className="cartlink">
                    {" "}
                    <ShoppingCartIcon className="marRight shopright" />{" "}
                  </Link>
                  <div></div>
                  <br />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div id="overlay" onClick={this.closeNavClick}></div>
      </React.Fragment>
    );
  }
}

export default SideNav;
