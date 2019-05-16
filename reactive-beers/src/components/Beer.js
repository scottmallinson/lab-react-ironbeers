import React, { Component } from 'react'

export default class Beer extends Component {
  state = {
    beers: this.props.location.state.beers,
    selectedBeer: {}
  }

  componentDidMount(){
    // a funtion that takes the cca3 from props and returns its country from the list
    const id = this.props.match.params.beerid;
    const beer = this.state.beers.filter((beer =>
      beer._id === id
      ))
      this.setState({
        selectedBeer: beer
      })
    }
      
  render() {
    console.log(this.state.selectedBeer);
    
    return (
      <div>
        <h1>An individual beer</h1>
      </div>
    )
  }
}

