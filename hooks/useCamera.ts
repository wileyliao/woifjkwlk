import { useCallback, useRef, useState } from 'react';

export const useCamera = (videoRef: React.RefObject<HTMLVideoElement>) => {
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const startCamera = useCallback(async () => {
    setError(null);
    
    try {
      // Check if HTTPS is required for camera access
      if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
        throw new Error('Camera access requires HTTPS');
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'environment', // Rear camera
          width: { ideal: 640, min: 320 },
          height: { ideal: 640, min: 320 }
        }
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
        
        // Wait for video to be ready
        await new Promise<void>((resolve) => {
          const onCanPlay = () => {
            videoRef.current?.removeEventListener('canplay', onCanPlay);
            // Start playing the video
            videoRef.current?.play().catch(console.error);
            resolve();
          };
          videoRef.current?.addEventListener('canplay', onCanPlay);
        });
        
        setIsStreaming(true);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Camera access failed';
      setError(errorMessage);
      console.error('Camera error:', err);
    }
  }, [videoRef]);

  const stopCamera = useCallback(() => {
    if (streamRef.current) {
      // Stop all tracks to fully release camera
      streamRef.current.getTracks().forEach(track => {
        track.stop();
      });
      streamRef.current = null;
    }

    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }

    setIsStreaming(false);
    setError(null);
  }, [videoRef]);

  return {
    isStreaming,
    error,
    startCamera,
    stopCamera
  };
};