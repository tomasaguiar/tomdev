import { Bubbles } from "../components/Bubbles";
import { MainContent } from "../components/MainContent";
import { NavBar } from "../components/NavBar";

export default function About() {
  return (
    <div className="h-screen bg-black">
      <div className="flex flex-col h-screen md:flex-row">
        <NavBar active="home" />
        <MainContent>
          <div className="mx-2 md:mr-[0px] mr-10">
            <h1 className="text-2xl font-bold">Who am I?</h1>
            <div className="">
              <p className="text-letterings-300">
                A technology enthusiast, software developer. With 3 years of
                experience, I have worked with industry leaders and developed
                solutions to improve people's daily lives. Passionate about
                creating software and observe its effect on improving something
                or someone in the world.
              </p>
              <p className="mt-4 text-letterings-300">
                To discover my background and projects, visit my GitHub page
                where do I introduce some of my software.
              </p>
            </div>
          </div>
        </MainContent>
      </div>
      <Bubbles />
    </div>
  );
}
