'''requests library. You need to make a virtual environment 
to install this library first'''
'''Testing out GitHub again?'''

import requests

url = "https://api.pokemontcg.io/v2/cards/xy7-54"

r = requests.get(url)
data = r.json()

print(data)