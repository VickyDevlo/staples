import "./App.css";
import MenuList from "./Components/Navbar/MenuList";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Section from "./Components/Section/Section";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <MenuList />
      <Banner />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
