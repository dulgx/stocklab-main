import heroPerson from "../assets/hero-person.png";
import Huvitsaatai from "../assets/frame-1.svg";
import MarketCard from "./MarketCard";
import FooterPartnersComponent from "./FooterPartnersComponent";

const HeroComponent = () => {
  return (
    <>
      <div className="flex flex-col justify-between">
        <section className="hero-section flex justify-center">
          <div className="hero-text lg:grid lg:place-items-center">
            <img
              src={Huvitsaatai}
              alt="huvitsaatai"
              className=" w-3/5 sm:w-3/5 lg:w-4/5"
            />
            <p className="sm:text-xs sm:w-60 xl:text-center w-96">
              Та гар утсаараа үнэт цаасны дансаа нээлгэж хувьцаатай болоорой.
            </p>
            <button>Дэлгэрэнгүй</button>
          </div>
          <img
            src={heroPerson}
            alt="hero-person"
            className="sm:w-1/2 lg:w-2/5  w-1/3"
          />
        </section>
        <MarketCard />
      </div>
      <FooterPartnersComponent />
    </>
  );
};
export default HeroComponent;
