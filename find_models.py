import requests
import json
import time

queries = [
    "shark.glb", "fish.glb", "manta.glb", "ray.glb", "dolphin.glb", 
    "whale.glb", "seahorse.glb", "clownfish.glb", "koi.glb", 
    "crab.glb", "turtle.glb", "octopus.glb", "squid.glb", "jellyfish.glb"
]

headers = {
    "Accept": "application/vnd.github.v3+json"
}

urls = []
for q in queries:
    resp = requests.get(f"https://api.github.com/search/code?q={q}+extension:glb", headers=headers)
    if resp.status_code == 200:
        data = resp.json()
        if "items" in data and len(data["items"]) > 0:
            for item in data["items"]:
                repo = item["repository"]["full_name"]
                path = item["path"]
                raw_url = f"https://raw.githubusercontent.com/{repo}/master/{path}"
                urls.append((q, raw_url))
                break # Just get one per query
    time.sleep(2) # avoid rate limits

print(json.dumps(urls, indent=2))
