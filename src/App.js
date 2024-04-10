import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {Outlet} from "react-router-dom"
import { DarkModeProvider } from './utils/DarkModeContext';

function App() {
  return (
 
    <DarkModeProvider>
    <div className="App">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
    </DarkModeProvider>
   
  );
}

export default App;
