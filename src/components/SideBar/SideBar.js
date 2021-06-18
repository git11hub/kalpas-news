import React from "react";
import ViewToggle from "../ViewToggle/ViewToggle";
import Feedback from "../Feedback/Feedback";
import { Avatar } from "@material-ui/core";
import './SideBar.css'
import User from "../User/User";

const SideBar = () => {
  return (
    <div>      
      <User />
      <ViewToggle />
      <Feedback />
    </div>
  );
};

export default SideBar;
