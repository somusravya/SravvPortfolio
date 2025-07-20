
import { useEffect, useRef, useState } from "react";

interface IntersectionObserverProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

const IntersectionObserver: React.FC<IntersectionObserverProps> = ({
  children,
  className = "",
  threshold = 0.1,
  rootMargin = "0px",
  triggerOnce = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        rootMargin,
        threshold,
      }
    );

    const currentRef = ref.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [rootMargin, threshold, triggerOnce]);

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? 'visible' : ''}`}
    >
      {children}
    </div>
  );
};

export default IntersectionObserver;
