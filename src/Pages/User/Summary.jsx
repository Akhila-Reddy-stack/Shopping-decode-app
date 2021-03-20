import React, { Fragment, PureComponent } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import _ from 'lodash';
import { withSnackbar } from 'notistack';
import checked from '../../Images/user/checked.png';
import '../../styles/summary.scss';

var QRCode = require('qrcode-react');

class Summary extends PureComponent {
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
	summaryback = async () => {
		const { handleBack } = this.props;
		var stepIndex = 3;
		handleBack(stepIndex, this.props);
	};
	render() {
		const { data, loading } = this.state;
		console.log(this.state);

		return (
			<Fragment>
				<div className="bookingsummary">
					<div className="summary-head">
						<span>
							{' '}
							<i class="fas fa-arrow-circle-left lefticon" onClick={this.summaryback}></i>{' '}
							&nbsp;&nbsp;SUMMARY
						</span>
					</div>

					<div className="qr-success">
						<h5 class="h5fw">SUCCESS !</h5>
						<img src={checked} class="img-checked" />
						<div class="qrid">
							{' '}
							<h5 class="h5fw">ID :switzap010220xty </h5>
							<div class="qrcode">
								<QRCode
									className="qrcode"
									value={'RestaurantId' + ';' + 'OrderId' + ';' + 'TR'}
									size={40}
									fgColor="black"
									bgColor="white"
									// logo={ttdcicon}
								/>
							</div>
						</div>
					</div>
					<div className="show-head">
						<span class="showId">Show this ID for Security Checking</span>
						<div class="showpur">
							You <br /> Have purchased <br />
							At <br />
							<b> Dmart</b>
						</div>
					</div>
					<div className="items">
						<div class="items-rr"> 1 item </div>
					</div>
					<div className="order-details-list bookoSum">
						<span>1</span>
						<span class="listed">
							Bottle 0.8L Tritan screw Top Hiking Flask:Blue
							<br />
							<span class="listed"> Size:No Size</span>
							<br />
							<span class="listed qty">Qty:1</span>
							<span class="listed qty pr">$75.00</span>
						</span>
					</div>
					<div className="">
						<div className="details-head">
							<h5 class="h5fw">Details</h5>
							<div className="details-list-head">
								<div className="details-list">
									<div>Order ID</div>
									<div>Date</div>
									<div>Payment Mode</div>
									<div>Payment Status</div>
								</div>
								<div className="details-sumry">
									<div>01012102</div>
									<div>01 Jan 21</div>
									<div>UPI</div>
									<div> SUCCESS</div>
								</div>
							</div>
						</div>
						<div className="order-head">
							<h5 class="h5fw">Order Summary</h5>
							<div className="order-list-head">
								<div className="order-list">
									<div>Total Price (Inc Tax)</div>
									<div>Delivery</div>
								</div>
								<div className="order-sumry">
									<div>01012102</div>
									<div>FREE</div>
								</div>
							</div>
						</div>
						<div className="total-head">
							<div className="">
								<div>Total</div>
							</div>
							<div className="total-sumry">
								<span>$ 75.00</span>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default withSnackbar(Summary);
