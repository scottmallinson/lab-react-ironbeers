import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Beers extends Component {
  constructor(){
    super()
    this.state = {
      beers: []
    }
  }

  componentDidMount() {
    axios.get("https://ih-beer-api.herokuapp.com/beers")
    .then(response => {
      this.setState({beers: response.data})
    })
  };

  selectedBeer(beerid) {
    const id = beerid
    const beer = this.state.beers.filter((beer =>
      beer._id === id
    ))
    return { selectedBeer: beer }
  }

  render() {
    return (
      <div>
        {this.state.beers.map((beer, index) => 
          <div key={index}>
            <Link to={{
              pathname: `/beers/${beer._id}`,
              state: { selectedBeer: this.selectedBeer(beer._id) }
            }}>
              <h1>{beer.name}</h1>
              <img src={beer.image_url} alt='' />
              <p>{beer.tagline}</p><p>{beer.contributed_by}</p>
            </Link>
          </div>)}
      </div>
    )
  }
}
