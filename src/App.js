
import './App.css';
import Analytics from './Components/Analytics';
import Header from './Components/Header';
import Products from './Components/Products';
import Sidebar from './Components/Sidebar';
import { BrowserRouter } from "react-router-dom"



function App() {
  return (
    <>
      <Sidebar></Sidebar>
      <Analytics></Analytics>
      <Products></Products>
    </>
  );
}

export default App;
