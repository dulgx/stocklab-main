import React from "react";

const PageOne = () => {
  const items = {
    title: "Plus үйлчилгээ гэж юу вэ?",
    textMain:
      "Хөрөнгө оруулалтын шийдвэр гаргахад шаардлагатай суурь, техник шинжилгээг олон улсын шилдэг туршлагаар мэргэжлийн шинжээчдийн боловсруулсан зах зээлийн гол үзүүлэлтүүдийг өдөр бүр хүргэдэг үйлчилгээ юм.",
    title2: "Үйлчилгээ хэнд зориулагдсан бэ?",
    title3: "Анхлан суралцагч",
    text3:
      "Хөрөнгийн оруулалтын шийдвэр гаргахад тухайн компанийн талаар бүрэн мэдээлэлтэй байх, гол индикатор үзүүлэлтүүдийг ойлгох нь чухал тул олон улсын шилдэг туршлагыг энгийн ойлгомжтой байдлаар контентууд хүлээн авах боломжтой.",
    title4: "Мэргэжлийн хөрөнгө оруулагч",
    text4:
      "Хөрөнгийн зах зээлийн мэдээлэл өдөр бүр шинэчлэгдэж, өөрчлөгдөж байдаг тул арилжаанд орох шийдвэр гаргахад шаардлагатай гол үзүүлэлт, дата анализ, мэдээллийг тогтмол авах боломжтой.",
  };

  return (
    <div className=" text-white text-base mx-20 w-3/4 flex flex-col">
      <div className="justify-center">
        <h2 className="text-center text-4xl mb-10">{items.title}</h2>
        <p className="text-center flex justify-center">
          <span className="max-w-md">{items.textMain}</span>
        </p>
      </div>
      <div>
        <h2 className="text-center mt-16 mb-5 text-3xl flex justify-center">
          <span className="max-w-xs">{items.title2}</span>
        </h2>
        <div className="sm:flex">
          <div className="mx-10">
            <h4 className="text-center mb-5 font-bold">{items.title3}</h4>
            <p className="text-center font-extralight">{items.text3}</p>
          </div>
          <div className="mx-10">
            <h4 className="text-center mb-5 font-bold">{items.title4}</h4>
            <p className="text-center font-extralight">{items.text4}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageOne;
