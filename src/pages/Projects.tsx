import { Bubbles } from "../components/Bubbles";
import { MainContent } from "../components/MainContent";
import { NavBar } from "../components/NavBar";

export default function Projects() {
  return (
    <div className="h-screen bg-black">
      <div className="flex flex-col h-screen md:flex-row">
        <NavBar active="home" />
        <MainContent>
          <div className="mt-4">
            <h1 className="text-2xl font-bold">What i've done?</h1>
            <div className="">
              <p className="text-letterings-300">This is my projects</p>
            </div>
          </div>
        </MainContent>
      </div>
      <Bubbles />
    </div>
  );
}
