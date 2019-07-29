import React, {Fragment, Component} from 'react';
import {BrowserRouter,Route, Link, Switch} from 'react-router-dom';
import { Router } from 'react-router';
import { MDBContainer} from "mdbreact";

import Home from './Components/Home/Home';
import TourDetails from './Components/TourDetails/TourDetails';
import AboutUs from './Components/AboutUs/AboutUs';

import Bookings from './Components/Bookings/Bookings'
import Breweries from './Components/Breweries/Breweries'

import AppHeader from './Components/Header/AppHeader'
import AppFooter from './Components/Footer/AppFooter'
import Favorites from './Components/Favorites/Favorites'
import Gallery from './Components/Gallery/Gallery'
import Profile from './Components/Profile/Profile'
import TourList from './Components/TourList/TourList'
import AddEditBreweri from './Components/AddEditBreweri/AddEditBreweri'

import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
       super(props);
       this.state = {
         loggedIn:true
         }
   }

    componentWillMount = () => {

    }
  render(){
    const {
     classes,
     color,
     history,
     location
   } = this.props;
  return (
    <Fragment>
      {this.state.loggedIn
        && location.pathname !== "/"
         && location.pathname !== "/aboutUs"
         && location.pathname !== "/tourinfo"
         && <MDBContainer className="loginHeader">
             <AppHeader history={this.props.history} loggedIn={this.state.loggedIn}/>
           </MDBContainer>

          }
      <Switch>

            <Route  exact path="/"  {...this.props} component={Home}/>
            <Route  path="/tours" {...this.props} component={TourList}/>
            <Route  path="/tourinfo" {...this.props} component={TourDetails}/>
            <Route  path="/aboutUs" {...this.props} component={AboutUs}/>
            <Route  path="/gallery" {...this.props} component={Gallery} />
            <Route  path="/bookings" {...this.props} component={Bookings} />
            <Route  path="/breweries" {...this.props} component={Breweries} />
            <Route  path="/favorites" {...this.props} component={Favorites} />
            <Route   path="/profile" {...this.props} component={Profile} />
            <Route   path="/addEditBreweri" {...this.props} component={AddEditBreweri} />
    </Switch>
    <AppFooter history={this.props.history} loggedIn={this.state.loggedIn}/>

    </Fragment>
  )
}
}

export default App;
