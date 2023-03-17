import { createEffect, createSignal }  from "solid-js";
import { WiDaySunny, WiMoonWaningCrescent3 } from "solid-icons/wi"

const initializeTheme = () => {
  let theme;

  if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme") ? "light" : "dark";
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    theme = "dark";
  } else {
    theme = "light";
  }
  return theme;
};

const UseDarkMode = () => {
  const [theme, setTheme] = createSignal(initializeTheme());

  createEffect(() => {
    const bodyClass = document.body.classList;

    if (theme() === "light") {
      localStorage.setItem("theme", "light");
      bodyClass.remove("dark");
    } else {
      localStorage.setItem("theme", "dark");
      bodyClass.add("dark");
    }
  });

  return (
    <div id="theme-actions" class="dark-mode-icon group">
      <span onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}>
        {theme() === "dark" ? (
          <WiDaySunny />
        ) : (
          <WiMoonWaningCrescent3 />
        )}
      </span>
    </div>
  );
};

export default UseDarkMode;