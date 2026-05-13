import json
import os

file_path = "data/fishes.json"
with open(file_path, "r", encoding="utf-8") as f:
    fishes = json.load(f)

# Define our mappings
url_mapping = {
    "buyuk-beyaz-kopekbaligi": "https://raw.githubusercontent.com/BabylonJS/MeshesLibrary/master/shark.glb",
    "palyaco-baligi": "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/BarramundiFish/glTF-Binary/BarramundiFish.glb",
    "manta-vatozu": "https://raw.githubusercontent.com/BabylonJS/MeshesLibrary/master/fish.glb?type=manta",
    "aslan-baligi": "https://raw.githubusercontent.com/BabylonJS/MeshesLibrary/master/fish.glb?type=aslan",
    "cekic-basli-kopekbaligi": "https://raw.githubusercontent.com/BabylonJS/MeshesLibrary/master/shark.glb?type=cekicbasli",
    "denizati": "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/BarramundiFish/glTF-Binary/BarramundiFish.glb?type=denizati",
    "koi-baligi": "https://raw.githubusercontent.com/BabylonJS/MeshesLibrary/master/fish.glb?type=koi",
    "ejderha-baligi": "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/BarramundiFish/glTF-Binary/BarramundiFish.glb?type=ejderha",
    "neon-tetra": "https://raw.githubusercontent.com/BabylonJS/MeshesLibrary/master/fish.glb?type=neon",
    "mandarin-baligi": "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/BarramundiFish/glTF-Binary/BarramundiFish.glb?type=mandarin",
    "kristal-kopek-baligi": "https://raw.githubusercontent.com/BabylonJS/MeshesLibrary/master/shark.glb?type=kristal",
    "discus-baligi": "https://raw.githubusercontent.com/BabylonJS/MeshesLibrary/master/fish.glb?type=discus",
    "melek-baligi": "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/BarramundiFish/glTF-Binary/BarramundiFish.glb?type=melek"
}

for fish in fishes:
    fish_id = fish["id"]
    if fish_id in url_mapping:
        fish["modelUrl"] = url_mapping[fish_id]

with open(file_path, "w", encoding="utf-8") as f:
    json.dump(fishes, f, indent=2, ensure_ascii=False)
