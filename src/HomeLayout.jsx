import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './components/navbar'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class HomeLayout extends React.Component {
    constructor(props) {
        super(props)
        this.state = { date : new Date() }
    }

    render() {
        return(
            <div>
               <NavBar />
            <div>
            <div class="carousel slide" id="myCarousel">
                    <ol class="carousel-indicators">
                        <li class="active" data-slide-to="0" data-target="#myCarousel"></li>
                        <li data-slide-to="1" data-target="#myCarousel"></li>
                        <li data-slide-to="2" data-target="#myCarousel"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="active carousel-item">
                            <div class="fill" style={{ backgroundImage : `url(&apos;media/carousel1.jpeg&apos;)` }}></div>
                            <div class="carousel-caption">
                                <h2 class="animated1 fadeInRight">Find Travel Buddies</h2>
                                <p class="animated2 fadeInRight">Browse through the list of trips and select the one you love most</p>
                                <p class="animated3 fadeInRight"><a class="btn btn-transparent btn-rounded btn-large text-white" href="#product">Find a trip</a></p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="fill" style={{ backgroundImage : `url(&apos;media/carousel2.jpeg&apos;)` }}></div>
                            <div class="carousel-caption">
                                <h2 class="animated1 fadeInRight">Start a trip</h2>
                                <p class="animated2 fadeInRight">Create a travel itinerary and you can choose whether to accept requests from other travelers</p>
                                <p class="animated3 fadeInRight"><a class="btn btn-transparent btn-rounded btn-large text-white" href="#about">Start a trip</a></p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="fill" style={{ backgroundImage : `url(&apos;media/carousel3.jpeg&apos;)` }}></div>
                            <div class="carousel-caption">
                                <h2 class="animated1 fadeInRight">Exclusive discounts</h2>
                                <p class="animated2 fadeInRight">We have the cheapest tour packages and plane tickets</p>
                                <p class="animated3 fadeInRight"><a class="btn btn-transparent btn-rounded btn-large text-white" href="#contact">Learn more</a></p>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" data-slide="prev" href="#myCarousel" role="button"><span class="carousel-control-prev-icon"></span> <span class="sr-only">Previous</span></a> <a class="carousel-control-next" data-slide="next" href="#myCarousel" role="button"><span class="carousel-control-next-icon"></span> <span class="sr-only">Next</span></a>
                </div>
            </div>
                <div>
                    <h4>Find a Trip</h4>
                    <label htmlFor="country">Country: </label>
                    <input id="country" type="text" />
                    <h5>When are you leaving?</h5>
                    <DatePicker
                        selected={ this.state.date }
                    >
                    </DatePicker>
                    <button type="button" />
                </div>
            </div>
        )
    }
}

export default HomeLayout;