import './App.css';
import React from "react";
import ButtonComponent from "./Button/buttonComponent";
import DisplayAddresses from "./RetrievedAddresses/displayAddresses";
import Events from "./RetrievedAddresses/events";

//TODO: make this a variable loaded from an api call
const addresses = new Array(3).fill(new Array(3).fill("addresses!"));

// Make this fully flexible for smaller screens (stack all vertically and no vertical line if on a smaller screen)
function AddressDisplay() {
  return (
      <div className="displays">
          <ButtonComponent />
          <DisplayAddresses addresses={addresses} />
          <div className="vertical-line"/>
          <Events />
        {/* TODO: Events comparison box*/}
      </div>
  );
}

export default AddressDisplay;
