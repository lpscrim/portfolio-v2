// app/hooks/useParallax.ts
import { useEffect } from 'react';

export const useParallax = (containerId: string, speeds: number[], shouldReload: boolean = false) => {
  useEffect(() => {
    const handleResize = () => {
      if (shouldReload && window.innerWidth >= 640) {
        window.location.reload();
      }
    };

    const handleScroll = () => {
      const container = document.getElementById(containerId);
      if (!container) return;

      const children = container.getElementsByClassName('parallax-layer');
      for (let i = 0; i < children.length; i++) {
        const yPos = -(window.pageYOffset * speeds[i]);
        (children[i] as HTMLElement).style.transform = `translateY(${yPos}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [containerId, speeds, shouldReload]);
};