import heroPerson from "../assets/hero-person.png";
import Huvitsaatai from "../assets/frame-1.svg";
import MarketCard from "./MarketCard";
import FooterPartnersComponent from "./FooterPartnersComponent";

const HeroComponent = () => {
  return (
    <>
      <div className="flex flex-col justify-evenly h-svh sm:h-5/6 ">
        <section className="hero-section flex justify-center">
          <div className="hero-text lg:grid lg:place-items-center m-8">
            <img
              src={Huvitsaatai}
              alt="huvitsaatai"
              className="w-11/12 sm:w-11/12 lg:w-4/5 xl:w-9/12"
            />
            <p className="sm:text-xs sm:w-60 lg:text-center w-96">
              Та гар утсаараа үнэт цаасны дансаа нээлгэж хувьцаатай болоорой.
            </p>
            <button>Дэлгэрэнгүй</button>
          </div>
          <img
            src={heroPerson}
            alt="hero-person"
            className="sm:w-4/5 lg:w-2/5 xl:w-2/5 w-[550px]"
          />
        </section>
        <MarketCard />
      </div>
      <FooterPartnersComponent />
    </>
  );
};
export default HeroComponent;
