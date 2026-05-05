import { useEffect } from "react";

const useNoIndex = (title: string, description: string) => {
  useEffect(() => {
    document.title = `${title} | Daaru Al'Qurane`;

    const setMeta = (name: string, content: string) => {
      let m = document.querySelector(`meta[name="${name}"]`);
      if (!m) {
        m = document.createElement("meta");
        m.setAttribute("name", name);
        document.head.appendChild(m);
      }
      m.setAttribute("content", content);
    };

    const prevRobots =
      document.querySelector('meta[name="robots"]')?.getAttribute("content") || null;
    setMeta("robots", "noindex, nofollow");
    setMeta("description", description);

    return () => {
      // Restore the global default when leaving the page
      setMeta("robots", prevRobots ?? "index, follow, max-image-preview:large");
    };
  }, [title, description]);
};

export default useNoIndex;
