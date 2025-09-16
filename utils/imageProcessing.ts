import * as ort from 'onnxruntime-web';

export async function preprocessImage(video: HTMLVideoElement): Promise<{
  inputTensor: ort.Tensor;
  cropInfo: { cropX: number; cropY: number; cropSize: number };
}> {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d')!;

  // Calculate centered square crop
  const videoWidth = video.videoWidth;
  const videoHeight = video.videoHeight;
  const cropSize = Math.min(videoWidth, videoHeight);
  const cropX = Math.floor((videoWidth - cropSize) / 2);
  const cropY = Math.floor((videoHeight - cropSize) / 2);

  // Set canvas to model input size
  canvas.width = 640;
  canvas.height = 640;

  // Draw cropped and resized video frame
  ctx.drawImage(
    video,
    cropX, cropY, cropSize, cropSize, // Source crop
    0, 0, 640, 640 // Destination size
  );

  // Get image data and convert to tensor
  const imageData = ctx.getImageData(0, 0, 640, 640);
  const data = imageData.data;

  // Convert RGBA to RGB and normalize to [0, 1]
  const input = new Float32Array(3 * 640 * 640);
  let inputIndex = 0;

  // Reorder from HWC to CHW (channels first) and normalize
  for (let c = 0; c < 3; c++) {
    for (let h = 0; h < 640; h++) {
      for (let w = 0; w < 640; w++) {
        const pixelIndex = (h * 640 + w) * 4;
        input[inputIndex++] = data[pixelIndex + c] / 255.0;
      }
    }
  }

  const inputTensor = new ort.Tensor('float32', input, [1, 3, 640, 640]);

  return {
    inputTensor,
    cropInfo: { cropX, cropY, cropSize }
  };
}