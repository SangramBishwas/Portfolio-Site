import project1 from "../assets/volunteer-vista.jpg";
import project2 from "../assets/gold-gym-demo.jpg";
import project3 from "../assets/crafthahven-homepage.jpg";
const Project = () => {
    return (
        <div className="mx-auto py-10 bg-black" id="work">
            <h2 className="text-center text-white text-xl my-5 md:text-3xl font-bold lg:text-4xl" data-aos="fade-up" data-aos-duration="1000">Projects</h2>
            <p className="text-center text-white" data-aos="fade-up" data-aos-duration="1000">There`s my some projects that I`ve made. If you`ve time, you can check out.</p>
            <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" data-aos="fade-up" data-aos-duration="1000">
                <div className="col-span-1 transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center h-[300px] bg-cover relative">
                    <img className="h-[300px] w-[400px]" src={project1} alt="volunteer-vista" />
                    <div className="absolute opacity-0 group-hover:opacity-90 bg-gray-400/70 inset-0 flex flex-col justify-center items-center w-[400px] mx-auto">
                        <span className="text-2xl lg:text-3xl font-bold tracking-wider">Volunteer Vista</span>
                        <div className="flex gap-3 pt-8 text-center">
                            <a href="https://assignment-11-7da79.web.app" target="_blank">
                                <button className="px-4 py-2 bg-white text-black font-bold rounded-xl">Live</button>
                            </a>
                            <a href="https://github.com/SangramBishwas/volunteer-vista-client" target="_blank">
                                <button className="px-4 py-2 bg-transparent hover:bg-white border font-bold rounded-xl">Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center h-[300px] bg-cover relative">
                    <img className="h-[300px] w-[400px]" src={project2} alt="volunteer-vista" />
                    <div className="absolute opacity-0 group-hover:opacity-90 bg-gray-400/70 inset-0 flex flex-col justify-center items-center overflow-hidden w-[400px] mx-auto">
                        <span className="text-2xl lg:text-3xl font-bold tracking-wider">Gold GYM</span>
                        <div className="flex gap-3 pt-8 text-center">
                            <a href="https://gold-gym-3132d.web.app" target="_blank">
                                <button className="px-4 py-2 bg-white text-black font-bold rounded-xl">Live</button>
                            </a>
                            <a href="https://github.com/SangramBishwas/gold-gym-client" target="_blank">
                                <button className="px-4 py-2 bg-transparent hover:bg-white border font-bold rounded-xl">Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center h-[300px] bg-cover relative">
                    <img className="h-[300px] w-[400px]" src={project3} alt="volunteer-vista" />
                    <div className="absolute opacity-0 group-hover:opacity-90 bg-gray-400/70 inset-0 flex flex-col justify-center items-center overflow-hidden w-[400px] mx-auto">
                        <span className="text-2xl lg:text-3xl font-bold tracking-wider">Craft Haven</span>
                        <div className="flex gap-3 pt-8 text-center">
                            <a href="https://guileless-paletas-0c0aff.netlify.app" target="_blank">
                                <button className="px-4 py-2 bg-white text-black font-bold rounded-xl">Live</button>
                            </a>
                            <a href="https://github.com/SangramBishwas/craft-haven-client" target="_blank">
                                <button className="px-4 py-2 bg-transparent hover:bg-white border font-bold rounded-xl">Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;