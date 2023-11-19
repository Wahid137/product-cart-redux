import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Navbar />
      <main className="py-16">
        <Home />
      </main>
    </div>
  );
}

export default App;
