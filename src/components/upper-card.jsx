import { useMediaQuery } from "react-responsive";

const UpperCard = ({
  fill,
  pageViews,
  onChange,
  onClick,
  price,
  billing,
  input,
}) => {
  const desktop = useMediaQuery({ minWidth: 768 });
  if (desktop) {
    return (
      <>
        <div className="flex flex-col w-full gap-12 items-center py-10 px-10">
          <label className="flex flex-col tracking-widest gap-10 w-full items-center text-grayishBlue ">
            <div className="flex w-full justify-between items-center">
              <span className="uppercase">{pageViews} Pageviews</span>
              <h2 className="text-5xl flex items-center gap-1">
                <span className="font-extrabold text-darkDesaturatedBlue">
                  ${price}.00
                </span>
                <span className="text-custom text-grayishBlue">/ month</span>
              </h2>
            </div>
            <input
              className="slider"
              value={input}
              onChange={onChange}
              type="range"
              min="0"
              max="100"
              style={{
                background: `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 86%, 45%) ${fill}%, hsl(223, 50%, 87%) ${fill}%, hsl(223, 50%, 87%) 100%)`,
              }}
            />
          </label>
          <div className="flex w-full justify-center">
            <label className="text-grayishBlue flex items-center gap-4">
              Monthly Billing
              <button
                onClick={onClick}
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
                -25% Discount
              </span>
            </label>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="flex flex-col gap-8 items-center py-10">
        <label className="flex flex-col tracking-widest uppercase gap-8 w-full items-center text-grayishBlue ">
          {pageViews} Pageviews
          <input
            className="slider"
            value={input}
            onChange={onChange}
            type="range"
            min="0"
            max="100"
            style={{
              background: `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 86%, 45%) ${fill}%, hsl(223, 50%, 87%) ${fill}%, hsl(223, 50%, 87%) 100%)`,
            }}
          />
        </label>
        <h2 className="text-4xl flex items-center gap-1">
          <span className="font-extrabold text-darkDesaturatedBlue">
            ${price}.00
          </span>
          <span className="text-custom text-grayishBlue">/ month</span>
        </h2>
        <div className="flex w-full justify-center">
          <label className="text-grayishBlue flex items-center gap-2">
            Monthly Billing
            <button
              onClick={onClick}
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
    </>
  );
};

export default UpperCard;
