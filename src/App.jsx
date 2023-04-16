import { Route, Routes } from "react-router-dom";
import Cryptocurrencies from "./pages/Cryptocurrencies";
import HomepageV2 from "./pages/HomepageV2";
import Navbar from "./components/Navbar";
import CoinDetail from "./components/CoinDataApi";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomepageV2 />} />
        <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />} />
        <Route exact path="/coins/:coinId" element={<CoinDetail />} />
      </Routes>
    </div>
  );
}

export default App;
