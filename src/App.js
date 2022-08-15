import React from "react";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { PrivateRoute } from "./PrivateRoute";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container mt-2">
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            ></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
