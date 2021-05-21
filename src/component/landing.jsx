import React, { Component } from 'react';
import LegendaryCursor from "legendary-cursor";
import { connect } from "react-redux";
import {MDBContainer, MDBCol,MDBRow, MDBIcon} from "mdbreact"
import MoviesList from "./Movies_List.jsx";
import moviesData from "./movies";
import AnchorLink from 'react-anchor-link-smooth-scroll'


import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import "../style/home.scss"

import { handleChange } from "../js/actions/movie/movie";

const mapStateToProps = state => {
  return {
           movie: state.movieR
          };
};

function mapDispatchToProps(dispatch) {
  return {
    handleChange: (ref,data) => dispatch(handleChange({ref: ref, data: data}))
  };
}

class MainHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: moviesData,
      selected_movie: null,
      page_index: 0,
      elem_page: moviesData.length
    };

    this.filtrer_movie = this.filtrer_movie.bind(this);
    this.delete_movie = this.delete_movie.bind(this);
    this.like_movie = this.like_movie.bind(this);
    this.dislike_movie = this.dislike_movie.bind(this);
    this.select_page = this.select_page.bind(this);
    this.select_elem = this.select_elem.bind(this);
    this.bk_page = this.bk_page.bind(this);
    this.nxt_page = this.nxt_page.bind(this);
  }


  componentDidMount(){
      
    LegendaryCursor.init({
      lineSize:         0.15,
      opacityDecrement: 0.55,
      speedExpFactor:   0.8,
      lineExpFactor:    0.6,
      sparklesCount:    65,
      maxOpacity:       0.99,  // should be a number between [0 ... 1]
    });
  
  }

  
  filtrer_movie(movieCategoryToFilter) {
    this.setState({ selected_movie: movieCategoryToFilter });
  }

  delete_movie(movieToDelete) {
    const movie_tmp = this.state.movies;
    this.setState({
      movies: movie_tmp.filter(movie => movie.id !== movieToDelete.id)
    });
  }

  dislike_movie(movieToDislike) {
    const movie_tmp = this.state.movies;
    this.setState({
      movies: movie_tmp.map(movie => {
        if (movie.id === movieToDislike.id) {
          movie.likes += -1;
          return movie;
        } else {
          return movie;
        }
      })
    });
  }

  like_movie(movieToLike) {
    const movie_tmp = this.state.movies;
    this.setState({
      movies: movie_tmp.map(movie => {
        if (movie.id === movieToLike.id) {
          movie.likes += 1;
          return movie;
        } else {
          return movie;
        }
      })
    });
  }

  select_page(selectedPageIndex) {
    this.setState({ page_index: selectedPageIndex });
  }
  bk_page() {
    this.setState({
      page_index: Math.max(
        this.state.page_index - 1,
        0
      )
    });
  }
  nxt_page() {
    const {
      elem_page,
      page_index,
      movies
    } = this.state;
    this.setState({
      page_index: Math.min(
        page_index + 1,
        movies.length / elem_page
      )
    });
  }

  select_elem(selectedCountElement) {
    this.setState({ elem_page: selectedCountElement });
  }

    
    render() {
            
          const {
            movies,
            selected_movie,
            page_index,
            elem_page
          } = this.state;
          let filteredMovies =
            selected_movie !== null
              ? movies.filter(movie => movie.category === selected_movie)
              : movies;
          const indexD = elem_page * page_index;
          const indexA = elem_page * (page_index + 1);
          filteredMovies = filteredMovies.slice(indexD, indexA);
          let categories = movies.map(movie => movie.category);
          categories = Array.from(new Set(categories));


        return (
          <>
          <div className="img_bk">

          </div> 
                <MDBCol md="12" className="build-title">
                  <h1 className="title">Movie App</h1>
                </MDBCol> 

                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="12" className="building">
                            <button className="more">
                            <AnchorLink href='#container-body'>Learn more</AnchorLink>
                            </button>
                        </MDBCol>
                    </MDBRow>
                    
                </MDBContainer>

                <MDBContainer id="container-body" className="body-page"> 
                  <MoviesList
                    onPageSelect={this.select_page}
                    onPageBack={this.bk_page}
                    onPageNext={this.nxt_page}
                    onMovieDelete={this.delete_movie}
                    onMovieDislike={this.dislike_movie}
                    onMovieLike={this.like_movie}
                    onMovieFilter={this.filtrer_movie}
                    onCountElementSelect={this.select_elem}
                    movies={filteredMovies}
                    categories={categories}
                  /> 
                </MDBContainer>


                <MDBRow className="fthx_page">
                  <MDBCol md="3"></MDBCol>
                  <MDBCol md="2">
                  <MDBIcon far icon="copyright" />
                  <label className="dder">
                    <a href="https://creative-adventure.netlify.app/" >My website</a>
                  </label>
                  </MDBCol>
                  <MDBCol md="4">
                  <label className="dderz">
                    Built with <MDBIcon far icon="heart" /> to code
                  </label>
                  </MDBCol>
              </MDBRow>
            </>
        )
        
    }
}

const MainHomex = connect(mapStateToProps, mapDispatchToProps)(MainHome);
export default MainHomex;