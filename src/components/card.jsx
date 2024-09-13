import check from "./assets/icon-check.svg";

const Card = () => {
  return (
    <>
      <main>
        <h3>Pageviews</h3>
        <input type="range" min="0" max="100" value="50" />
        <h2>month</h2>
        <label>
          Monthly Billing
          <button></button>
          Yearly Billing
          <span>25% </span>
        </label>
        <ul>
          <li>
            <img src={check} />
            Unlimited websites
          </li>
          <li>
            <img src={check} />
            100% data ownership
          </li>
          <li>
            <img src={check} />
            Email reports
          </li>
        </ul>
        <button></button>
      </main>
    </>
  );
};

export default Card;
