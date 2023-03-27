import "./App.css";
import Analytics from "./Components/Analytics";
import Products from "./Components/Products";
import { Routes, Route } from "react-router-dom";
import Profiles from "./Components/Profiles";
import Header from "./Components/Header";

// import Dasbord from './Components/Dasbord';
// import Sidebar from './Components/Sidebar';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="header" element={<Header />}></Route>
        <Route path="/analytics" element={<Analytics />}></Route>
        <Route path="/profile" element={<Profiles />} />
        <Route path="/product" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
