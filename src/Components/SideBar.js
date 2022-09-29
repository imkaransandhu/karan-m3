import { useState } from "react";
import ArrowButton from "./ArrowButton";
import UserImage from "./userImage";
import UserProfileButtonsWrapper from "./UserProfileButtonsWrapper";
import UserTabWrapper from "./UserTabWrapper";
import "./../Styling/SideBar.css";

const SideBar = () => {
  const [sideBarViewSmall, setSideBarViewLarge] = useState(false);

  const changeSideBarView = () => {
    setSideBarViewLarge(!sideBarViewSmall);
  };
  return (
    <div
      style={{
        width: sideBarViewSmall && "7rem",
        minWidth: sideBarViewSmall && "7rem",
      }}
      className="side-bar"
    >
      <UserImage view={sideBarViewSmall} />
      <UserTabWrapper view={sideBarViewSmall} />
      <ArrowButton
        view={sideBarViewSmall}
        changeSideBarView={changeSideBarView}
      />
      <UserProfileButtonsWrapper view={sideBarViewSmall} />
    </div>
  );
};

export default SideBar;
