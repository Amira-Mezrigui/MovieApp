import React,{Component} from 'react';
import './movieDescription.css'





class MovieDescription extends React.Component {

    render(props) {
      
      const description = this.props.description.map(x => {
        return(
        <div className="moviedescription"> 
            <div>
                <button className="btnBack" onClick={() => this.props.hidingDescription()}> Back to movies list </button>
            </div>
            <div>
                <h4> {x.name} </h4>
                <p> {x.star}</p>
                <p> {x.year}</p>
                <p> {x.duration}</p>
                <p> {x.category}</p>
                
            </div>
            <div>
                <img src={x.img} width="300px"/>
            </div>
            
            
           

        </div>)})
        
      return(
        <div >
          {description}
        </div>
      )
    }
  }


export default MovieDescription;