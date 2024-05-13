import React from "react";
import ReactDOM from "react-dom/client";
import StoreContextProvider from "./context/StoreContext.jsx";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import { food_list } from "../assets/assets";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
     <StoreContextProvider>
       <App />
     </StoreContextProvider>
  </BrowserRouter>
)
