// set theme
type domSelector = HTMLElement | null;

export default function setTheme(theme: string = "") {
  if (theme) {
    localStorage.setItem("theme", theme);
  } else if (!localStorage.getItem("theme")) {
    localStorage.setItem(
      "theme",
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    );
  }

  const lightThemeTag: domSelector = document.getElementById("light_theme");
  const darkThemeTag: domSelector = document.getElementById("dark_theme");

  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
    darkThemeTag && darkThemeTag.classList.add("hidden");
    lightThemeTag && lightThemeTag.classList.remove("hidden");
  } else {
    document.documentElement.classList.remove("dark");
    lightThemeTag && lightThemeTag.classList.add("hidden");
    darkThemeTag && darkThemeTag.classList.remove("hidden");
  }
}
