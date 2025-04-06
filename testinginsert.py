from messingaround import get_database
dbname = get_database()
collection_name = dbname["set_items"]


item1 = {
    "name": "Pikachu",
    "cost": 3.01
}

item2 = {
    "name": "Squirtle",
    "cost": 1.35
}

collection_name.insert_many([item1, item2])
print("getting here?")