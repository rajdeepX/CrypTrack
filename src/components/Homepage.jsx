import React, { useEffect, useState } from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";

const Homepage = () => {
  const [topCoins, setTopCoins] = useState([]);
  const [allCoins, setAllCoins] = useState([]);

  // const { data, isFetching } = useGetCryptosQuery();

  const url = "https://coinranking1.p.rapidapi.com/coins";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "409003033amsh95405c2429d64dbp15eb58jsn62fe93b86a91",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    try {
      const response = await fetch(url, options);
      // console.log(response);
      const apiData = await response.json();
      const coin = apiData.data.coins;
      console.log(coin);
      setAllCoins(coin);

      const topTenCoins = coin.slice(0, 10);
      setTopCoins(topTenCoins);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // setCoins(data);
  // console.log(data);

  console.log(topCoins);

  return (
    <div>
      <h1>Homepage</h1>

      <section className="statistics">
        <div>Total Cryptocurrencies</div>
        <div>Total Exchanges</div>
        <div>Total Market Cap</div>
        <div>Total 24h Volume</div>
      </section>
      <section className="coins">
        <div>
          {topCoins.map((coins) => {
            const { uuid, name, iconUrl, price, marketCap } = coins;
            <div style={{ marginBottom: "2rem" }} key={uuid}>
              <img style={{ width: "50px" }} src={iconUrl} alt={name} />
              <h3>{name}</h3>
              <p>{price}</p>
              <p>{marketCap}</p>
            </div>;
          })}
        </div>
      </section>
    </div>
  );
};

export default Homepage;
