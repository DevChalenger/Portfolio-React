import { useSelector } from "react-redux";
import { selectTheme } from "../redux/selector";

const useTheme = () => {
  const theme = useSelector(selectTheme);
  const currentTheme = theme === "light" ? "light-mode" : "night-mode";

  return { currentTheme };
};

export default useTheme;
