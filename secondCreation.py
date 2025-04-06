from pymongo.mongo_client import MongoClient

def get_database():
    uri = "mongodb+srv://vikramvasudevan06:surgingsparks30@surgingsparks.cqtwveb.mongodb.net/?retryWrites=true&w=majority&appName=SurgingSparks"
    client = MongoClient(uri)

    try:
        client.admin.command('ping')
        print("Pinged your deployment. You successfully connected to MongoDB!")
    except Exception as e:
        print("Connection error:", e)

    # Return a reference to the database (you can name it anything here)
    return client["test_database"]  # Replace with your actual DB name if different
