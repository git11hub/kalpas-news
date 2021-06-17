import React, { useContext } from "react";
import { Link } from "react-router-dom";

const ViewToggle = () => {
  // const [show, setShow] = useContext();

  return (
    <div>
      <h1>View Toggle</h1>
      <Link to="/home">
        <button>Row view</button>
      </Link>
      <Link to="/column">
      <button>Column view</button>
      </Link>
      
    </div>
  );
};

export default ViewToggle;
