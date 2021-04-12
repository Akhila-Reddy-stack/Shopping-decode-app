// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Stepper from "@material-ui/core/Stepper";
// import Step from "@material-ui/core/Step";
// import StepLabel from "@material-ui/core/StepLabel";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
// import AddtoCart from "../AddCart";
// import Confirm from "../Confirm";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "100%",
//   },
//   backButton: {
//     marginRight: theme.spacing(1),
//   },
//   instructions: {
//     marginTop: theme.spacing(1),
//     marginBottom: theme.spacing(1),
//   },
// }));

// function getSteps(props) {
//   console.log(props);
//   return ["Cart", "Confirm", "Payment", "Summary"];
// }
// var stepIndex;
// const callbackFunction1 = (eventDate, stepIndex, eventEndTime) => {
//   console.log(";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; ", eventDate, stepIndex);
//   stepIndex = stepIndex;
//   getStepContent(stepIndex);
//   // this.setState({
//   //   eventDate: eventDate,
//   // });
//   // handleNext();
// };

// function getStepContent(stepIndex, props, setActiveStep, activeStep) {
//   console.log(props, stepIndex, "stepIndex", setActiveStep, activeStep);
//   {
//     console.log(stepIndex);
//   }
//   switch (stepIndex) {
//     case 0:
//       return <AddtoCart props={props} parentCallback1={callbackFunction1} />;
//     case 1:
//       return <Confirm props={props} />;
//     case 2:
//       return "This is the bit I really care about!";
//     case 3:
//       return "This is the bit I really care about!";
//     default:
//       return "Unknown stepIndex";
//   }
// }
// const classes = useStyles();
// //   const [activeStep, setActiveStep] = React.useState(0);
// const steps = getSteps();
// class HorizontalLabelPositionBelowStepper extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { activeStep: 0 };
//   }
//   handleBack = () => {
//     // setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   handleReset = () => {
//     // setActiveStep(0);
//   };
//   handleNext = (prevActiveStep) => {
//     console.log(prevActiveStep);
//     // setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };
//   render() {
//     const { activeStep } = this.state;
//     console.log(this.state.activeStep);
//     return (
//       <div className={classes.root}>
//         <Stepper activeStep={activeStep} alternativeLabel>
//           {steps.map((label) => (
//             <Step key={label}>
//               <StepLabel>{label}</StepLabel>
//             </Step>
//           ))}
//         </Stepper>
//         <div>
//           {activeStep === steps.length ? (
//             <div>
//               <Typography className={classes.instructions}>
//                 All steps completed
//               </Typography>
//               <Button onClick={this.handleReset}>Reset</Button>
//             </div>
//           ) : (
//             <div>
//               <Typography className={classes.instructions}>
//                 {getStepContent(activeStep, this.props)}
//               </Typography>
//               <div>
//                 <Button
//                   disabled={activeStep === 0}
//                   onClick={this.handleBack}
//                   className={classes.backButton}
//                 >
//                   Back
//                 </Button>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   onClick={this.handleNext}
//                 >
//                   {activeStep === steps.length - 1 ? "Finish" : "Next"}
//                 </Button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   }
// }

// export default HorizontalLabelPositionBelowStepper;

// // export default function HorizontalLabelPositionBelowStepper(props) {
// //   const classes = useStyles();
// //   const [activeStep, setActiveStep] = React.useState(0);
// //   const steps = getSteps();
// //   console.log(steps);
// //   const handleNext = () => {
// //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
// //   };

// //   const handleBack = () => {
// //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
// //   };

// //   const handleReset = () => {
// //     setActiveStep(0);
// //   };

// //   return (
// //     <div className={classes.root}>
// //       <Stepper activeStep={activeStep} alternativeLabel>
// //         {steps.map((label) => (
// //           <Step key={label}>
// //             <StepLabel>{label}</StepLabel>
// //           </Step>
// //         ))}
// //       </Stepper>
// //       <div>
// //         {activeStep === steps.length ? (
// //           <div>
// //             <Typography className={classes.instructions}>
// //               All steps completed
// //             </Typography>
// //             <Button onClick={handleReset}>Reset</Button>
// //           </div>
// //         ) : (
// //           <div>
// //             <Typography className={classes.instructions}>
// //               {getStepContent(activeStep, props, setActiveStep)}
// //             </Typography>
// //             <div>
// //               <Button
// //                 disabled={activeStep === 0}
// //                 onClick={handleBack}
// //                 className={classes.backButton}
// //               >
// //                 Back
// //               </Button>
// //               <Button variant="contained" color="primary" onClick={handleNext}>
// //                 {activeStep === steps.length - 1 ? "Finish" : "Next"}
// //               </Button>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

import { Form } from "informed";
import { withSnackbar } from "notistack";
import React, { Fragment, PureComponent } from "react";
import {
  Col,
  Row,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Button,
} from "reactstrap";
import ReactNotification from "react-notifications-component";
import { Step, StepLabel, Stepper, withStyles } from "@material-ui/core";
import { subDirectory } from "../../../../src/config.json";
// import PropTypes from 'prop-types';
import AddtoCart from "../AddCart";
import Confirm from "../Confirm";

