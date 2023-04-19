import axios from "axios";
import { useEffect, useState } from "react";

import React from "react";
import { useParams } from "react-router-dom";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import moment from "moment/moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const HistoryChart = (props) => {
  const [coinHistory, setCoinHistory] = useState([]);

  const { coinId } = useParams();

  const coinHistoryOptions = {
    method: "GET",
    url: "https://coinranking1.p.rapidapi.com/coin",
    params: { referenceCurrencyUuid: "yhjMzLPhuIDl", timePeriod: "7d" },
    headers: {
      "X-RapidAPI-Key": "409003033amsh95405c2429d64dbp15eb58jsn62fe93b86a91",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };

  const fetchCoinHistory = async () => {
    try {
      const response = await axios(
        `https://coinranking1.p.rapidapi.com/coin/${coinId}/history`,
        coinHistoryOptions
      );
      const chartData = response.data.data.history;
      //   const chartData2 = response.data.data;
      //   console.log(response);
      console.log(chartData);
      setCoinHistory(chartData);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchCoinHistory();
  }, [coinId]);

  if (!coinHistory) {
    return <div>Loading...</div>;
  }

  const coinChartData = coinHistory.map((item) => {
    // console.log(moment(item.timestamp).format("MMM DD YYYY"));
    let date = new Date(item.timestamp);
    // console.log(date);
    return { x: item.price, y: item.timestamp };
    //   <div>
    //     <p>{item.price}</p>
    //     <p>{item.timestamp.toFixed(2)}</p>
    //   </div>
  });

  //   console.log(coinChartData);

  const options = {
    responsive: true,
  };

  const data = {
    labels: coinHistory.map((item) => {
      //   console.log(item[700]);
      return moment(item.timestamp).format("MMM DD");
      // labels: coinChartData.map((item) => {
      //   return moment(item.y).format("MMM DD");
    }),
    datasets: [
      {
        fill: true,
        label: props.name,
        data: coinHistory.map((item) => {
          return item.price;
        }),
        // data: coinChartData.map((item) => {
        //   return item.x;
        // }),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div style={{ width: "50%" }} className="coin-chart">
      <Line options={options} data={data} />
    </div>
  );
};

export default HistoryChart;
