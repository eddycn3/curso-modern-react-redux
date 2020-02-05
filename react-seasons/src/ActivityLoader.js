import React from "react";

const ActivityLoader = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.msg}</div>
    </div>
  );
};

ActivityLoader.defaultProps = {
  msg: "Carregando..."
};

export default ActivityLoader;
