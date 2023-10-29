import Header from "./components/Header";
import React from "react";
import { Outlet } from "react-router-dom";
import "./index.css"

function App() {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
    </React.Fragment>
  );
}

export default App;
