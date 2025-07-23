import React from "react";

const ProfessionalExp = ({ data }) => {
  const exp = data;
  return (
    <div className="py-10 mb-[4rem]">
      <h1 className="text-3xl font-serif font-thin py-6  ">{exp.title}</h1>
      {exp.experiences.map((item, index) => (
        <div
          className={` ${
           item.current ? "border-t-green-400  border-t-10" : "border-t-10 border-t-zinc-200"
          } p-10 shadow-xl  `}
        >
          <p className="font-semibold py-4" >{item.role}</p>
          <p className="text-sm font-serif" >{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProfessionalExp;
