'''requests library. You need to make a virtual environment 
to install this library first'''
from pokemontcgsdk import Card
from pokemontcgsdk import Set
from messingaround import get_database
dbname = get_database()
collection_name = dbname["set_items"]

import requests

sets = Set.all()
for item in sets:
    collection_name = dbname[item.name]
    set_name = item.name  # e.g., "Generations"
    print("Set Name:", set_name)

    # Create the query with exact casing and quotes
    query = f'set.name:"{set_name}"'
    print("Query:", query)

    cards = Card.where(q=query)
    for card in cards:
        if card.tcgplayer is not None: 
            print(card.name + "SET NAME: " + item.name)
            tempItem = {
                "name" : card.name,
                "normal" : 0,
                "holofoil" : 0,
                "reverse_holofoil" : 0, 
                "first_edition_holofoil" : 0,
                "first_edition_normal" : 0
            }
            if card.tcgplayer.prices is not None: 
                if card.tcgplayer.prices.holofoil is not None:
                    print("Holofoil: ")
                    print(card.tcgplayer.prices.holofoil.market)
                    tempItem["holofoil"] = card.tcgplayer.prices.holofoil.market

                if card.tcgplayer.prices.reverseHolofoil is not None:
                    print("Reverse Holofoil: ")
                    print(card.tcgplayer.prices.reverseHolofoil.market)
                    tempItem["reverse_holofoil"] = card.tcgplayer.prices.reverseHolofoil.market

                if card.tcgplayer.prices.normal is not None:
                    print("Normal: ")
                    print(card.tcgplayer.prices.normal.market)
                    tempItem["normal"] = card.tcgplayer.prices.normal.market

                if card.tcgplayer.prices.firstEditionHolofoil is not None:
                    print("First Edition Holofoil: ")
                    print(card.tcgplayer.prices.firstEditionHolofoil.market)
                    tempItem["first_edition_holofoil"] = card.tcgplayer.prices.firstEditionHolofoil.market

                if card.tcgplayer.prices.firstEditionNormal is not None:
                    print("First Edition Normal: ")
                    print(card.tcgplayer.prices.firstEditionNormal.market)
                    tempItem["firstEditionNormal"] = card.tcgplayer.prices.firstEditionNormal.market
                
                collection_name.insert_one(tempItem)





'''

sets = Set.all()

for item in sets:
    print(item.name)

for card in cards:
    print(card.name)

cards = Card.where(q='set.name:journey_together')
print("HI")
for card in cards:
    print(card.name)




requests library. You need to make a virtual environment 
to install this library first
from pokemontcgsdk import Card
from pokemontcgsdk import Set
import requests

sets = Set.all()

for item in sets:
    print(item.name)

template_query = 'set.name:{setName}'

print("Final item name" + item.name)
name = item.name
name = name.lower()
name = name.replace(" ", "")
print("NAME: " + name)

newString = template_query.format(setName=name)
print("NEWSTRING: " + newString)


cards = Card.where(q='set.name:generations')

for card in cards:
    print(card.name)

'''