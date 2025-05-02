// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { useEffect, useState } from "react";
import NavButton from "../Components/NavButton";

export default function MyProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/public/projects.json") // Make sure this path matches the public folder
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  const ImageCard = "grid grid-cols-2 gap-1 w-1/3";
  const heroSlider = "flex flex-col lg:flex-row items-center gap-9";
  const details =
    "text-white text-center px-3 md:px-6 lg:px-9 md:text-left w-2/3 space-y-3";
  return (
    <div>
      <div className="my-6 space-y-6" data-aos="fade-up"
        data-aos-duration="1000">
        <h2 className="text-center text-white text-xl md:text-3xl font-bold">
         My Projects
        </h2>
        <p className="text-center text-white pb-6">
          There`s my some projects that I`ve made. If you`ve time, you can check
          out.
        </p>
      </div>

      <Swiper className="my-6">
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className={heroSlider}>
              <div className={ImageCard}>
                <a
                  href={project.images[0]}
                  target="_blank"
                  className="col-span-2"
                >
                  <img
                    className="md:h-[250px]"
                    src={project.images[0]}
                    alt=""
                    width={500}
                    height={100}
                  />
                </a>
                <a
                  href={project.images[1]}
                  target="_blank"
                  className="col-span-1"
                >
                  <img
                    src={project.images[1]}
                    alt=""
                    width={250}
                    height={100}
                  />
                </a>
                <a
                  href={project.images[2]}
                  target="_blank"
                  className="col-span-1"
                >
                  <img
                    src={project.images[2]}
                    alt=""
                    width={250}
                    height={100}
                  />
                </a>
                {/* {project.images.map((image, index) => (
                  <img
                    key={index}
                    className="h-[300px] w-[450px]"
                    src={image}
                    alt=""
                    width={188}
                    height={25}
                  />
                ))} */}
              </div>
              <div className={details}>
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p>{project.description}</p>
                <h3 className="text-xl font-semibold">Features</h3>
                <ul className="md:px-5">
                  {project.features.map((item, index) => (
                    <li key={index} className="md:list-disc">
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-6 py-3">
                  <button className="px-6 py-2 bg-gradient-to-br from-orange-400 to-pink-500 text-white text-xl font-bold rounded-xl">
                    <a href={project.github} target="_blank">
                      Code
                    </a>
                  </button>
                  <button className="px-6 py-2 bg-transparent border hover:bg-gradient-to-br hover:from-orange-400 hover:to-pink-500 text-white text-lg font-bold rounded-xl">
                    <a href={project.live} target="_blank">
                      Live
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <NavButton />
      </Swiper>
    </div>
  );
}
