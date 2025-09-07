import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

function ToggleDarkModeButton({ isDark, setIsDark }) {
  return (
    <button className="toggle" onClick={() => setIsDark((d) => !d)}>
      {isDark ? <MdLightMode /> : <MdDarkMode />}
    </button>
  );
}

export default ToggleDarkModeButton;
