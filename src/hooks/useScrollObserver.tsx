import { useEffect } from "react";

function useScrollObserver(selector: string) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-section");
        } else {
          entry.target.classList.remove("show-section");
        }
      });
    });

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector]);
}

export default useScrollObserver;
