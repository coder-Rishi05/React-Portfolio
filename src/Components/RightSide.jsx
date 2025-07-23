import { useState } from "react";
import { skills } from "../Utils/data";
import Skills from "./Skills";
import { professionalData } from '../Utils/data'
import ProfessionalExp from "./ProfessionalExp";

const RightSide = ({ data }) => {
  const [softSkills, setSoftSkills] = useState(true);

  const handleSoftskilks = () => {
    setSoftSkills(!softSkills);
  };

  return (
    <div className="grow-full p-16 sm:basis-2/3 w-full  ml-auto">
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

      {/* <Skills /> */}

      <div className="soft-skills  ">
        <div className="flex justify-between ">
          <h1
            onClick={handleSoftskilks}
            className="text-[20px] hover:bg-black transition-all duration-300 ease-in-out hover:text-amber-300 cursor-pointer font-serif tracking-wider w-1/2 uppercase bg-yellow-300 p-4 "
          >
            Soft Skills
          </h1>
          <h1
            onClick={handleSoftskilks}
            className="text-[20px] hover:bg-black transition-all duration-300 ease-in-out hover:text-amber-300 cursor-pointer font-serif tracking-wider w-1/2 uppercase text-end bg-zinc-200 p-4 "
          >
            hard Skills
          </h1>
        </div>

        <div className="data flex mt-4 flex-wrap">

          {softSkills
            ? skills.soft.map((item, index) => (
                <div key={index} className="soft flex py-2 mx-2  ">
                  <p className="px-8 rounded font-serif bg-emerald-100  py-4">
                    {item.icon} {item.text}
                  </p>
                </div>
              ))
            : skills.hard.map((item, index) => (
                <div key={index}  className="soft flex py-2 mx-2  ">
                  <p className="px-8 rounded text-left font-serif bg-emerald-100  py-4">
                    {item.icon} {item.text}
                  </p>
                </div>
              ))}
        </div>
      </div>
      <ProfessionalExp data={professionalData}  />
    </div>
  );
};

export default RightSide;
