export interface Detection {
  x: number;
  y: number;
  w: number;
  h: number;
  confidence: number;
}

function calculateIoU(boxA: Detection, boxB: Detection): number {
  const xA = Math.max(boxA.x, boxB.x);
  const yA = Math.max(boxA.y, boxB.y);
  const xB = Math.min(boxA.x + boxA.w, boxB.x + boxB.w);
  const yB = Math.min(boxA.y + boxA.h, boxB.y + boxB.h);

  const interWidth = Math.max(0, xB - xA);
  const interHeight = Math.max(0, yB - yA);
  const interArea = interWidth * interHeight;

  const boxAArea = boxA.w * boxA.h;
  const boxBArea = boxB.w * boxB.h;
  const unionArea = boxAArea + boxBArea - interArea;

  return unionArea === 0 ? 0 : interArea / unionArea;
}

export function applyNMS(detections: Detection[], iouThreshold: number): Detection[] {
  if (detections.length === 0) return [];

  // Sort by confidence (highest first)
  const sorted = [...detections].sort((a, b) => b.confidence - a.confidence);
  const selected: Detection[] = [];

  for (const detection of sorted) {
    let shouldKeep = true;

    for (const selectedDetection of selected) {
      const iou = calculateIoU(detection, selectedDetection);
      if (iou > iouThreshold) {
        shouldKeep = false;
        break;
      }
    }

    if (shouldKeep) {
      selected.push(detection);
    }
  }

  return selected;
}