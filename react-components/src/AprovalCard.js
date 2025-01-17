import React from "react";

const AprovalCard = props => {
  return (
    <div className="ui card">
      <div className="content">{props.children}</div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Aprovar</div>
          <div className="ui basic red button">Rejeitar</div>
        </div>
      </div>
    </div>
  );
};

export default AprovalCard;
