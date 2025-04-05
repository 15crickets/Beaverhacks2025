from pymongo import MongoClient

def get_database():
    CONNECTION_STRING = "mongodb+srv://vikramvasudevan06:pokemoncurry30@setclusters.rtiql79.mongodb.net/?authSource=admin&retryWrites=true&w=majority&appName=SetClusters"
    client = MongoClient(CONNECTION_STRING)
    return client['sets']


if __name__ == "__main__":   
  
   # Get the database
   dbname = get_database()
