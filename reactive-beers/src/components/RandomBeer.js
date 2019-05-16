import React, { Component } from 'react'
import axios from 'axios'

export default class RandomBeer extends Component {
  constructor(){
    super()
    this.state = {
      beer: []
    }
  }

  componentDidMount() {
    axios.get("https://ih-beer-api.herokuapp.com/beers/random")
    .then(response => {
      this.setState({beer: response.data})
    })
  };

  render() {
    const { beer } = this.state
    return (
      <div>
          <h1>{beer.name}</h1>
          <img src={beer.image_url} alt='' />
          <h2>{beer.tagline}</h2>
          <p>{beer.description}</p>
          <p>First brewed: {beer.first_brewed}</p>
          <p>Attenuation level: {beer.attenuation_level}</p>
          <p>Contributed by: {beer.contributed_by}</p>
      </div>
    )
  }
}
