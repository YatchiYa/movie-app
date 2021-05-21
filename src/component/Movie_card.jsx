import React from "react";
import classes from "../style/movie.scss";
import {MDBContainer, MDBCol,MDBRow, MDBIcon, MDBBtn} from "mdbreact"
import {  MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBProgress } from 'mdbreact';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import  "../style/home.scss";

function Movie({
  title,
  category,
  likes,
  dislikes,
  onLike,
  onDislike,
  onDelete
}) {
  return (
    <>
    <MDBCol md="4" className="cardd">
      <MDBCard >
        <MDBCardImage className="img-fluid" src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW92aWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" waves />
        <MDBCardBody>
          <MDBCardTitle>{title} <MDBIcon onClick={onDelete} className="delet" icon="trash-alt" /> </MDBCardTitle>
          <MDBCardText>
           Catégory : {category}
           <br /> 
           Rating : {(likes * 5 / (likes + dislikes)).toFixed(2)} / 5
           <br /> 
            <MDBProgress material value={likes} max={likes + dislikes} className="my-s" />
           <br /> 
           <div className="likk">
           <MDBIcon className="t1" onClick={onLike}  far icon="thumbs-up" />  <MDBIcon  onClick={onDislike} far icon="thumbs-down" />
           </div>
           
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>




    </>
  );
}

export default Movie;
