import React, { Fragment, PureComponent } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import _ from 'lodash';
import { withSnackbar } from 'notistack';
import '../../styles/ordersreturns.scss';
import Modal from 'react-responsive-modal';

class OrdersReturns extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			open: false,
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

	onCloseModal = () => {
		this.setState({ open: false });
	};

	viewDetails = () => {
		this.setState({ open: true });
	};
	render() {
		const { data, open } = this.state;
		console.log(this.state);
		return (
			<Fragment>
				<div className="payment">
					<div className="summary-head">
						<span>
							{' '}
							<i class="fas fa-arrow-circle-left lefticon"></i> &nbsp;&nbsp;Orders & Returns
						</span>
					</div>
					<div className="storing-head">
						<div className="storing">Store</div>
					</div>
					<div className="place-desc">
						<div class="place-desc-grid">
							<div class="place-desc-item">
								Order <br />
								Id{' '}
							</div>
							<div class="place-desc-item"> Store</div>
							<div class="place-desc-item"> Date</div>
							<div class="place-desc-item">
								{' '}
								Total <br />
								Price
							</div>
							<div class="place-desc-item">Staus </div>
							<div class="place-desc-item">More </div>
							<div class="place-desc-item">7234 </div>
							<div class="place-desc-item">Dmart </div>
							<div class="place-desc-item">1/1/21 </div>
							<div class="place-desc-item">$75.00 </div>
							<div class="place-desc-item">Finished </div>
							<div class="place-desc-item viewcol" onClick={this.viewDetails}>
								{' '}
								View Details{' '}
							</div>
							<div class="place-desc-item"> </div>
							<div class="place-desc-item"> </div>
							<div class="place-desc-item"> </div>
							<div class="place-desc-item"> </div>
							<div class="place-desc-item"> </div>
							<div class="place-desc-item"> </div>
						</div>
					</div>
				</div>

				<Modal open={open} onClose={this.onCloseModal} center>
					<div className="total-header"> View Details</div>
					<div className="place-descmodal">
						<div class="place-desc-gridmodal">
							<div class="place-desc-mitem">CODE </div>
							<div class="place-desc-mitem"> Description</div>
							<div class="place-desc-mitem"> Qty</div>
							<div class="place-desc-mitem">
								{' '}
								Unit <br />
								Price
							</div>
							<div class="place-desc-mitem">Total </div>
							<div class="place-desc-mitem">12345 </div>
							<div class="place-desc-mitem">
								Bottle 0.8L <br />
								Tritan Screw <br /> Top Hiking Flask:Blue{' '}
							</div>
							<div class="place-desc-mitem">1 </div>
							<div class="place-desc-mitem">$ 75.00</div>
							<div class="place-desc-mitem">$ 75.00</div>
						</div>
					</div>
					<div className="total-footer"> TOTAL&nbsp;&nbsp;&nbsp;$ 75.00</div>
				</Modal>
			</Fragment>
		);
	}
}

export default withSnackbar(OrdersReturns);
