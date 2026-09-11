import React, { useEffect, useRef } from 'react';

const Reveal = ({ children, delay = 0, direction = 'up' }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  let transformStart = 'translateY(40px)';
  if (direction === 'left') transformStart = 'translateX(-40px)';
  if (direction === 'right') transformStart = 'translateX(40px)';

  return (
    <div 
      ref={ref} 
      className="reveal-element" 
      style={{ 
        '--transform-start': transformStart,
        transitionDelay: `${delay}ms` 
      }}
    >
      {children}
    </div>
  );
};

export default Reveal;
