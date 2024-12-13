// src/components/WorldTime.js
import React, { useEffect, useState } from "react";

const WorldTime = () => {
  const [timeData, setTimeData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTime = async () => {
      try {
        const response = await fetch(
          "https://worldtimeapi.org/api/timezone/Asia/Jakarta"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch time data");
        }
        const data = await response.json();
        setTimeData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // Ensure loading stops
      }
    };

    fetchTime();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>World Time</h1>
      <p>
        <strong>Current Time:</strong> {timeData.datetime}
      </p>
      <p>
        <strong>Timezone:</strong> {timeData.timezone}
      </p>
      <p>
        <strong>UTC Offset:</strong> {timeData.utc_offset}
      </p>
      <p>
        <strong>Day of Week:</strong> {timeData.day_of_week}
      </p>
    </div>
  );
};

export default WorldTime;
