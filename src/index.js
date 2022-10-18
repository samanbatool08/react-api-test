import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader'

class App extends React.Component {

  state = {
    lat: null, 
    errorMessage: ''
  }
  
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude}),
      (error) => this.setState({ errorMessage: error.message})
    );
  }

  render() {

  if (!this.state.lat && this.state.errorMessage) {
    return <div>Error: {this.state.errorMessage}</div>
  }

  if (this.state.lat && !this.state.errorMessage) {
    return <SeasonDisplay lat={this.state.lat}/>
  }

  if (!this.state.lat && !this.state.errorMessage) {
    return <Loader message="Waiting to accept location preferences"/>
  }
  
}}

ReactDOM.render(<App />, document.querySelector('#root'));