import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.less';
import Home from './pages/Home';
import Login from "./pages/Login";
import Register from './pages/Register';
import Inventory from './pages/Inventory'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/inventory" element={<Inventory/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
