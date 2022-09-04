import { useEffect } from "react";

function useOutsideClickDetector(ref, callback, ignoreRef) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        !ignoreRef?.current?.contains(event.target)
      ) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback, ignoreRef]);
}

export default useOutsideClickDetector;
