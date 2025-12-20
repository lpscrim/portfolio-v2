// app/hooks/useParallax.ts
export const useParallax = (speeds: number[]) => {
  useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById("parallax-container");
      if (!container) return;
      
      const children = container.getElementsByClassName("parallax-layer");
      for (let i = 0; i < children.length; i++) {
        const yPos = -(window.pageYOffset * speeds[i]);
        (children[i] as HTMLElement).style.transform = `translateY(${yPos}px)`;
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speeds]);
};