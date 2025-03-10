import { useEffect, useState } from "react";

const RealTimeDate = () => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const timeOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      const dateOptions = {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      };

      const time = now.toLocaleTimeString("en-US", timeOptions);
      const date = now.toLocaleDateString("en-US", dateOptions);

      setDateTime(`${time} | ${date}`);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000); // Cập nhật mỗi giây
    return () => clearInterval(interval);
  }, []);

  return <div className="text-xs sm:text-sm text-gray-400">{dateTime}</div>;
};

export default RealTimeDate;
