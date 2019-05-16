import React, { Component } from 'react'
import axios from 'axios'

export default class Beers extends Component {
  constructor(){
    super()
    this.state = {
        beers: []
    }
  }

  renderBeers

  componentDidMount() {
    axios.get("https://ih-beer-api.herokuapp.com/beers")
    .then(response => {
        console.log(response.data)
        this.setState({beers: response.data})
    })
};

  render() {
    return (
      <div>
        {this.state.beers.map(beer => <div><h1>{beer.name}</h1><img src={beer.image_url} alt='' /><p>{beer.tagline}</p><p>{beer.contributed_by}</p></div>)}
      </div>
    )
  }
}
