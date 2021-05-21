import React from "react";
import {MDBContainer, MDBCol,MDBRow, MDBIcon, MDBBtn} from "mdbreact"
import Movie from "./Movie_card.jsx";
import {  MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdbreact';


import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import  "../style/home.scss";

function MovieList({
  movies,
  categories,
  onMovieLike,
  onMovieDislike,
  onMovieDelete,
  onMovieFilter,
  onCountElementSelect,
  onPageBack,
  onPageNext
}) {
  return (
    <>
      <MDBRow  color="special-color" className="filter">
        <MDBCol md="1">
        </MDBCol>
        <MDBCol md="3">
          <select  className="browser-default custom-select"
            onClick={e =>
              onMovieFilter(
                e.target.selectedIndex === 0
                  ? null
                  : e.target.options[e.target.selectedIndex].value
              )
            }
          >
            <option>Choose a category</option>
            {categories.map((category, i) => (
              <option key={i} value={category}>
                {category}
              </option>
            ))}
          </select>

        </MDBCol>
        <MDBCol md="3" >


          

        <select  className="browser-default custom-select"
          onClick={e =>
            onCountElementSelect(e.target.options[e.target.selectedIndex].value)
          }
        >
          <option value="10">Element by page</option>
          <option value="4">4</option>
          <option value="8">8</option>
          <option value="12">12</option>
        </select>

        

        </MDBCol>
        <MDBCol md="4">
        <MDBBtn color="cyan" onClick={e => onPageBack(e.target.selectedIndex)}>Previous</MDBBtn>
        <MDBBtn color="cyan" onClick={e => onPageNext(e.target.selectedIndex)}>Next</MDBBtn>
        </MDBCol>
      </MDBRow>


        <MDBRow className="row-xx">
          
          {movies.map((movie, i) => (
            <Movie
              key={i}
              onDelete={() => onMovieDelete(movie)}
              onLike={() => onMovieLike(movie)}
              onDislike={() => onMovieDislike(movie)}
              title={movie.title}
              category={movie.category}
              likes={movie.likes}
              dislikes={movie.dislikes}
              onFilter={() => onMovieFilter(movie)}
            />
          ))}

        </MDBRow>
    
    </>
  );
}

export default MovieList;
