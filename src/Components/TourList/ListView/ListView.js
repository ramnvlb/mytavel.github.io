import React, {Component} from 'react';
import { MDBContainer,MDBRow,MDBCol, MDBIcon, MDBCard, MDBCardBody} from "mdbreact";
import {Link} from 'react';
import './ListView.css';
import content from '../../../localization/content.json';
class ListView extends Component {

  constructor(props){
    super(props)
    this.state = {
      listViewItems :
        [
        { img:"kuroushi.png",
          title:"kuroushi",
          like:22,
          rating:22,
        },
        { img:"zuku.png",
          title:"zuku",
          like:22,
          rating:22,
        },
        { img:"gensaka.png",
          title:"gensaka",
          like:22,
          rating:22,
        },
        { img:"gensaka.png",
          title:"kuroushi",
          like:22,
          rating:22,
        },
        { img:"gensaka.png",
          title:"kuroushi",
          like:22,
          rating:22,
        },
        { img:"gensaka.png",
          title:"kuroushi",
          like:22,
          rating:22,
        },


      ],

  }
  }

  render(){
    return(
          <MDBRow>
            {this.state.listViewItems.map((listViewItem, i) =>
              <MDBCol md="4">
                <div className="list-view-main-slide">
                   <img src={process.env.PUBLIC_URL + "/images/list_view/" +listViewItem.img} className=" thing_img img-fluid"/>
                    <div className="list-view-like">
                        <div className="like-title">
                            <p className="like-name">{listViewItem.title}</p>
                        </div>
                        <div className="like-Numbers">
                            <a href="#" className="list-like " >
                               {listViewItem.like}
                              <img src={process.env.PUBLIC_URL + "/images/heart/shape.png"} className="heart-icons"/>

                            </a>
                            <a href="#" className="list-heart" >
                              {listViewItem.rating}
                               <img src={process.env.PUBLIC_URL + "/images/star/star-copy-3.png"} className="star-icons"/>
                            </a>
                        </div>
                    </div>
                </div>
              </MDBCol>
                  )}
          </MDBRow>



    )
  }

}
export default ListView;
