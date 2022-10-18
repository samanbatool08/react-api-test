import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {


  
  render() {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position.coords.latitude),
    (error) => console.log(error.message)
  );
  return (
    <div>
      Latitude:  
    </div>
  );
}}

ReactDOM.render(<App />, document.querySelector('#root'));