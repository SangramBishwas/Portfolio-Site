import { AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";
import { MdCall, MdFacebook } from "react-icons/md";

const Conctact = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-center text-white text-xl my-5 md:text-3xl font-bold">
        Contact Me
      </h2>
      <p className="text-center text-white">
        There are several ways to contact with me. If you`d like to contact,
        please click and contact with me
      </p>
      <div className="md:mx-auto my-9 grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="space-y-3">
          <div className="bg-[#1a1a1a] rounded-full w-[54px] p-3 mx-auto">
            <AiOutlineMail className="text-3xl text-white" />
          </div>
          <div className="text-center">
            <a
              className="hover:underline cursor-pointer text-blue-500 text-sm"
              href="mailto:info.sangram2003@gmail.com"
              target="_blank"
            >
              info.sangram2003@gmail.com
            </a>
          </div>
        </div>
        <div className="space-y-3">
          <div className="bg-[#1a1a1a] rounded-full w-[54px] p-3 mx-auto">
            <MdCall className="text-3xl text-white" />
          </div>
          <div className="text-center">
            <a
              className="hover:underline cursor-pointer text-blue-500 text-sm"
              target="_blank"
            >
              +8801704235815
            </a>
          </div>
        </div>
        <div className="space-y-3">
          <div className="bg-[#1a1a1a] rounded-full w-[54px] p-3 mx-auto">
            <AiOutlineLinkedin className="text-3xl text-white" />
          </div>
          <div className="text-center">
            <a
              className="hover:underline cursor-pointer text-blue-500 text-xs md:text-sm"
              href="https://www.linkedin.com/in/sangram-bishwas/"
              target="_blank"
            >
              linkedin.com/in/sangram-bishwas
            </a>
          </div>
        </div>
        <div className="space-y-3">
          <div className="bg-[#1a1a1a] rounded-full w-[54px] p-3 mx-auto">
            <MdFacebook className="text-3xl text-white" />
          </div>
          <div className="text-center">
            <a
              className="hover:underline cursor-pointer text-blue-500 text-xs md:text-sm"
              href="https://www.facebook.com/sangram.bishwas.1"
              target="_blank"
            >
              facebook.com/sangram.bishwas.1
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conctact;
