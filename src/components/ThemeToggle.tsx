// 🔸 src/components/ThemeToggle.tsx
import { Ghost, Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const cycleTheme = () => {
    let nextTheme: "light" | "dark" | "halloween";
    if (theme === "light") nextTheme = "dark";
    else if (theme === "dark") nextTheme = "halloween";
    else nextTheme = "light";

    document.documentElement.classList.remove("light", "dark", "halloween");
    document.documentElement.classList.add(nextTheme);
    localStorage.setItem("theme", nextTheme);

    // forza lo stato
    toggleTheme();
  };

  const icon =
    theme === "light" ? (
      <Sun className="text-yellow-400" size={18} />
    ) : theme === "dark" ? (
      <Moon className="text-blue-400" size={18} />
    ) : (
      <Ghost className="text-orange-500" size={18} />
    );

  const label =
    theme === "light"
      ? "Tema chiaro"
      : theme === "dark"
      ? "Tema scuro"
      : "Tema Halloween 🎃";

  return (
    <button
      onClick={cycleTheme}
      title={label}
      className="p-2 rounded-lg transition-all duration-300 hover:scale-110 bg-black/10 dark:bg-white/10 backdrop-blur"
      aria-label={label}
    >
      {icon}
    </button>
  );
};

export default ThemeToggle;
