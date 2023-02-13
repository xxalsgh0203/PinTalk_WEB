import { RefObject, useEffect, useState } from "react";

const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (e: Event) => void,
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      if (!ref.current || ref.current.contains(event.target as Node)) return;
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
