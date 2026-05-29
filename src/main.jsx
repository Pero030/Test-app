import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import { App } from "./App.jsx";
import { installChromeServices } from "./services/chrome.js";

installChromeServices();

createRoot(document.getElementById("root")).render(
  <App />,
);
