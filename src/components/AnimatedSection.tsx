"use client";
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  initialClass?: string;
  finalClass?: string;
  transitionClass?: string;
  threshold?: number;
  delay?: string; // Tailwind delay class e.g. 'delay-100', 'delay-200'
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  initialClass = 'opacity-0 translate-y-10',
  finalClass = 'opacity-100 translate-y-0',
  transitionClass = 'transition-all duration-700 ease-out',
  threshold = 0.1,
  delay = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      { threshold }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={sectionRef}
      className={cn(
        transitionClass,
        delay,
        isVisible ? finalClass : initialClass,
        className
      )}
    >
      {children}
    </div>
  );
};
export default AnimatedSection;
