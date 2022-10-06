import ArrowButton from "./ArrowButton";
import UserImage from "./userImage";
import UserProfileButtonsWrapper from "./UserProfileButtonsWrapper";
import UserTabWrapper from "./UserTabWrapper";
import "./../../Styling/TeacherSideNavBar.css";

const TeacherSideNavBar = ({ sideBarViewSmall, changeSideBarView }) => {
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

export default TeacherSideNavBar;
