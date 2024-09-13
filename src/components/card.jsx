const Card = ({ data }) => {
  return (
    <>
      <main>
        <h3>{data.pageviews}</h3>
        <input
          type={data.slider.type}
          min={data.slider.min}
          max={data.slider.max}
          value={data.slider.value}
        />
        <h2>{data.billing.text}</h2>
        <label>
          {data.billing.monthly}
          <button></button>
          {data.billing.yearly}
          <span>{data.billing.discount}</span>
        </label>
        <ul>
          {data.features.map((i, index) => (
            <li key={index}>
              <img src={i.icon} />
              {i.text}
            </li>
          ))}
        </ul>
        <button>{data.button.text}</button>
      </main>
    </>
  );
};

export default Card;
