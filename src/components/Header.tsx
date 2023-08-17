import React from "react";
import { useLocation } from "react-router-dom";

import DateRange from "./DateRange";
import Months from "./Months";

const Header = () => {
  const [title, setTitle] = React.useState("Resumo");
  const location = useLocation();

  React.useEffect(() => {
    let id;
    if (location.pathname.startsWith("/sales/")) id = location.pathname;
    switch (location.pathname) {
      case "/sales":
        setTitle("Vendas");
        document.title = "Fintech | Vendas";
        break;
      case id:
        setTitle("Venda");
        document.title = "Fintech | Venda";
        break;
      default:
        setTitle("Resumo");
        document.title = "Fintech | Resumo";
    }
  }, [location]);

  return (
    <header className="mb">
      <div className="daterange mb">
        <DateRange />
        <h1 className="box bg-3">{title}</h1>
      </div>
      <Months />
    </header>
  );
};

export default Header;
