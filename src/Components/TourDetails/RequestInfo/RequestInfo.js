import React, {Component} from 'react';
import { MDBContainer, MDBBtn} from "mdbreact";


import './RequestInfo.css';
import content from '../../../localization/content.json';
class RequestInfo extends Component {

  constructor(){
    super()
    this.state = {

    }
  }
  render(){
    return(
      <MDBContainer>
         <div className="request_main_heading">
             <div className="request_main_title">
                <h2 className="req_sub_title">
                    {content.requestInfo.title}
                </h2>
                <form className="request_form">
                <div className="form-group">
                  <label htmlFor="fname" className="request_label_text">  {content.requestInfo.fname}</label>
                  <input
                    type="text"
                    className="form-control"
                    id="fname"
                    placeholder=  {content.requestInfo.fname}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="request_label_text">  {content.requestInfo.email}</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder=  {content.requestInfo.email}
                  />
                </div>
                <div className="form-group">
                     <label htmlFor="textarea" className="request_label_text">
                      {content.requestInfo.message}
                     </label>
                     <textarea
                     className="form-control"
                     id="textarea"
                     rows="3"
                     placeholder=  {content.requestInfo.message}
                     />
                 </div>
                 <button className="send_btn">{content.requestInfo.send}</button>
                </form>
             </div>
         </div>
      </MDBContainer>

    )
  }

}
export default RequestInfo;
