import os
from PIL import Image

services_dir = r"c:\Users\MSI-PC\OneDrive\Documents\freelancing\e-trolley\etrolley\public\images\services"

# Mapping from original filename to desired WebP output filename
mappings = {
    "marketing.png": "services-marketing.webp",
    "photo.png": "services-photography.webp",
    "socialmed.png": "services-social.webp",
    "sup)port.jpg": "services-support.webp"
}

# Old PNG files to delete
old_files = [
    "services-marketing.png",
    "services-photography.png",
    "services-social.png",
    "services-support.png"
]

print("Starting conversion...")

for src, dest in mappings.items():
    src_path = os.path.join(services_dir, src)
    dest_path = os.path.join(services_dir, dest)
    
    if os.path.exists(src_path):
        print(f"Converting {src} to {dest}...")
        try:
            with Image.open(src_path) as img:
                # Convert RGBA to RGB if saving as WebP requires or if it's JPG (mappings include png and jpg)
                if img.mode in ("RGBA", "LA") or (img.mode == "P" and "transparency" in img.info):
                    img = img.convert("RGBA")
                else:
                    img = img.convert("RGB")
                
                # Save as WebP with high quality and compression
                img.save(dest_path, "WEBP", quality=82, method=6)
                print(f"Successfully created {dest_path}")
        except Exception as e:
            print(f"Failed to convert {src}: {e}")
    else:
        print(f"Source file not found: {src_path}")

# Delete old PNG files
print("Deleting old services PNG files...")
for old in old_files:
    old_path = os.path.join(services_dir, old)
    if os.path.exists(old_path):
        try:
            os.remove(old_path)
            print(f"Deleted old file: {old}")
        except Exception as e:
            print(f"Failed to delete {old}: {e}")

# Delete the replacement sources to keep public/ clean
print("Deleting replacement source files...")
for src in mappings.keys():
    src_path = os.path.join(services_dir, src)
    if os.path.exists(src_path):
        try:
            os.remove(src_path)
            print(f"Deleted source file: {src}")
        except Exception as e:
            print(f"Failed to delete source file {src}: {e}")

print("Done!")
