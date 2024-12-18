import { useEffect, useRef } from "react";

export const useUpdateEffect = (effect: React.EffectCallback, deps: React.DependencyList) => {
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      effect();
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};
