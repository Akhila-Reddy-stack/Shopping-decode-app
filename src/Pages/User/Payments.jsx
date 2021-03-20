import React, { Fragment, PureComponent } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import _ from 'lodash';
import { withSnackbar } from 'notistack';
import DefaultModal from '../../Components/Forms/DefaultModal';
import UPI from '../../Images/user/UPI.jpg';
import GPay from '../../Images/user/gpay.jpg';
import person from '../../Images/user/person-male.png';
import card from '../../Images/user/bank-cards-xl.png';
import cash from '../../Images/user/banknotes-xxl.png';
import paytm from '../../Images/user/paytm.jpeg';
import phonepay from '../../Images/user/phonepay.png';
import Mastercard from '../../Images/user/MasterCard.png';
import Visa from '../../Images/user/Visa.png';
import other from '../../Images/user/other.png';
import Rupay from '../../Images/user/Rupay.png';
import '../../styles/pay.scss';
import { Update } from '@material-ui/icons';
import RadioButton from '../../Components/Forms/Radiobtn';

class Payments extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			isShowUpi: false,
			isShowcard: false,
			Selected: 'UPI-GPAY',
			Selectcard: '',
			igsrc: GPay,
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
	handleUPI = async () => {
		await this.setState({
			isShowUpi: true,
		});
	};
	onCloseModalUpi = async () => {
		await this.setState({
			isShowUpi: false,
		});
	};
	handlecard = async () => {
		await this.setState({
			isShowcard: true,
		});
	};
	onCloseModalcard = async () => {
		await this.setState({
			isShowcard: false,
		});
	};
	payment = async () => {
		const { handleNext } = this.props;
		console.log(this.props);
		var stepIndex = 3;
		console.log(stepIndex, 'step');
		handleNext(stepIndex, this.props);
	};
	paymentback = async () => {
		const { handleBack } = this.props;
		var stepIndex = 2;
		handleBack(stepIndex, this.props);
	};
	onChangeRadio = async (e) => {
		console.log('radiooooooo');
		this.setState({ Selected: e.target.value });
		this.setState({
			checked: e.target.checked,
		});
		const { Selected } = this.state;
		let igsrc = '';
		// if (Selected === "UPI-GPAY") {
		//   igsrc = GPay
		// }
		// else if (Selected === "UPI-PHONEPAY") {
		//   igsrc = phonepay
		// }
		// else if (Selected === "UPI-PAYTM") {
		//   igsrc = paytm
		// }
		// else if (Selected === "VISA") {
		//   igsrc = paytm
		// }
		// else if (Selected === "MASTERCARD") {
		//   igsrc = Mastercard
		// }
		// else if (Selected === "RUPAY") {
		//   igsrc = Rupay
		// }
		// else if (Selected === "OTHER") {
		//   igsrc = other
		// }

		// await this.setState({
		//   igsrc: igsrc
		// })
		console.log(this.state);
	};
	// onSelectcard = async (e) => {
	//   console.log("radiooooooo");
	//   this.setState({ Selectcard: e.target.value });
	//   this.setState({
	//     checked: e.target.checked,
	//   });
	//   console.log(this.state);
	// };
	render() {
		const { data, loading, isShowUpi, isShowcard, Selected, Selectcard, igsrc } = this.state;
		console.log(this.state);

		return (
			<Fragment>
				<div className="payment">
					<div className="">
						<span>
							{' '}
							<i class="fas fa-arrow-circle-left lefticon" onClick={this.paymentback}></i>{' '}
							<span class="payy">Payment </span>
						</span>
					</div>
					<div>
						<div className="pay-headclr">
							<div className="pay-header">
								<div class="pay-wrap">
									<div> DMART IN MOBILE</div>
									<div>CHECKOUT</div>
								</div>
								<div class="pay-wrap-details">
									<div>Order Id :#switzap_ABCD123</div>
									<div>$75.00</div>
								</div>
							</div>
							{/* <div>English</div> */}
						</div>
						<div className="pay-detailsclr">
							<div className="form-control">
								<img src={person} class="personimg" />
								<span class="">
									InayathUllah
									<span class=""> +919500170719</span>
								</span>
							</div>
							<div className="prefer-list">
								<span>PREFERRED PAYMENT</span>
								<div className="form-control preferred">
									<img src={other} className="personimg" />
									<span class="payment-name">
										{Selected}
										{/* <span>
                      <i class="fas fa-arrow-circle-right"></i>
                    </span> */}
									</span>
								</div>
							</div>
							<div className="pay-list">
								<div className="form-control form-wrap" onClick={this.handleUPI}>
									<img src={UPI} className="personupiimg" />
									<span class="payment-name">
										UPI/QR
										<div class="payy-name">Instant Payment using UPI App</div>
									</span>
								</div>
								<div className="form-control form-wrap" onClick={this.handlecard}>
									<img src={card} className="personimg" />
									<span class="payment-name">
										Card
										<div class="payy-name">Visa,Mastercard,more</div>
									</span>
								</div>
								<div className="form-control form-wrap">
									<img src={cash} className="personimg" />
									<span class="payment-name">
										Cash
										<div class="payy-name">Pay Cash in Counter</div>
									</span>
								</div>
							</div>
							<br /> <br /> <br />
							<div className="">
								<Button className="btn btn-primary paysend" onClick={this.payment}>
									{' '}
									PAY
								</Button>
							</div>
							<DefaultModal
								className="Viewmodal"
								isOpen={isShowUpi}
								faClass={'doorClosed'}
								handleClose={this.onCloseModalUpi}
								title="Select UPI Payment Type"
								showHeader={false}
								hideFooter={false}
							>
								<div className="mt-4">
									<div className="">
										<div className="pay-flex">
											<RadioButton
												type="radio"
												className="checkedradio"
												onChange={(e) => this.onChangeRadio(e)}
												field="gpay"
												name="gpay"
												value="UPI-GPAY"
												checked={Selected === 'UPI-GPAY' ? true : false}
												label="UPI-GPAY"
												readOnly
											/>
											{/* <img src={GPay} class="payimg" /> */}
										</div>

										<div className="pay-flex">
											<RadioButton
												type="radio"
												onChange={(e) => this.onChangeRadio(e)}
												field="phonepay"
												className="checkedradio"
												name="phonepay"
												value="UPI-PHONEPAY"
												label="UPI-PHONEPAY"
												checked={Selected === 'UPI-PHONEPAY' ? true : false}
											/>
											{/* <img src={phonepay} class="payphoneimg" /> */}
										</div>

										<div className="pay-flex">
											<RadioButton
												type="radio"
												onChange={(e) => this.onChangeRadio(e)}
												field="paytm"
												className="checkedradio"
												name="paytm"
												value="UPI-PAYTM"
												label="UPI-PAYTM"
												checked={Selected === 'UPI-PAYTM' ? true : false}
												readOnly
											/>
											{/* <img src={paytm} class="payphoneimg" /> */}
										</div>
									</div>
									<div className="mt-4" onClick={this.onCloseModalUpi}>
										<button class="btn btn-info float-right">Ok</button>
									</div>
								</div>
							</DefaultModal>
							<DefaultModal
								className="Viewmodal"
								isOpen={isShowcard}
								faClass={'doorClosed'}
								handleClose={this.onCloseModalcard}
								title="Select Card"
								showHeader={false}
								hideFooter={false}
							>
								<div className="mt-4">
									{' '}
									<div className="">
										<div className="pay-flex">
											<RadioButton
												type="radio"
												className="checkedradio"
												onChange={(e) => this.onChangeRadio(e)}
												field="visa"
												name="visa"
												value="VISA"
												checked={Selected === 'VISA' ? true : false}
												label="VISA"
											/>
											{/* <img src={Visa} class="personimg" /> */}
										</div>
										<div className="pay-flex">
											<RadioButton
												type="radio"
												onChange={(e) => this.onChangeRadio(e)}
												field="mastercard"
												className="checkedradio"
												name="mastercard"
												value="MASTERCARD"
												label="MASTERCARD"
												checked={Selected === 'MASTERCARD' ? true : false}
											/>
											{/* <img src={Mastercard} class="personimg" /> */}
										</div>
										<div className="pay-flex">
											<RadioButton
												type="radio"
												onChange={(e) => this.onChangeRadio(e)}
												field="Rupay"
												className="checkedradio"
												name="Rupay"
												value="RUPAY"
												label="RUPAY"
												checked={Selected === 'RUPAY' ? true : false}
											/>
											{/* <img src={Rupay} class="personimg" /> */}
										</div>
										<div className="pay-flex">
											<RadioButton
												type="radio"
												onChange={(e) => this.onChangeRadio(e)}
												field="other"
												className="checkedradio"
												name="other"
												value="OTHER"
												label="OTHER"
												checked={Selected === 'OTHER' ? true : false}
											/>
											{/* <img src={other} class="personimg" /> */}
										</div>
									</div>
									<div className="mt-4" onClick={this.onCloseModalcard}>
										<button class="btn btn-info float-right">Ok</button>
									</div>
								</div>
							</DefaultModal>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default withSnackbar(Payments);
