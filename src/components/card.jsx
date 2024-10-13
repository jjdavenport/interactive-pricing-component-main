import { useState } from "react";
import checkIcon from "./assets/icon-check.svg";

const Card = ({}) => {
  const [monthly, setMonthly] = useState(true);
  const [yearly, setYearly] = useState(false);
  const toggle = () => setYearly(!yearly);
  const views = ["10K", "50K", "100K", "500K", "1M"];
  const priceMonthly = [8, 12, 16, 24, 36];
  const priceyearly = [6, 9, 12, 18, 27];
  return (
    <>
      <main className="flex flex-col gap-2">
        <h3>Pageviews</h3>
        <input className="cursor-pointer" type="range" min="0" max="100" />
        <h2></h2>
        <div className="flex gap-4">
          <label>
            Monthly Billing
            <button></button>
          </label>
          <label>
            Yearly Billing
            <button></button>
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
