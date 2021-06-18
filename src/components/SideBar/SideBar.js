import React from "react";
import ViewToggle from "../ViewToggle/ViewToggle";
import Feedback from "../Feedback/Feedback";
import { Avatar } from "@material-ui/core";
import './SideBar.css'

const SideBar = () => {
  return (
    <div>
      <div className="d-flex user_card">
        <Avatar className="w-25 h-25" src="https://scholly-www.s3.amazonaws.com/wp/wp-content/uploads/2020/10/KtCFjlD4.jpg" />
        <div className="ml-2">
          <h4>Hi Reader,</h4>
          <p>Here's your News!</p>
        </div>
      </div>
      <ViewToggle />
      <Feedback />
    </div>
  );
};

export default SideBar;
