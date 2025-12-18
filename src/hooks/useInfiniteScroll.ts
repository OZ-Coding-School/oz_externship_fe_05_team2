import { useEffect, useRef } from "react";

function useInfiniteScroll<T extends HTMLElement>(
  hasNextPage: boolean,
  isFetchingNextPage: boolean,
  fetchNextPage: () => void,
  enabled: boolean = true
) {
  const targetRef = useRef<T>(null);

  useEffect(() => {
    if (!enabled) return;
    if (!targetRef.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      if (!hasNextPage || isFetchingNextPage) return;
      fetchNextPage();
    });

    observer.observe(targetRef.current);
    return () => observer.disconnect();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage, enabled]);

  return targetRef;
}

export default useInfiniteScroll;
