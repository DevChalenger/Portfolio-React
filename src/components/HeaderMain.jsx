import useTheme from "../utils/Theme";

const HeaderMain = ({ Title }) => {
  const { currentTheme } = useTheme();

  return (
    <header className="app-main-header">
      <h1 className={`app-main-title ${currentTheme}`}>{Title}</h1>
    </header>
  );
};

export default HeaderMain;
