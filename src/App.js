import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import Portifolio from "./components/Portifolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Portifolio/>
      <Experience/>
      <Contact/>

      <SocialLinks/>  
    </div>
  );
}

export default App;
