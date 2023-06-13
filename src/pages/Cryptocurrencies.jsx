import React, { useEffect, useState } from "react";

import millify from "millify";
import { Link } from "react-router-dom";
import axios from "axios";

const Cryptocurrencies = () => {
  const [coins, setCoins] = useState([]);
  // const url = `https://coinranking1.p.rapidapi.com/coins`;

  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "409003033amsh95405c2429d64dbp15eb58jsn62fe93b86a91",
  //     "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  //   },
  // };

  // const [allCoins, setAllCoins] = useState([]);

  // const fetchAllCoins = async () => {
  //   try {
  //     const response = await fetch(url, options);
  //     const coinData = await response.json();
  //     // console.log(coinData);
  //     const coins = await coinData?.data?.coins;
  //     setAllCoins(coins);
  //   } catch (error) {
  //     console.log(error.response);
  //   }
  // };

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

  const fetchAllCoins = async () => {
    const { data } = await axios(
      "https://coinranking1.p.rapidapi.com/coins",
      options
    );
    const coin = await data.data.coins;
    // console.log(coin);
    setCoins(coin);
  };

  useEffect(() => {
    fetchAllCoins();
  }, []);

  return (
    <div className="cryptocurrency-container">
      <h1 className="allcoins-title">Cryptocurrencies</h1>
      <div className="allcoins-container">
        {coins.map((coins) => {
          const { uuid, name, iconUrl, price, marketCap, rank, change } = coins;
          return (
            <div className="allCoins card" key={uuid}>
              <Link className="links" to={`/coins/${uuid}`}>
                <div className="cards">
                  <div className="card-head">
                    <h3>{name}</h3>
                    <img className="coin-img" src={iconUrl} alt={name} />
                  </div>
                  <hr />
                  <div className="card-body">
                    <p>Rank: {rank}</p>
                    <p>Price: {millify(price)}</p>
                    <p>Market Cap: {millify(marketCap)}</p>
                    <p>Daily: {millify(change)}</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cryptocurrencies;
