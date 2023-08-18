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
        <Tooltip
          contentStyle={{
            backgroundColor: "var(--color-5)",
            border: "2px solid var(--color-4)",
            borderRadius: "var(--gap-s)",
          }}
        />
        <Legend />
        <Line type="monotone" dataKey="pago" stroke="#7ee599" strokeWidth={3} />
        <Line
          type="monotone"
          dataKey="processando"
          stroke="#e29b37"
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="falha"
          stroke="#c92c4b"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SalesGraph;
