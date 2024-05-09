import sendlyLogo from "../assets/sendlyLogodark.png";
import hipayLogo from "../assets/hipay-logo.png";
import mutsaehLogo from "../assets/mutsaeh-logo.png";
import unettsaastuvLogo from "../assets/unet-tsaas-tuv.png";
import stocklabLogo from "../assets/stocklab-logo.png";
import sanzohitsuulahLogo from "../assets/san-zohitsuulah-logo.png";
import lineHamtragch from "../assets/Line-hamtragch.svg";
import mglStockExchange from "../assets/mgl-stock-exchange.png";
import mobileIcon from "../assets/mobile-icon.svg";
import emailIcon from "../assets/mail-icon.svg";

const FooterPartnersComponent = () => {
  return (
    <div className="partners-footer ">
      <div className="partners-container">
        <div className="flex flex-col items-center justify-center">
          <span className="text-xl text-white ">ХАМТРАГЧ БАЙГУУЛЛАГУУД </span>
          <img src={lineHamtragch} alt="line" />
        </div>

        <div className="partners-logo-container">
          <div className="slide-container">
            <img
              src={unettsaastuvLogo}
              alt="Unet tsaas tuv logo"
              className="partners-logo "
            />
            <img src={hipayLogo} alt="hipay logo" className="partners-logo " />
            <img
              src={mutsaehLogo}
              alt="mutsaeh logo"
              className="partners-logo"
              id="biglogo"
            />
            <img
              src={unettsaastuvLogo}
              alt="Unet tsaas tuv logo"
              className="partners-logo "
            />
            <img
              src={sendlyLogo}
              alt="sendly logo"
              className="partners-logo "
            />
            <img
              src={sanzohitsuulahLogo}
              alt="sanhuugiin zohitsuulah logo"
              className="partners-logo "
            />
            <img
              src={mglStockExchange}
              alt="mgl-stock-exchange"
              className="partners-logo"
              id="biglogo"
            />

            <img
              src={unettsaastuvLogo}
              alt="Unet tsaas tuv logo"
              className="partners-logo "
            />
            <img src={hipayLogo} alt="hipay logo" className="partners-logo " />
            <img
              src={mutsaehLogo}
              alt="mutsaeh logo"
              className="partners-logo"
              id="biglogo"
            />
            <img
              src={unettsaastuvLogo}
              alt="Unet tsaas tuv logo"
              className="partners-logo "
            />
            <img
              src={sendlyLogo}
              alt="sendly logo"
              className="partners-logo "
            />
            <img
              src={sanzohitsuulahLogo}
              alt="sanhuugiin zohitsuulah logo"
              className="partners-logo "
            />
            <img
              src={mglStockExchange}
              alt="mgl-stock-exchange"
              className="partners-logo"
              id="biglogo"
            />
          </div>
        </div>
      </div>

      <div className="footer-section sm:flex sm:flex-row">
        <div className="footer-container sm:flex sm:flex-col sm:items-center sm:justify-center sm:w-full sm:text-xs">
          <div>
            <img src={stocklabLogo} alt="stocklab" />
          </div>
          <div className="contact-info sm:m-5 sm:flex sm:flex-col sm:items-center sm:justify-center ">
            <div>
              <img src={mobileIcon} alt="mobile icon" />
              <p>7777-5155</p>
            </div>
            <div>
              <img src={emailIcon} alt="email icon" />
              <p>contact@stocklab.mn</p>
            </div>
            <div>
              Даваа-Баасан <br />
              9:00-18:00
            </div>
            <div className="sm:text-center">
              Монгол улс, Улаанбаатар хот, Чингэлтэй дүүрэг, 1 хороо, Жуулчны
              гудамж, Арт хаус центр, 5 давхар
            </div>
          </div>
        </div>
      </div>
      <div className="copyright sm:flex sm:flex-col sm:items-center sm:justify-center">
        <p>2022 © StockLab. ALL Rights Reserved.</p>
        <p>ХУУЛЬ, ЭРХ ЗҮЙ &nbsp; &nbsp; &nbsp; ХОЛБОО БАРИХ</p>
      </div>
    </div>
  );
};
export default FooterPartnersComponent;
