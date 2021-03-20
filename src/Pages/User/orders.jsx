import React, { Fragment, PureComponent } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import _ from 'lodash';
import { withSnackbar } from 'notistack';
import '../../styles/orders.scss';

class Orders extends PureComponent {
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

	render() {
		const { data, loading } = this.state;
		console.log(this.state);
		return (
			<Fragment>
				<div className="orders">
					<div className="order-col">
						<span class="orderssize">
							{' '}
							<i class="fas fa-arrow-circle-left lefticon"></i> &nbsp;&nbsp;Orders & Returns
						</span>
					</div>
					<div className="store">
						<span class="st">Store</span>
						<span class="st mon">3 months</span>
					</div>
					<div className="orderid">
						<span>
							Order ID:<span class="ids"> &nbsp;&nbsp;8627234</span>{' '}
						</span>
						<span class="date">1-1-2021</span>
					</div>
					<div className="scan-header">
						<div>
							<span class="scann">Scan & Pay</span>
							<span class="payorder">Order Details</span>
							<div className="">
								<h5 class="purday">Purchased On Thursday 1 January 2021</h5>
								<div className="order-details-list">
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
							</div>
						</div>
					</div>
					<div>
						<span>
							{' '}
							<i class="fas fa-arrow-circle-right orderright"></i>
						</span>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default withSnackbar(Orders);
