import React from "react";
import ReactDOM from "react-dom"; // For react 17
// For react 18: import ReactDOM from 'react-dom/client';
import App from "./App";
import "./index.css";

import { FronteggProvider } from "@frontegg/react";

const contextOptions = {
  baseUrl: "https://app-p3klj7vskrv0.frontegg.com",
  clientId: "7bc14d88-865b-4e56-a7a7-b6a12e960352",
};

const authOptions = {
  // keepSessionAlive: true // Uncomment this in order to maintain the session alive
};

// For react 18:
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // ReactDOM.render(
  <FronteggProvider
    contextOptions={contextOptions}
    hostedLoginBox={true}
    authOptions={authOptions}
  >
    <App />
  </FronteggProvider>
  // document.getElementById("root")
);
