import { RustLogo, TypescriptLogo, ReactLogo } from "./Icons";

export function SkillComponent() {
  const SkillSet = [
    {
      name: "TypeScript",
      usecase: "Frontend",
      icon: <TypescriptLogo />,
    },
    {
      name: "React",
      usecase: "Web/Mobile Apps",
      icon: <ReactLogo />,
    },
    {
      name: "Rust",
      usecase: "Build hyper fast apps",
      icon: <RustLogo />,
    },
  ];

  return (
    <>
      {Object.entries(SkillSet).map(([key, value]) => {
        console.log(key, value);
        return (
          <div className="flex w-full h-[80px] bg-ComponentsBackground-100 rounded-md mb-4 hover:bg-ComponentsBackground-200 transition-colors">
            <div className="flex">
              <div className="w-20 h-10">{value.icon}</div>
              <div className="flex flex-col justify-center ml-4">
                <div>
                  <p className="text-letterings-400">{value.name}</p>
                </div>
                <div>
                  <p className="text-letterings-300">{value.usecase}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
