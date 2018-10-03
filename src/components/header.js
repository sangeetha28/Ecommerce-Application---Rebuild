import React from "react";
import PropTypes from "prop-types";
import FavouritesIcon from '../images/favourites.png';
import ShoppingIcon from '../images/shopping.png';
import NothsLogo from '../images/tag_logo_uk.png';
import HomeOfThoughtfulStrap from '../images/home_of_thoughtful_strapline_black.svg';
import './styles.css';

/* https://medium.com/a-beginners-guide-for-webpack-2/handling-images-e1a2a2c28f8d
 The images would typically be stored either on some CDN or some separate folder on the web server. For the image’s location, you either provide the URL of the image or the relative path location of the image if its stored in a folder on the server.
With Webpack, the image loading can be optimized using the url-loader that converts your
 images to base64 strings and inlines those within the code. With images stored inline within the application package, the user’s browser will save on the requests to CDN or web-server to fetch those images thereby improving the performance of the application.
 */

const Header = () => {
    return(
        <div className="global_component">
        <div className="logo_image">
            <img src={NothsLogo} />
            <div className="header_tagline">
                <img className="tagline_icon" src={HomeOfThoughtfulStrap} />
            </div>
        </div>
        <div className="header">
            <div className='links'>
                <a href="/user">sign In</a>
                <span>&nbsp;/&nbsp;</span>
                <a href="/user">register</a>
            </div>
            <div className="favourites_icon">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="5 0 90 90" class="gc-svg gc-header-favourites__svg gc-icon gc-icon--heart"><path d="M50 22.5 C 75 -10, 107.5 20, 82.5 47.5 L50 80 L17.5 47.5 C -7.5 20, 25 -10,50 22.5"></path></svg>
            </div>
            <div className="shopping_basket">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="-5 0 100 125"><path d="M25 62 L25 52 C 20 -13, 80 -13, 75 52 L75 62"></path><path d="M10 42 L90 42 L98 110 C 99, 115, 98, 120, 90 122  L10 122 C 2 120, 1 115, 2 110 L10 42"></path></svg>
            </div>
        </div>
        <div className="search_form_container">
            <input className="search_input" placeholder="enter search term"></input>
            <select className="search_dropdown">
                <option>all departments</option>
                <option>accessories</option>
                <option>baby & child</option>
                <option>cards</option>
                <option>fashion</option>
                <option>fine jewellery</option>
                <option>food & drink</option>
                <option>free delivery</option>
                <option>garden</option>
                <option>gifts</option>
                <option>hampers</option>
                <option>health & beauty</option>
                <option>home</option>
                <option>jewellery</option>
                <option>parties</option>
                <option>pets</option>
                <option>prints & arts</option>
                <option>stationary</option>
                <option>toys & games</option>
                <option>trends</option>
                <option>weddings</option>
            </select>
            <button className="search_button">Find</button>
        </div>
        </div>
    );
}


export default Header;