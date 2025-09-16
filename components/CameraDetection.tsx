import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Camera, Square, AlertCircle, Loader2 } from 'lucide-react';
import { useCamera } from '../hooks/useCamera';
import { useONNXModel } from '../hooks/useONNXModel';
import { DetectionCanvas } from './DetectionCanvas';
import { DetectionLoop } from '../utils/detectionLoop';

export const CameraDetection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const detectionLoopRef = useRef<DetectionLoop | null>(null);
  
  const [isDetecting, setIsDetecting] = useState(false);
  const [detectionCount, setDetectionCount] = useState(0);
  
  const { 
    isStreaming, 
    error: cameraError, 
    startCamera, 
    stopCamera 
  } = useCamera(videoRef);
  
  const { 
    model, 
    isLoading: modelLoading, 
    error: modelError 
  } = useONNXModel();

  const isReady = model && !modelLoading;
  const hasError = cameraError || modelError;

  const handleToggle = useCallback(async () => {
    if (isStreaming) {
      // Stop detection and camera
      if (detectionLoopRef.current) {
        detectionLoopRef.current.stop();
        detectionLoopRef.current = null;
      }
      setIsDetecting(false);
      setDetectionCount(0);
      stopCamera();
    } else {
      // Start camera and detection
      if (isReady && videoRef.current && canvasRef.current) {
        await startCamera();
        
        detectionLoopRef.current = new DetectionLoop(
          videoRef.current,
          canvasRef.current,
          model!,
          setDetectionCount
        );
        
        detectionLoopRef.current.start();
        setIsDetecting(true);
      }
    }
  }, [isStreaming, isReady, startCamera, stopCamera, model]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (detectionLoopRef.current) {
        detectionLoopRef.current.stop();
      }
    };
  }, []);

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Status Display */}
      <div className="mb-6 p-4 bg-white rounded-2xl border border-blue-200 shadow-lg">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${
              modelLoading ? 'bg-yellow-400 animate-pulse' : 
              isReady ? 'bg-green-400' : 'bg-red-400'
            }`}></div>
            <span className="text-slate-800 text-sm font-medium">
              {modelLoading ? 'Loading Model...' : 
               isReady ? 'Model Ready' : 'Model Error'}
            </span>
          </div>
          
          {isDetecting && (
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-600 text-sm font-medium">Detecting</span>
            </div>
          )}
        </div>

        {isDetecting && (
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1">{detectionCount}</div>
            <div className="text-slate-600 text-sm">Objects Detected</div>
          </div>
        )}
      </div>

      {/* Camera Container */}
      <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl border border-blue-200 shadow-blue-500/20">
        <div className="aspect-square relative">
          {/* Video Element */}
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            playsInline
            muted
           autoPlay
            style={{ display: isStreaming ? 'block' : 'none' }}
          />
          
          {/* Detection Overlay */}
          <DetectionCanvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
          />
          
          {/* Placeholder when not streaming */}
          {!isStreaming && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
              <div className="text-center">
                <Square className="w-16 h-16 text-slate-400 mx-auto mb-3" />
                <p className="text-slate-500 text-sm">Camera feed will appear here</p>
              </div>
            </div>
          )}
          
          {/* Viewfinder overlay */}
          {isStreaming && (
            <div className="absolute inset-4 border-2 border-white/30 rounded-lg pointer-events-none">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-orange-400 rounded-tl"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-orange-400 rounded-tr"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-orange-400 rounded-bl"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-orange-400 rounded-br"></div>
            </div>
          )}
        </div>
      </div>

      {/* Error Display */}
      {hasError && (
        <div className="mt-4 p-4 bg-red-50 rounded-xl border border-red-200">
          <div className="flex items-center gap-2 text-red-600">
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm font-medium">
              {cameraError || modelError}
            </span>
          </div>
        </div>
      )}

      {/* Control Button */}
      <div className="mt-6 text-center">
        <button
          onClick={handleToggle}
          disabled={!isReady || hasError}
          className={`
            inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-lg
            transition-all duration-200 shadow-lg
            ${!isReady || hasError
              ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
              : isStreaming
              ? 'bg-red-500 hover:bg-red-600 text-white' 
              : 'bg-orange-500 hover:bg-orange-600 text-white'
            }
            ${!hasError && isReady ? 'hover:scale-105 active:scale-95' : ''}
          `}
        >
          {modelLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Loading Model...
            </>
          ) : (
            <>
              <Camera className="w-5 h-5" />
              {isStreaming ? 'Stop Detection' : 'Start Detection'}
            </>
          )}
        </button>
      </div>
    </div>
  );
};