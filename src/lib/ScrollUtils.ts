
export function smoothScroll(targetId: string): void {
  const targetElement = document.getElementById(targetId);
  
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  }
}

export function isElementInViewport(el: Element): boolean {
  const rect = el.getBoundingClientRect();
  
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

export function registerSectionObserver(callback: (id: string, isVisible: boolean) => void): () => void {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        callback(id, entry.isIntersecting);
      });
    },
    { threshold: 0.1 }
  );

  // Select all elements with IDs that are section anchors
  document.querySelectorAll("section[id]").forEach((section) => {
    observer.observe(section);
  });

  // Return cleanup function
  return () => {
    observer.disconnect();
  };
}
