import React from 'react';
import stockLogo from "../assets/market-logo.png";
import chart from "../assets/chart.png";

const MarketCard = () => {
    const data = {
        stockName: "AARD",
        stockUp: "+12.5%",
        stockDown: "-12.5%",
        stockPrice: "12,750.0"
    }
    return (
        <div className='card-frame '>
            <div className='market-card marquee-container' id='NoBackground'>
                <div className='card-info'>
                    <img src={stockLogo} alt="stock-logo" id='StockLogo' />
                    <div className='card-height'>
                        <div>
                            <span className='stock-text'>{data.stockName}</span>
                            <span className='stock-text' id='StockUp'>{data.stockUp}</span>
                        </div>
                        <span id='StockPrice'>{data.stockPrice}</span>
                    </div>
                </div>
                <div>
                    <img src={chart} alt="chart" id='Chart' />
                </div>
            </div>
            <div className='market-card marquee-container'>
                <div className='card-info'>
                    <img src={stockLogo} alt="stock-logo" id='StockLogo' />
                    <div className='card-height'>
                        <div>
                            <span className='stock-text'>{data.stockName}</span>
                            <span className='stock-text' id='StockUp'>{data.stockUp}</span>
                        </div>
                        <span id='StockPrice'>{data.stockPrice}</span>
                    </div>
                </div>
                <div>
                    <img src={chart} alt="chart" id='Chart' />
                </div>
            </div>
            <div className='market-card marquee-container'>
                <div className='card-info '>
                    <img src={stockLogo} alt="stock-logo" id='StockLogo' />
                    <div className='card-height'>
                        <div>
                            <span className='stock-text'>{data.stockName}</span>
                            <span className='stock-text' id='StockUp'>{data.stockUp}</span>
                        </div>
                        <span id='StockPrice'>{data.stockPrice}</span>
                    </div>
                </div>
                <div>
                    <img src={chart} alt="chart" id='Chart' />
                </div>
            </div>
            <div className='market-card marquee-container'>
                <div className='card-info'>
                    <img src={stockLogo} alt="stock-logo" id='StockLogo' />
                    <div className='card-height'>
                        <div>
                            <span className='stock-text'>{data.stockName}</span>
                            <span className='stock-text' id='StockUp'>{data.stockUp}</span>
                        </div>
                        <span id='StockPrice'>{data.stockPrice}</span>
                    </div>
                </div>
                <div>
                    <img src={chart} alt="chart" id='Chart' />
                </div>
            </div>
            <div className='market-card marquee-container'>
                <div className='card-info'>
                    <img src={stockLogo} alt="stock-logo" id='StockLogo' />
                    <div className='card-height'>
                        <div>
                            <span className='stock-text'>{data.stockName}</span>
                            <span className='stock-text' id='StockUp'>{data.stockUp}</span>
                        </div>
                        <span id='StockPrice'>{data.stockPrice}</span>
                    </div>
                </div>
                <div>
                    <img src={chart} alt="chart" id='Chart' />
                </div>
            </div>
            <div className='market-card marquee-container'>
                <div className='card-info'>
                    <img src={stockLogo} alt="stock-logo" id='StockLogo' />
                    <div className='card-height'>
                        <div>
                            <span className='stock-text'>{data.stockName}</span>
                            <span className='stock-text' id='StockUp'>{data.stockUp}</span>
                        </div>
                        <span id='StockPrice'>{data.stockPrice}</span>
                    </div>
                </div>
                <div>
                    <img src={chart} alt="chart" id='Chart' />
                </div>
            </div>
            <div className='market-card marquee-container'>
                <div className='card-info'>
                    <img src={stockLogo} alt="stock-logo" id='StockLogo' />
                    <div className='card-height'>
                        <div>
                            <span className='stock-text'>{data.stockName}</span>
                            <span className='stock-text' id='StockUp'>{data.stockUp}</span>
                        </div>
                        <span id='StockPrice'>{data.stockPrice}</span>
                    </div>
                </div>
                <div>
                    <img src={chart} alt="chart" id='Chart' />
                </div>
            </div>
            <div className='market-card marquee-container'>
                <div className='card-info'>
                    <img src={stockLogo} alt="stock-logo" id='StockLogo' />
                    <div className='card-height'>
                        <div>
                            <span className='stock-text'>{data.stockName}</span>
                            <span className='stock-text' id='StockUp'>{data.stockUp}</span>
                        </div>
                        <span id='StockPrice'>{data.stockPrice}</span>
                    </div>
                </div>
                <div>
                    <img src={chart} alt="chart" id='Chart' />
                </div>
            </div>
            <div className='market-card marquee-container'>
                <div className='card-info'>
                    <img src={stockLogo} alt="stock-logo" id='StockLogo' />
                    <div className='card-height'>
                        <div>
                            <span className='stock-text'>{data.stockName}</span>
                            <span className='stock-text' id='StockUp'>{data.stockUp}</span>
                        </div>
                        <span id='StockPrice'>{data.stockPrice}</span>
                    </div>
                </div>
                <div>
                    <img src={chart} alt="chart" id='Chart' />
                </div>
            </div>
            <div className='market-card marquee-container' id='NoBackground'>
                <div className='card-info'>
                    <img src={stockLogo} alt="stock-logo" id='StockLogo' />
                    <div className='card-height'>
                        <div>
                            <span className='stock-text'>{data.stockName}</span>
                            <span className='stock-text' id='StockUp'>{data.stockUp}</span>
                        </div>
                        <span id='StockPrice'>{data.stockPrice}</span>
                    </div>
                </div>
                <div>
                    <img src={chart} alt="chart" id='Chart' />
                </div>
            </div>
        </div>

    );
}

export default MarketCard;
