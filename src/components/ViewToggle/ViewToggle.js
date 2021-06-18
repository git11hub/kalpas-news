import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ViewToggle.css";

const ViewToggle = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="view_toggle">
      <h3>View Toggle</h3>

      {show ? (
        <Link to="/column">
          <button onClick={() => setShow(false)} className="btn btn-info">
            Column view
          </button>
        </Link>
      ) : (
        <Link to="/home">
          <button onClick={() => setShow(true)} className="btn btn-info">
            Row view
          </button>
        </Link>
      )}
    </div>
  );
};

export default ViewToggle;
