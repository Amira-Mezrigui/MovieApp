import React,{Component} from 'react';
import './App.css';
import Movies from './component/movieListPage/mainPageMovies';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Favory from './component/favoriteMoviePage/favorite';
import Description from './component/movieDescription/movieDescription'
import listOfMovies from './component/movieListPage/listOfMovies'
import SignIn from './component/sign-in-up/signIn';
import SignUp from './component/sign-in-up/signUp';

class App extends React.Component {
  constructor() {
    super();
    this.state={
      search:null,
      isLogin:false,
      ModalShow:false,
      starRate:null,
      starClicked:"☆",
      description: [],
      t:[1,2,3,4,5],
      listOfMovies : [...listOfMovies],
        img: "",
        name: "",
        year: "",
        star: "",
        duration: "",
        category: ""

    };
    this.f= [];

  }
  /************* search movie with his rate , filter by rate */
  getRate = (el) => {
    this.setState(
      {starRate: parseInt(el)}
    )
    this.setState(
      {starClicked:"🌟" }
    )
    

  }
  resetRate = () => {
    this.setState(
      {starRate: null}
    )
    this.setState(
      {starClicked: "☆"}
    )

  }
  /******** search a movie with name , filter by name */
  searchMovie = (event) => {
    this.setState(
      {search: event.target.value}
    )

  }
  /***************** Show description of each movie  */
  showDescription = (x) => {
    this.setState({ModalShow: true})
    this.setState({description: [x]})
  }
  hidingDescription = () => {
    this.setState({ModalShow: false})
    this.setState({description: []})
  }
  /*********** function to add movies to my favorite list movies */
  
  addToFavorite = (x) => {
    let index = this.f.indexOf(x);
    if(index == -1) {
      return (this.f.push(x))
    }
    else if(index > -1){
      return this.f.splice(index, 1);
    }
  }
  /**** remove movie */
  removeMovie = (el) => {
    let arr=this.state.listOfMovies;
    let index = arr.indexOf(el);
    arr.splice(index,1);
    this.setState({ listOfMovies: arr });


  }
  /**** related to add a movie  */
  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };
  handlestarChange = (e) => {
    this.setState({ star: e.target.value });
  };
  handleYearChange = (e) => {
    this.setState({ year: e.target.value });
  };
  handleimgChange = (e) => {
    this.setState({ img: e.target.value });
  };
  handleDurationChange = (e) => {
    this.setState({ duration: e.target.value });
  };
  handleCategoryChange = (e) => {
    this.setState({ category: e.target.value });
  };
  addMovie = () => {
    let el= { img: this.state.img,
      name: this.state.name,
      year: this.state.year,
      duration: this.state.duration,
      category: this.state.category};
      let arr=this.state.listOfMovies;
      arr.unshift(el)
    
      this.setState({ listOfMovies: arr }); 
  }
  


  render(){
  return (
    <BrowserRouter>
    <div className="App">
      <div >
      <nav className="navbar">
        <div>
          <img src="https://images.vectorhq.com/images/previews/6a5/movies-logo-psd-449406.png" width="200px" height="80px"/>
        </div>
        <div>
          <Link className="navbarlink" to={"/"}> Home </Link>
        </div>
        <div>
          <Link className="navbarlink" to={"FavoriteMovies"}> My favorite movies </Link>
        </div>
        <div className="starRating">
          {this.state.t.map(el => 
          <button onClick={()=>this.getRate(el)}>{this.state.starClicked}
          </button>)}
        </div>
        <div className="resetRate">
          <button onClick={()=> this.resetRate()}> 
          <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/power-13-85370.png" width="40px"/> </button>
        </div>
        <div>
          <input placeholder="Choose a movie" className="navbarsearch" type="text" 
          onChange={(e) => this.searchMovie(e)}/>
        </div>
        <div>
          <Link className="navbarlink" to={"Sign"}> SignIn/Up </Link>
        </div>
        
      </nav>
      </div>
    
      <Switch> 
        <Route exact path="/">
          {this.state.ModalShow ? (
            <Description description={this.state.description} hidingDescription={this.hidingDescription}/>
          ):
          <div className="mainVideos">
            <div className="aside">
            <aside className="inlineaside" >
              <h1> Add a movie of your choice </h1>
            <input  placeholder="add the name of movie" type="text" onChange={this.handleNameChange}></input> <br/>
            <input  placeholder="add the category of movie" type="text" onChange={this.handleCategoryChange}></input> <br/>
            <input  placeholder="add the year of movie" type="number" onChange={this.handleYearChange}></input> <br/>
            <input  placeholder="add the rate" type="number" onChange={this.handlestarChange}></input> <br/>
            <input placeholder="add the duration" type="text"  onChange={this.handleDurationChange}></input><br/>
            <input placeholder="add the image link" type="url" onChange={this.handleimgChange}></input><br/>
            <button onClick={this.addMovie} >+</button>
            </aside>
            </div>
            
            <Movies search={this.state.search} addToFavorite={this.addToFavorite} removeMovie={this.removeMovie}
          showDescription={this.showDescription} starRate={this.state.starRate} 
          movies={this.state.listOfMovies}/>
            
          </div> 
          
           }
           
        </Route>
        <Route path="/FavoriteMovies">
          <Favory favoriteList={this.f}/>
        </Route>
        <Route path="/Sign">
          <div className="mainSign">
          <SignIn/>
          <SignUp/>
          </div>
        </Route>
      </Switch>
      
      
    </div>
    </BrowserRouter>
  );}
}

export default App;
