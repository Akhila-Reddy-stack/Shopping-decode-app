import React, { Fragment, PureComponent } from "react";

import { Row, Col, Container, Button } from "react-bootstrap";
import _ from "lodash";
import { Form } from "informed";
import { Link } from "react-router-dom";
import { withSnackbar } from "notistack";
import * as InoIcons from "react-icons/io";
import ReactNotification from "react-notifications-component";
import DefaultModal from "../../Components/Forms/DefaultModal";
// import Barcode from "../../Images/user/barcode.webp";
// import UPI from "../../Images/user/upi.jpg";
// import gpay from "../../Images/user/gpay.jpg";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EditIcon from "@material-ui/icons/Edit";
import RadioButton from "../../Components/Forms/Radiobtn";
import "../../styles/confirm.scss";
import HorizontalLabelPositionBelowStepper from "../User/AddtoCart/Stepper";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import moment from "moment";
class BookingSummary extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      todayDate: moment(new Date()).format("YYYY-MM-DD"),
      TotalPricewithTax: 0,
      TotalPrice: 0,
      isshow: false,
      itemsList: [],
    };
  }

  componentDidMount = async () => {
    console.log(this.props);
    if (this.props.data != undefined && this.props.data) {
      await this.setState({
        TotalPricewithTax: this.props.data.TotalPricewithTax,
        TotalPrice: this.props.data.TotalPrice,
        itemsList: this.props.data.itemsList,
      });
    }
    setTimeout(
      function () {
        this.setState({ loading: false });
      }.bind(this),
      600
    );
  };
  confirm = async () => {
    const { handleNext } = this.props;
    console.log(this.props);
    var stepIndex = 2;
    console.log(stepIndex, "step");
    var data = {
      TotalPricewithTax: this.state.TotalPricewithTax,
      TotalPrice: this.state.TotalPrice,
      itemsList: this.state.itemsList,
    };
    console.log(stepIndex, "step");
    handleNext(stepIndex, data, this.props);
  
  };
  confirmback = async () => {
    const { handleBack } = this.props;
    var stepIndex = 1;
    handleBack(stepIndex, this.props);
  };
  viewfunc = async () => {
    await this.setState({
      isShow: true,
    });
  };
   onCloseModal = async () => {
    await this.setState({
      isShow: false,
    });
  };
  render() {
    const {
      data,
      loading,
      todayDate,
      TotalPrice,
      TotalPricewithTax,
      isShow,
      itemsList,
    } = this.state;
    console.log(this.state);

    return (
      <Fragment>
        <div className="confrim">
          <div className="summary-head">
            <span>
              {" "}
              <i
                class="fas fa-arrow-circle-left lefticon"
                onClick={this.confirmback}
              ></i>{" "}
              &nbsp;&nbsp;CONFIRM
            </span>
          </div>
          <br />

          <div className="order-total-list">
            <div className="corder-head">
              <br />
              <h6 class="h5fw h6fw">Order Summary</h6>
              <div className="order-list-head">
                <div className="corder-list">
                  <div>Total Price (Inc Tax)</div>
                  <div>Delivery</div>
                </div>
                <div className="order-sumry">
                  <div>₹{TotalPricewithTax}</div>
                  <div>FREE</div>
                </div>
              </div>
            </div>

            <hr />
            <div className="ctotal-head">
              <div className="">
                <div>Total</div>
              </div>
              <div className="total-sumry">
                <span>₹{TotalPrice}</span>
              </div>
            </div>
          </div>

          <div className="selpay">
            <div className="">
              <span class="sel-pr">
                <b>₹{TotalPrice}</b>
              </span>
              <br />
              <div class="viewcol" onClick={this.viewfunc}>
                View Details
              </div>
            </div>
            <div className="selpayment" onClick={this.confirm}>
              <span>
                Select Payment{" "}
                <i class="fas fa-arrow-circle-right selciricon"></i>
              </span>
            </div>
          </div>
          <DefaultModal
            className="Viewmodal"
            isOpen={isShow}
            faClass={"doorClosed"}
            handleClose={this.onCloseModal}
            title="Purchased Items"
            showHeader={false}
            hideFooter={false}
          >
            <div>
              <div className="row" style={{ marginBottom: "0.4rem" }}>
                <div className="col-sm-6">Date: {todayDate}</div>
                <div className="col-sm-6">Invoice No:0001</div>
              </div>{" "}
              <hr className="mt-0" />
              {/* <b>Purchased Items</b> */}
            </div>
            <table className="table-sm table-bordered summarytable">
              <thead>
                <tr>
                  <th>Sl.No</th>
                  <th>Brand</th>
                  <th>Products</th>
                  <th>Price</th>
                </tr>
              </thead>

              {itemsList.map((item, i) => {
                return (
                  <tr>
                    <td>{i + 1}</td>
                    <td>{item.Departmentoftheitem}</td>
                    <td>{item.Description}</td>
                    <td>{item.Priceyoucharge}</td>
                  </tr>
                );
              })}
            </table>

            <div className="mt-4">
              
              <hr className="border-bottom border-dark" />
              <div className="Cnetamount justify-content-end">
                <div className="col-sm-3 font-weight-bold">TotalNetAmount</div>
                <div className="col-sm-3 font-weight-bold">₹ {TotalPrice}</div>
              </div>
              <div className="row mt-2 px-3 justify-content-end">
                <div className="col-sm-6   border border-danger" />
              </div>
            </div>
          </DefaultModal>
        </div>
      </Fragment>
    );
  }
}

