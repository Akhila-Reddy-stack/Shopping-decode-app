import React, { Fragment, PureComponent } from "react";
import { Container, Button } from "react-bootstrap";
import { Col, Row } from "reactstrap";
import _ from "lodash";
import { Link } from "react-router-dom";
import { withSnackbar } from "notistack";
import { Loader } from "../../Components/Loading/Loader";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import "../../styles/addtobag.scss";
import NavBar from "../../Components/NavBar/Navbar";
import success from "../../Images/user/success.jpg";
import * as InoIcons from "react-icons/io";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import { getItemList, getItemByItemNumber } from "../../Services/UserCart";
import { ScannerSharp } from "@material-ui/icons";
const options = {
  variant: "success",
  anchorOrigin: {
    vertical: "top",
    horizontal: "center",
    autoHideDuration: 500,
  },
};

const Eoptions = {
  variant: "warning",
  anchorOrigin: {
    vertical: "top",
    horizontal: "center",
    autoHideDuration: 500,
  },
};
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);
class AddtoBag extends PureComponent {
  constructor(props) {
    super(props);
    this.slider = React.createRef();
    this.state = {
      data: [],
      loading: true,
      bannerImgs: [],
      autoplay: true,
      checked: "",
      Rating: 4,
      ItemNumber: "",
      itemsList: [],
      scannedItem: [],
      addedtobag:false
    };
  }

  componentDidMount = async () => {
    // await this.getListByItemNumber();
    console.log(this.props, this.props.state);
    if (this.props.location.state != undefined && this.props.location.state) {
      console.log("oooooo");
      await this.setState({
        scannedItem: this.props.location.state.scannedItem,
        itemsList: this.props.location.state.itemsList,
      });
    }
    setTimeout(
      function () {
        this.setState({ loading: false });
      }.bind(this),
      600
    );
  };

  addtobag = async (e) => {
    // this.props.enqueueSnackbar(
    //   "Item Added to Cart Successfully !!",
    //   options,
    //   500
    // );
    await this.setState({
      addedtobag:true
    })
    // await this.addtocart();
  };
  addtocart = async () => {
    this.props.history.push({
      pathname: `/addcart`,
      state: {
        itemsList: this.state.itemsList,
      },
    });
  };
  // getItemList = async () => {
  //     const {ItemNumber}=this.state
  //     const res = await getListByItemNumber(ItemNumber);
  //     console.log(res);
  //   };
  handleChange = async (e) => {
    console.log(e);
  };

  framerating = () => {
    if (this.state.Rating === null) {
    } else {
      return _.fill(Array(this.state.Rating)).map((v, i) => (
        <InoIcons.IoIosStar
          className="stars noofstars"
          style={{ color: "black" }}
        />
      ));
    }
  };

  render() {
    const { data, loading, checked, scannedItem ,addedtobag,itemsList} = this.state;
    console.log(this.state);
    return (
      <Fragment>
        <>
          <Loader fullPage loading={loading} />
          <div className="">
            <div className="shopping-header addbag-head">
              <NavBar />
            </div>
            <div className="mobileedit-nav">
            <a href="/scan">  <i class="fas fa-arrow-circle-left lefticon addbagicon"></i></a>
              <IconButton aria-label="cart" className="bagbadge" onClick={this.addtocart}>
                <StyledBadge badgeContent={itemsList.length} color="secondary">
                  <ShoppingCartIcon className="shopping" />
                </StyledBadge>
              </IconButton>
            </div>

            {scannedItem.map((item, i) => (
              <div class="addbag">
                <div class="itemName">
                  {" "}
                  {item.Description}-{item.SecondDescription}
                </div>
                <div class="itemid">ID: {item.Itemnumber}</div>
                <Row className="item-price">
                  <Col md={4} className="totalprice">
                    {" "}
                    ${item.Priceyoucharge}.00
                  </Col>
                  <Col md={4} className="strike">
                    <s>${item.Pricewithtax}.00</s>
                  </Col>
                  <Col md={4} className="offer">
                    (15% OFF)
                  </Col>
                </Row>
                <div>
                  <Row className="feedback">
                    <Col md={6} className="itemrating">
                      {" "}
                      4/5 {this.framerating()}
                    </Col>
                    <Col md={6} className="review">
                      POST A REVIEW{" "}
                      <InoIcons.IoIosStar
                        className="stars"
                        style={{ color: "black" }}
                      />
                    </Col>
                  </Row>
                </div>
                {addedtobag &&
                  <div class="item-pdt">
                    {" "}
                    <img src={success} class="success" />
                    <span>Product Added to you Cart !</span>
                  </div>
                }

                <div class="added-to-bag" onClick={this.addtobag}>
                  {" "}
                  <Link class="cartlink">ADD TO BAG</Link>
                </div>
              </div>
            ))}

            {/*  <div class="addbag">
              <div class="itemName">
                {" "}
                Bottle 0.8L Tritan Screw Top Hiking Flask :Blue
              </div>
              <div class="itemid">ID: 8627234</div>
              <Row className="item-price">
                <Col md={4} className="totalprice">
                  {" "}
                  $75.00
                </Col>
                <Col md={4} className="strike">
                  <s>$80.00</s>
                </Col>
                <Col md={4} className="offer">
                  (15% OFF)
                </Col>
              </Row>
              <div>
                <Row className="feedback">
                  <Col md={6} className="itemrating">
                    {" "}
                    4/5 {this.framerating()}
                  </Col>
                  <Col md={6} className="review">
                    POST A REVIEW{" "}
                    <InoIcons.IoIosStar
                      className="stars"
                      style={{ color: "black" }}
                    />
                  </Col>
                </Row>
              </div>
              <div class="item-pdt">
                {" "}
                <img src={success} class="success" />
                <span>Product Added to you Cart !</span>
              </div>
              <div class="added-to-bag" onClick={this.addtobag}>
                {" "}
                <Link class="cartlink">ADD TO BAG</Link>
              </div>
            </div> */}
          </div>
        </>
      </Fragment>
    );
  }
}

export default withSnackbar(AddtoBag);
