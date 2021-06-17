import React, { createContext, useContext, useState } from "react";
import ColumnView from "../ColumnView/ColumnView";
import RowView from "../RowView/RowView";

const Home = () => {
  const [show, setShow] = useState(true);

  return (    
      <div className="container">        
          <RowView />       
      </div>
    
  );
};

export default Home;