import _ from "lodash";
// import { getCurrentUser, getJwt } from '../../../services/AuthService';
import PropTypes from "prop-types";
import Summary from "../Summary";
import Payments from "../Payments";

function getSteps() {
  return ["Cart", "Confirm", "Payment", "Summary"];
}

const styles = (theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

class HorizontalLabelPositionBelowStepper extends PureComponent {
  constructor(props) {
    super(props);
    this.notificationDOMRef = React.createRef();
    this.state = {
      activeStep: 0,
      cartItems: [],
      addressInfo: {},
      open: false,
      vertical: "top",
      horizontal: "center",
      cartData: {},
      eventId: "",
    };
  }

  componentDidMount = async () => {
    console.log(this.props, "props");
  };

  getStepContent(step) {
    console.log(";;;;;;;;;;;;;; here 2", this.props);

    let { uid, cartData, eventId } = this.state;

    try {
      const {
        props: {
          props: {
            location: {
              state: { row },
            },
          },
        },
      } = this.props;
      eventId = row.eventId;
    } catch (err) {
      console.error(";;;; add event ", err);
    }

    let data = {
      eventId: eventId,
    };
    let steps = [];
    steps.map((i) => {
      console.log(i);
    });
    // step = 2
    console.log(";;;;;;;;;;;;;; here 2", eventId, data, step);
    console.log(";;;;;;;;;;;;;; here 2", this.props);
    switch (step) {
      case 0:
        return (
          <AddtoCart
            handleNext={this.handleNext}
            handleBack={this.handleBack}
            data={data}
            props={this.props}
            userId={this.state.userId}
          />
        );
      case 1:
        console.log(this.props.props, data);
        return (
          <Confirm
            handleNext={this.handleNext}
            handleBack={this.handleBack}
            props={this.props}
            data={this.state.data}
            userId={this.state.userId}
          />
        );
      case 2:
        console.log(this.props.props, data);
        return (
          <Payments
            handleNext={this.handleNext}
            handleBack={this.handleBack}
            props={this.props}
            data={data}
            userId={this.state.userId}
          />
        );

      case 3:
        console.log(this.props.props, data);
        return (
          <Summary
            handleNext={this.handleNext}
            handleBack={this.handleBack}
            props={this.props}
            data={data}
            userId={this.state.userId}
          />
        );

      default:
        return "Unknown step";
    }
  }

  // handleNext = async (eventId) => {
  //   console.log(";;;;;;;;;; 1", eventId, this.state.activeStep);
  //   await this.setState({
  //     activeStep: this.state.activeStep + 1,
  //     eventId: eventId,
  //   });
  //   console.log(this.state.activeStep, "active");
  // };
  handleNext = async (eventId, data) => {
    console.log(";;;;;;;;;; 1", eventId);
    this.setState((state) => ({
      activeStep: state.activeStep + 1,
      eventId: eventId,
      data: data,
    }));
    if (this.state.activeStep === 0) {
      await this.setState({
        activeStep: 1,
        eventId: eventId,
      });
    }
    console.log(this.state.activeStep, "active");
  };

  handleBack = async (eventId) => {
    console.log(";;;;;;;;;; 2", eventId);
    await this.setState({
      activeStep: this.state.activeStep - 1,
      eventId: eventId,
    });
  };

  // handleNext = (eventId, moveType, moveHist) => {
  //     console.log(";;;;;;;;;; 1", eventId)
  //     this.setState(state => ({
  //         activeStep: state.activeStep + 1,
  //         eventId: eventId,
  //         moveType: moveType,
  //         moveHist: moveHist
  //     }));
  // };

  // handleBack = (eventId, moveType, moveHist) => {
  //     this.setState(state => ({
  //         activeStep: state.activeStep - 1,
  //         eventId: eventId,
  //         moveType: moveType,
  //         moveHist: moveHist
  //     }));
  // };

  // nextStepper = async () => {
  //   console.log(";;;;;;;;;;;;;;;;;;;;;;;wwwwnextwwwwwwwwwwwwww");
  //   this.handleNext();
  // };
  render() {
    const { classes } = this.props;
    const steps = getSteps();
    // console.log(steps);
    const { activeStep } = this.state;
    console.log(steps, activeStep);
    return (
      <Fragment>
        {/* <Loader fullPage loading={loading} /> */}
        <ReactNotification ref={this.notificationDOMRef} />

        {/* <Container> */}
        <Row>
          <Col md={12}>
            <div class="">
              <div className="formdivnewstepper" id="tablepaddingnew">
                <Form getApi={this.setFormApi} onSubmit={this.onSubmit}>
                  {({ formApi, formState }) => (
                    <div>
                      <Row className="form-div">
                        <Col md={12}>
                          <div>
                            <Stepper
                              // onClick={this.nextStepper}
                              activeStep={activeStep}
                              alternativeLabel
                            >
                              {steps.map((label) => (
                                <Step key={label}>
                                  <StepLabel>{label}</StepLabel>
                                </Step>
                              ))}
                            </Stepper>
                            <div className={classes.root}>
                              {this.getStepContent(activeStep)}
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  )}
                </Form>
              </div>
            </div>
          </Col>
        </Row>
        {/* </Container> */}
      </Fragment>
    );
  }
}

HorizontalLabelPositionBelowStepper.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(HorizontalLabelPositionBelowStepper);
