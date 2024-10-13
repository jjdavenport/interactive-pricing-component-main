import Header from "./components/header";
import Footer from "./components/footer";
import Card from "./components/card";
import data from "./components/assets/data.json";

function App() {
  return (
    <>
      <div className="flex flex-col h-full min-h-screen">
        <div className="flex flex-col flex-1 items-center">
          <Header />
          <Card />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
