import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes, 
  Route,} from "react-router-dom";
import Inicio from './Pages/Inicio';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Main from './Components/Main';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
     <Routes>
       <Route path="/" element={<Main />} />
   
     </Routes>
     <Footer/>
   
 </BrowserRouter>
  );
}

export default App;
