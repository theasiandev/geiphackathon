import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './components/navbar'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import styles from '../css/main.css'
import bstyles from '../css/theme.css'
import everest from '../media/everest.jpeg'
import aussie from '../media/aussie.jpeg'
import bali from '../media/bali.jpeg'
import peru from '../media/peru.jpeg'
import guy1 from '../media/guy1.jpg'
import guy2 from '../media/guy2.jpeg'
import guy3 from '../media/guy3.jpg'
import guy4 from '../media/guy4.jpg'


class HomeLayout extends React.Component {
    constructor(props) {
        super(props)
        this.state = { date : new Date() }
    }

    render() {
        return(
            <div>
               <NavBar />
           
               <div class="carousel slide" id="myCarousel">
                    <ol class="carousel-indicators">
                        <li class="active" data-slide-to="0" data-target="#myCarousel"></li>
                        <li data-slide-to="1" data-target="#myCarousel"></li>
                        <li data-slide-to="2" data-target="#myCarousel"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="active carousel-item">
                            <div class="fill" className={styles.carouselImg1}></div>
                            <div class="carousel-caption">
                                <h2 className= {styles.animated1 + ' ' + styles.fadeInRight}>Find Travel Buddies</h2>
                                <p className= {styles.animated2 + ' ' + styles.fadeInRight}>Browse through the list of trips and select the one you love most</p>
                                <p className= {styles.animated3 + ' ' + styles.fadeInRight}>
                                    <a class="btn btn-transparent btn-rounded btn-large text-white" href="#product">Find a trip</a></p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="fill" className={styles.carouselImg2}></div>
                            <div class="carousel-caption">
                                <h2 className= {styles.animated1 + ' ' + styles.fadeInRight}>Start a trip</h2>
                                <p className= {styles.animated2+ ' ' + styles.fadeInRight}>Create a travel itinerary and you can choose whether to accept requests from other travelers</p>
                                <p className= {styles.animated3 + ' ' + styles.fadeInRight}>
                                    <a class="btn btn-transparent btn-rounded btn-large text-white" href="#about">Start a trip</a></p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="fill" className={styles.carouselImg3}></div>
                            <div class="carousel-caption">
                                <h2 className= {styles.animated1 + ' ' + styles.fadeInRight}>Exclusive discounts</h2>
                                <p className= {styles.animated2 + ' ' + styles.fadeInRight}>We have the cheapest tour packages and plane tickets</p>
                                <p className= {styles.animated3 + ' ' + styles.fadeInRight}>
                                    <a class="btn btn-transparent btn-rounded btn-large text-white" href="#contact">Learn more</a></p>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" data-slide="prev" href="#myCarousel" role="button"><span class="carousel-control-prev-icon"></span> <span class="sr-only">Previous</span></a> <a class="carousel-control-next" data-slide="next" href="#myCarousel" role="button"><span class="carousel-control-next-icon"></span> <span class="sr-only">Next</span></a>
                </div>
            

            <div class="container mt-5">
                <h1 class="text-center">Find a Trip</h1>
                <hr />
                <div class="row">
                    <div class="col-md-6 ">
                        <div class="form-group ">
                            <label htmlFor="country">Where do you want to go ?</label>
                            <input id="country" class="form-control" placeholder="Select Destination" type="text" />
                        </div>

                        <div class="form-group">
                            <label htmlFor="country">When are you leaving?</label><br />
                            <DatePicker class="form-control" className = {styles.datepicker}
                            selected={ this.state.date }
                            >
                            </DatePicker>
                        </div>

                        <button type="button" class="btn btn-danger"> Find Trips </button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <h3 class="text-center">WanderFam trips around the world</h3>
                        <hr className={styles.line}></hr>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3">
                        <div class="card"> 
                            <img class="card-img-top" src={everest} alt="Card image cap" />
                            <div class="card-body" >
                            <h4 class="card-title">Mt. Everest</h4>
                            <p class="card-text">Join other travellers on a trip to Mount Everest</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card"> 
                            <img class="card-img-top" src={bali} alt="Card image cap" />
                            <div class="card-body" >
                            <h4 class="card-title">Bali</h4>
                            <p class="card-text">Join other travellers on a trip to Bali</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card"> 
                            <img class="card-img-top" src={peru} alt="Card image cap" />
                            <div class="card-body" >
                            <h4 class="card-title">Peru</h4>
                            <p class="card-text">Join other travellers on a trip to Peru</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card"> 
                            <img class="card-img-top" src={aussie} alt="Card image cap" />
                            <div class="card-body" >
                            <h4 class="card-title">Australia</h4>
                            <p class="card-text">Join other travellers on a trip to Australia</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 pt-5 mt-5">
                        <h3 class="text-center">Find a travel buddy from singapore</h3>
                        <hr className={styles.line}></hr>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3">
                        <div class="card"> 
                            <img class="card-img-top" src={guy1} alt="Card image cap" />
                            <div class="card-body" >
                            <h4 class="card-title">Road trip to Beijing</h4>
                            <p class="card-text">Hello eveyone! im looking for 3 people to join me and my friends on a trip to Beijing from KL</p>
                            <a href="#" class="btn btn-danger" >Join</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card"> 
                            <img class="card-img-top" src={guy2} alt="Card image cap" />
                            <div class="card-body" >
                            <h4 class="card-title">Watch the Auroras</h4>
                            <p class="card-text">Looking for adventurous buddies to watch the northern lights together and explore Norway</p>
                            <a href="#" class="btn btn-danger" >Join</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card"> 
                            <img class="card-img-top" src={guy3} alt="Card image cap" />
                            <div class="card-body" >
                            <h4 class="card-title">15 day Europe tour</h4>
                            <p class="card-text">Travelling by train accross europe and stopping at each and every European countries</p>
                            <a href="#" class="btn btn-danger" >Join</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card"> 
                            <img class="card-img-top" src={guy4} alt="Card image cap" />
                            <div class="card-body" >
                            <h4 class="card-title">Hiking mount Everest</h4>
                            <p class="card-text">Join me if are as ambitious and have what it takes to hike the biggest mountain on earth.</p>
                            <a href="#" class="btn btn-danger" >Join</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default HomeLayout;