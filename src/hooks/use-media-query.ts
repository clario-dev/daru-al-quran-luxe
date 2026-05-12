import * as React from "react";

interface UseMediaQueryOptions {
  defaultValue?: boolean;
  initializeWithValue?: boolean;
}

export function useMediaQuery(
  query: string,
  { defaultValue = false }: UseMediaQueryOptions = {}
): boolean {
  const getMatches = (query: string): boolean => {
    if (typeof window === "undefined") {
      return defaultValue;
    }
    return window.matchMedia(query).matches;
  };

  const [matches, setMatches] = React.useState(() => getMatches(query));

  const handleChange = () => {
    setMatches(getMatches(query));
  };

  React.useEffect(() => {
    const matchMedia = window.matchMedia(query);
    handleChange();

    // Modern browsers
    if (matchMedia.addEventListener) {
      matchMedia.addEventListener("change", handleChange);
    } else {
      // Legacy browsers
      matchMedia.addListener(handleChange);
    }

    return () => {
      if (matchMedia.removeEventListener) {
        matchMedia.removeEventListener("change", handleChange);
      } else {
        matchMedia.removeListener(handleChange);
      }
    };
  }, [query]);

  return matches;
}

export function usePrefersReducedMotion(): boolean {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}

export function usePrefersDarkMode(): boolean {
  return useMediaQuery("(prefers-color-scheme: dark)");
}
