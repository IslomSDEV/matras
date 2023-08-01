import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, } from "react-router-dom";
import Admin from "./Admin/Admin.jsx";
import App from "./App.jsx";
import ContextProvid from "./Context/Context.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvid>
        {/* <Admin/> */}
        <App/>
      </ContextProvid>
    </BrowserRouter>
  </React.StrictMode>
);
