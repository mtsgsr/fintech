import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { ISale } from "../context/DataContext";
import Loading from "../components/Loading";

type SaleWithoutDate = Omit<ISale, "data">;

const loadingStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Sale = () => {
  const { id } = useParams();
  const { data, loading } = useFetch<SaleWithoutDate>(
    `https://data.origamid.dev/vendas/${id}`
  );
  if (loading === true)
    return (
      <div style={loadingStyle} className="mb">
        <Loading />
      </div>
    );
  if (data === null) return null;
  return (
    <div>
      <div className="box mb" style={{ fontFamily: "monospace" }}>
        ID: {data.id}
      </div>
      <div className="box mb">Nome: {data.nome}</div>
      <div className="box mb">
        Preço:{" "}
        {data.preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
      <div className="box mb">Status: {data.status}</div>
      <div className="box mb">Pagamento: {data.pagamento}</div>
    </div>
  );
};

export default Sale;
