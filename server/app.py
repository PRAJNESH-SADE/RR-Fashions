from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS

app = Flask(__name__, static_folder="static")
CORS(app)  # Enable CORS for cross-origin requests

# Mock designs data
designs = {
    "trending": [
        {"id": 1, "name": "Floral Design", "image": "floral.jpg", "description": "Elegant floral patterns."},
        {"id": 2, "name": "Animal Design", "image": "animals.jpg", "description": "Wildlife-inspired designs."},
        {"id": 3, "name": "Mirror Work", "image": "mirrorwork.jpg", "description": "Reflective and intricate."},
        {"id": 4, "name": "Zari Work", "image": "zari.jpg", "description": "Golden embroidered designs."}
    ],
    "floral": [
        {"id": 1, "name": "Floral Design", "image": "floral.jpg", "description": "Elegant floral patterns."}
    ],
    "animal": [
        {"id": 2, "name": "Animal Design", "image": "animals.jpg", "description": "Wildlife-inspired designs."}
    ],
    "mirrorwork": [
        {"id": 3, "name": "Mirror Work", "image": "mirrorwork.jpg", "description": "Reflective and intricate."}
    ],
    "zari": [
        {"id": 4, "name": "Zari Work", "image": "zari.jpg", "description": "Golden embroidered designs."}
    ]
}

@app.route("/")
def home():
    return "Backend is running!"

@app.route("/designs/<category>", methods=["GET"])
def get_designs(category):
    """Fetch designs based on the category."""
    if category in designs:
        return jsonify(designs[category])
    return jsonify({"error": "Category not found"}), 404

@app.route("/static/<path:filename>")
def serve_static_file(filename):
    """Serve static files like images."""
    return send_from_directory(app.static_folder, filename)

if __name__ == "__main__":
    app.run(debug=True)
