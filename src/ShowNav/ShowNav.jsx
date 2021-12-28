import React, { Component } from 'react'
import './shownav.scss'

class ShowNav extends Component {
    render() {
        return (
            <div className='Showcase'>
                <div className="header">
                    <div className="navbar">
                        <div className="logo">
                            <h1>Travello</h1>
                        </div>
                        <div className="nav-items">
                            <ul>
                                <li className='active'>Home</li>
                                <li>About us</li>
                                <li>Services</li>
                                <li>News</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div className="call">
                            <h2>Call us: 00-56 445 678 33</h2>
                        </div>
                    </div>
                </div>
                <div className="slider">
                    <h1>Let us take you away</h1>
                </div>

                <div className="page-nav">
                    <ul>
                        <li>
                            <a href="#">Offers <span>01</span></a>
                        </li>
                        <li>
                            <a href="#">Testimonials <span>02</span></a>
                        </li>
                        <li>
                            <a href="#">Latest <span>03</span></a>
                        </li>
                    </ul>
                </div>

                <div className="search-content">
                    <div className="search-items">
                        <div className="search-text">Search for your trip</div>
                        <div className="search-inputs">
                            <form action="#">
                                <input type="text" placeholder='City' className='search-input input-1'/>
                                <input type="text" placeholder='Departure' className='search-input input-2'/>
                                <input type="text" placeholder='Arrival' className='search-input input-3'/>
                                <input type="text" placeholder='Budget' className='search-input input-4'/>
                                <button className='search'>Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowNav