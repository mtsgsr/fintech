import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.css";

import { DataContextProvider } from "./context/DataContext";

import Sidenav from "./components/Sidenav";
import Header from "./components/Header";

import Summary from "./pages/Summary";
import Sales from "./pages/Sales";
import Sale from "./pages/Sale";

function App() {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <div className="container">
          <Sidenav />
          <main>
            <Header />
            <Routes>
              <Route path="/" element={<Summary />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="/sales/:id" element={<Sale />} />
            </Routes>
          </main>
        </div>
      </DataContextProvider>
    </BrowserRouter>
  );
}

export default App;
