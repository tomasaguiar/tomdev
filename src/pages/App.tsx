import { Bubbles } from "../components/Bubbles";
import { NavBar } from "../components/NavBar";
import { MainContent } from "../components/MainContent";

function App() {
  return (
    <div className="h-screen bg-black">
      <div className="flex flex-row h-screen">
        <NavBar />
        <MainContent>
          <div></div>
        </MainContent>
      </div>
      <Bubbles />
    </div>
  );
}

export default App;
