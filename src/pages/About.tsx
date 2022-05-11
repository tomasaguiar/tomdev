import { Bubbles } from "../components/Bubbles";
import { MainContent } from "../components/MainContent";
import { NavBar } from "../components/NavBar";

export default function About() {
  return (
    <div className="h-screen bg-black">
      <div className="flex flex-col h-screen md:flex-row">
        <NavBar active="home" />
        <MainContent>
          <div className="mt-4">
            <h1 className="text-2xl font-bold">Who am I?</h1>
            <div className="">
              <p className="text-letterings-300">Basic description about me.</p>
            </div>
          </div>
        </MainContent>
      </div>
      <Bubbles />
    </div>
  );
}
