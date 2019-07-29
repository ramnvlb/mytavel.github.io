import React, {Component} from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner,MDBContainer,MDBRow,MDBCol,
  MDBCarouselItem, MDBView, MDBMask, MDBCardBody,MDBCard }
  from "mdbreact";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import content from '../../localization/content.json';
  // import * as utils from '../../utils/utils'
  // import * as Constants from '../../utils/constants'
import './Slider.css'
class Slider extends Component {
  constructor(props){
    super(props)
    this.state = {
      sliderItem :
        [
        { img:"gensaka.png",
          title:"gensaka",
          like:22,
          rating:22,
          subtitle:"Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this.",
          seeMoreBtn:"",
          activateItems:1,
        },
        { img:"kuroushi.png",
          title:"kuroushi",
          like:22,
          rating:22,
          subtitle:"Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this.",
          seeMoreBtn:"",
          activateItems:2,

        },
        { img:"zuku.png",
          title:"zuku",
          like:44,
          rating:4.5,
          subtitle:"Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this.",
          seeMoreBtn:"",
          activateItems:3,
        },

      ],

  }
}

  render(){
    return(
        <MDBCarousel
        activeItem={1}
        length={3}
          slide={true}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>

          <MDBCarouselItem itemId="1">
              <MDBView>
                  <MDBRow>
                    {this.state.sliderItem.map((rowdata, i)=>
                      <MDBCol md="4">
                          <MDBCard className="card">
                              <MDBCardBody className="p-0">
                                    <a><img src={process.env.PUBLIC_URL + "/images/slider/" +rowdata.img} className="img-fluid"/></a>
                              </MDBCardBody>
                              <MDBCardBody className="slider-menu">
                                  <span className="subtitles">
                                    {rowdata.title}
                                   </span>
                                  <img src={process.env.PUBLIC_URL + "/images/star/star-copy-3.png"} className="card-meta float-right"/>
                                  <p className="card-meta float-right color-text pd-left">
                                  {rowdata.like}
                                 </p>
                                 <img src={process.env.PUBLIC_URL + "/images/heart/shape.png"} className="card-meta float-right m-r-px"/>
                                 <p className="card-meta float-right color-text pd-r">
                                {rowdata.rating}
                                </p>
                              </MDBCardBody>
                              <p className="gensaka-title">{content.ExperiencetheultimateSakeTour.subtitle}</p>
                               <Link to="/tourinfo">
                                  <button className="seeMoreBtn">
                                    {content.ExperiencetheultimateSakeTour.seeMoreBtn}
                                  </button>
                               </Link>
                          </MDBCard>
                      </MDBCol>
                    )
                   }
                  </MDBRow>
              </MDBView>
          </MDBCarouselItem>

          <MDBCarouselItem itemId="2">
              <MDBView>
                  <MDBRow>
                    {this.state.sliderItem.map((rowdata, i)=>
                      <MDBCol md="4">
                          <MDBCard className="card">
                              <MDBCardBody className="p-0">
                                    <img src={process.env.PUBLIC_URL + "/images/slider/" +rowdata.img} className="img-fluid"/>
                              </MDBCardBody>
                              <MDBCardBody className="slider-menu">
                                    <span className="subtitles">
                                      {rowdata.title}
                                     </span>
                                    <img src={process.env.PUBLIC_URL + "/images/star/star-copy-3.png"} className="card-meta float-right"/>
                                    <p className="card-meta float-right color-text pd-left">
                                    {rowdata.like}
                                   </p>
                                   <img src={process.env.PUBLIC_URL + "/images/heart/shape.png"} className="card-meta float-right m-r-px"/>
                                   <p className="card-meta float-right color-text pd-r">
                                  {rowdata.rating}
                                  </p>
                              </MDBCardBody>
                              <p className="gensaka-title">{content.ExperiencetheultimateSakeTour.subtitle}</p>
                              <Link to="/tourinfo">
                                 <button className="seeMoreBtn">
                                   {content.ExperiencetheultimateSakeTour.seeMoreBtn}
                                 </button>
                              </Link>
                          </MDBCard>
                      </MDBCol>
                    )
                   }
                  </MDBRow>
              </MDBView>
          </MDBCarouselItem>

          <MDBCarouselItem itemId="3">
              <MDBView>
                  <MDBRow>
                    {this.state.sliderItem.map((rowdata, i)=>
                      <MDBCol md="4">
                          <MDBCard className="card">
                              <MDBCardBody className="p-0">
                                    <img src={process.env.PUBLIC_URL + "/images/slider/" +rowdata.img} className="img-fluid"/>
                              </MDBCardBody>
                              <MDBCardBody className="slider-menu">
                                    <span className="subtitles">
                                      {rowdata.title}
                                     </span>
                                    <img src={process.env.PUBLIC_URL + "/images/star/star-copy-3.png"} className="card-meta float-right"/>
                                    <p className="card-meta float-right color-text pd-left">
                                    {rowdata.like}
                                   </p>
                                   <img src={process.env.PUBLIC_URL + "/images/heart/shape.png"} className="card-meta float-right m-r-px"/>
                                   <p className="card-meta float-right color-text pd-r">
                                  {rowdata.rating}
                                  </p>
                              </MDBCardBody>
                              <p className="gensaka-title">{content.ExperiencetheultimateSakeTour.subtitle}</p>
                              <Link to="/tourinfo">
                                 <button className="seeMoreBtn">
                                   {content.ExperiencetheultimateSakeTour.seeMoreBtn}
                                 </button>
                              </Link>
                          </MDBCard>
                      </MDBCol>
                    )
                   }
                  </MDBRow>
              </MDBView>
          </MDBCarouselItem>

        </MDBCarouselInner>
      </MDBCarousel>


    )
  }
}


export default Slider;
