import { ISale } from "../context/DataContext";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type SaleDay = {
  data: string;
  pago: number;
  processando: number;
  falha: number;
};

function transformData(data: ISale[]): SaleDay[] {
  const days = data.reduce((acc: { [key: string]: SaleDay }, item) => {
    const day = item.data.split(" ")[0];
    if (!acc[day]) {
      acc[day] = {
        data: day,
        pago: 0,
        falha: 0,
        processando: 0,
      };
    }
    acc[day][item.status] += item.preco;
    return acc;
  }, {});

  return Object.values(days).map(day => ({
    ...day,
    data: day.data.substring(5).split("-").reverse().join("-"),
  }));
}

const SalesGraph = ({ data }: { data: ISale[] }) => {
  const transformedData = transformData(data);
  return (
    <ResponsiveContainer height={400} width="99%">
      <LineChart data={transformedData}>
        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pago" stroke="#ff7300" strokeWidth={3} />
        <Line
          type="monotone"
          dataKey="processando"
          stroke="#387908"
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="falha"
          stroke="#222222"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SalesGraph;
