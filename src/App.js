import Header from "./Components/navbar/Header";
import Routes from "./Routes/Routes";
import ScrollUpButton from "./Components/ScrollUpButton";

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes />
      </main>

      {/* SCROLL TO THE TOP */}
      <ScrollUpButton />
    </>
  );
}

export default App;
