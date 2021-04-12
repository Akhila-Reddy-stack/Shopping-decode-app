import React, { Fragment, PureComponent } from 'react'
import { Container, Button } from 'react-bootstrap';
import { Col, Row } from 'reactstrap';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { withSnackbar } from 'notistack';
import { Loader } from '../../Components/Loading/Loader';
import OnlineShopping from '../../Images/user/shopping.png'
import SideNav from '../../Components/NavBar/Sidebar'
import scan from '../../Images/user/barcode.png';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
// import IconButton from '@material-ui/icons/IconButton';
import { TextInput } from '../../Components/Forms/Input'
import { Form } from 'informed';
import '../../styles/useraccount.scss'

class UserAccountDetails extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            loading: true,
            firstName: 'Inayath',
            lastName: 'Ullah',
            emailId: 'inayath.feb21@gmail.com',
            mobileNumber: '9500170719',
            doorno:"#47",
            place:"Shanthi Colony Annanagar",
            dist:"CHENNAI",
            state:"TAMILNADU",
            pincode:"600040"
        }
    }

    componentDidMount = async () => {
        setTimeout(function () { this.setState({ loading: false }); }.bind(this), 600);
    }

    render() {
        const { data, loading, firstName, lastName, emailId, mobileNumber ,doorno,place,dist,state,pincode} = this.state;
        console.log(this.state)
        return (
            <Fragment>
                <>
                    <Loader fullPage loading={loading} />
                    <div className="userAccount">
                        <div className="accountnav">
                            <ArrowBackIcon className="backnav" />
                            {/* <IconButton aria-label="cart" className="addcart">
                                <StyledBadge badgeContent={4} color="secondary">
                                    <ShoppingCartIcon />
                                </StyledBadge>
                            </IconButton> */}
                        </div>
                        <div className="userform">
                            <div className="accDetails-header">
                                ACCOUNT DETAILS
                                </div>
                            <Form getApi={this.setFormApi}  >
                                {({ formApi, formState }) => (
                                    <div>
                                        <div className='row '>
                                            <div className='col-6'>
                                                <TextInput field="firstName" className="userdetails"
                                                    label=""
                                                    name="firstName" value={firstName} />
                                            </div>
                                            <div className='col-6'>
                                                <TextInput field="lastName" label="" className="userdetails"
                                                    name="lastName" value={lastName} />
                                            </div>

                                        </div>
                                        <div className='row'>
                                            <div className='col-12'>
                                                <TextInput field="emailId" label="" className="userdetails"
                                                    name="emailId" value={emailId} />
                                            </div>
                                        </div>
                                        <div className='row '>
                                            <div className='col-12'>
                                                <TextInput field="mobileNumber" label="" className="userdetails"
                                                    name="mobileNumber" value={mobileNumber} />
                                            </div>
                                        </div>


                                    </div>

                                )}
                            </Form>
                            <div className="address">
                            <div className="address-header">
                               HOME
                                </div>
                                <div className="address-details">
                                    {doorno},{place}<br/>
                                    {dist},{state}-{pincode}
                                </div>
                                </div>
                        </div>
                        <br />

                    </div>


                </>
            </Fragment >
        );
    }
}

export default withSnackbar(UserAccountDetails)




