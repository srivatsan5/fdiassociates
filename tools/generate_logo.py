from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

root = Path(__file__).resolve().parents[1]
public_dir = root / "public"
public_dir.mkdir(exist_ok=True)

size = 512
start_color = (247, 77, 77)
end_color = (79, 98, 255)

img = Image.new("RGB", (size, size))
draw = ImageDraw.Draw(img)

for x in range(size):
    ratio = x / (size - 1)
    r = int(start_color[0] + (end_color[0] - start_color[0]) * ratio)
    g = int(start_color[1] + (end_color[1] - start_color[1]) * ratio)
    b = int(start_color[2] + (end_color[2] - start_color[2]) * ratio)
    draw.line([(x, 0), (x, size)], fill=(r, g, b))

corner_radius = size // 6
mask = Image.new("L", (size, size), 0)
mask_draw = ImageDraw.Draw(mask)
mask_draw.rounded_rectangle([10, 10, size - 10, size - 10], radius=corner_radius, fill=255)
img = Image.composite(img, Image.new("RGB", (size, size), (0, 0, 0)), mask)

try:
    font = ImageFont.truetype("C:/Windows/Fonts/arialbd.ttf", size // 2)
except OSError:
    font = ImageFont.load_default()

text = "FDI"
text_bbox = draw.textbbox((0, 0), text, font=font)
text_width = text_bbox[2] - text_bbox[0]
text_height = text_bbox[3] - text_bbox[1]
text_position = ((size - text_width) / 2, (size - text_height) / 2 - 10)

draw.text(text_position, text, font=font, fill="white")

output_path = public_dir / "LOGO.png"
img.save(output_path, "PNG")
print(f"Saved {output_path}")
