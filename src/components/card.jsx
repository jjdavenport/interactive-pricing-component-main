import { useState } from "react";
import checkIcon from "./assets/icon-check.svg";

const Card = () => {
  const [billing, setBilling] = useState("month");
  const [input, setInput] = useState(50);
  const [fill, setFIll] = useState(50);
  const toggle = () => setBilling(billing === "month" ? "year" : "month");
  const views = ["10K", "50K", "100K", "500K", "1M"];
  const priceMonthly = [8, 12, 16, 24, 36];
  const priceYearly = [6, 9, 12, 18, 27];

  const change = (e) => {
    const value = parseInt(e.target.value);
    setInput(value);
    setFIll((value / 100) * 100);
  };

  const index = Math.floor(input / 25);
  const pageViews = views[index];
  const price = billing === "year" ? priceYearly[index] : priceMonthly[index];

  return (
    <>
      <main className="flex flex-col items-center divide-y-[1px] bg-white rounded-xl -mt-10 w-full shadow-lg">
        <div className="flex flex-col gap-8 items-center py-10">
          <label className="flex flex-col tracking-widest uppercase gap-8 w-full items-center text-grayishBlue ">
            {pageViews} Pageviews
            <input
              className="slider"
              value={input}
              onChange={change}
              type="range"
              min="0"
              max="100"
              style={{
                background: `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 86%, 45%) ${fill}%, hsl(223, 50%, 87%) ${fill}%, hsl(223, 50%, 87%) 100%)`,
              }}
            />
          </label>
          <h2 className="text-4xl flex items-center gap-1">
            <span className="font-extrabold">${price}.00</span>
            <span className="text-custom text-grayishBlue">/ month</span>
          </h2>
          <div className="flex w-full justify-center">
            <label className="text-grayishBlue flex items-center gap-2">
              Monthly Billing
              <button
                onClick={toggle}
                className={`w-12 h-6 bg-lightGrayishBlueToggle relative rounded-full transition duration-300 ease-in-out hover:bg-softCyan`}
              >
                <div
                  className={`
      w-4 h-4 absolute top-1/2 transform -translate-y-1/2 bg-white rounded-full
      transition-all duration-300 ease-in-out
      ${billing === "month" ? "left-1" : "left-[calc(100%-1.25rem-0.125rem)]"}
    `}
                ></div>
              </button>
              Yearly Billing
              <span className="bg-lightGrayishRed font-extrabold text-xs text-lightRed rounded-full py-1 px-2">
                -25%
              </span>
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-8 w-full items-center px-4 py-10">
          <ul className="flex flex-col gap-2 text-grayishBlue items-center">
            <li className="flex gap-3 ">
              <img className="object-contain" src={checkIcon} />
              Unlimited websites
            </li>
            <li className="flex gap-3">
              <img className="object-contain" src={checkIcon} />
              100% data ownership
            </li>
            <li className="flex gap-3">
              <img className="object-contain" src={checkIcon} />
              Email reports
            </li>
          </ul>
          <button className="rounded-full w-fit py-3 px-12 bg-darkDesaturatedBlue hover:text-white transition duration-300 ease-in-out text-paleBlue">
            Start my trial
          </button>
        </div>
      </main>
    </>
  );
};

export default Card;
