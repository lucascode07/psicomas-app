'use client';

const ThemeScript = () => {

  const getTheme = `
  const html = document?.querySelector("html");
  if (localStorage?.getItem("theme") === "dark") {
    html?.setAttribute("data-theme", "dark");

  }`.trim();

  return (
    <script dangerouslySetInnerHTML={{ __html: getTheme }} />
  )
}

export default ThemeScript