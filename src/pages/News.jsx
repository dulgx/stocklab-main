import React from "react";
import Image1 from "../assets/medeelel/image-1.png";

const News = () => {
  const items = [
    {
      title: "СЭНДБОКСЫН ЗӨВЛӨЛИЙН АНХНЫ ХУРАЛДААН БОЛЛОО",
      date: "2021.10.20",
      altText: "image-news",
    },
    {
      title: "СЭНДБОКСЫН ЗӨВЛӨЛИЙН АНХНЫ ХУРАЛДААН БОЛЛОО",
      date: "2021.10.20",
      altText: "image-news",
    },
    {
      title: "СЭНДБОКСЫН ЗӨВЛӨЛИЙН АНХНЫ ХУРАЛДААН БОЛЛОО",
      date: "2021.10.20",
      altText: "image-news",
    },
    {
      title: "СЭНДБОКСЫН ЗӨВЛӨЛИЙН АНХНЫ ХУРАЛДААН БОЛЛОО",
      date: "2021.10.20",
      altText: "image-news",
    },
    {
      title: "СЭНДБОКСЫН ЗӨВЛӨЛИЙН АНХНЫ ХУРАЛДААН БОЛЛОО",
      date: "2021.10.20",
      altText: "image-news",
    },
    {
      title: "СЭНДБОКСЫН ЗӨВЛӨЛИЙН АНХНЫ ХУРАЛДААН БОЛЛОО",
      date: "2021.10.20",
      altText: "image-news",
    },
  ];
  return (
    <div className="medeelel-container">
      <span className="medeelel-text">МЭДЭЭЛЭЛ</span>
      <div className="custom-border"></div>

      <div className="grid-container">
        {items.map((item) => (
          <section key={item.id}>
            <img src={Image1} alt={item.altText} />
            <p>{item.title}</p>
            <span>{item.date}</span>
          </section>
        ))}
      </div>
    </div>
  );
};

export default News;
