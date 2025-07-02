import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import useScrollObserver from "./hooks/useScrollObserver";

function App() {
  useScrollObserver(".hidden-l-transition");
  useScrollObserver(".hidden-r-transition");
  useScrollObserver(".hidden-t-transition");

  return (
    <>
      <Header />
      <Home />
      <About />
    </>
  );
}

export default App;
