import listOfMovies from './listOfMovies'
import React from 'react';
import {Component} from 'react'
import './mainPageMovies.css'

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.movies=this.props.movies
  }
    
    render(props) {
      
      const list = this.movies.filter(
        x => {
          if(this.props.starRate == null)
          return x
          else if(this.props.starRate===x.star)
          return x

        }
      ).filter(
        x => {
          if(this.props.search == null)
          return x
          else if(x.name.toLowerCase().indexOf(this.props.search.toLowerCase(),0)!==-1)
          return x

        }
      ).map(x => {
        return(
        <div className="movie"> 
            <h4> {x.name} <span> <button onClick={() => this.props.removeMovie(x)}> - </button></span> </h4>
            <p> {"🌟".repeat(x.star)}</p>
            <img src={x.img} />
            <br/>
            <button className="buttonfav" onClick={() => this.props.addToFavorite(x)} >Add to favory </button>
            <button className="buttonDescription" onClick={() => this.props.showDescription(x)}> Description </button>

        </div>)})
        
        



      return(
      <div className="moviess">
        {list} 
      </div>);
    }
  }

export default Movies;