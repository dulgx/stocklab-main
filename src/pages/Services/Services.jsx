import leftIcon from "./assets/left-icon.png";
import rightIcon from "./assets/right-icon.png";
import PageOne from "./page-1";
import image1 from "./assets/background-bull.png";

const Services = () => {
  return (
    <div className="flex flex-row items-center justify-center h-[85vh]">
      <img
        src={leftIcon}
        alt="left icon"
        className="left-right-icon bg-white p-1 rounded-full h-5"
      />
      <PageOne />
      <img
        src={rightIcon}
        alt="right icon"
        className="left-right-icon bg-white p-1 rounded-full"
      />
    </div>
  );
};

export default Services;
