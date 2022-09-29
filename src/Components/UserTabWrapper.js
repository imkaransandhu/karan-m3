import UserTab from "./userTab";

const UserTabWrapper = ({ view }) => {
  const userTabsDetails = [
    {
      id: 1,
      tabName: "Progress Tracker",
      tabIconSmall: "./images/Progress dark.png",
      tabIconLarge: "./images/Progress dark@2x.png",
    },
    {
      id: 2,
      tabName: "Sudent Profile",
      tabIconSmall: "./images/Icon awesome-user-graduate.png",
      tabIconLarge: "./images/Icon awesome-user-graduate@2x.png",
    },
    {
      id: 3,
      tabName: "Help Request",
      tabIconSmall: "./images/Icon material-live-help.png",
      tabIconLarge: "./images/Icon material-live-help@2x.png",
    },
    {
      id: 4,
      tabName: "Project Submissions",
      tabIconSmall: "./images/submit proj.png",
      tabIconLarge: "./images/submit proj@2x.png",
    },
    {
      id: 5,
      tabName: "Project Library",
      tabIconSmall: "./images/library light.png",
      tabIconLarge: "./images/library light@2x.png",
    },
  ];

  return (
    <div className="user-tab-wrapper">
      {userTabsDetails.map((tab, index) => {
        return (
          <UserTab
            key={index}
            view={view}
            tabName={tab.tabName}
            iconUrl={view ? tab.tabIconLarge : tab.tabIconSmall}
          />
        );
      })}
    </div>
  );
};

export default UserTabWrapper;