export default withSnackbar(BookingSummary);

// background-color: #fff3cd;
//     border-color: #ffeeba;

// background-color: #e2e3e5;
// border-color: #d6d8db;

{
  /* <div class="place-desc-grid mt-5 pt-3">
<div class="place-desc-item">
    <img src="../../assets/images/doddabetta-peak-ooty.jpg" alt="place-item">
</div>
<div class="place-desc-item">
    <img src="../../assets/images/emerald-lake-ooty.jpg" alt="place-item">
</div>
<div class="place-desc-item">
    <img src="../../assets/images/forest-1.jpg" alt="place-item">
</div>
<div class="place-desc-item">
    <img src="../../assets/images/hillStation.jpg" alt="place-item">
</div>
<div class="place-desc-item">
    <img src="../../assets/images/Illikkal-kallu.jpg" alt="place-item">
</div>
<div class="place-desc-item">
    <img src="../../assets/images/kakkathuruth.jpg" alt="place-item">
</div>
<div class="place-desc-item">
    <img src="../../assets/images/Kodaikanal2.jpg" alt="place-item">
</div>
<div class="place-desc-item">
    <img src="../../assets/images/kollukkumallay.jpg" alt="place-item">
</div>
<div class="place-desc-item">
    <img src="../../assets/images/Kumarakom1.jpg" alt="place-item">
</div>
<div class="place-desc-item">
    <img src="../../assets/images/mudumalai-national-park-ooty.jpg" alt="place-item">
</div>
<div class="place-desc-item">
    <img src="../../assets/images/munreo-island.jpg" alt="place-item">
</div>
<div class="place-desc-item">
    <img src="../../assets/images/muttukadu3.jpg" alt="place-item">
</div>
<div class="place-desc-item">
    <img src="../../assets/images/Nature4.jpg" alt="place-item">
</div>
<div class="place-desc-item">
    <img src="../../assets/images/Nature6.jpg" alt="place-item">
</div>
<div class="place-desc-item">
    <img src="../../assets/images/ooty.jpg" alt="place-item">
</div>
<div class="place-desc-item">
    <img src="../../assets/images/ooty1.jpg" alt="place-item">
</div>
<div class="place-desc-item">
    <img src="../../assets/images/ootyBoatHouse.jpg" alt="place-item">
</div>
<div class="place-desc-item">
    <img src="../../assets/images/Periyar.jpg" alt="place-item">
</div>
<div class="place-desc-item">
    <img src="../../assets/images/Pookod-Lake.jpg" alt="place-item">
</div>
<div class="place-desc-item">
    <img src="../../assets/images/Nature6.jpg" alt="place-item">
</div>
</div> */
}
