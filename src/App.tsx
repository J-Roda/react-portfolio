import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import useScrollObserver from "./hooks/useScrollObserver";

function App() {
  useScrollObserver(".hidden-l");
  useScrollObserver(".hidden-r");
  useScrollObserver(".hidden-t");
  useScrollObserver(".hidden-skill");

  return (
    <>
      <Header />
      <Home />
      <About />
    </>
  );
}

export default App;
