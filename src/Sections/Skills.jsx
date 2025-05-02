import html from "../assets/html.svg"
import CSS from "../assets/CSS3.png"
import JS from "../assets/JS.png";
import TS from "../assets/TS.png";
import mongodb from "../assets/mongodb.svg";
import tailwind from "../assets/TailwindCSS.png"
import react from "../assets/react-logo.png"
import redux from "../assets/redux.png"
import node from "../assets/nodejs-logo.png"
import express from "../assets/express-logo.png"
const Skills = () => {
    return (
        <div className="py-10 mx-5 md:mx-auto">
            <h2 className="text-center text-white text-xl my-9 md:text-3xl font-bold" data-aos="fade-up" data-aos-duration="1000">My Tech Skill</h2>
            <h3 className="primary-color text-xl my-3 font-bold lg:text-3xl" data-aos="fade-up">
                Language_
            </h3>
            <div className="border border-gray-600 text-gray-400 flex justify-evenly h-auto md:h-[150px] place-items-center" data-aos="fade-up" data-aos-duration="1000">              
                <div className="flex flex-col items-center m-4 w-[40px] md:w-[100px]">
                    <img className="w-[40px] md:w-[100px]" src={html} alt="html" />
                    <p className="md:mt-2">HTML</p>
                </div>
                <div className="flex flex-col items-center m-4 w-[40px] md:w-[100px]">
                    <img className="w-[50px] md:w-[100px]" src={CSS} alt="CSS" />
                    <p className="md:mt-3">CSS</p>
                </div>
                <div className="flex flex-col items-center m-4 w-[40px] md:w-[100px]">
                    <img className="w-[40px] md:w-[100px]" src={JS} alt="JS" />
                    <p className="md:mt-2">Javascript</p>
                </div>
                <div className="flex flex-col items-center m-4 w-[40px] md:w-[100px]">
                    <img className="w-[40px] md:w-[100px]" src={TS} alt="JS" />
                    <p className="md:mt-2">TypeScript</p>
                </div>
                <div className="flex flex-col items-center m-4 w-[40px] md:w-[100px]">
                    <img className="w-[40px] md:w-[100px]" src={mongodb} alt="mongodb" />
                    <p className="md:mt-2">MongoDB</p>
                </div>
            </div>
            <h3 className="primary-color text-xl mt-6 mb-3 font-bold lg:text-3xl" data-aos="fade-up">
                Technology_
            </h3>
            <div className="border border-gray-600 text-gray-400 flex justify-evenly h-auto md:h-[150px] place-items-center" data-aos="fade-up" data-aos-duration="1000">              
                <div className="flex flex-col items-center m-4 w-[40px] md:w-[100px]">
                    <img className="w-[40px] md:w-[100px]" src={tailwind} alt="tailwind" />
                    <p className="md:mt-3">Tailwind</p>
                </div>
                <div className="flex flex-col items-center m-4 w-[40px] md:w-[100px]">
                    <img className="w-[50px] md:w-[100px]" src={react} alt="react" />
                    <p className="md:mt-2">React</p>
                </div>
                <div className="flex flex-col items-center m-4 w-[40px] md:w-[100px]">
                    <img className="w-[50px] md:w-[100px]" src={redux} alt="react" />
                    <p className="md:mt-2">Redux</p>
                </div>
                <div className="flex flex-col items-center m-4 w-[40px] md:w-[100px]">
                    <img className="w-[40px] md:w-[100px]" src={node} alt="JS" />
                    <p className="md:mt-2">Node</p>
                </div>
                <div className="flex flex-col items-center m-4 w-[40px] md:w-[100px]">
                    <img className="w-[40px] md:w-[100px] rounded-xl" src={express} alt="express" />
                    <p className="md:mt-2">Express</p>
                </div>
            </div>
        </div>
    );
};

export default Skills;