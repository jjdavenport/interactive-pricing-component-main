import Header from "./components/header";
import Footer from "./components/footer";
import Card from "./components/card";

function App() {
  return (
    <>
      <div className="flex flex-col h-full min-h-screen bg-circles bg-no-repeat bg-top font-custom">
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
