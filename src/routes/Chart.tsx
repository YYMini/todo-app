import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface ChartProps {
  coinId: string;
}

function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>({
    queryKey: ["ohlcv", coinId],
    queryFn: () => fetchCoinHistory(coinId),
    refetchInterval: 10000,
  });

  const candlestickData =
    data?.map((price) => ({
      x: new Date(price.time_open).toISOString(),
      y: [
        parseFloat(price.open + ""),
        parseFloat(price.high + ""),
        parseFloat(price.low + ""),
        parseFloat(price.close + ""),
      ],
    })) ?? [];

  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="candlestick"
          series={[{ data: candlestickData }]}
          options={{
            chart: {
              type: "candlestick",
              height: 350,
              background: "transparent",
              toolbar: {
                show: false,
              },
            },
            theme: {
              mode: "dark",
            },
            xaxis: {
              type: "datetime",
              labels: {
                show: true,
              },
            },
            yaxis: {
              tooltip: {
                enabled: true,
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
