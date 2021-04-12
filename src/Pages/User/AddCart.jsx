import React, { Fragment, PureComponent } from "react";
import { Container, Button } from "react-bootstrap";
import { Col, Row } from "reactstrap";
import _ from "lodash";
import { withSnackbar } from "notistack";
import { Loader } from "../../Components/Loading/Loader";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import "../../styles/addcart.scss";
import DeleteIcon from "@material-ui/icons/Delete";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import NavBar from "../../Components/NavBar/Navbar";
import RadioButton from "../../Components/Forms/Radiobtn";
import Modal from "react-responsive-modal";
import SignUp from "../../Components/Auth/SignUp";

import voucherimg from '../../Images/user/vouchericon.png'
import { getItemList, getItemByItemNumber } from "../../Services/UserCart";
import { IndeterminateCheckBox } from "@material-ui/icons";
import { data } from "./data";
import $ from "jquery";
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

class AddtoCart extends PureComponent {
  constructor(props) {
    super(props);
    this.slider = React.createRef();
    this.state = {
      data: [],
      loading: true,
      bannerImgs: [],
      autoplay: true,
      checked: "",
      Selected: "C",
      item1: "1",
      item2: "1",
      item3: "1",
      TotalPricewithTax: 0,
      Tax: 0,
      TotalPrice: 0,
      open: false,
      islogged: false,
      size1: "No Size",
      size2: "No Size",
      size3: "No Size",
      itemsList: data,
    };
  }
  // if (this.props.location.state != undefined && this.props.location.state) {
  // if (this.props.props.location.state == undefined) {
  //   await this.setState({
  //     itemsList: [],
  //   });
  // } else if (this.props.props.location.state != undefined) {
  //   await this.setState({
  //     itemsList: this.props.location.state.itemsList,
  //   });
  // }

  // const arr = this.state.itemsList;
  // function getUniqueListBy(arr, key) {
  //   return [...new Map(arr.map((item) => [item[key], item])).values()];
  // }
  componentDidMount = async () => {
    // await this.getItemList();
    //   await this.getListByItemNumber();
    console.log(this.props);
    if (
      this.props.props.location.state != undefined &&
      this.props.props.location.state
    ) {
      await this.setState({
        itemsList: this.props.props.location.state.itemsList,
      });
    }

    const arr = this.state.itemsList;
    function getUniqueListBy(arr, key) {
      return [...new Map(arr.map((item) => [item[key], item])).values()];
    }
    const arr1 = getUniqueListBy(arr, "Itemnumber");
    console.log(arr1);
    await this.setState({
      itemsList: arr1,
    });
    await this.Calculation();
    setTimeout(
      function () {
        this.setState({ loading: false });
      }.bind(this),
      600
    );
    var items = [];
    if (this.state.itemsList?.length != 0) {
      this.state.itemsList.map((item) => {
        items.push({ ...item, Count: 1 });
      });
      console.log(items);
      await this.setState({
        itemsList: items,
      });
    }
    let item = [];
    this.state.itemsList.map((rr, i) => {
      let Discount = parseFloat((rr.MRP - rr.Priceyoucharge) / rr.MRP) * 100;
      console.log(Discount);
      this.state.itemsList[i].Discount = Discount.toFixed(0);
      item.push(rr);
    });

    console.log(item);
  };

  getItemList = async () => {
    const res = await getItemList();
    console.log(res);
  };
  handleChange = async (e) => {
    console.log(e);
  };
  onChangeRadio = async (e) => {
    console.log("radiooooooo");
    this.setState({ Selected: e.target.value });
    this.setState({
      checked: e.target.checked,
    });
    console.log(this.state);
  };
  plusbtn = async (value) => {
    console.log("plus", value, typeof value);
    if (value == "1") {
      console.log("gggg");
      let incitems1 = parseInt(this.state.item1) + 1;
      await this.setState({ item1: incitems1, size1: incitems1 });
    } else if (value == "2") {
      let incitems2 = parseInt(this.state.item2) + 1;
      await this.setState({ item2: incitems2, size2: incitems2 });
    } else if (value == "3") {
      let incitems3 = parseInt(this.state.item3) + 1;
      await this.setState({ item3: incitems3, size3: incitems3 });
    }
  };
  minusbtn = async (value) => {
    console.log("plus", value);
    if (this.state.item1 > "1" && value == "1") {
      let decitems1 = parseInt(this.state.item1) - 1;
      await this.setState({ item1: decitems1, size1: decitems1 });
    } else if (this.state.item2 > 1 && value == "2") {
      let decitems2 = parseInt(this.state.item2) - 1;
      await this.setState({ item2: decitems2, size2: decitems2 });
    } else if (this.state.item3 > 1 && value == "3") {
      let decitems3 = parseInt(this.state.item3) - 1;
      await this.setState({ item3: decitems3, size3: decitems3 });
    }
  };

  onOpenDeleteModal = async (item) => {
    var deleteItem = item.Departmentoftheitem;
    var deleteItemName = item.Description;
    await this.setState({
      open: true,
      deleteItem: deleteItem,
      deleteItemName: deleteItemName,
      delItem: item,
    });
  };

