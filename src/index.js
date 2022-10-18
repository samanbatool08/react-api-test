import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  state = {
    lat: null, 
    errorMessage: ''
  }
  
  render() {
  window.navigator.geolocation.getCurrentPosition(
    (position) => this.setState({ lat: position.coords.latitude}),
    (error) => console.log(error.message)
  );
  return (
    <div>
      Latitude: {this.state.lat}  
    </div>
  );
}}

ReactDOM.render(<App />, document.querySelector('#root'));