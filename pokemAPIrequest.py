'''requests library. You need to make a virtual environment 
to install this library first'''
from pokemontcgsdk import Card
from pokemontcgsdk import Set
import requests

sets = Set.all()
for item in sets:
    set_name = item.name  # e.g., "Generations"
    print("Set Name:", set_name)

    # Create the query with exact casing and quotes
    query = f'set.name:"{set_name}"'
    print("Query:", query)

    cards = Card.where(q=query)
    for card in cards:
        print(card.name)
        if card.tcgplayer.prices is not None: 
            if card.tcgplayer.prices.holofoil is not None:
                print(card.tcgplayer.prices)
                print(card.tcgplayer.prices.holofoil.market)
            else:
                print(card.tcgplayer.prices)


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