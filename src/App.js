import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StoneEngraving from "./components/StoneEngraving";
import TopEngravings from "./components/TopEngravings";
import Builds from "./components/Builds";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/stone-engravings" element={<StoneEngraving />} />
            <Route path="/top-engravings" element={<TopEngravings />} />
            <Route path="/builds" element={<Builds />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
