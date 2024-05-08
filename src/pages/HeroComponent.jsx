import heroPerson from "../assets/hero-person.png";
import Huvitsaatai from "../assets/frame-1.svg";
import MarketCard from "./MarketCard";
import FooterPartnersComponent from "./FooterPartnersComponent";

const HeroComponent = () => {
  return (
    <>
      <div className="  flex flex-col justify-evenly">
        <section className="hero-section">
          <div className="hero-text">
            <img src={Huvitsaatai} alt="huvitsaatai" id="Huvitsaatai" />
            <p>
              Та гар утсаараа үнэт цаасны дансаа нээлгэж хувьцаатай болоорой.
            </p>
            <button>Дэлгэрэнгүй</button>
          </div>
          <img src={heroPerson} alt="hero-person" id="HeroPerson" />
        </section>
        <MarketCard />
      </div>
      <FooterPartnersComponent />
    </>
  );
};
export default HeroComponent;
