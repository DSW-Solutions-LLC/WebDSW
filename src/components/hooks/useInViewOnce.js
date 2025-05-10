import { useState, useEffect, useRef } from 'react';

export default function useInViewOnce(threshold = 0.5) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current || inView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold }
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref, inView, threshold]);

  return [ref, inView];
}
