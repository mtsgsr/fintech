import { ISale } from "../context/DataContext";

const SalesItem = ({ sale }: { sale: ISale }) => {
  return (
    <div className="sale box">
      <a href="">{sale.id}</a>
      <div>{sale.nome}</div>
      <div>
        {sale.preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
    </div>
  );
};

export default SalesItem;
