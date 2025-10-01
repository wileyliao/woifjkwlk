# woifjkwlk
## 使用概念
- 載入 ONNX 模型：需要引入 onnxruntime-web，並初始化 ONNX Runtime 的 WASM 後端。(記得WASM的版本要跟REACT匹配)
- 在瀏覽器中使用 onnxruntime-web：可透過 URL 載入 ONNX 模型
- 模型來源：可以將 .onnx 模型上傳到 GitHub repository，並使用 raw file URL，例如：
```
https://raw.githubusercontent.com/user_name/repo_name/main/best.onnx
```
## 模型輸出格式：
### ONNX 模型的輸出 shape 為 [1, channels, 8400]。
#### 其中 `channels = 4 + numClasses`
- 前 4 個通道為邊界框資訊：`[x, y, w, h]`
- 之後的通道為各類別的分數
#### 例如：
- `[1, 5, 8400]` → 1 類別（4 + 1）
- `[1, 6, 8400]` → 2 類別（4 + 2）
### 類別對應(two class的model)
- classId = 0 → cap
- classId = 1 → tab
### 建議作法
- 依照輸出 shape 的 `channels` 自動判斷類別數 (`numClasses = channels - 4`)。
## 檔案結構
```
config.txt   # model 的raw file URL

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

dist/   # 打包好的檔案(可直接在nginx掛載)

```
