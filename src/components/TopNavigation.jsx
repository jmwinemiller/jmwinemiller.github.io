import { A } from "@solidjs/router";
import UseDarkMode from "../hooks/UseDarkMode";

const TopNavigation = () => {
  return(
    <div class="top-navigation">
      <A class="top-navigation-icon-main" href="/">Jordan Winemiller</A>
      <A class="top-navigation-icon" href="/portfolio">Portfolio</A>
      <A class="top-navigation-icon" href="/blog">Blog</A>
      <A class="top-navigation-icon" href="/about">About Me</A>
      <A class="top-navigation-icon" href="/resume_cv">Resume/CV</A>
      <A class="top-navigation-icon" href="/counter">Counter Example</A>
      <span class="dark-mode-layout">
        <UseDarkMode />
      </span>
    </div>
  );
};

export default TopNavigation;