import { useTheme } from "next-themes";

function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? "☀️ Ljust läge" : "🌙 Mörkt läge"}
    </button>
  );
}

export default ModeToggle;
