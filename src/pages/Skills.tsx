import { Bubbles } from "../components/Bubbles";
import { MainContent } from "../components/MainContent";
import { NavBar } from "../components/NavBar";
import { SkillComponent } from "../components/Skills";

export default function Skills() {
  return (
    <div className="h-screen bg-black">
      <div className="flex flex-col h-screen md:flex-row">
        <NavBar active="skills" />
        <MainContent>
          <div className="mx-2 md:mr-[0px] mr-10">
            <h1 className="text-2xl font-bold">How i make the things real?</h1>
            <div className="mt-4">
              <p className="text-letterings-300">
                My focus was always learn the most productive and bleeding edge
                technologies. You can find a list of my most-used technologies
                below.
              </p>
            </div>
            <div className="mt-4 ">
              <SkillComponent />
            </div>
          </div>
        </MainContent>
      </div>
      <Bubbles />
    </div>
  );
}
