const LowerCard = ({ img }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between gap-8 w-full items-center px-4 md:px-10 py-10">
        <ul className="flex flex-col gap-2 text-grayishBlue items-center md:items-start">
          <li className="flex gap-3 ">
            <img className="object-contain" src={img} />
            Unlimited websites
          </li>
          <li className="flex gap-3">
            <img className="object-contain" src={img} />
            100% data ownership
          </li>
          <li className="flex gap-3">
            <img className="object-contain" src={img} />
            Email reports
          </li>
        </ul>
        <button className="rounded-full w-fit py-3 px-12 bg-darkDesaturatedBlue hover:text-white transition duration-300 ease-in-out text-paleBlue">
          Start my trial
        </button>
      </div>
    </>
  );
};

export default LowerCard;
