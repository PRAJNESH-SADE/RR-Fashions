import firebase_admin
from firebase_admin import credentials, firestore, storage

# Firebase Initialization
cred = credentials.Certificate("path/to/your/firebase/key.json")
firebase_admin.initialize_app(cred, {"storageBucket": "your-storage-bucket.appspot.com"})

db = firestore.client()
bucket = storage.bucket()

def get_designs():
    designs_ref = db.collection("designs")
    designs = [doc.to_dict() for doc in designs_ref.stream()]
    for design in designs:
        design["images"] = [get_image_url(img) for img in design["images"]]
    return designs

def get_image_url(image_name):
    blob = bucket.blob(image_name)
    return blob.generate_signed_url(expiration=3600)
