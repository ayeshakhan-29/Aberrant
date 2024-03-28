import Hero from "./Components/Sections/Hero";
import Navbar from "./Components/Navigation/Navbar";
import Footer from "./Components/Navigation/Footer";

function App() {
  return (
    <div className="max-w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
