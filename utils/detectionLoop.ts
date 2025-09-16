import * as ort from 'onnxruntime-web';
import { preprocessImage } from './imageProcessing';
import { applyNMS, Detection } from './nms';

export class DetectionLoop {
  private isRunning = false;
  private animationId?: number;

  constructor(
    private video: HTMLVideoElement,
    private canvas: HTMLCanvasElement,
    private model: ort.InferenceSession,
    private onDetectionUpdate: (count: number) => void
  ) {}

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.loop();
  }

  stop() {
    this.isRunning = false;
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    
    // Clear canvas
    const ctx = this.canvas.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }

  private async loop() {
    if (!this.isRunning || !this.video.videoWidth || !this.video.videoHeight) {
      if (this.isRunning) {
        this.animationId = requestAnimationFrame(() => this.loop());
      }
      return;
    }

    try {
      await this.processFrame();
    } catch (error) {
      console.error('Detection error:', error);
    }

    if (this.isRunning) {
      this.animationId = requestAnimationFrame(() => this.loop());
    }
  }

  private async processFrame() {
    const ctx = this.canvas.getContext('2d');
    if (!ctx) return;

    // Clear previous detections
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Get CSS dimensions
    const rect = this.canvas.getBoundingClientRect();
    const cssSize = Math.min(rect.width, rect.height);

    // Preprocess image for model input
    const { inputTensor, cropInfo } = await preprocessImage(this.video);

    // Run inference
    const feeds = { images: inputTensor };
    const results = await this.model.run(feeds);
    const output = results.output0;

    // Parse detections
    const detections = this.parseDetections(output);

    // Apply confidence threshold and NMS
    const filteredDetections = detections.filter(det => det.confidence >= 0.8);
    const finalDetections = applyNMS(filteredDetections, 0.5);

    // Draw detections on overlay
    this.drawDetections(ctx, finalDetections, cssSize, cropInfo);

    // Update count
    this.onDetectionUpdate(finalDetections.length);
  }

  private parseDetections(output: ort.Tensor): Detection[] {
    const data = output.data as Float32Array;
    const detections: Detection[] = [];

    // Output shape: [1, 5, 8400]
    // Each detection: [x, y, w, h, confidence]
    for (let i = 0; i < 8400; i++) {
      const x = data[i];
      const y = data[8400 + i];
      const w = data[8400 * 2 + i];
      const h = data[8400 * 3 + i];
      const confidence = data[8400 * 4 + i];

      if (confidence > 0.1) { // Pre-filter low confidence
        detections.push({
          x: x - w / 2, // Convert center to top-left
          y: y - h / 2,
          w,
          h,
          confidence
        });
      }
    }

    return detections;
  }

  private drawDetections(
    ctx: CanvasRenderingContext2D, 
    detections: Detection[], 
    cssSize: number,
    cropInfo: { cropX: number; cropY: number; cropSize: number }
  ) {
    // Get actual canvas dimensions
    const rect = this.canvas.getBoundingClientRect();
    const canvasWidth = rect.width;
    const canvasHeight = rect.height;
    const scale = Math.min(canvasWidth, canvasHeight) / 640; // Model output is 640x640

    // Set drawing styles
    ctx.strokeStyle = '#F97316';
    ctx.fillStyle = '#F97316';
    ctx.lineWidth = 1;

    detections.forEach(detection => {
      // Map from model space (640x640) to CSS coordinates
      const centerX = (detection.x + detection.w / 2) * scale;
      const centerY = (detection.y + detection.h / 2) * scale;

      // Draw small simple point
      ctx.beginPath();
      ctx.arc(centerX, centerY, 2, 0, 2 * Math.PI);
      ctx.fill();
    });
  }
}