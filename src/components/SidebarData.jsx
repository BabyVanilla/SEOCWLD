import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
import * as WiIcons from "react-icons/wi";
import * as FiIcons from "react-icons/fi";


export const SidebarData = [
  {
    title: "Home",
    path: "/Home",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Temperature Data",
    path: "/Temperature-data",
    icon: <FaIcons.FaTemperatureHigh />,
    cName: "nav-text",
  },
  {
    title: "Smoke Data",
    path: "/Smoke-data",
    icon: <WiIcons.WiSmoke />,
    cName: "nav-text",
  },
  {
    title: "Flame Data",
    path: "/Flame-data",
    icon: <AiIcons.AiTwotoneFire />,
    cName: "nav-text",
  },
  {
    title: "Light Data",
    path: "/Light-data",
    icon: <BsIcons.BsLightningFill />,
    cName: "nav-text",
  },
  {
    title: "Soil Moisture Data",
    path: "/Soil-data",
    icon: <BsIcons.BsMoisture />,
    cName: "nav-text",
  },
  {
    title: "Support",
    path: "/Support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
  {
    title: "Log Out",
    path: "/",
    icon: <FiIcons.FiLogOut />,
    cName: "nav-text",
  },
];
