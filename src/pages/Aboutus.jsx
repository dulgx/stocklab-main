import { useState } from "react";
import React from "react";
import "../styles/about.scss";
import Profile from "../assets/profile.png";

function AboutUsPage() {
  const [activeButton, setActiveButton] = useState(1);

  return (
    <>
      <div className="about-us-page">
        <div
          className={`about-text-container ${
            activeButton === 1 ? "visible" : "hidden"
          }`}
        >
          <BidniiTuhai />
        </div>
        <div
          className={`hamt-olon-container ${
            activeButton === 2 ? "visible" : "hidden"
          }`}
        >
          <HamtOlon />
        </div>
      </div>
      <ButtonToggle
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />
    </>
  );
}

const AboutUs = () => {
  return (
    <div className="about-container sm:text-xs">
      <div className="ariljaand-oroltsoh sm:flex  sm:justify-center sm:items-center">
        <p className="sm:text-sm]">
          ХАРИЛЦАГЧ ТА ГАР УТСААРАА{" "}
          <b>
            ҮНЭТ ЦААСНЫ АРИЛЖААНД ОРОЛЦОЖ, ҮНЭТ ЦААС АВАХ, ЗАРАХ ЗАХИАЛГА ӨГӨХ
          </b>{" "}
          БОЛОМЖТОЙ БОЛЛОО.
        </p>
        <button id="AriljaandButton">АРИЛЖААНД ОРОЛЦОХ</button>
      </div>
      <AboutUsPage />
    </div>
  );
};
export default AboutUs;

const BidniiTuhai = () => {
  return (
    <div className="about-text-container">
      <span className="bidnii-tuhai-text">
        <h1 className="sd:text-sm mb-2">Бидний тухай</h1>
        <div className="custom-border"></div>
      </span>
      <span className="about-long-text">
        <h1 className="text-lg text-green-500">Алсын хараа</h1>
        <p>
          Хөрөнгө оруулалтын оновчтой гарц, хөрөнгийн зах зээлийн цогц
          үйлчилгээг иргэн бүрт хүргэх найдвартай зөвлөгч байна.
        </p>
        <h1 className="text-lg text-green-500">Эрхэм зорилго</h1>
        <p>
          Монгол улсад тэргүүлэх, дэвшилтэт технологид суурилсан, хэрэглэгчдийн
          хэрэгцээ шаардлагад бүрэн нийцсэн, ашиглахад хялбар, найдвартай,
          түргэн шуурхай, цахим цогц үйлчилгээ бүхий компани байна
        </p>
        <h1 className="text-lg text-green-500">Танилцуулга</h1>
        <p>
          Манай компани нь 2021 онд Санхүүгийн зохицуулах хорооны тусгай
          зөвшөөрлөө авч, Монгол улсынхаа хөрөнгийн зах зээлийн хөгжил дэвшилд
          өөрийн хувь нэмрээ оруулж, мэргэжлийн өндөр ёс суртахуун, ур чадварыг
          баримтлан түргэн шуурхай Гадаад улсад ажиллаж амьдарч буй болон
          Улаанбаатар хот, орон нутгийн харилцагчдадаа дэвшилтэт технологид
          суурилсан ,хамгийн бага шимтгэлтэй “Хөрөнгийн зах зээлийн зуучлалын
          үйлчилгээ”-г үзүүлж байна.
        </p>
      </span>
    </div>
  );
};

const HamtOlon = () => {
  const namePosition = {
    firstName: "Ё.Амарбат",
    position: "Гүйцэтгэх захирал",
  };

  return (
    <div className="hamt-olon-container">
      <div className="first-container">
        <span id="text-hamtolon">Хамт олон</span>
        <div className="custom-border"></div>
        <div>
          <span>Ажлын туршлага</span>
          <p>
            Манай хамт олон санхүүгийн салбарт +15 жил ажилсан туршлагатай
            мэргэжилтнүүдээс бүрдсэн.
          </p>
        </div>
      </div>

      <div className="profile-image-container">
        <div className="profile-info">
          <img src={Profile} alt="person-image" />
          <span className="text">{namePosition.firstName}</span>
          <span className="text">{namePosition.position}</span>
        </div>
        <div className="profile-info">
          <img src={Profile} alt="person-image" />
          <span className="text">{namePosition.firstName}</span>
          <span className="text">{namePosition.position}</span>
        </div>
        <div className="profile-info">
          <img src={Profile} alt="person-image" />
          <span className="text">{namePosition.firstName}</span>
          <span className="text">{namePosition.position}</span>
        </div>
        <div className="profile-info">
          <img src={Profile} alt="person-image" />
          <span className="text">{namePosition.firstName}</span>
          <span className="text">{namePosition.position}</span>
        </div>
        <div className="profile-info">
          <img src={Profile} alt="person-image" />
          <span className="text">{namePosition.firstName}</span>
          <span className="text">{namePosition.position}</span>
        </div>
        <div className="profile-info">
          <img src={Profile} alt="person-image" />
          <span className="text">{namePosition.firstName}</span>
          <span className="text">{namePosition.position}</span>
        </div>
        <div className="profile-info">
          <img src={Profile} alt="person-image" />
          <span className="text">{namePosition.firstName}</span>
          <span className="text">{namePosition.position}</span>
        </div>
        <div className="profile-info">
          <img src={Profile} alt="person-image" />
          <span className="text">{namePosition.firstName}</span>
          <span className="text">{namePosition.position}</span>
        </div>
        <div className="profile-info">
          <img src={Profile} alt="person-image" />
          <span className="text">{namePosition.firstName}</span>
          <span className="text">{namePosition.position}</span>
        </div>
      </div>
    </div>
  );
};

const ButtonToggle = ({ activeButton, setActiveButton }) => {
  return (
    <div className="button-container">
      <button
        className={activeButton === 1 ? "active" : ""}
        onClick={() => setActiveButton(1)}
        id="slide-button"
      ></button>
      <button
        className={activeButton === 2 ? "active" : ""}
        onClick={() => setActiveButton(2)}
        id="slide-button"
      ></button>
    </div>
  );
};
