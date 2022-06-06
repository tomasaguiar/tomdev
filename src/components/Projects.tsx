import { GoodthingsIcon, FollowUpIcon } from "./Icons";

export function ProjectComponent() {
  const ProjectList = [
    {
      name: "goodthings",
      description: "Social Media",
      link: "www.goodthings.app",
      image: <GoodthingsIcon />,
      role: "Founder & CEO",
      adquired: false,
      about: "Responsible for the fully developed of goodthings",
    },
    {
      name: "friends",
      description: "Social Media",
      link: "www.goodthings.app",
      image: <GoodthingsIcon />,
      role: "VP of Engineering",
      adquired: false,
      about: "Responsible for the fully developed of friends",
    },
    {
      name: "budgt",
      description: "Enterprise App",
      link: "www.goodthings.app",
      image: <GoodthingsIcon />,
      role: "Founder & CEO",
      adquired: false,
      about: "Responsible for the fully developed of budgt",
    },
  ];

  return (
    <>
      {Object.entries(ProjectList).map(([key, item]) => {
        console.log(key, item);
        return (
          <div className="w-full h-[280px] md:h-[350px] bg-ComponentsBackground-100 rounded-md mb-4 hover:bg-ComponentsBackground-200 transition-colors md:mr-4">
            <a href={item.link}>
              <div className="flex">
                <div className="w-20 h-10 mx-4 my-4">{item.image}</div>
                <div className="flex flex-col mt-6 ml-2">
                  <div className="flex flex-row justify-between">
                    <div>
                      <p className="text-letterings-400">{item.name}</p>
                    </div>
                    {item.adquired ? (
                      <div className="flex flex-row">
                        <p className="text-purple-400">Adquired</p>
                      </div>
                    ) : null}
                  </div>
                  <div>
                    <p className="text-letterings-300">{item.description}</p>
                  </div>
                </div>
              </div>
              <div className="mx-4">
                <div className="w-full h-[1px] bg-[#4b4b4b] mt-12" />
              </div>
              <div className="mx-4 mt-4">
                <h1 className="font-bold text-md">Role</h1>
                <p className="text-[#d9d9d9]">{item.role}</p>
              </div>
              <div className="mx-4 mt-4">
                <h1 className="font-bold text-md">What i made?</h1>
                <p className="text-[#d9d9d9]">{item.about}</p>
              </div>
            </a>
          </div>
        );
      })}
    </>
  );
}
