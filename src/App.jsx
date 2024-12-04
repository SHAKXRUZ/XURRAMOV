import "./App.css";
import File from "./Ol,Mat.,Xurramov Sh.R.,1-qism.pdf";
function App() {
  return (
    <div className="container">
      <h2>SH.R.Xurramov</h2>
      <a href={File} download>
        <button className="download-button">
          <span className="button-text">PDF yuklash</span>
          <span className="arrow">→</span>
        </button>
      </a>
    </div>
  );
}

export default App;
