import heroPerson from '../assets/hero-person.png';
import Huvitsaatai from '../assets/frame-1.svg';
import MarketCard from './MarketCard';

const HeroComponent = () => {
    return (
        <>
            <section className='hero-section'>
                <div className='hero-text'>
                    <img src={Huvitsaatai} alt="huvitsaatai" id='Huvitsaatai' />
                    <p>Та гар утсаараа үнэт цаасны дансаа нээлгэж хувьцаатай болоорой.</p>
                    <button>Дэлгэрэнгүй</button>
                </div>
                <div className='hero-image'>
                    <img src={heroPerson} alt="hero-person" id='HeroPerson' />
                </div>
            </section>
            <MarketCard />
        </>
    )
}
export default HeroComponent;