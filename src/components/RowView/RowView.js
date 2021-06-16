import React from "react";
import "./RowView.css"
import SideBar from "../SideBar/SideBar";
import { Avatar, IconButton } from "@material-ui/core";

import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const RowView = () => {
  return (
    <div className="row mt-5">
      <div className="col-3">
        <SideBar />
      </div>

      <div className="col-9">
        <div className="row_view" style={{ width: "100%" }}>         
          <Avatar />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text dddd to build on the card title and make
              up the bulk of the card's content.
            </p>            
          </div>
          <IconButton>
            <DeleteForeverIcon color="secondary" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default RowView;
