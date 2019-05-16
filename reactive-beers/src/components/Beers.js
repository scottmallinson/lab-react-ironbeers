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
        // console.log(response.data)
        this.setState({beers: response.data})
    })
};

  render() {
    return (
      <div>
        {this.state.beers.map((beer, index) => 
          <div key={index}>
            <Link to={{
              pathname: `/beers/${beer._id}`,
              state: { beers: this.state.beers }
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
