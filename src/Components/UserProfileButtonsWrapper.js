import UserProfileButton from "./UserProfileButton";

const UserProfileButtonsWrapper = ({ view }) => {
  const userProfileButtonDetails = [
    {
      id: 1,
      iconSmall: "/images/Icon awesome-user-circle.png",
      iconlarge: "/images/Icon awesome-user-circle@2x.png",
      name: "profile",
    },
    {
      id: 2,
      iconSmall: "/images/Icon material-settings.png",
      iconlarge: "/images/Icon material-settings@2x.png",
      name: "settings",
    },
    {
      id: 3,
      iconSmall: "/images/Icon awesome-sign-out-alt.png",
      iconlarge: "/images/Icon awesome-sign-out-alt@2x.png",
      name: "Log out",
    },
  ];

  return (
    <div
      style={{
        flexDirection: view && "column",
        marginTop: view && "0",
      }}
      className="user-profile-buttons-wrapper"
    >
      {userProfileButtonDetails.map((button, index) => {
        return (
          <UserProfileButton
            key={index}
            view={view}
            name={button.name}
            icon={view ? button.iconlarge : button.iconSmall}
          />
        );
      })}
    </div>
  );
};

export default UserProfileButtonsWrapper;
