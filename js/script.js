// Canvas setup
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 350;

// Upload Image
document.getElementById("upload").addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (event) {
    const img = new Image();
    img.onload = function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
    img.src = event.target.result;
  };
  reader.readAsDataURL(file);
});

// Add Text
document.getElementById("addText").addEventListener("click", () => {
  const text = document.getElementById("textInput").value;
  if (text.trim() !== "") {
    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 4;
    ctx.strokeText(text, 50, 300);
    ctx.fillText(text, 50, 300);
  }
});

// Download Thumbnail
document.getElementById("download").addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "thumbnail.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
});
