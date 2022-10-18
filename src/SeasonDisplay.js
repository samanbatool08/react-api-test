import React from 'react'; 

function getSeason(lat, month) {
  if ( month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter'
  } else {
    return lat > 0 ? 'winter' : 'summer'
  }
}

const SeasonDisplay = (props) => {
  let season = getSeason(props.lat, new Date().getMonth())
  let text = season === 'winter' ? "Burrr, it's chilly" : "Let's hit the beach"
  let icon = season === 'winter' ? 'snowflake' : 'sun'


  return (
    <div>
      <i className={`${icon} icon`} />
        <h1>{text}</h1>
      <i className={`${icon} icon`} />
    </div>
)};

export default SeasonDisplay; 