import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
      </div>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        <small>
          <a
            href="https://github.com/feralsteph/dictionary-project"
            target="_blank"
            rel="norefeffer"
          >
            Open-source code
          </a>{" "}
          by Stephanie LaRue
        </small>
      </footer>
    </div>
  );
}

export default App;
