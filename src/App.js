import "./styles.css";

const GundamHeader = () => {
  return <h3>건담</h3>;
};

const GundamTitle = () => {
  return <h2>건담 DB</h2>;
};

export default function App() {
  return (
    <div className="App">
      <GundamTitle />
      <GundamHeader />
    </div>
  );
}
