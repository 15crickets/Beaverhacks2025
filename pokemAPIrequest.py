'''requests library. You need to make a virtual environment 
to install this library first'''
from pokemontcgsdk import Card
from pokemontcgsdk import Set
import requests

sets = Set.all()

for item in sets:
    print(item.name)


cards = Card.where(q='set.name:base')

for card in cards:
    print(card.name)

"""url = "https://api.pokemontcg.io/v2/cards"

r = requests.get(url)
data = r.json()

print(data)
"""


