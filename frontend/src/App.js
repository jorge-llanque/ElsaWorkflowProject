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
import {BooksContextProvider} from './context/BooksContext'
import {UserContextProvider} from './context/UserContext'

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <UserContextProvider>
      <BooksContextProvider>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/inventory" element={<Inventory/>}/>
        </Routes>
      </BooksContextProvider>
    </UserContextProvider>
  </BrowserRouter>
  );
}

export default App;
