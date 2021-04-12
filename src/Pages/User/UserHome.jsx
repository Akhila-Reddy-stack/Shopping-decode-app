import React, { Fragment, PureComponent } from 'react'
import { Container, Button } from 'react-bootstrap';
import { Col, Row } from 'reactstrap';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { withSnackbar } from 'notistack';
import { Loader } from '../../Components/Loading/Loader';
import OnlineShopping from '../../Images/user/shopping.png'
import SideNav from '../../Components/NavBar/Sidebar'
import scan from '../../Images/user/scanicon.png';
import banner1 from '../../Images/user/bannerImg1.jpg'
import banner2 from '../../Images/user/bannerImg2.jpg'
import banner3 from '../../Images/user/bannerImg3.jpg'
import banner4 from '../../Images/user/bannerImg4.jpg'
import Carousel from '../../Images/user/Carousel.jpg'
import headerIcon from '../../Images/user/morrisons.png'
import RBCarousel from "react-bootstrap-carousel";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { TextInput } from '../../Components/Forms/Input'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import RoomIcon from '@material-ui/icons/Room';
import NavBar from '../../Components/NavBar/Navbar'
class UserHome extends PureComponent {
    constructor(props) {
        super(props)
        this.slider = React.createRef();
        this.state = {
            data: [],
            loading: true,
            bannerImgs: [],
            autoplay: true,
        }
    }

    componentDidMount = async () => {
        setTimeout(function () { this.setState({ loading: false }); }.bind(this), 600);


    }
    _onSelect = (active, direction) => {
        console.log(`active=${active} && direction=${direction}`);
    };
    _visiableOnSelect = (active) => {
        console.log(`visiable onSelect active=${active}`);
    };
    _slideNext = () => {
        this.slider.current.slideNext();
    };
    _slidePrev = () => {
        this.slider.current.slidePrev();
    };
  
    render() {
        const { data, loading } = this.state;
        return (
            <Fragment>
                <>
                    <Loader fullPage loading={loading} />
                    <div className="shopping-cart">
                         {/* <div className="shopping-header">
                         <div className="shopping-head">
                            <div className="shopping-lefticon">
                                <SideNav />
                            </div></div>
                            <NavBar />
                        </div> */}
                        <div className="shopping-head">
                            <div className="shopping-lefticon">
                                <SideNav />
                            </div>
                            {/* <div className="shopping-righticon">
                                <RoomIcon className="marRight" />
                                <PersonIcon className="marRight" />
                                <HeadsetMicIcon className="marRight" />
                               <Link to="/cart" className="cartlink"> <ShoppingCartIcon className="marRight"  />  </Link><br />
                                <div><div class="place">Chennai</div></div>
                            </div> */}
                        </div>
                    </div>
                    <div class="">
                    <img className="carouselimg" src={Carousel} />
                                <div className="scanpay">Scan and Pay</div>
                              

                         
                        {/* <RBCarousel
                            animation={true}
                            autoplay={this.state.autoplay}
                            slideshowSpeed={9000}
                            defaultActiveIndex={0}
                            leftIcon={this.state.leftIcon}
                            rightIcon={this.state.rightIcon}
                            onSelect={this._onSelect}
                            ref={this.slider}
                            version={4}
                        >
                            <div>
                                <div className="carousel-center">Simplify Your Shopping</div>
                                <img className="bannerimg1" src={banner1} />
                            </div>
                            <div >
                                <div className="carousel-center">Walk Through Easily</div>
                                <img className="bannerimg2" src={banner2} />
                            </div>
                            <div>
                                <div className="carousel-center">Add to Cart Easily</div>
                                <img className="bannerimg3" src={banner3} />
                            </div>
                            <div>
                                <div className="carousel-center">Scan and Pay</div>
                                <img className="bannerimg4" src={banner4} />

                            </div>
                        </RBCarousel> */}
                    </div>
                    <div class="reader">
                        <div className='col-md-4'>
                            <img src={scan} class="scanimg" />
                            <div className=''>
                                <Button type="submit" className="Scan-QR" >
                                    <Link className="link" to="/scan" > Scan </Link>
                                </Button>
                            </div>
                        </div>
                        <div className='col-md-4 or'>  OR </div>
                        <div className='col-md-4 enterinput'>
                            <TextInput field="id" label="" placeholder="Enter 6 Digit Id" className="userdetails"
                                name="id" value="" />
                            <div className=''>
                                <Button type="submit" className="Scan-QR" >
                                    <Link className="link" to="/scan" > Enter </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </>
            </Fragment >
        );
    }
}

export default withSnackbar(UserHome)




