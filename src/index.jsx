import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import GlobalStyles from "./styles";

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById("root")
);
