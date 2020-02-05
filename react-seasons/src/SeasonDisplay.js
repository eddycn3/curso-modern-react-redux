import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  verao: {
    text: "Bora curtir a praia!",
    iconName: "sun"
  },
  inverno: {
    text: "Cobertor e Engordar!",
    iconName: "snowflake"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "verao" : "inverno";
  } else {
    return lat > 0 ? "inverno" : "verao";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right huge ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
