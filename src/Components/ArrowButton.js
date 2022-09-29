const ArrowButton = ({ changeSideBarView, view }) => {
  let arrowBtnCss;
  if (view) {
    arrowBtnCss = {
      alignSelf: "flex-start",
      transform: "rotate(180deg)",
      marginTop: "auto",
    };
  } else {
    arrowBtnCss = {};
  }

  return (
    <button
      style={arrowBtnCss}
      onClick={changeSideBarView}
      className="arrow-button"
    >
      <img
        className="arrow-icon"
        src="./images/Icon open-caret-left.png"
        alt="Arrow Icon"
      />
    </button>
  );
};

export default ArrowButton;
