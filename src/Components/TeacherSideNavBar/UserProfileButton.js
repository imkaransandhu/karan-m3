const UserProfileButton = ({ name, icon, view }) => {
  return (
    <div className="user-profile-button">
      <img
        style={{ marginTop: view && "1rem" }}
        className="user-profile-image"
        src={icon}
        alt={`Icon ${name}`}
      />
      {view === false && <p className="user-profile-button-text">{name}</p>}
    </div>
  );
};

export default UserProfileButton;
