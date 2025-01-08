import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./router/Routes";
import NavbarComp from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const MainContent = styled.div`
  padding-top: 45px;
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <MainContent>
    <React.StrictMode>
      <NavbarComp />
      <AppRoutes />
    </React.StrictMode>
  </MainContent>
);
