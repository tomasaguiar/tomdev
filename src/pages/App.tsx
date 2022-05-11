import { Bubbles } from "../components/Bubbles";
import { NavBar } from "../components/NavBar";
import { MainContent } from "../components/MainContent";

function App() {
  return (
    <div className="h-screen bg-black">
      <div className="flex flex-col h-screen md:flex-row">
        <NavBar active="home" />
        <MainContent>
          <div className="mt-4">
            <h1 className="text-2xl font-bold">Software is the future.</h1>
          </div>
        </MainContent>
      </div>
      <Bubbles />
    </div>
  );
}

export default App;
