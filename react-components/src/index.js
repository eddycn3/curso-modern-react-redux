import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import Faker from "faker";
import AprovalCar from "./AprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <AprovalCar>
        <CommentDetail
          author="Ralph"
          timeAgo="hoje 063:00PM"
          comment="Nice!"
          avatar={Faker.image.avatar()}
        />
      </AprovalCar>
      <AprovalCar>
        <CommentDetail
          author="Jane"
          timeAgo="hoje 01:00AM"
          comment="Show!"
          avatar={Faker.image.avatar()}
        />
      </AprovalCar>

      <AprovalCar>
        <CommentDetail
          author="Appril"
          timeAgo="hoje 05:00PM"
          comment="marvelous!"
          avatar={Faker.image.avatar()}
        />
      </AprovalCar>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
