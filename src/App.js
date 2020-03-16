import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class App extends React.Component {
  state = {
    beers: []
  }
  componentDidMount() {
    fetch('https://api.punkapi.com/v2/beers')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.setState({beers: data})
      console.log(this.state.beers)
    });
    }

    
    
    render() {
    const beerList = this.state.beers.map(beer => {
      return(
        <Beer 
        name = {beer.name}
        tagline = {beer.tagline}
        decsription = {beer.description}
        image = {beer.image_url}
        >

        </Beer>
      
      )
    })
    
  return (
    <div className="App">
      {beerList}
      
    </div>
  )}};

  class Beer extends React.Component{
    state = {
      liked: false
    }

    likeHandler (){
      let likeStatus = !this.state.liked
      this.setState({liked: likeStatus})
    }
    render() {
      let like = this.state.liked ? "Liked" : "Disliked"

    return(
    <div>
      <h4>{this.props.name}</h4>
      <p>{this.props.tagline}</p>
      <p>{this.props.decsription}</p>
      <img src = {this.props.image} alt = "No Img"/>
      <button onClick = {() => this.likeHandler()}>{like}</button>
    </div>
    )

    }
  }

export default App;
