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
      <main className="flex flex-col gap-4 items-center">
        <label className="flex flex-col uppercase gap-8 w-full">
          {pageViews} Pageviews
          <input
            className="slider"
            value={input}
            onChange={change}
            type="range"
            min="0"
            max="100"
            style={{
              background: `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${fill}%, hsl(223, 50%, 87%) ${fill}%, hsl(223, 50%, 87%) 100%)`,
            }}
          />
        </label>
        <h2>${price}.00 / month</h2>
        <div className="flex">
          <label className="text-grayishBlue flex items-center gap-2">
            Monthly Billing
            <button
              onClick={toggle}
              className="w-6 h-4 bg-lightGrayishBlue relative rounded-full"
            >
              <div
                className={`${
                  billing === "month"
                    ? "translate-x-0 bg-black"
                    : "translate-x-full bg-white"
                } w-3 h-3 absolute top-1/2 transform -translate-y-1/2 transition-transform duration-300 rounded-full`}
              ></div>
            </button>
            Yearly Billing -25%
          </label>
        </div>
        <ul>
          <li className="flex gap-2">
            <img className="object-contain" src={checkIcon} />
            Unlimited websites
          </li>
          <li className="flex gap-2">
            <img className="object-contain" src={checkIcon} />
            100% data ownership
          </li>
          <li className="flex gap-2">
            <img className="object-contain" src={checkIcon} />
            Email reports
          </li>
        </ul>
        <button className="rounded-full w-fit p-2 bg-darkDesaturatedBlue text-grayishBlue">
          Start my free trial
        </button>
      </main>
    </>
  );
};

export default Card;
