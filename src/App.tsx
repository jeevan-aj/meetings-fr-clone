import Demo from "./components/Demo";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TheModal from "./components/TheModal";


function App() {

  return (
    <>
    <div className="h-[400vh] bg-black">
    <Navbar/>
    <Header/>
    <TheModal/>
    <Demo/>
    </div>
    
    </>
  );
}

export default App;
