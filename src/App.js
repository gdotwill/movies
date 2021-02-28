import './App.css';

import React, { Component } from 'react'

import Movies from './data/movies.json'

import logo from './img/logo.png'

class App extends Component {

  constructor() {
    super();
    this.state = {
      movies: Movies,
      isOpen: [],
      value: "Sort"
    };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value })     
  }

  handleSubmit = (e) => {   
    const { value } = this.state;
  
    switch (value) {
      case "Low rating":
        this.setState({
          movies: Movies.sort((a, b) => (a.rank > b.rank ? 1 : -1))
        });
        break;
      case "High rating":
        this.setState({
          movies: Movies.sort((a, b) => (b.rank > a.rank ? 1 : -1))
        });
        break;
        case "Oldest":
        this.setState({
          movies: Movies.sort((a, b) => (a.releaseDate > b.releaseDate ? 1 : -1))
        });
        break;
      case "Latest":
        this.setState({
          movies: Movies.sort((a, b) => (b.releaseDate > a.releaseDate ? 1 : -1))
        });
        break;
      default:
        this.setState({
          movies: Movies
        })
        break;      
    }   
    e.preventDefault();
  }

  toggle = (i) => {
    const { isOpen } = this.state;
    isOpen[i] = !isOpen[i];
    this.setState({ isOpen });
  }

  render() {
    const { value } = this.state;
    return (
      <>
        <div class="header">
          <h1><img src={logo} alt="logo" className="logo" /> | Movies </h1>
        </div>
        <div className="container">
          <div className="container filter-container">
            <div className="row">
              <div class="input-field col-md-6 rank">
                <label>Rank: </label>
                <form onSubmit={this.handleSubmit}>
                  <select
                    value={value} 
                    onChange={this.handleChange}                  
                  >
                    <option value="Sort">Sort</option>
                    <option value="Low rating">Low rating</option>
                    <option value="High rating">High rating</option>
                  </select>
                  <input className="btn btn-primary submit" type="submit" value="Filter" />
                </form>
              </div>
              <div class="input-field col-md-6 date">
                <label> Release date: </label>
                <form onSubmit={this.handleSubmit}>
                  <select 
                    value={value} 
                    onChange={this.handleChange}
                  >
                    <option value="Sort">Sort</option>
                    <option value="Latest">Latest to oldest</option>
                    <option value="Oldest">Oldest to latest</option>
                  </select>
                  <input className="btn btn-primary submit" type="submit" value="Filter" />
                </form>
              </div>
            </div>
            <br />
          </div>
          {Movies.map((movie,i) => {
            return (                     
              <span>            
                <div className="card">
                  <img src={movie.imageUrl} alt={movie.title}/>
                  <p className="title">{movie.title}</p>
                  <div className="btn-wrapper">
                    <button 
                      class="btn btn-primary buy-buttom"
                      onClick={() => this.toggle(i)}
                    >
                      View {this.state.isOpen[i] ? 'less' : 'more'}
                    </button>  
                  </div>                   
                  {
                    this.state.isOpen[i] && (
                      <div className="synopsis">
                        <p><strong>Synopsis:</strong><br />
                        {movie.synopsis}</p>
                        <p><strong>Release Date:</strong><br />
                        {movie.releaseDate}</p>
                        <p><strong>Rank:</strong><br />
                        {movie.rank}</p>
                      </div> 
                    )
                  }                                                    
                </div>  
              </span>  								
            );
          })}         
        </div>     
      </>     
    )
  }
}

export default App;





