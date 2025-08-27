import MatrixRain from "./MatrixRain";

function App() {
  return (
    <div>
      {/* Emoji Rain 🌈😂🔥💀 */}
      <MatrixRain mode="emoji" />

      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-green-400">
        <h1 className="text-4xl font-mono drop-shadow-[0_0_10px_#0f0]">
          Welcome to the Matrix
        </h1>
      </div>
    </div>
  );
}

export default App;
