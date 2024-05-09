import iconAriljaand from "../assets/zaawar/ariljaand.png";
import leftIcon from "../assets/zaawar/left-icon.png";
import messageIcon from "../assets/zaawar/message.png";
import rightIcon from "../assets/zaawar/right-icon.png";
import shiljuuleh from "../assets/zaawar/shiljuuleh.png";
import unetTsaas from "../assets/zaawar/unet-tsaas.png";
import iconMore from "../assets/zaawar/icon-more.png";

import "../styles/zaavar.scss";

const Instructions = () => {
  return (
    <div className="instructions-container">
      <div className="dans-neeh">
        <span className=" sm:text-[12px] m-5">
          ХАРИЛЦАГЧ ТА ГАР УТСААРАА <span>ХАМГИЙН БАГА ШИМТГЭЛТЭЙ</span> ДАНС
          НЭЭЛГЭХ БОЛОМЖТОЙ БОЛЛОО.
        </span>
        <button className="sm:text-[12px] m-2">ДАНС НЭЭХ</button>
      </div>

      <div id="NID" className="h-full">
        <div className="zaavar-container sm:grid lg:grid-col-2 lg:flex-wrap">
          {/* <div className="info-container"> 
          <img
            src={leftIcon}
            alt="left icon"
            className="left-right-icon lg:hidden"
          /> */}
          <div className="zaavar-container sm:flex lg:flex-col lg:flex-wrap ">
            <div className="info-container">
              <div className="header">
                <img src={unetTsaas} alt="unet tsaas icon" />
                <div>
                  <p>Үнэт цаасны</p>
                  <h1>ДАНС НЭЭХ</h1>
                </div>
              </div>
              <p className=" lg:p-5 ">
                Гар утаснаасаа үнэт цаас (хувьцаа, бонд гэх мэт)байрших
                зориулалттай данс нээх
              </p>
              <div className="button-icon">
                <button>
                  ДАНС НЭЭХ
                  <img src={iconMore} alt="sum" />
                </button>
                <img src={messageIcon} alt="icon" className="last-icon" />
              </div>
            </div>

            <div className="info-container  ">
              <div className="header">
                <img src={shiljuuleh} alt="unet tsaas icon" />
                <div>
                  <p>Үнэт цаас</p>
                  <h1>ШИЛЖҮҮЛЭХ</h1>
                </div>
              </div>
              <p className=" lg:p-5">
                Өөрийн эзэмшлийн үнэт цаасаа (Цэнхэр ягаан тасалбар, ЭТТ ХК-ийн
                1072 ширхэг хувьцаа болон бусад) Стоклаб данс руу шилжүүлэн
                онлайнаар удирдах боломжтой
              </p>
              <div className="button-icon">
                <button>
                  <p>ШИЛЖҮҮЛЭХ</p>
                  <img src={iconMore} alt="sum" />
                </button>
                <img src={messageIcon} alt="icon" />
              </div>
            </div>

            <div className="info-container">
              <div className="header">
                <img src={iconAriljaand} alt="unet tsaas icon" />
                <div>
                  <p>Арилжаанд</p>
                  <h1>ОРОЛЦОХ</h1>
                </div>
              </div>
              <p className=" lg:p-5">
                Шинээр гарч байгаа (IPO) болон олон нийтэд нээлттэй компаниудын
                хувьцаа, бондыг авах, зарах
              </p>
              <div className="button-icon">
                <button>
                  <p>АРИЛЖИХ</p>
                  <img src={iconMore} alt="sum" />
                </button>
                <img src={messageIcon} alt="icon" />
              </div>
            </div>
          </div>
          {/* 
          <img
            src={rightIcon}
            alt="right icon"
            className="left-right-icon lg:hidden"
          />
          */}
        </div>
      </div>
    </div>
  );
};

export default Instructions;
