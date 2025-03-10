import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

const TemperatureHumidityChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const now = new Date().toLocaleTimeString();
      const temp = (Math.random() * 20 - 10).toFixed(2); // Nhiệt độ (-10°C đến 10°C)
      const humidity = (Math.random() * 50 + 20).toFixed(2); // Độ ẩm (20% - 70%)

      setData((prevData) => {
        const newData = [
          ...prevData,
          { time: now, temp: parseFloat(temp), humidity: parseFloat(humidity) },
        ];
        localStorage.setItem("sensorData", JSON.stringify(newData)); // Lưu vào LocalStorage
        return newData.slice(-100); // Giữ tối đa 100 điểm dữ liệu
      });
    };

    // Load dữ liệu cũ
    const savedData = JSON.parse(localStorage.getItem("sensorData"));
    if (savedData) setData(savedData);

    fetchData();
    const interval = setInterval(fetchData, 2000); // Cập nhật mỗi 2 giây
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-900 p-4 rounded-xl shadow-lg text-white w-full max-w-2xl mx-auto">
      <h2 className="text-xl font-bold text-center mb-4">
        📊 Nhiệt độ & Độ ẩm từ DHT22
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="time" tick={{ fill: "#ddd" }} />
          <YAxis
            yAxisId="left"
            domain={[-10, 10]}
            tick={{ fill: "#facc15" }}
            label={{
              value: "°C",
              angle: -90,
              position: "insideLeft",
              fill: "#facc15",
            }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            domain={[20, 70]}
            tick={{ fill: "#38bdf8" }}
            label={{
              value: "%",
              angle: -90,
              position: "insideRight",
              fill: "#38bdf8",
            }}
          />
          <Tooltip />
          <Legend />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="temp"
            stroke="#facc15"
            strokeWidth={2}
            dot={{ fill: "#facc15" }}
            name="Nhiệt độ (°C)"
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="humidity"
            stroke="#38bdf8"
            strokeWidth={2}
            dot={{ fill: "#38bdf8" }}
            name="Độ ẩm (%)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TemperatureHumidityChart;
