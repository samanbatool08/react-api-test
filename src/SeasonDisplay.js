import './SeasonDisplay.css'
import React from 'react'; 

let seasonConfig = {
  winter: {
    text: "Burr, it's chilly",
    iconName: 'snowflake'
  }, 
  summer: {
    text: "Let's hit the beach", 
    iconName: 'sun'
  }
}

function getSeason(lat, month) {
  if ( month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter'
  } else {
    return lat > 0 ? 'winter' : 'summer'
  }
}

const SeasonDisplay = (props) => {
  let season = getSeason(props.lat, new Date().getMonth())
  let { text, iconName } = seasonConfig[season]


  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
        <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
)};

export default SeasonDisplay; 