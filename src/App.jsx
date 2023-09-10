import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import "./App.css"
import Company from "./Components/Companies/company";
import Residencies from "./Components/Residencies/residencies";
import Value from "./Components/Value/value";
import Contact from "./Components/Contacts/contact";
import GetStarted from "./Components/GetStarted/getStarted";
import Footer from "./Components/Footer/footer";

function App() {
  return (
    <div className="App">
    <div>
      <div className="white-grad"/>
      <Header />
      <Hero />
      <div className="yellow-grad"/>
    </div>
     <Company/>
     <Residencies/>
     <Value />
     <Contact/>
     <GetStarted/>
     <Footer/>
    </div>
  );
}

export default App;
