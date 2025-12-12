import { useEffect, useRef } from "react";

export interface OutsideInteractionHandler {
  type: keyof DocumentEventMap;
  handler: (event?: Event) => void;
}

function useOutsideInteraction<T extends HTMLElement>(
  interactions: OutsideInteractionHandler[]
) {
  const targetRef = useRef<T>(null);

  useEffect(() => {
    const eventHandlers = interactions.map(
      ({ type, handler: originalHandler }) => {
        const wrappedHandler = (event: Event) => {
          const element = targetRef.current;

          if (!element) return;
          if (!element.contains(event.target as Node)) originalHandler(event);
        };

        document.addEventListener(type, wrappedHandler);
        return { type, wrappedHandler };
      }
    );

    return () =>
      eventHandlers.forEach(({ type, wrappedHandler }) =>
        document.removeEventListener(type, wrappedHandler)
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return targetRef;
}

export default useOutsideInteraction;
