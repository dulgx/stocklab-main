import backgroundLayer from '../assets/Layer-hamtragch.png';
import frameRight from '../assets/Frame2-hamtragch.png';
import frameLeft from '../assets/Frame1-hamtragch.png';
import sendlyLogo from '../assets/sendlyLogodark.png';
import hipayLogo from '../assets/hipay-logo.png';
import mutsaehLogo from '../assets/mutsaeh-logo.png';
import unettsaastuvLogo from '../assets/unet-tsaas-tuv.png';
import stocklabLogo from '../assets/stocklab-logo.png';
import sanzohitsuulahLogo from '../assets/san-zohitsuulah-logo.png';
import lineHamtragch from '../assets/Line-hamtragch.svg';
import mglStockExchange from '../assets/mgl-stock-exchange.png';
import mobileIcon from '../assets/mobile-icon.svg';
import emailIcon from '../assets/mail-icon.svg';



const FooterPartnersComponent = () => {
    return (
        <div className='partners-footer'>
            <div className='partners-container'>
                <div id='HamtragchBaiguullaga'>
                    <span >ХАМТРАГЧ БАЙГУУЛЛАГУУД </span>
                    <img src={lineHamtragch} alt="line" />
                </div>

                <div className='partners-logo-container'>
                    <div className="slide-container">
                        <img src={unettsaastuvLogo} alt="Unet tsaas tuv logo" className='partners-logo ' />
                        <img src={hipayLogo} alt="hipay logo" className='partners-logo ' />
                        <img src={mutsaehLogo} alt="mutsaeh logo" className='partners-logo' id='biglogo' />
                        <img src={unettsaastuvLogo} alt="Unet tsaas tuv logo" className='partners-logo ' />
                        <img src={sendlyLogo} alt="sendly logo" className='partners-logo ' />
                        <img src={sanzohitsuulahLogo} alt="sanhuugiin zohitsuulah logo" className='partners-logo ' />
                        <img src={mglStockExchange} alt="mgl-stock-exchange" className='partners-logo' id='biglogo' />
                        <img src={mutsaehLogo} alt="mutsaeh logo" className='partners-logo' id='biglogo' />
                        <img src={unettsaastuvLogo} alt="Unet tsaas tuv logo" className='partners-logo' />
                        <img src={mglStockExchange} alt="mgl-stock-exchange" className='partners-logo' id='biglogo' />
                    </div>

                </div>
            </div>
            <div className="footer">
                <div className="footer-container">
                    <div>
                        <img src={stocklabLogo} alt="stocklab" />
                    </div>
                    <div className='contact-info'>
                        <span>
                            <img src={mobileIcon} alt="mobile icon" />
                            <p>7777-5155</p>
                        </span>
                        <span>
                            <img src={emailIcon} alt="email icon" />
                            <p>contact@stocklab.mn</p>
                        </span>
                        <span>Даваа-Баасан 9:00-18:00</span>
                        <span>Монгол улс, Улаанбаатар хот, Чингэлтэй дүүрэг, 1 хороо, Жуулчны гудамж, Арт хаус центр, 5 давхар</span>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>2022 © StockLab. ALL Rights Reserved.</p>
                <h1>ХУУЛЬ, ЭРХ ЗҮЙ</h1>
                <h1>ХОЛБОО БАРИХ</h1>
            </div>
        </div>
    )
}
export default FooterPartnersComponent;