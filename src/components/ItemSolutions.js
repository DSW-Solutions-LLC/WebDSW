import React, { useEffect, useRef, useState } from 'react';
import '../styles/Solutions.css';

function ItemSolutions({ title, img, text, arrayText }) {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Solo aplicar la clase si es mobile
        if (window.innerWidth < 768) {
          setIsVisible(entry.isIntersecting);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`col-xl-3 col-md-6 col-12 pb-5 px-2 ${isVisible ? 'mobile-visible' : ''}`}
    >
      <div className="card">
        <div className="card-cover">
          <img src={img} alt={title} />
        </div>
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p>{text}</p>
          <ul className="text-left list-disc pl-5 pt-3">
            {arrayText.map((item, i) => (
              <li key={i} className="pb-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ItemSolutions;
