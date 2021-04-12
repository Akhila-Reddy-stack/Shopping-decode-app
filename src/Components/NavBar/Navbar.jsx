import { PureComponent, Fragment } from 'react';
import * as ReactDOM from 'react-dom';
import { Row, Col, Container, Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import $ from 'jquery';
import ReactNotification from 'react-notifications-component';
import { Form } from 'informed';
import Modal from 'react-responsive-modal';
import * as React from 'react';
import _ from 'lodash';
import * as InoIcons from 'react-icons/io';
import '../../styles/nav.scss'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import RoomIcon from '@material-ui/icons/Room';
import SideNav from '../NavBar/Sidebar'
import SignUp from '../Auth/SignUp'
import { Link } from 'react-router-dom';

class NavBar extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            loggedIn: false,
            open: false
        };
    }

    setFormApi = (formApi) => {
        this.formApi = formApi
    }


    componentDidMount = async () => {
    }



    userSignIn = async () => {
        await this.setState({
            open: true
        })
    }


    render() {

        const { loggedIn ,open} = this.state;


        return (
            <Fragment>
                   
                <ReactNotification ref={this.notificationDOMRef} />
                <SideNav className="nav-tog" />

            </Fragment>



        )
    }

}
export default (NavBar)









