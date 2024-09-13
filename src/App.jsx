import Header from "./components/header";
import Footer from "./components/footer";
import Card from "./components/card";
import data from "./components/assets/data.json";

function App() {
  return (
    <>
      <Header data={data} />
      <Card data={data} />
      <Footer />
    </>
  );
}

export default App;
