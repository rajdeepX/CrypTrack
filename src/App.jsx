import { Link, Route, Routes } from "react-router-dom";
import Cryptocurrencies from "./components/Cryptocurrencies";
import HomepageV2 from "./components/HomepageV2";
import Navbar from "./components/Navbar";
import Coins from "./components/Coins";
import CoinDetail from "./components/CoinDataApi";
import "./App.css";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomepageV2 />} />
        <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />} />
        <Route exact path="/coins" element={<Coins />} />
        <Route exact path="/coins/:coinId" element={<CoinDetail />} />
        <Route exact path="/CoinDetails" element={<CoinDetail />} />
      </Routes>
    </div>
  );
}

export default App;
