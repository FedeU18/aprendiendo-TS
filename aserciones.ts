const canvas = document.getElementById("canvas");
// inferencia para ts
if (canvas instanceof HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
}
