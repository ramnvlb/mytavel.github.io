import React, {Component} from 'react';
import { MDBContainer,MDBRow,MDBCol, } from "mdbreact";


import './AddEditBreweri.css'
import BreweriEditor from './Component/BreweriEditor'


class AddEditBreweri extends Component {

  constructor(props){
    super(props)
    this.state= {}
  }

render(){
  return(
  <MDBContainer className="edit-breweries-container">
     <h2 className="edit-breweries-title">Dassai Sake Brewery</h2>

     <MDBContainer className='edit-breweries-layout'>
        <h2 className="edit-common-title">Title</h2>
        <input type="text" placeholder="Type here" id="" className="input-type"/>

        <MDBRow>
          <MDBCol md="2"  className="padding-right-0-edit">
            <p className="edit-tour-time-label">Duration</p>
            <select className="edit-tour-time-option">
              <option>
               1 hour
              </option>
            </select>
          </MDBCol>
          <MDBCol md="2" className="padding-right-0-edit">
            <p className="edit-tour-time-label">Schedule</p>
            <select className="edit-tour-time-option">
              <option>
               1 hour
              </option>
            </select>
          </MDBCol>
          <MDBCol md="2" className="padding-right-0-edit">
            <p className="edit-tour-time-label">Age limit</p>
            <select className="edit-tour-time-option">
              <option>
               1 hour
              </option>
            </select>
          </MDBCol>
          <MDBCol md="2" className="padding-right-0-edit">
            <p className="edit-tour-time-label">Min. pax</p>
            <select className="edit-tour-time-option">
              <option>
               1 hour
              </option>
            </select>
          </MDBCol>
          <MDBCol md="2" className="padding-right-0-edit">
            <p className="edit-tour-time-label">Availability</p>
            <select className="edit-tour-time-option">
              <option>
               1 hour
              </option>
            </select>
          </MDBCol>
        </MDBRow>

         <div className="keyboard-editor">
           <p className="edit-tour-time-label">Description</p>
             <div className="description-editor">
                <BreweriEditor />
             </div>
         </div>

         <div className="keyboard-editor">
           <p className="edit-tour-time-label">What’s included</p>
           <div className="description-editor">
              <BreweriEditor />
           </div>
         </div>


         <MDBRow>
           <MDBCol md="4" className="padding-right-0-edit">
             <p className="edit-tour-time-label">Departure from</p>
             <input type="text" className="input-type-here" placeholder="Type location address" />
           </MDBCol>
           <MDBCol md="4" className="padding-right-0-edit">
             <p className="edit-tour-time-label">Arrival</p>
             <input type="text" className="input-type-here" placeholder="Type location" />
           </MDBCol>
           <MDBCol md="2" className="padding-right-0-edit">
             <p className="edit-tour-time-label">Time</p>
             <select className="edit-tour-select-time-option">
               <option>
                00.00AM
               </option>
             </select>
           </MDBCol>
           <MDBCol md="2" className="padding-right-0-edit">
             <p className="edit-tour-time-label return-time">Return time</p>
             <select className="edit-tour-select-time-option return-time">
               <option>
                00.00AM
               </option>
             </select>
           </MDBCol>
         </MDBRow>
        <MDBRow>
          <MDBCol md="2">
            <p className="edit-tour-time-label">Longitude</p>
            <input type="text" className="input-type-here" placeholder="4.758320523" />
          </MDBCol>
          <MDBCol md="2">
            <p className="edit-tour-time-label">Latitude</p>
            <input type="text" className="input-type-here" placeholder="11.562398423" />
          </MDBCol>
       </MDBRow>
       <div className="upload-file">
         <p className="edit-tour-time-label">Highlights</p>
        <MDBRow>
          <MDBCol md="3" className="padding-left-upload-btn margin-upload">
            <input type="file" name="photo" id="upload-photo"/>
          </MDBCol>
          <MDBCol md="1" className="padding-left-upload-btn">
            <button className="upload-btn">
             UPLOAD
            </button>
          </MDBCol>
          <MDBCol md="4" className="padding-left-upload-btn margin-upload">
            <textarea className="textarea" placeholder="Add description (max. 50 chars)">
            </textarea>
          </MDBCol>
         </MDBRow>
         <MDBRow>
           <MDBCol md="3" className="padding-left-upload-btn margin-upload">
             <input type="file" name="photo" id="upload-photo"/>
           </MDBCol>
           <MDBCol md="1" className="padding-left-upload-btn">
             <button className="upload-btn">
              UPLOAD
             </button>
           </MDBCol>
           <MDBCol md="4" className="padding-left-upload-btn margin-upload">
             <textarea className="textarea" placeholder="Add description (max. 50 chars)">
             </textarea>
           </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="3" className="padding-left-upload-btn margin-upload">
              <input type="file" name="photo" id="upload-photo"/>
            </MDBCol>
            <MDBCol md="1" className="padding-left-upload-btn">
              <button className="upload-btn">
               UPLOAD
              </button>
            </MDBCol>
            <MDBCol md="4" className="padding-left-upload-btn margin-upload">
              <textarea className="textarea" placeholder="Add description (max. 50 chars)">
              </textarea>
            </MDBCol>
           </MDBRow>
           <MDBRow>
             <MDBCol md="3" className="padding-left-upload-btn margin-upload">
               <input type="file" name="photo" id="upload-photo"/>
             </MDBCol>
             <MDBCol md="1" className="padding-left-upload-btn">
               <button className="upload-btn">
                UPLOAD
               </button>
             </MDBCol>
             <MDBCol md="4" className="padding-left-upload-btn margin-upload">
               <textarea className="textarea" placeholder="Add description (max. 50 chars)">
               </textarea>
             </MDBCol>
            </MDBRow>
       </div>

       <p className="edit-tour-time-label">Video</p>
       <div className="video-upload">
          <div className="drop-file">
              <div className="drop-video">
                <h2>Drop here your videoclip</h2>
                 <p>(.mpeg only max 10Mb filesize)</p>
              </div>
          </div>
      </div>

       <div className="cancle-save-btn">
           <button className="upload-cancle">cancel</button>
            <button className="upload-save">save</button>
       </div>
     </MDBContainer>

  </MDBContainer>


  )
}

}
export default AddEditBreweri;
