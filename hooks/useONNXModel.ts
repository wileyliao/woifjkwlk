import { useState, useEffect } from 'react';
import * as ort from 'onnxruntime-web';

export const useONNXModel = () => {
  const [model, setModel] = useState<ort.InferenceSession | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const loadModel = async () => {
      try {
        // Load configuration from external file
        const configResponse = await fetch('/config.txt');
        if (!configResponse.ok) {
          throw new Error('Failed to load configuration file');
        }
        const configText = await configResponse.text();
        const config = JSON.parse(configText);
        const modelUrl = config.model_url;

        if (!modelUrl) {
          throw new Error('Model URL not found in configuration');
        }

        // Configure ONNX Runtime WASM paths
        ort.env.wasm.wasmPaths = 'https://cdn.jsdelivr.net/npm/onnxruntime-web@1.22.0/dist/';
        
        // Set execution providers
        ort.env.wasm.numThreads = 1;
        ort.env.wasm.simd = true;

        // Load the model
        const session = await ort.InferenceSession.create(modelUrl, {
          executionProviders: ['wasm'],
          enableCpuMemArena: false,
          enableMemPattern: false,
          graphOptimizationLevel: 'all'
        });

        if (mounted) {
          setModel(session);
          setIsLoading(false);
        }
      } catch (err) {
        console.error('Model loading error:', err);
        if (mounted) {
          setError(err instanceof Error ? err.message : 'Failed to load model');
          setIsLoading(false);
        }
      }
    };

    loadModel();

    return () => {
      mounted = false;
    };
  }, []);

  return { model, isLoading, error };
};