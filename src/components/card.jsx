import { useState } from "react";
import checkIcon from "./assets/icon-check.svg";
import LowerCard from "./lower-card";
import UpperCard from "./upper-card";

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
      <main className="flex flex-col items-center md:max-w-screen-sm divide-y-[1px] bg-white rounded-xl w-full shadow-lg">
        <UpperCard
          onChange={change}
          price={price}
          pageViews={pageViews}
          onClick={toggle}
          fill={fill}
          billing={billing}
          input={input}
        />
        <LowerCard img={checkIcon} />
      </main>
    </>
  );
};

export default Card;
