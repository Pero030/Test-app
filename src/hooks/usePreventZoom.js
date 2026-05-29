import { useEffect } from "react";

export function usePreventZoom() {
  useEffect(() => {
    const prevent = (event) => event.preventDefault();
    const preventMultiTouch = (event) => {
      if (event.touches.length > 1) event.preventDefault();
    };
    const preventCtrlWheel = (event) => {
      if (event.ctrlKey) event.preventDefault();
    };
    const preventZoomKeys = (event) => {
      if ((event.ctrlKey || event.metaKey) && ["+", "-", "0"].includes(event.key)) {
        event.preventDefault();
      }
    };

    document.addEventListener("gesturestart", prevent, { passive: false });
    document.addEventListener("gesturechange", prevent, { passive: false });
    document.addEventListener("gestureend", prevent, { passive: false });
    document.addEventListener("touchstart", preventMultiTouch, { passive: false });
    document.addEventListener("touchmove", preventMultiTouch, { passive: false });
    document.addEventListener("wheel", preventCtrlWheel, { passive: false });
    document.addEventListener("keydown", preventZoomKeys);

    const interval = window.setInterval(() => {
      document.body.style.zoom = 1;
      document.documentElement.style.zoom = 1;
    }, 100);

    return () => {
      document.removeEventListener("gesturestart", prevent);
      document.removeEventListener("gesturechange", prevent);
      document.removeEventListener("gestureend", prevent);
      document.removeEventListener("touchstart", preventMultiTouch);
      document.removeEventListener("touchmove", preventMultiTouch);
      document.removeEventListener("wheel", preventCtrlWheel);
      document.removeEventListener("keydown", preventZoomKeys);
      window.clearInterval(interval);
    };
  }, []);
}
