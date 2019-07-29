import React, {Component} from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

import './Gallery.css';
import AppHeader from '../Header/AppHeader';
import VideoSection from '../VideoSection/VideoSection'

const VIDEO = "video"
const IMAGE = "image"

class Gallery extends React.Component {

  constructor(props){
    super(props);
    this.state= {
      gallery:[
          {
            link:"gallery.png",
            type:IMAGE
          },
          {
            link:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
            type:VIDEO
          },
          {
            link:"gallery.png",
            type:IMAGE
          },
          {
            link:"gallery.png",
            type:IMAGE
          },
          {
            link:"gallery.png",
            type:IMAGE
          },
            {
              link:"gallery.png",
              type:IMAGE
            },
            {
              link:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
              type:VIDEO
            },
            {
              link:"gallery.png",
              type:IMAGE
            },
            
            {
              link:"gallery.png",
              type:IMAGE
            },
              {
                link:"gallery.png",
                type:IMAGE
              },
              {
                link:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
                type:VIDEO
              },
              {
                link:"gallery.png",
                type:IMAGE
              },
      ]
    }
  }

  getGalleryshow = (gallery) =>{
    if(gallery.type === IMAGE){
      return(
          <img src={process.env.PUBLIC_URL + "/images/gallery/" +gallery.link} className="img-fluid gallery-img"/>
      )
  }
    else if(gallery.type===VIDEO){
    return(
      <div className="video-section">
        <VideoSection url={gallery.link}/>
      </div>
    )
  }
  }

  render(){
    return(
      <MDBContainer className="gallery-main-container">
         <h2 className="gallery-title">Gallery</h2>
           <MDBRow >
           {
             this.state.gallery.map((gallery, i) =>
               <MDBCol md="4" className="row-padding">
                 <div className="row-top-margin">
                  {this.getGalleryshow(gallery)}
                 </div>
               </MDBCol>
             )
             }
           </MDBRow>
      </MDBContainer>
    );
  }
}

export default Gallery;
