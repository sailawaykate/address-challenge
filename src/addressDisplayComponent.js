import './App.css';
import React from "react";
import ButtonComponent from "./Button/buttonComponent";

// Make this fully flexible for smaller screens (stack all vertically and no vertical line if on a smaller screen)
function AddressDisplay() {
  return (
      <div>
          <ButtonComponent />
        {/* TODO:  address information box */}
          <div className="vertical-line"/>
        {/* TODO: Events comparison box*/}
      </div>
  );
}

export default AddressDisplay;
