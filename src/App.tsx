import React from "react";
import "./style.css";

import { DataContextProvider } from "./context/DataContext";

import Sidenav from "./components/Sidenav";
import Header from "./components/Header";

import Summary from "./pages/Summary";
import Sales from "./pages/Sales";

function App() {
  return (
    <DataContextProvider>
      <div className="container">
        <Sidenav />
        <main>
          <Header />
          <Summary />
          <Sales />
        </main>
      </div>
    </DataContextProvider>
  );
}

export default App;
