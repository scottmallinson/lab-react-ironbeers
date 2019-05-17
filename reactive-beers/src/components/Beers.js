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
    .then(({data}) => {
      this.setState({beers: data})
    })
  };

  render() {
    return (
      <div>
        {this.state.beers.map((beer) => 
          <div key={beer._id}>
            <Link to={{
              pathname: `/beers/${beer._id}`,
              state: { selectedBeer: beer }
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
