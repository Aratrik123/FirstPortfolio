import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import "@fontsource/outfit";
import "@fontsource/roboto";
import 'aos/dist/aos.css';
import AOS from 'aos';


AOS.init({
  duration: 1000, 
  easing: 'ease-in-out',
  offset: 200, 
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
