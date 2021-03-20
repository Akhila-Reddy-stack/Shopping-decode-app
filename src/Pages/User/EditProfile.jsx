import React, { Fragment, PureComponent } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import _ from 'lodash';
import { Form } from 'informed';
import { Link } from 'react-router-dom';
import { withSnackbar } from 'notistack';
import * as InoIcons from 'react-icons/io';
import ReactNotification from 'react-notifications-component';
import '../../styles/editprofile.scss';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';

const StyledBadge = withStyles((theme) => ({
	badge: {
		right: -3,
		top: 13,
		border: `2px solid ${theme.palette.background.paper}`,
		padding: '0 4px',
	},
}))(Badge);

class EditProfile extends PureComponent {
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
				<div className="editProfile">
					<div className="edit-nav">
						<i class="fas fa-arrow-circle-left lefticon"></i>
						<IconButton aria-label="cart" className="stylebadge">
							<StyledBadge badgeContent={2} color="secondary">
								<ShoppingCartIcon className="shopping" />
							</StyledBadge>
						</IconButton>
					</div>
					<div className="">
						<h4 class="edit-details">EDIT DETAILS </h4>
					</div>
					<div className="">
						<Row>
							<span class="name">
								<input className="edit-input  firstname form-control" placeholder="First Name" />
							</span>
							<span class="last-name name">
								<input className="edit-input  lastname form-control" placeholder="Last Name" />
							</span>
						</Row>
						<Row>
							<input className="edit-input form-control" placeholder="Mail ID" />
						</Row>
						<Row>
							<input className="edit-input form-control" placeholder="Phone" />
						</Row>
						<Row>
							<input className="edit-input form-control" placeholder="Address" />
						</Row>
						<Row>
							<input className="edit-input form-control" placeholder="street/Locality" />
						</Row>
						<Row>
							<input className="edit-input form-control" placeholder="LankMark(optional)" />
						</Row>
						<Row>
							<input className="edit-input form-control" placeholder="City" />
						</Row>
						<Row>
							<input className="edit-input form-control" placeholder="State" />
						</Row>
						<Row>
							<input className="edit-input form-control" placeholder="Pincode" />
						</Row>
						<Row>
							<input className="edit-input form-control" placeholder="Country" />
						</Row>
						<Row>
							<Button className="save-address"> Save Address</Button>
						</Row>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default withSnackbar(EditProfile);
