import React, { Component } from 'react'

export default class Beer extends Component {
  state = {
    selectedBeer: this.props.location.state.selectedBeer,
  }
      
  render() {
    const {selectedBeer} = this.state;
    return (
      <div>
        <h1>{selectedBeer.name}</h1>
        <img src={selectedBeer.image_url} alt='' />
        <h2>{selectedBeer.tagline}</h2>
        <p>{selectedBeer.description}</p>
        <p>First brewed: {selectedBeer.first_brewed}</p>
        <p>Attenuation level: {selectedBeer.attenuation_level}</p>
        <p>Contributed by: {selectedBeer.contributed_by}</p>
      </div>
    )
  }
}

