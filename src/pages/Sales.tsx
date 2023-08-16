import { useData } from "../context/DataContext";
import SalesItem from "../components/SalesItem";

const Sales = () => {
  const { data } = useData();

  if (data === null) return null;
  return (
    <ul>
      {data.map(sale => (
        <li key={sale.id}>
          <SalesItem sale={sale} />
        </li>
      ))}
    </ul>
  );
};

export default Sales;
