import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './ViewToggle.css';

const ViewToggle = () => {
  // const [show, setShow] = useContext();

  return (
    <div className="view_toggle">
      <h3>View Toggle</h3>
      
      <Link to="/home">
        <button className="btn btn-info m-1">Row view</button>
      </Link>
      <Link to="/column">
      <button className="btn btn-info">Column view</button>
      </Link>
    </div>
  );
};

export default ViewToggle;
