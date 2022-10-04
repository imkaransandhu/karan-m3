import { Link } from "react-router-dom";

const UserTab = ({ tabName, pageLink, iconUrl, view }) => {
  const changeTab = (e) => {
    document
      .querySelector(".user-tab.active-link")
      .classList.remove("active-link");
    e.currentTarget.classList.add("active-link");
  };

  return (
    <Link
      to={`/${pageLink}`}
      style={{ justifyContent: view && "center" }}
      className={`user-tab ${
        tabName === "Progress Tracker" ? "active-link" : ""
      }`}
      linkname={tabName}
      onClick={changeTab}
    >
      <img
        style={{
          height: view && "2.5rem",
          width: view && "2.5rem",
        }}
        className="user-tab-icon"
        src={iconUrl}
        alt={`tabName ${tabName}`}
      />
      {view === false && <p className="user-tab-name">{tabName}</p>}
    </Link>
  );
};

export default UserTab;
