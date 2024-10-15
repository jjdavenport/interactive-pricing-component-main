import Header from "./components/header";
import Footer from "./components/footer";
import Card from "./components/card";

function App() {
  return (
    <>
      <div className="flex flex-col h-full min-h-screen bg-veryPaleBlue md:gap-0 gap-10 font-custom text-custom">
        <div className="flex flex-col md:justify-center flex-1 md:gap-10 items-center bg-header bg-half bg-no-repeat ~sm/md:~p-2/4 font-semibold ">
          <Header />
          <Card />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
