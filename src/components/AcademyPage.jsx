import { useEffect } from "react";
import { Header } from "./Header.jsx";
import { Footer } from "./Footer.jsx";
import { ThemeButton } from "./ThemeButton.jsx";
import { useGameScripts } from "../services/scriptRunner.jsx";

export function AcademyPage({
  variant,
  basePath,
  scripts,
  overlays,
  startScreen,
  children,
}) {
  useEffect(() => {
    document.body.dataset.page = scripts.dataPage || "";
    document.body.classList.add("react-page-shell");
    return () => {
      delete document.body.dataset.page;
      document.body.classList.remove("react-page-shell", "modal-open");
    };
  }, [scripts.dataPage]);

  useGameScripts(scripts);

  return (
    <>
      <Header variant={variant} basePath={basePath} />
      <ThemeButton />
      {overlays}
      {startScreen}
      {children}
      <Footer variant={variant === "home" || variant === "settings" ? "home" : "academy"} />
    </>
  );
}
