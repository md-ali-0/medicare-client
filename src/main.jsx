import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Context/AuthContext";
import Router from "./Router/Router";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <HelmetProvider>
            <AuthProvider>
                <RouterProvider router={Router}>
                    <Toaster />
                </RouterProvider>
            </AuthProvider>
        </HelmetProvider>
    </React.StrictMode>
);
