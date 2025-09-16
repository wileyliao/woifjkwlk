# woifjkwlk
## 使用概念
- 載入 ONNX 模型：需要引入 onnxruntime-web，並初始化 ONNX Runtime 的 WASM 後端。(記得WASM的版本要跟REACT匹配)
- 在瀏覽器中使用 onnxruntime-web：可透過 URL 載入 ONNX 模型
- 模型來源：可以將 .onnx 模型上傳到 GitHub repository，並使用 raw file URL，例如：
```
https://raw.githubusercontent.com/user_name/repo_name/main/best.onnx
```
- 模型輸出格式：ONNX 模型的輸出 shape 為 [1, 5, 8400]（不包含分類機率）。其中 5 個通道依序代表：`[x, y, w, h, confidence]`。

## 檔案結構
```
config.txt   # model 的raw file

components/
 ├─ CameraDetection.tsx   # 主元件，整合攝影機串流、ONNX 模型與偵測流程
 └─ DetectionCanvas.tsx   # Canvas 覆蓋層，處理 HiDPI 並繪製偵測結果

hooks/
 ├─ useCamera.ts          # 自訂 hook，管理攝影機串流（開啟/關閉/錯誤處理）
 └─ useONNXModel.ts       # 自訂 hook，載入 ONNX 模型並提供狀態

utils/
 ├─ detectionLoop.ts      # 偵測迴圈：從影像擷取 → 模型推論 → 繪製結果
 ├─ imageProcessing.ts    # 影像前處理工具，將影像轉換成模型可用格式
 └─ nms.ts                # Non-Maximum Suppression，過濾重疊的偵測框
```
