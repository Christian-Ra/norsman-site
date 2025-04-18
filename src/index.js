import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
// import MenuBar from "./Components/menu/MenuBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <RouterProvider router={router}>
  <HelmetProvider>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </HelmetProvider>
  // {/* </RouterProvider> */}
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
