import { useState } from "react";
import checkIcon from "./assets/icon-check.svg";

const Card = () => {
  const [billing, setBilling] = useState("month");
  const [input, setInput] = useState(50);
  const toggle = () => setBilling(billing === "month" ? "year" : "month");
  const views = ["10K", "50K", "100K", "500K", "1M"];
  const priceMonthly = [8, 12, 16, 24, 36];
  const priceYearly = [6, 9, 12, 18, 27];

  const change = (e) => {
    setInput(parseInt(e.target.value));
  };

  const index = Math.floor(input / 25);
  const pageViews = views[index];
  const price = billing === "year" ? priceYearly[index] : priceMonthly[index];

  return (
    <>
      <main className="flex flex-col gap-2">
        <h3>
          {pageViews} <span className="uppercase">Pageviews</span>
        </h3>
        <input
          value={input}
          onChange={change}
          className="cursor-pointer"
          type="range"
          min="0"
          max="100"
        />
        <h2>
          ${price}.00 / {billing}
        </h2>
        <div className="flex gap-4">
          <label>
            Monthly Billing
            <button className="h-4 w-4" onClick={toggle}></button>
          </label>
          <label>
            Yearly Billing -25%
            <button className="h-4 w-4" onClick={toggle}></button>
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
        <button>Start my free trial</button>
      </main>
    </>
  );
};

export default Card;
