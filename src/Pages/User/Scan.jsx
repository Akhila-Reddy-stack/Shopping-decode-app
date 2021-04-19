import React, { Fragment, PureComponent } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import _ from "lodash";
import { Link } from "react-router-dom";
import { withSnackbar } from "notistack";
import { Loader } from "../../Components/Loading/Loader";
import QrReader from "react-qr-reader";
import { TextInput } from "../../Components/Forms/Input";
import Modal from "react-responsive-modal";
import pin from "../../Images/user/pin.png";
import "react-responsive-modal/styles.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { getItemList, getItemByItemNumber } from "../../Services/UserCart";
import { getInventryData } from "../../Services/scan";

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
class Scan extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      result: "No result",
      open: false,
      itemsList: [],
      InVentryData: [],
      newScan: false
    };
  }

  componentDidMount = async () => {
    console.log(this.props);
    if (this.props.location.state != undefined && this.props.location.state) {
      await this.setState({
        result: this.props.location.state.result,
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
  getInventryData = async () => {
    const res = await getInventryData();
    console.log(res)
    if (res.data.status === true) {
      await this.setState({
        InVentryData: res.data.data
      })
    } else {
      await this.setState({
        InVentryData: []
      })
    }

  }
  getItemByItemNumber = async () => {
    const ItemNumber = this.state.result;
    console.log(this.state);
    var data = {};
    data["ItemNumber"] = ItemNumber;
    console.log(data);
    const res = await getItemByItemNumber(data);
    console.log(res);
    if (res.data.status === true) {
      await this.setState({
        scannedItem: res.data.data,
        itemsList: [...this.state.itemsList, res.data.data[0]],
        newScan: true

      });
      console.log("scanned")
      await this.proceed();
    } else {
      await this.setState({
        itemsList: [],
      });
    }
    console.log(this.state);
    this.forceUpdate();
  };
  handleScan = async (data) => {
    if (data) {
      await this.setState({
        result: data,
      });
    }
    console.log(this.state.newScan)
    if (this.state.newScan === false) {
      if (this.state.result != "No result" && data != null) {
        await this.getInventryData();
        // var accessItem = this.state.InVentryData.includes(code => code.Itemnumber === Number(this.state.result));
        // // var accessItem= this.state.InventryData.includes(Number(this.state.result))
        // console.log(accessItem,"itttttttt")
        var result = this.state.result;
        const valid = this.state.InVentryData.some(function (el) {
          return el.Itemnumber === Number(result);
        });
        console.log(valid)
        if(valid === true){
          this.props.enqueueSnackbar("Product Scanned !!", options, 50);
             return this.getItemByItemNumber();
        }  
        else if(valid === false){
          return this.props.enqueueSnackbar("Scanned  Invalid Product!!", Eoptions, 50);
        }


        // this.state.InVentryData.map(rr => {
        //   console.log(rr.Itemnumber ,Number(this.state.result),rr.Itemnumber ==Number(this.state.result))
        //   if(rr.Itemnumber === Number(this.state.result)){
        //     this.props.enqueueSnackbar("Product Scanned !!", options, 50);
        //      return this.getItemByItemNumber();

        //   }
        //   else if (rr.Itemnumber != Number(this.state.result)){
        //     console.log(this.state.newScan)
        //     if(this.state.newScan === true) {
        //       return this.props.enqueueSnackbar("Scanned  Invalid Product!!", Eoptions, 50);
        //     }
        //   //  return this.getItemByItemNumber();
        //     // window.location.reload("/scan")
        //   }
        // })

        // if(this.state.InVentryData.includes(rr))
      }
    }
  };
  proceed = () => {
    console.log(this.state.itemsList, this.state.scannedItem);
    if (this.state.scannedItem?.length != 0 && this.state.scannedItem != undefined) {
      this.props.history.push({
        pathname: `/addtobag`,
        state: {
          scannedItem: this.state.scannedItem,
          itemsList: this.state.itemsList,
        },
      });
    }
    else if (this.state.scannedItem?.length === 0 || this.state.scannedItem == undefined) {
      this.props.enqueueSnackbar("Something went wrong!!", Eoptions, 500);
    }

  };
  handleError = (err) => {
    console.error(err);
  };
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { data, loading, open, itemsList } = this.state;
    console.log(this.state);
    // if (this.state.result != "No result") {
    //      this.getListByItemNumber();
    // }
    return (
      <Fragment>
        <>
          <div>
            <div className="webresponsive">
              <Row className="secrow">
                <QrReader
                  className="wqr"
                  delay={300}
                  onError={this.handleError}
                  onScan={this.handleScan}
                  style={{ width: "100%" }}
                />
                {/* <p class="blinking"> Scanned Result :{this.state.result}</p> */}
              </Row>
              <div class="txtcode">SCAN A BARCODE OR SIGNAGE QR CODE</div>
              <Row class="">
                <span class="prblm">
                  <Button
                    type="submit"
                    className="prblm-btn"
                    onClick={this.onOpenModal}
                  >
                    Problem in Scanning? <ArrowForwardIcon />
                  </Button>
                </span>
                <span class="changebtn">
                  <Button type="submit" className="btn-primary changebtn-btn">
                    Change
                  </Button>
                  <div class="location">Location is Wrong?</div>
                </span>
              </Row>
            </div>
            <div className="mobileresponsive">
              <Loader fullPage loading={loading} />
              <div class="qr-reader">
                <QrReader
                  delay={300}
                  onError={this.handleError}
                  onScan={this.handleScan}
                  style={{ width: "60%", margin: "3rem auto" }}
                />
                <p class="blinking"> Scanned Result :{this.state.result}</p>
                <div class="txtcode">SCAN A BARCODE OR SIGNAGE QR CODE</div>
                <div class="info" id="">
                  {" "}
                  Search for the 7-Digit item ID on your product tag to continue
                  with the purchase.
                </div>
                <div class="btns">
                  <Button type="submit" className="Cancel-btn">
                    <Link className="cancellink" to="/user/home">
                      {" "}
                      Cancel{" "}
                    </Link>
                  </Button>
                  <Button
                    onClick={this.proceed}
                    type="submit"
                    className="Proceed-btn"
                  >
                    <Link className="link-proceed">Proceed </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
        <Modal open={open} onClose={this.onCloseModal} center>
          <div className="marmodal">
            <div className="codeimg">
              <img src={pin} class="pin" />
            </div>
            <div className="codeimg">
              <div class="info" id="">
                {" "}
                Search for the 7-Digit item ID on your product tag to continue
                with the purchase.
              </div>
              <div class="codeimg">
                <TextInput
                  field="id"
                  label=""
                  placeholder="Enter 6 Digit Id"
                  className="digitpin"
                  name="id"
                  value=""
                />
              </div>
              <div>
                <Row className="codeimg">
                  <Row md={6} className="btn-btn">
                    <Col md={6}>
                      <Button
                        type="submit"
                        className="Cancel-btn"
                        onClick={this.onCloseModal}
                      >
                        Cancel
                      </Button>
                    </Col>
                    <Col md={6}>
                      <Button type="submit" className="btn-primary Proceed-btn" onClick={this.proceed}>
                        <Link
                          className=""
                          to="/addtobag"
                          className="link-proceed"
                        >
                          Proceed{" "}
                        </Link>
                      </Button>
                    </Col>
                  </Row>
                </Row>
              </div>
            </div>
          </div>
        </Modal>
      </Fragment>
    );
  }
}

export default withSnackbar(Scan);
