import React from "react";
import Layout from "./Layouts/Layout";
import About from "./Page/About/About";
import Application from "./Page/Application/Application";
import Home from "./Page/Home/Home";
import Making from "./Page/Making/Making";
import Manzil from "./Page/Manzil/Manzil";
import Number from "./Page/Number/Number";
import Products from "./Page/Products/Products";
import Skidka from "./Page/Skidka/Skidka";
import Tanlov from "./Page/Tanlov/Tanlov";

export default function HomeMain() {
  return (
      <Layout>
        <>
        <Home />
        <Number />
        <Products />
        <Skidka />
        <Making />
        <About />
        <Tanlov />
        <Manzil />
        <Application />
      </>
      </Layout>
  );
}
