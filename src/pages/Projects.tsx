import { Bubbles } from "../components/Bubbles";
import { MainContent } from "../components/MainContent";
import { NavBar } from "../components/NavBar";
import { ProjectComponent } from "../components/Projects";

export default function Projects() {
  return (
    <div className="h-full bg-black md:h-screen">
      <div className="flex flex-col h-full md:h-screen md:flex-row">
        <NavBar active="home" />
        <MainContent>
          <div className="mx-2 md:mr-[0px] mr-10">
            <h1 className="text-2xl font-bold">What i've done?</h1>
            <div className="">
              <p className="text-letterings-300">
                This was my best projects, check my github to check a more few
                of them.
              </p>
            </div>
            <div className="mt-4 md:flex md:flex-row">
              <ProjectComponent />
            </div>
          </div>
        </MainContent>
      </div>
      <Bubbles />
    </div>
  );
}
