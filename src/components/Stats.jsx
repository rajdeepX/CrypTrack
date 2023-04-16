import React from "react";

const Stats = (props) => {
  return (
    <div className="stats-container">
      <div className="stats">
        <h3>Total Coins</h3>
        <p>{props.totalCoins}</p>
      </div>
      <div className="stats">
        <h3>Total 24h Volume</h3>
        <p>{props.total24hVolume}</p>
      </div>
      <div className="stats">
        <h3>Total Exchanges</h3>
        <p>{props.totalExchanges}</p>
      </div>
      <div className="stats">
        <h3>Total Marketcap</h3>
        <p>{props.totalMarketCap}</p>
      </div>
      <div className="stats">
        <h3>Total Markets</h3>
        <p>{props.totalMarkets}</p>
      </div>
    </div>
  );
};

export default Stats;
