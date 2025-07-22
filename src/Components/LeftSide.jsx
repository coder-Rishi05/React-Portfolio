import { Image } from "../Utils/data";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const LeftSide = ({ data }) => {
  return (
    <div className="h-full w-[35%] bg-zinc-900 fixed z-1 ">
      <div className="details flex  items-center justify-center flex-col py-8  gap-6">
        <div className="Image h-64 w-64 rounded-full overflow-hidden bg-green-400 ">
          <img src={Image} className="object-fit object-center" alt="" />
        </div>
        <h2 className="text-center font-medium font-[poppins] text-7xl text-yellow-300 ">
          {data.name}
        </h2>
        <h2 className="text-center font-bold text-zinc-300 font-[poppins] text-3xl">
          {data.role}
        </h2>
        <div className="mt-3">
          <h3 className=" font-semibold  font-[poppins] px-14 text-zinc-300 ">
            {data.education[0]}
          </h3>
          <h3 className=" font-semibold  font-[poppins] px-14 text-zinc-300 ">
            {data.education[1]}
          </h3>
        </div>
      </div>
      <div className="contact text-center ">
        <h2 className="text-3xl font-semibold text-white ">Contact Me</h2>
        {/*  */}
        <div className="icons text-3xl text-white flex items-center justify-center px-4 py-4 gap-4 ">
          <a className="" href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <IoIosMail />
          </a>
          <a href="#">
            <FaLinkedin />
          </a>
          <a href="#">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
