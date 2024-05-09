import React from "react";
import stockLogo from "../assets/market-logo.png";
import chart from "../assets/chart.png";

const MarketCard = () => {
  const data = [
    {
      stockName: "AARD",
      stockUp: "+12.5%",
      stockDown: "-12.5%",
      stockPrice: "12,750.0",
    },
    {
      stockName: "AARD",
      stockUp: "+12.5%",
      stockDown: "-12.5%",
      stockPrice: "12,750.0",
    },
    {
      stockName: "AARD",
      stockUp: "+12.5%",
      stockDown: "-12.5%",
      stockPrice: "12,750.0",
    },
    {
      stockName: "AARD",
      stockUp: "+12.5%",
      stockDown: "-12.5%",
      stockPrice: "12,750.0",
    },
    {
      stockName: "AARD",
      stockUp: "+12.5%",
      stockDown: "-12.5%",
      stockPrice: "12,750.0",
    },
    {
      stockName: "AARD",
      stockUp: "+12.5%",
      stockDown: "-12.5%",
      stockPrice: "12,750.0",
    },
  ];

  return (
    <div className="flex flex-row w-full justify-center items-center overflow-hidden">
      {data.map((stockData, index) => {
        return (
          <div
            key={index}
            className=" m-3 bg-zinc-900 text-white justify-center items-center p-5 rounded-xl h-24 flex-row flex w-[260px]"
          >
            <div className="flex items-center h-full w-[350px]">
              <img src={stockLogo} alt="stock-logo" className="m-2" />
              <div className="m-2 h-full items-center flex flex-col justify-center">
                <div>
                  <span className="text-xs font-poppins">
                    {stockData.stockName}
                  </span>
                  <span className="bg-green-700 m-2 rounded-xl p-1 text-xs">
                    {stockData.stockUp}
                  </span>
                </div>
                <span className="text-xl mt-2">{stockData.stockPrice}</span>
              </div>
            </div>
            <div className="h-8 justify-center flex m-1">
              <img src={chart} alt="chart" className=" w-32" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MarketCard;
