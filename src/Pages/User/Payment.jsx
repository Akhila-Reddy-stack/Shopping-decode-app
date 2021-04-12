import React, { Fragment, PureComponent } from "react";


import { Row, Col, Container, Button } from "react-bootstrap";
import _ from "lodash";
import { Form } from "informed";
import { Link } from "react-router-dom";
import { withSnackbar } from "notistack";
import * as InoIcons from "react-icons/io";
import ReactNotification from "react-notifications-component";



// import Barcode from "../../Images/user/barcode.webp";
import UPI from "../../Images/user/UPI.jpg";
import gpay from "../../Images/user/gpay.jpg";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EditIcon from "@material-ui/icons/Edit";
import '../../styles/payment.scss'
// const StyledBadge = withStyles((theme) => ({
//   badge: {
//     right: -3,
//     top: 13,
//     border: `2px solid ${theme.palette.background.paper}`,
//     padding: "0 4px",
//   },
// }))(Badge);
class Payment extends PureComponent {
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
  payment = async () => {
    const { handleNext } = this.props;
    console.log(this.props);
    var stepIndex = 3;
    console.log(stepIndex, "step");
    handleNext(stepIndex, this.props);
  };
paymentback = async () =>{
    const { handleBack } = this.props;
    var stepIndex = 2;
    handleBack(stepIndex, this.props);
  }
  render() {
    const { data, loading } = this.state;
    console.log(this.state);

    return (
      <Fragment>
  
        <div className="payment">
          <div className="pay-nav">
            <span>
              {" "}
              <i class="fas fa-arrow-circle-left lefticon" onClick={this.paymentback}></i>
            </span>
            <span class="gpay">
              <img src={gpay} class="gpayimg" />{" "}
            </span>
          </div>
          <div className="pay-details">
            <span>DM</span>
            <div class="pay-det">
              <div class="pay-name">Dmart Retail</div>
              <div>Dmartretail.gpay@hdfc</div>
            </div>
          </div>
          <div className="">
            <div className="pay-price">$75.00</div>
            <div className="">
              <input
                placeholder="Add a Message(optional)"
                class="form-control  icic pay-msg"
              />
            </div>
            <div className="debit">
              <h4>Debit From</h4>
              <div className="form-control icic">
                **********470
                <br />
                ICICI BANK
              </div>{" "}
            </div>
          </div>

          <div className="powered">
           <span class="powered-by"> Powered By</span>
            <img src={UPI} class="upi" />
          </div>
          <div className="">
            <Button className="btn btn-primary paysend" onClick={this.payment}> SEND</Button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withSnackbar(Payment);
