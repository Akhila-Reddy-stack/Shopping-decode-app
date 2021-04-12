import React, { Fragment, PureComponent } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import _ from "lodash";
import { Form } from "informed";
import { Link } from "react-router-dom";
import { withSnackbar } from "notistack";
import * as InoIcons from "react-icons/io";
import ReactNotification from "react-notifications-component";
import QrReader from "react-qr-reader";
// import Barcode from "../../Images/user/barcode.webp";

// import scan from "../../Images/user/scan.jpg";
import cart from "../../Images/user/shopping-cart.png";
import { withStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EditIcon from "@material-ui/icons/Edit";
import Badge from '@material-ui/core/Badge';
import '../../styles/profile.scss'
import { RowingOutlined } from "@material-ui/icons";
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

class Profile extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount = async () => {
    setTimeout(
      function () {
        this.setState({ loading: false });
      }.bind(this),
      600
    );
  };

  render() {
    const { data, loading } = this.state;
    console.log(this.state);

    return (
      <Fragment>
        <div className="Profile">
        
            <div className="cart-icon">
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={1} color="secondary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
            </div><br/>
            <div>
            <Row className="poo-row">
              <Col md={3} className="profile-nav">
                <AccountCircleIcon className="accountcircle" />
              </Col>
              <Col md={9} className="profile-nav1">
                <div class="editt">
                  <EditIcon className="editicon" /> Edit Profile
                </div>
                <p class="profile-name">Inayath Ullah</p>
                <p> 956854545</p>
              </Col>
            </Row>
            </div>
           
            <Row className="pro-add">
              <div className="pro-add-home">  Home Address:</div>
              <p className="pro-add-details">
                {" "}
                #47,Shanthi Colony Annanagar,
                <br />
                Chennai,TamilNadu-60040
              </p>
              <br/>
              <Button className="profile-pro">Edit</Button>
              <Button className="profile-delete">Delete</Button>
              <Button className="profile-default">Default Address</Button>
            </Row>

            <div className="cart-top">
              <Row>
                <img src={cart} class="profile-cart" />
                <div class="returns">Orders & Returns</div>
              </Row>
            
            </div>
            <Row className="log-icon">
                <div>  <i class="fa fa-sign-out" aria-hidden="true"> </i>Logout</div>
              </Row>
         
        </div>
      </Fragment>
    );
  }
}

export default withSnackbar(Profile);
