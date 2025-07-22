import { useState } from "react";
import { skills } from "../Utils/data";

const RightSide = ({ data }) => {
  const [softSkills, setSoftSkills] = useState(true);

  console.log(skills.soft[1].icon);
  return (
    <div className="grow-full p-16 sm:basis-2/3 w-full h-[200vh] ml-auto">
      <h2 className="text-2xl font-light uppercase font-serif ">
        {data.title}
      </h2>
      <div className="about py-10 ">
        {data.body.map((e, i) => (
          <p key={i} className="py-2 font-md">
            {e}
          </p>
        ))}
      </div>

      <div className="soft-skills  ">
        <div className="flex justify-between">
          <h1 className="text-[20px] hover:bg-black transition-all duration-300 ease-in-out hover:text-amber-300 cursor-pointer font-serif tracking-wider w-1/2 uppercase bg-yellow-300 p-4 ">
            Soft Skills
          </h1>
          <h1 className="text-[20px] hover:bg-black transition-all duration-300 ease-in-out hover:text-amber-300 cursor-pointer font-serif tracking-wider w-1/2 uppercase text-end bg-zinc-200 p-4 ">
            hard Skills
          </h1>
        </div>
        
        <div className="data flex mt-4 flex-wrap">
          {skills.soft.map((item, data) => (
            <div key={data} className="soft flex py-2 mx-2  ">
              <p className="px-8 rounded font-serif bg-emerald-100  py-4">
                {item.icon} {item.text}
              </p>
            </div>
          ))}

          {skills.hard.map((item, data) => (
            <div key={data} className="soft flex py-2 mx-2  ">
              <p className="px-8 rounded font-serif bg-emerald-100  py-4">
                {item.icon} {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSide;
