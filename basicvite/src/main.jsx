import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App.jsx";
import React from "react";

/*  vite cannot understand this method 
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};
*/

/* This can be passed to render into a actual DOM

const simpleElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);
*/

const customElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" }
  // {simple things which have been already evaluated by js and also can refer to single variables | we cannot write the whole logic here}
);

createRoot(document.getElementById("root")).render(customElement);
