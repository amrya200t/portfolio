import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Routes from "./Routes/Routes";
import ScrollUpButton from "./Components/ScrollUpButton";

function App() {
  fetch("https://fair-tan-gosling-garb.cyclic.app/api/v1/skills", {
    headers: {
      Authorization: `Basic YXBpX3dob2FtaV9hbXI6Y3FYVmVZSHchVm5nNkcx`,
    },
    method: "GET",
  })
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

  return (
    <>
      {/* NAVIGATION BAR */}
      <Header />

      {/* MAIN CONTENT => A PAGE */}
      <Routes />

      {/* FOOTER */}
      <Footer />

      {/* SCROLL TO THE TOP */}
      <ScrollUpButton />
    </>
  );
}

export default App;
