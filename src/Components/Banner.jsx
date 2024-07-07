import { TypeAnimation } from "react-type-animation";
import myPicture from "../assets/sangram.jpg"
const Banner = () => {
    return (
        <div className="flex flex-col-reverse gap-5 md:flex-row md:h-[70vh] md:mx-auto py-8 bg-black">
            <div className="text-white w-full md:w-2/3 px-5 m-auto">
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-extrabold">
                    <span className="primary-color">
                        I`m a
                    </span><br />
                    <TypeAnimation
                        sequence={[
                            'Web Developer',
                            1000,
                            'Frontend Developer',
                            1000,
                            'React Developer',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h2>
                <p className="my-6 text-lg md:text-xl">
                    My name is Sangram Bishwas. I am a web developer of Bangladesh. I have crazy vision about software development and devOps.
                </p>
                <div className="my-8 flex gap-5">
                    <button className="px-6 py-3 bg-gradient-to-br from-orange-400 to-pink-500 text-white text-xl font-bold rounded-xl">
                        <a href="https://drive.google.com/file/d/11zktNY6DoTo7Y-7kba0HFs13A1QmJ1zx/view" target="_blank">Resume</a>
                    </button>
                    <button className="px-6 py-3 bg-transparent border hover:bg-gradient-to-br from-orange-400 to-pink-500 text-white text-xl font-bold rounded-xl">
                        <a href="mailto:info.sangram2003@gmail.com" target="_blank">Contact</a>
                    </button>
                </div>
            </div>
            <div className="w-auto md:w-1/3 m-auto md:h-auto">
                <img className="w-[300px] md:w-[400px] rounded-full" src={myPicture} alt="sangram" />
            </div>
        </div>
    );
};

export default Banner;