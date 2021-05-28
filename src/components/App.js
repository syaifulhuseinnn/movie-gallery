import Header from "./Header";
import Hero from "./Hero";
import "../styles/_base.css";
import Movies from "./Movies";

function App() {
  return (
    <div className="container-fluid p-0">
      <Hero />
      <main>
        <Movies />
      </main>
    </div>
  );
}

export default App;
