
import ParticlesComponent from "./ParticlesComponent";

function App() {
  return (
    <div>
      <ParticlesComponent />
      <div id="content" style={{ position: "relative", zIndex: 2 }}>
        <h1>Hello World!</h1>
      </div>
    </div>
  );
}

export default App;
