import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import App from "./App";
import "./index.css";
import { ThemeConfig } from "./themes/themeConfig";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./config/ApolloClient";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </ConfigProvider>
    <ConfigProvider theme={ThemeConfig}> */}
  </ApolloProvider>
);
