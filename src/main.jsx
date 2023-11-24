import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import Router from "./Router/Router";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={Router} />
    </React.StrictMode>
);
