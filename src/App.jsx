import React from "react";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
// import Admin from "./Admin/Admin";
import { Context } from "./Context/Context";
import HomeMain from "./HomeMain";
// import Layout from "./Layouts/Layout";
// import Login from "./Login/Login";

function App() {
  const { login } = useContext(Context);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeMain/>} />
      </Routes>
    </>
  );
}

export default App;
