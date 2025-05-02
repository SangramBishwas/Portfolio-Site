import sangram from "../assets/sangram.png"
const About = () => {
    return (
        <div className="my-10">
            <h2 className="w-full sm:mx-auto text-center md:text-left primary-color text-2xl my-10 md:text-3xl font-bold lg:text-4xl">About Me</h2>
            <div className="flex flex-col gap-10 md:flex-row md:items-center mx-auto">
                <div className="w-full md:w-1/3" data-aos="fade-right" data-aos-duration="1000">
                    <img className="mx-auto w-[300px] md:w-[400px] rounded-xl" src={sangram} alt="sangram" />
                </div>
                <div className="w-full md:w-2/3 text-white px-5" data-aos="fade-up" data-aos-duration="1000">
                    I`m Sangram Bishwas, a rising mern stack developer with a hunger for learning and a passion for creating charming digital experiences.

                    I really love working in fast-paced environments where teamwork and creativity are key. From mastering HTML, CSS, JavaScript and Typescript to exploring the latest frameworks like React, Redux(sate management) and Node js with Express.js and moongoose for logical queries. I`m constantly striving to grow my skills and expand my thinking ability to stay ahead of the curve.

                    So, if you`re looking for a passionate junior developer who`s hungry to learn, grow, and make a difference, look no further! I`m ready to roll up my sleeves, dive into new challenges, and help bring your digital vision to life. Let`s connect and build something awesome together!
                </div>
            </div>
        </div>

    );
};

export default About;