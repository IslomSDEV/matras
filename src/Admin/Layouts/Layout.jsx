import React from "react";
import AdminHeader from "./AdminHeader/AdminHeader";
import AdminNav from "./AdminNav/AdminNav";

export default function Layout({ children }) {
  return (
    <>
      <AdminNav />
      <AdminHeader />
      {children}
    </>
  );
}
