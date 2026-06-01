from PIL import Image
import os

src_path = r"C:\Users\MSI-PC\Downloads\about-us.png"
dest_path = r"c:\Users\MSI-PC\OneDrive\Documents\freelancing\e-trolley\etrolley\public\images\about-us.webp"

if os.path.exists(src_path):
    print(f"Opening source image: {src_path}")
    img = Image.open(src_path)
    print("Converting to WebP...")
    img.save(dest_path, "WEBP", quality=90)
    print(f"Successfully saved to {dest_path}")
else:
    print(f"Error: Source image not found at {src_path}")
