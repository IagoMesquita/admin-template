import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const useAppData = () => useContext(ThemeContext);

export default useAppData;