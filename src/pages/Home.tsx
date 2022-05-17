import { Bubbles } from "../components/Bubbles";
import { MainContent } from "../components/MainContent";
import { NavBar } from "../components/NavBar";

export default function Home() {
  return (
    <div className="h-screen bg-black">
      <div className="flex flex-col h-screen md:flex-row">
        <NavBar active="home" />
        <MainContent>
          <div className="mx-2 md:mr-[0px] mr-10">
            <h1 className="text-2xl font-bold">Who am I?</h1>
            <div className="">
              <p className="text-letterings-300">
                I'm a full-stack software developer based in the PT.
              </p>
              <p className="mt-4 text-letterings-300">
                I design and build products with a high-end quality and
                reliability.
                <br />
                Currently building{" "}
                <span className="font-bold ">goodthings</span>, the social media
                we deserve.
              </p>
            </div>
          </div>
        </MainContent>
      </div>
      <Bubbles />
    </div>
  );
}
