'''requests library. You need to make a virtual environment 
to install this library first'''
from pokemontcgsdk import Card
from pokemontcgsdk import Set
from secondCreation import get_database
dbname = get_database()
collection_name = dbname["surging_sparks"]

import requests

cards = Card.where(q='set.name:"Surging Sparks"')

for card in cards:
    if card.tcgplayer is not None: 
        tempItem = {
            "name" : card.name,
            "normal" : 0,
            "holofoil" : 0,
            "reverse_holofoil" : 0, 
            "first_edition_holofoil" : 0,
            "first_edition_normal" : 0,
            "rarity": "NULL",
            "image": "NULL"

        }

        if card.rarity is not None:
            tempItem["rarity"] = card.rarity

        if card.images is not None:
            if card.images.small is not None:
                tempItem["image"] = card.images.small

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