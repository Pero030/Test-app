import { lazy, Suspense } from "react";
import { getAppPathname } from "./utils/routing.js";

const HomePage = lazy(() =>
  import("./pages/HomePage.jsx").then((module) => ({ default: module.HomePage })),
);
const EcommercePage = lazy(() =>
  import("./pages/EcommercePage.jsx").then((module) => ({
    default: module.EcommercePage,
  })),
);
const BueroPage = lazy(() =>
  import("./pages/BueroPage.jsx").then((module) => ({ default: module.BueroPage })),
);
const SettingsPage = lazy(() =>
  import("./pages/SettingsPage.jsx").then((module) => ({
    default: module.SettingsPage,
  })),
);
const WartungPage = lazy(() =>
  import("./pages/WartungPage.jsx").then((module) => ({
    default: module.WartungPage,
  })),
);

const routes = [
  { match: /^\/settings\.html\/?$/i, Page: SettingsPage },
  { match: /^\/E-Commerce\/?$/i, Page: EcommercePage },
  { match: /^\/Büromanagement\/?$/i, Page: BueroPage },
  { match: /^\/Wartung\/?$/i, Page: WartungPage },
];

export function App() {
  const pathname = getAppPathname();
  const route = routes.find((entry) => entry.match.test(pathname));
  const Page = route ? route.Page : HomePage;

  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  );
}
