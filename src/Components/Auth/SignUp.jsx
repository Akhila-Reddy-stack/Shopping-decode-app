import React, { Fragment, PureComponent } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Col, Row } from 'reactstrap';
import _ from 'lodash';
import { withSnackbar } from 'notistack';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import Modal from 'react-responsive-modal';
import '../../styles/auth.scss'
import { Tab, TabPanel, Tabs, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs';

class SignUp extends PureComponent {
  constructor(props) {
    super(props);
    this.slider = React.createRef();
    this.state = {
      data: [],
      open: true,
      loading: true,
      bannerImgs: [],
      isSignup: false,
      isLogin: true,
      isreset: false,
      isproceed: false,
      time: {}, seconds: 15
    };
    this.timer = 0;
    this.countDown = this.countDown.bind(this);
  }

  signup = async () => {
    await this.setState({
      isSignup: true,
      isLogin: false
    })
  }

  login = async () => {
    await this.setState({
      isSignup: false,
      isLogin: true
    })
  }

  continue = async () => {
    await this.setState({
      isSignup: false,
      isreset: true
    })
    if (this.timer == 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
  }

  password = async () => {
    await this.setState({
      isproceed: true,
      isreset: false
    })
  }

  componentDidMount = async () => {

    setTimeout(
      function () {
        this.setState({ loading: false });
      }.bind(this),
      600
    );
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }


  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });
    // Check if we're at zero.
    if (seconds == 0) {
      clearInterval(this.timer);
    }
  }

  ValidatePassKey(tb) {
    if (tb.TextLength >= 1)
      document.getElementById(tb.id + 1).focus();
  }

  render() {
    const { data, isSignup, isproceed, isreset, isLogin, open } = this.state;
    return (
      <Fragment>
        <>
          <Modal open={open} onClose={this.onCloseModal} center>
            {isLogin === true && (
              <div className="signupmodal">
                <Row className="">
                  <Col md={6} className="bg-sign">
                    <div class="init-sign" >LOGIN</div>
                    <div class="init-info">
                      GET  <br /> ACCESS   <br />To  <br /> PERSONALISED  <br /> <span class="secure"> SHOPPING</span>
                    </div>
                  </Col>
                  <Col md={6} className="log-in">
                    <div>
                      <Tabs vertical className="vertical-tabs bookingtabs">
                        <TabList>
                          <div class="bookingType">
                            <div class="auth-type">
                              <div className="tabs3-si logged">
                                <Tab tabFor="LOGIN" eventKey="LOGIN">
                                  <span class="bookinginfo">LOGIN</span>
                                </Tab>
                              </div>
                              <div className="tabs3-si">
                                <Tab onClick={this.signup} >
                                  <span class="bookinginfo">
                                    SIGNUP
                                            </span>
                                </Tab>
                              </div>
                            </div>
                          </div>
                        </TabList>
                      </Tabs>
                    </div>
                    <div class="mail">  <input class="mailname" placeholder="Enter Your Email/Mobile No" />
                    </div>
                    <div>
                      <Button className="via"> LOGIN VIA OTP</Button>
                    </div>
                    <div class="myreo">New To MyREO ?</div>
                    <Button className="createmail">Create An Account</Button>
                  </Col>
                </Row>
              </div>
            )}
            {isSignup === true &&
              <div className="signupmodal">
                <Row className="">
                  <Col md={6} className="bg-sign">
                    <div class="init-sign">SIGNUP</div>
                    <div class="init-info">
                      We <br />Promise You<span class="secure"> <br />100% Secure<br /></span> Date Protection
                    </div>
                  </Col>
                  <Col md={6} className="restin">
                    <div>
                      <Tabs vertical className="vertical-tabs bookingtabs">
                        <TabList>
                          <div class="bookingType">
                            <div class="auth-type">
                              <div className="tabs3-si logged ">
                                <Tab onClick={this.login} tabFor="" className="tabb">
                                  <span class="bookinginfo lo-tabb">LOGIN</span>
                                </Tab>
                              </div>
                              <div className="tabs3-si ">
                                <Tab tabFor="SIGNUP" eventKey="SIGNUP" >
                                  <span class="bookinginfo">
                                    SIGNUP
                                     </span>
                                </Tab>
                              </div>
                            </div>
                          </div>
                        </TabList>
                      </Tabs>
                    </div>
                    <div class="mail mail-me">  <input class="mailname" placeholder="Enter Your Email/Mobile No" /></div>
                    <div class="continue" onClick={this.continue}>Continue</div>
                    <div class="phn">
                      We  will send you an OTP to verify your phone number/email
                    </div>
                    <div class="repo">ALREADY HAVE AN MyReo ACCOUNT <span class="log">LOGIN ?</span></div>
                  </Col>
                </Row>
              </div>
            }

            {isreset === true && (
              <div className="signupmodal">
                <Row className="signmodal">
                  <Col md={6} className="bg-sign">
                    <div class="init-sign">SIGNUP</div>
                    <div class="init-info">
                      We <br />Promise You<span class="secure"> <br />100% Secure<br /></span> Date Protection
                    </div>
                  </Col>
                  <Col md={6} className="col-right">
                    <div>
                      <span class="initial"> You are just </span> {""}
                      <div class="onestep">One Step Away !</div>{""}
                    </div>{""}
                    <div class="title"><h1>Enter Your Email</h1></div>
                    <div class="legend">
                      <div>
                        <input class="enter" />
                      </div>{""}{""}
                      <div class="s-info">
                        To make sure you will not miss any order related communication
                      </div>
                    </div>
                    {""}
                    <div>
                      <Row className="">
                        <Col md={5} className="f-name">  <input class="name fname" placeholder="First Name" />
                        </Col>
                        <Col md={5} className="f-name"> <input class="name fname" placeholder="Last Name" />
                        </Col>
                      </Row>
                    </div>
                    <div>
                      <Button className="sign-btn" onClick={this.password}> SIGNUP</Button>
                    </div>
                    <div class="terms">Terms And Conditions *</div>
                    <div class="repo">ALREADY HAVE AN MyReo ACCOUNT <span>LOGIN</span></div>
                  </Col>
                </Row>
              </div>
            )}

            {isproceed === true && (
              <div className="signupmodal">
                <Row className="signmodal">
                  <Col md={6} className="bg-sign">
                    <div class="init-sign">SIGNUP</div>
                    <div class="init-info">
                      We <br />Promise You<span class="secure"> <br />100% Secure<br /></span> Date Protection
                    </div>
                  </Col>
                  <Col md={6} className="timer-head">
                    <Row className="otp-head">
                      <Col md={2} className="f-name">
                        <input class="name" maxlength="1" onChange={() => this.ValidatePassKey(this)} min={1} />
                      </Col>
                      <Col md={2} className="f-name">
                        <input class="name" maxlength="1" onChange={() => this.ValidatePassKey(this)} />
                      </Col>
                      <Col md={2} className="f-name">
                        <input class="name" maxlength="1" onChange={() => this.ValidatePassKey(this)} />
                      </Col>
                      <Col md={2} className="f-name">
                        <input class="name" maxlength="1" />
                      </Col>
                    </Row>
                    <div class="resend">Resend OTP in</div>
                    <div class="timer">
                      <div class="count"> {this.state.time.s}
                      </div></div>
                    <div>
                      <Button className="validate"> VALIDATE OTP</Button>
                    </div>
                    <div class="noyet">Not Yet Received OTP?</div>
                    <div class="resend-otp">Resend OTP</div>
                  </Col>
                </Row>
              </div>
            )}
          </Modal>
        </>
      </Fragment>
    );
  }
}

export default withSnackbar(SignUp);
