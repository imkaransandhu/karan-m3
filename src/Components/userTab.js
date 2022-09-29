const UserTab = ({ tabName, iconUrl, view }) => {
  return (
    <div style={{ justifyContent: view && "center" }} className="user-tab">
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
    </div>
  );
};

export default UserTab;
