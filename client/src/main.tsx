import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import NavBar from "./components/NavBar.tsx";
import { Route, Switch } from "wouter";
import LogInPage from "./pages/logIn.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NavBar />
    <Switch>
      <Route path="/">
        <App />
      </Route>
      <Route path="/login">
        <LogInPage />
      </Route>
    </Switch>
  </React.StrictMode>,
);
