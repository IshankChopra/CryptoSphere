import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Exchanges from "./components/Exchanges";
import CoinDetails from "./components/CoinDetails";
import Home from "./components/Home";
import Coins from "./components/Coins";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/coins" element={<Coins />}></Route>
          <Route path="/exchanges" element={<Exchanges />}></Route>

          <Route path="/coin/:id" element={<CoinDetails />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
