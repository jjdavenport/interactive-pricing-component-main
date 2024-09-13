const Header = ({ data }) => {
  return (
    <>
      <header>
        <h1>{data.header}</h1>
        <span>{data.subtext[0]}</span>
        <span>{data.subtext[1]}</span>
      </header>
    </>
  );
};

export default Header;
