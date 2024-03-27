import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact.';
import {Outlet} from "react-router-dom"
function App() {
  return (
 
    <>
      <Header/>
      <Outlet/>
      {/* <Body/> */}
      {/* <About/> */}
      {/* <Contact/> */}
    <Footer/>
    </>
    
   
  );
}

export default App;
