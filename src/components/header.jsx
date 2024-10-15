const Header = () => {
  return (
    <>
      <header className="h-72 md:h-40 flex text-center bg-circles bg-no-repeat bg-mobile flex-col justify-center w-full gap-2 items-center">
        <h1 className="~sm/md:~text-xl/4xl text-darkDesaturatedBlue font-extrabold">
          Simple, traffic-based pricing
        </h1>
        <div className="flex flex-col gap-1 ~sm/md:~text-custom/lg md:flex-row text-grayishBlue">
          <span>Sign-up for our 30-day trial.</span>
          <span>No credit card required.</span>
        </div>
      </header>
    </>
  );
};

export default Header;
