import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="Title" home="Home" />
      <div className="container">
        <TextForm title = "Enter the text to analyse below:" />
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
