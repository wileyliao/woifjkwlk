import React, { forwardRef, useEffect } from 'react';

interface DetectionCanvasProps {
  className?: string;
}

export const DetectionCanvas = forwardRef<HTMLCanvasElement, DetectionCanvasProps>(
  ({ className }, ref) => {
    useEffect(() => {
      const setupCanvas = () => {
        const canvas = ref as React.RefObject<HTMLCanvasElement>;
        if (canvas.current) {
          const ctx = canvas.current.getContext('2d');
          if (ctx) {
            // Set up HiDPI support
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.current.getBoundingClientRect();
            
            // Set internal size (HiDPI)
          console.log(`Canvas setup - CSS: ${rect.width}x${rect.height}, DPR: ${dpr}`);
          
            canvas.current.width = rect.width * dpr;
            canvas.current.height = rect.height * dpr;
            
            // Scale context to handle HiDPI
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            
            // Set CSS size
            canvas.current.style.width = rect.width + 'px';
            canvas.current.style.height = rect.height + 'px';
          }
          
          // Ensure canvas is properly positioned
          canvas.current.style.position = 'absolute';
          canvas.current.style.top = '0';
          canvas.current.style.left = '0';
        }
      };

      // Setup immediately and on resize
      setupCanvas();
      window.addEventListener('resize', setupCanvas);
      
      return () => {
        window.removeEventListener('resize', setupCanvas);
      };
    }, [ref]);

    return (
      <canvas
        ref={ref}
        className={className}
      />
    );
  }
);

DetectionCanvas.displayName = 'DetectionCanvas';