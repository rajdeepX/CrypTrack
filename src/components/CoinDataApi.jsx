import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function CoinDetail() {
  const [coin, setCoin] = useState(null);
  const { coinId } = useParams();

  const options = {
    method: "GET",
    url: "https://coinranking1.p.rapidapi.com/coin/razxDUgYGNAdQ",
    headers: {
      "X-RapidAPI-Key": "409003033amsh95405c2429d64dbp15eb58jsn62fe93b86a91",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };

  const fetchCoinDetails = async () => {
    const response = await axios(
      `https://coinranking1.p.rapidapi.com/coin/${coinId}`,
      options
    );
    const coinData = await response.data.data.coin;

    console.log(coinData);
    setCoin(coinData);
  };

  useEffect(() => {
    fetchCoinDetails();
  }, [coinId]);

  if (!coin) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{coin.name}</h2>
      <p>{coin.symbol}</p>
      <img style={{ width: "50px" }} src={coin.iconUrl} alt={coin.name} />
      <p>{coin.description}</p>
    </div>
  );
}

export default CoinDetail;
