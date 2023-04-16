import React, { useEffect, useState } from "react";

import millify from "millify";
import { Link } from "react-router-dom";
import axios from "axios";
import Stats from "./Stats";

const HomepageV2 = () => {
  // const url = "https://coinranking1.p.rapidapi.com/coins";

  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "409003033amsh95405c2429d64dbp15eb58jsn62fe93b86a91",
  //     "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  //   },
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

  const [topTenCoins, setTopTenCoins] = useState([]);
  const [statistics, setStatistics] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios(
        "https://coinranking1.p.rapidapi.com/coins",
        options
      );
      console.log(response);
      const allCoins = response.data.data.coins;

      console.log(allCoins);

      const coinStats = response.data.data.stats;

      setStatistics(coinStats);
      // const jsonData = await response.json();
      //   console.log(jsonData);
      // const coinData = jsonData?.data?.coins;
      // console.log(coinData);
      //   setAllCoins(coinData);

      const topCoins = allCoins.slice(0, 10);
      //   console.log(topCoins);
      setTopTenCoins(topCoins);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="main-container">
      <Stats
        total={millify(statistics.cointotal)}
        total24hVolume={millify(statistics.total24hVolume)}
        totalCoins={millify(statistics.totalCoins)}
        totalExchanges={millify(statistics.totalExchanges)}
        totalMarketCap={millify(statistics.totalMarketCap)}
        totalMarkets={millify(statistics.totalMarkets)}
      />

      <div className="topCoins">
        {topTenCoins.map((coins) => {
          const {
            uuid,
            name,
            iconUrl,
            price,
            marketCap,
            rank,
            change,
            coinrankingUrl,
          } = coins;
          return (
            <div className="topTenCoins card" key={uuid}>
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

export default HomepageV2;
