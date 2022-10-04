import React from "react";
// import "../Styling/TeacherNavBar.css";

export default function TeacherNavBar() {
  return (
    <div className="navWrapper">
      <div className="boxOne">Box One</div>
      <div className="boxTwo">
        <div className="margin">button One</div>
        <div className="margin">button two</div>
        <div>button three</div>
      </div>

      <div className="boxThree">
        <div>{/* flag one */}</div>
        <div>{/* flag two */}</div>
      </div>
    </div>
  );
}
