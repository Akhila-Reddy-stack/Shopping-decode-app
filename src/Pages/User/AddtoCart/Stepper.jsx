import { Form } from 'informed';
import { withSnackbar } from 'notistack';
import React, { Fragment, PureComponent } from 'react';
import { Col, Row, Container, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import ReactNotification from 'react-notifications-component';
import { Step, StepLabel, Stepper, withStyles } from '@material-ui/core';
import { subDirectory } from '../../../../src/config.json';
// import PropTypes from 'prop-types';
import AddtoCart from '../AddCart';
import Confirm from '../Confirm';
import _ from 'lodash';
import PropTypes from 'prop-types';
import Summary from '../Summary';
import Payments from '../Payments';

function getSteps() {
	return ['Cart', 'Confirm', 'Payment', 'Summary'];
}

const styles = (theme) => ({
	root: {
		width: '100%',
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
			vertical: 'top',
			horizontal: 'center',
			cartData: {},
			eventId: '',
		};
	}

	componentDidMount = async () => {
		console.log(this.props, 'props');
	};

	getStepContent(step) {
		console.log(';;;;;;;;;;;;;; here 2', this.props);
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
			console.error(';;;; add event ', err);
		}
		let data = {
			eventId: eventId,
		};
		let steps = [];
		steps.map((i) => {
			console.log(i);
		});
		// step = 2
		console.log(';;;;;;;;;;;;;; here 2', eventId, data, step);
		console.log(';;;;;;;;;;;;;; here 2', this.props);
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
				return 'Unknown step';
		}
	}

	handleNext = async (eventId, data) => {
		console.log(';;;;;;;;;; 1', eventId);
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
		console.log(this.state.activeStep, 'active');
	};

	handleBack = async (eventId) => {
		console.log(';;;;;;;;;; 2', eventId);
		await this.setState({
			activeStep: this.state.activeStep - 1,
			eventId: eventId,
		});
	};

	render() {
		const { classes } = this.props;
		const steps = getSteps();
		// console.log(steps);
		const { activeStep } = this.state;
		console.log(steps, activeStep);
		return (
			<Fragment>
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
														<Stepper activeStep={activeStep} alternativeLabel>
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
