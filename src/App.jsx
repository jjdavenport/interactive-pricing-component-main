import Header from "./components/header";
import Footer from "./components/footer";
import Card from "./components/card";

function App() {
  return (
    <>
      <div className="flex flex-col h-full min-h-screen bg-veryPaleBlue gap-4 font-custom text-custom">
        <div className="flex flex-col flex-1 items-center bg-header bg-no-repeat ~sm/md:~p-2/8 font-semibold">
          <Header />
          <Card />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
