import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Coins() {
  const [coins, setCoins] = useState([]);

  const options = {
    method: "GET",
    url: "https://coinranking1.p.rapidapi.com/coins",
    params: {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod: "24h",
      "tiers[0]": "1",
      orderBy: "marketCap",
      orderDirection: "desc",
      limit: "50",
      offset: "0",
    },
    headers: {
      "X-RapidAPI-Key": "409003033amsh95405c2429d64dbp15eb58jsn62fe93b86a91",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };

  const fetchCoin = async () => {
    const { data } = await axios(
      "https://coinranking1.p.rapidapi.com/coins",
      options
    );
    const coin = await data.data.coins;
    // console.log(coin);
    setCoins(coin);
  };

  useEffect(() => {
    fetchCoin();
  }, []);

  return (
    <div>
      All Coins
      {coins.map(({ uuid, name, symbol, iconUrl }) => (
        <div key={uuid} style={{ display: "flex" }}>
          <h2>{name}</h2>
          <p>{symbol}</p>
          <Link to={`/coins/${uuid}`}>
            <img src={iconUrl} alt={name} style={{ width: "30px" }} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Coins;