  deleteItem = async () => {
    var items = [];
    var delItem = this.state.delItem;
    console.log(delItem);
    this.state.itemsList.map((rr) => {
      console.log(rr, rr.Itemnumber, delItem.Itemnumber);
      if (rr.Itemnumber != delItem.Itemnumber) {
        items.push(rr);
      }
    });
    await this.setState({
      itemsList: items,
      open: false,
    });
    this.props.enqueueSnackbar(
      `${this.state.deleteItemName} is Deleted `,
      options,
      500
    );
    console.log(this.state.itemList);
    this.forceUpdate();
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  handleBack = () => {
    let { totalAmount, orderList, totalTax, OrderId } = this.state;
    this.props.props.history.push({
      pathname: `/scan`,
      state: {
        itemsList: this.state.itemsList,
        result: "No result",
      },
    });
  };

  minusrooms = async (item, index) => {
    console.log(item);
    var itemIndexValue = this.state.itemsList;
    this.state.itemsList.map((rr, i) => {
      console.log(item.Itemnumber, rr.Itemnumber, rr.Count > 1);
      if (item.Itemnumber === rr.Itemnumber && rr.Count > 1) {
        itemIndexValue[i].Count = rr.Count - 1;
        itemIndexValue[i].Priceyoucharge =
          rr.Priceyoucharge * itemIndexValue[i].Count;
        itemIndexValue[i].Pricewithtax =
          rr.Pricewithtax * itemIndexValue[i].Count;
      }
    });
    await this.setState({
      itemsList: itemIndexValue,
    });
    console.log(this.state.itemsList);
    this.forceUpdate();
    await this.Calculation();
  };

  Calculation = async () => {
    const listOfPriceyoucharge = [];
    var TotalPrice = "";
    var Tax = "";
    var TotalPricewithTax = "";
    this.state.itemsList.map((sample) => {
      listOfPriceyoucharge.push({
        listOfPriceyoucharge: sample.Priceyoucharge,
        listOfTotalPricewithTax: sample.Pricewithtax,
      });
      console.log(listOfPriceyoucharge, "listOfPriceyoucharge");
      TotalPrice = listOfPriceyoucharge.reduce(
        (totalCalories, tt) =>
          totalCalories + parseInt(tt.listOfPriceyoucharge, 10),
        0
      );
      console.log(TotalPrice, "TotalPrice");
      TotalPricewithTax = listOfPriceyoucharge.reduce(
        (totalCalories, tt) =>
          totalCalories + parseInt(tt.listOfTotalPricewithTax, 10),
        0
      );
    });
    Tax = TotalPricewithTax - TotalPrice;
    await this.setState({
      TotalPrice: parseFloat(TotalPrice).toFixed(2),
      TotalPricewithTax: parseFloat(TotalPricewithTax).toFixed(2),
      Tax: parseFloat(Tax).toFixed(2),
    });
  };
  plusrooms = async (item, index) => {
    console.log(item);
    var itemIndexValue = this.state.itemsList;
    this.state.itemsList.map((rr, i) => {
      console.log(item.Itemnumber, rr.Itemnumber);
      if (item.Itemnumber === rr.Itemnumber) {
        itemIndexValue[i].Count = rr.Count + 1;
        itemIndexValue[i].Priceyoucharge =
          rr.Priceyoucharge * itemIndexValue[i].Count;
        itemIndexValue[i].Pricewithtax =
          rr.Pricewithtax * itemIndexValue[i].Count;
      }
    });
    await this.setState({
      itemsList: itemIndexValue,
    });
    console.log(this.state.itemsList);
    this.forceUpdate();

    await this.Calculation();
  };
  confirm = async () => {
    this.props.history.push({
      pathname: `/scan`,
      state: {
        itemsList: this.state.itemsList,
      },
    });
  };
  userSignIn = async () => {
    // await this.setState({
    //   islogged: true,
    // });

    // this.props.history.push({
    //   // pathname: `/confirm`,
    //   state: {
    //     TotalPricewithTax:this.state.TotalPricewithTax,
    //     TotalPrice:this.state.TotalPrice

    //   },
    // });
    const { handleNext } = this.props;
    console.log(this.props);
    var stepIndex = 1;
    var data = {
      TotalPricewithTax: this.state.TotalPricewithTax,
      TotalPrice: this.state.TotalPrice,
      itemsList: this.state.itemsList,
    };
    console.log(stepIndex, "step");
    handleNext(stepIndex, data, this.props);
    // console.log(handleNext(stepIndex));
    // this.props.parentCallback1(this.state.itemsList,stepIndex);
  };

  render() {
    const {
      data,
      loading,
      islogged,
      Selected,
      item1,
      open,
      itemsList,
      size1,
      item2,
      item3,
      size2,
      size3,
      TotalPrice,
      Tax,
      deleteItemName,
      deleteItem,
      TotalPricewithTax,
    } = this.state;
    console.log(this.state);
    return (
      <Fragment>
        <>
          <Loader fullPage loading={loading} />

          <div>
            {/*  <div className="shopping-header yourcart-head">
              <NavBar />
            </div> */}

            {/* <div> */}
            <div className="cartnav">
              <Col md={6} className="cart-details">
                <div class="cartt">
                  <i
                    class="fas fa-arrow-circle-left"
                    onClick={this.handleBack}
                  ></i>
                  <span class="youcart"> YOUR CART</span>
                </div>
                <br />

                <div className="cartconfirm">
                  <i class="fas fa-info-circle cartinfo"></i>
                  <span class="pdt">
                    Confirm your scanned Product before proceeding checkout
                  </span>
                </div>

                {itemsList?.length === 0 && (
                  <div class="youremptycart">Your Cart is Empty</div>
                )}

                {itemsList?.map((item, i) => (
                  <div className="addorder-details-list addbookoSum">
                    <div>
                      {" "}
                      <span>
                        {" "}
                        <InsertDriveFileIcon className="drive" />
                      </span>
                      <span class="addlisted">
                        {item.Description}-{item.SecondDescription}
                        <br />
                        <span class="cartlisted"> Size:{item.Count}</span>
                        <br />
                        <div className="cart-qty">
                          Qty
                          <button
                            type="button"
                            key={i}
                            id={item.Itemnumber}
                            className="minus_infant colmargin minusbtn"
                            onClick={() => this.minusrooms(item, "minus")}
                          >
                            -
                          </button>
                          <span
                            className="btn inc-dec-num roomCount colmargin"
                            id={item.Count}
                          >
                            {item.Count}
                          </span>
                          <button
                            type="button"
                            key={i}
                            id={item.Itemnumber}
                            className="plus_infant colmargin plusbtn"
                            onClick={() => this.plusrooms(item, "plus", i)}
                          >
                            +{" "}
                          </button>
                        </div>
                      </span>
                    </div>
                    <div>
                      <Row>
                        <div className="row mb-3 px-2 status ">
                          <span className="bg mar">
                            <DeleteIcon
                              title="Delete"
                              className="deleteicon"
                              onClick={(e) => this.onOpenDeleteModal(item)}
                            />
                          </span>
                          {/* <span className="bg mar">Edit</span> */}
                          <span className="price mar">
                            ₹{item.Priceyoucharge}.00
                          </span>
                          <span className="mar">
                            <s>₹{item.Pricewithtax}.00</s>
                          </span>
                          <span className="mar off">
                            {`${item.Discount} % OFF`}
                          </span>
                        </div>
                      </Row>
                    </div>
                  </div>
                ))}
              </Col>
              <Col md={5} className="summary">
                <div>
                  <div class="vocher">
                    {" "}
                    <img className="voucherimg" src={voucherimg} />
                    {/* <i class="fas fa-percentage"></i> */}
                   <span class="vouchertxt"> APPLY VOCHER CODE{" "}
                    <i class="fas fa-arrow-circle-right nextcicon"></i></span>
                  </div>
                  <div class="order">
                    <div class="order-sum">Order Summary</div>
                    <div class="orderbt">
                      <div class="">
                        <div class="mb">Total Price(Inc Tax)</div>
                        <div class="mb">Discount</div>
                        <div class="mb">Total</div>
                      </div>
                      <div class="pricelist">
                        <div class="mb">₹{TotalPricewithTax}</div>
                        <div class="mb">₹{Tax}</div>
                        <div class="mb">₹{TotalPrice}</div>
                      </div>
                    </div>
                  </div>
                  <Row className="save">You Save ₹{Tax} in this order</Row>
                </div>
                <div>
                  <Row>
                    <Col md={6} className="saved-details">
                      <div class="pp"> ₹{TotalPrice}</div>
                      {/* <div class="view"> View Details</div> */}
                    </Col>
                    <Col md={6}>
                      <Button className="checkout" onClick={this.userSignIn}>
                        {" "}
                        Proceed to Checkout
                        <i class="fas fa-arrow-circle-right checkicon"></i>
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Col>
            </div>
            {/* </div> */}
          </div>
          <Modal
            className="del-modal"
            open={open}
            onClose={this.onCloseModal}
            center
            className="del-modal"
          >
            <div className="deletemodal">
              <div className="">
                <div class="mod-item-name" id="">
                  {" "}
                  {deleteItem} - {deleteItemName}
                </div>
                <div class="remove"> Remove</div>
                <div class="remove-item">
                  Are You Sure You Want To Remove this Item From Your Cart ?
                </div>
                <div>
                  <div className="removebtns">
                    <div className="btn-cartbtn">
                      <div>
                        <Button
                          type="submit"
                          className="del-cancel-btn"
                          onClick={this.onCloseModal}
                        >
                          CANCEL
                        </Button>
                      </div>
                      <div>
                        <Button
                          onClick={this.deleteItem}
                          type="submit"
                          className="btn-primary remove-btn"
                        >
                          {" "}
                          REMOVE{" "}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>

          {islogged === true && <SignUp />}
          <div class="overlay"></div>
        </>
      </Fragment>
    );
  }
}

export default withSnackbar(AddtoCart);

// function openNav() {
//     document.getElementById("myNav").style.width = "100%";
//   }

//   function closeNav() {
//     document.getElementById("myNav").style.width = "0%";
//   }
