import { MdArrowRightAlt } from "react-icons/md";
import { useSwiper } from "swiper/react";
const NavButton = () => {
  const swiper = useSwiper();

  return (
    <div className="text-right px-10">
      <button onClick={() => swiper.slideNext()}>
        <MdArrowRightAlt className="text-6xl text-orange-400" />
      </button>
    </div>
  );
};

export default NavButton;
