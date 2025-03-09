import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import App from "./App.jsx";
import { configureStore } from "@reduxjs/toolkit";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import { rootReducer } from "./reducer/rootReducer.jsx";

const store = configureStore({
  reducer: rootReducer,
});

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
