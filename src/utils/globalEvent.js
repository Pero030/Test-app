export function globalEvent(code) {
  return function handleGlobalEvent(event) {
    const run = new Function(
      "event",
      "with (window) {\n" + code + "\n}",
    );

    return run.call(event.currentTarget, event);
  };
}
