import React, { Component } from 'react';

import apiKey from './config.js';

import  SearchForm from './components/SearchForm';
import  Nav from './components/Nav';
import  PhotoContainer from './components/PhotoContainer';

class Container1 extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading:true,
      title:''
    };
  } 

  componentDidMount() {
    this.performSearch();
  }

  

// fetch the Flickr API data
  performSearch=(query='') =>{
    console.log('query');
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1&content_type=1`)
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData);
        this.setState({ 
        photos: responseData.photos.photo,
        loading: false,
        title:query });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }
  render() {
    return (
        <div className="container">
            <SearchForm onSearch={this.performSearch} />
            <Nav />

            <div className="photo-container">
                {
                    (this.state.loading) 
                       ? <h2>  {this.props.title} </h2>
                       : <h2>  {this.state.title} </h2>
                }
                
                {
                    (this.state.loading)
                        ? <PhotoContainer data={this.props.data } />
                        : <PhotoContainer data={this.state.photos} />
                }
            </div>
       </div>

    );

  }
}

export default Container1
