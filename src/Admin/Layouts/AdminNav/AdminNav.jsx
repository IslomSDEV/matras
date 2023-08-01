import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./AdminNav.css";
import adminLogo from "../../../assets/Images/adminLogo.svg";
import { BiSolidHome, BiSolidUser } from "react-icons/bi";
import { ImMenu } from "react-icons/im";
import { FaTools } from "react-icons/fa";
import { MdShoppingCart, MdLocationOn } from "react-icons/md";

export default function AdminNav() {
  const [nabarActive, setNavbarActive] = useState("");
  const loc = useLocation()

  let headerArr = [
    {
      id: 1,
      title: "Buyurtmalar",
      icon: <BiSolidHome className="adminNavIcon" />,
      navPath: "/"
    },
    {
      id: 2,
      title: "Сustomers",
      icon: <BiSolidUser className="adminNavIcon" />,
      navPath: "/customers"

    },
    {
      id: 3,
      title: "Toifalar",
      icon: <ImMenu className="adminNavIcon rotateIcon" />,
      navPath: "/toifalar"

    },
    {
      id: 4,
      title: "Mahsulotlar",
      icon: <MdShoppingCart className="adminNavIcon" />,
      navPath: "/mahsulotlar"
    },
    {
      id: 5,
      title: "Texnologiyalar",
      icon: <FaTools className="adminNavIcon" />,
      navPath: "/texnologiyalar"
    },
    {
      id: 6,
      title: "Manzil",
      icon: <MdLocationOn className="adminNavIcon" />,
      navPath: "/manzil"
    },
  ];

  return (
    <>
      <div className="adminNavSy">
        <div className="adminLogoDiv">
          <div className="container">
            <div className="adminLogoBox">
              <Link to={"/"} className="adminLinkLogo">
                <img
                  className="adminLogoPicture"
                  src={adminLogo}
                  alt="admin logo"
                />
              </Link>
            </div>
          </div>
        </div>
        <ul className="adminPanelNavList">
          {headerArr.map((data) => {
            return (
              <li
                className={`${
                  nabarActive == data.navPath || loc.pathname == data.navPath ? "linkActive" : null
                } adminNavListItem`}
                key={data.id}
              >
                <Link 
                  to={`${data.navPath}`}
                  className="adminNavLink"
                  onClick={() => setNavbarActive(data.navPath)}
                >
                  {data.icon}
                  {data.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
