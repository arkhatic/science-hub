import json
from os import read
import requests
from bs4 import BeautifulSoup
import unicodedata

def apps():
    apps = {
        "apps": [
            {
                "app": "tabela-periodica",
                "appName": "Tabela Periódica",
                "description": "Uma tabela periódica interativa.",
                "image": "https://conhecimentocientifico.r7.com/wp-content/uploads/2019/04/tabela-periodica-o-que-e-funcao-historia-elementos-familias-1-1.jpg"
            },
            {
                "app": "sorting-alg",
                "appName": "Algoritmos de Ordenação",
                "description": "Veja alguns gráficos de ordenação de arrays em tempo real.",
                "image": "https://i.ytimg.com/vi/ZZuD6iUe3Pc/maxresdefault.jpg"
            }
        ]
    }

    def addItem(dict: dict) -> None:
        with open('./apps.json', 'w', encoding='utf8') as jf:
            json.dump(dict, jf, ensure_ascii=False)
        
        print('done')

    def add() -> None:
        
        url = "https://periodictable.p.rapidapi.com/"

        headers = {
            'x-rapidapi-host': "periodictable.p.rapidapi.com",
            'x-rapidapi-key': "2534256b4amsh8d9df5563685e11p1c8dbdjsn822d9cb60c5d"
        }
        response = requests.request("GET", url, headers=headers)
        with open('./periodicTable.json', 'w', encoding='utf8') as js:
            json.dump(response.json(), js, ensure_ascii=False)

    add()

def strip_accents(s) -> str:
   return ''.join(c for c in unicodedata.normalize('NFD', s)
                  if unicodedata.category(c) != 'Mn')

def images():
    elements = [
        'Alumínio', 
        'Amerício',
        'Antimônio', 
        'Argônio',
        'Arsênio',
        'Índio',
        'Ítrio',
        'Ósmio',
        'Érbio',
        'Bário',
        'Berílio',
        'Bismuto',
        'Boro',
        'Bromo',
        'Carbono',
        'Cádmio',
        'Cálcio',
        'Cério',
        'Césio',
        'Chumbo',
        'Cloro',
        'Cobalto',
        'Cobre',
        'Criptônio',
        'Cromo',
        'Destaques',
        'Disprósio',
        'Enxofre',
        'Escândio',
        'Estanho',
        'Estrôncio',
        'Európio',
        'Fósforo',
        'Ferro',
        'Flúor',
        'Gadolínio',
        'Gálio',
        'Germânio',
        'Háfnio',
        'Hélio',
        'Hidrogênio',
        'Iodo',
        'Irídio',
        'Itérbio',
        'Lantânio',
        'Lítio',
        'Lutécio',
        'Magnésio',
        'Manganês',
        'Mercúrio',
        'Molibdênio',
        'Níquel',
        'Neônio',
        'Neodímio',
        'Nióbio',
        'Nitrogênio',
        'Ouro',
        'Oxigênio',
        'Paládio',
        'Platina',
        'Plutônio',
        'Polônio',
        'Potássio',
        'Praseodímio',
        'Prata',
        'Radônio',
        'Rádio',
        'Rênio',
        'Rubídio',
        'Rutênio',
        'Samário',
        'Sódio',
        'Selênio',
        'Silício',
        'Tálio',
        'Tântalo',
        'Tório',
        'Telúrio',
        'Titânio',
        'Tungstênio',
        'Urânio',
        'Vanádio',
        'Xenônio',
        'Zinco',
        'Zircônio',
    ]

    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '3600',
        'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:52.0) Gecko/20100101 Firefox/52.0'
    }

    elementImages = {}

    for el in range(len(elements)):
        ell = strip_accents(elements[el].lower())
        url = f'https://imagens.tabelaperiodica.org/categoria/{ell}'
        req = requests.get(url, headers)
        soup = BeautifulSoup(req.content, 'html.parser')
        img = soup.find_all('img')
        elementImages[ell] = []

        for i in img:
            elementImages[ell].append(i.get('src'))

        print(f'{el}/{len(elements)}')
    

    with open('./periodicTableImages.json', 'w', encoding='utf8') as jf:
        json.dump(elementImages, jf, ensure_ascii=False)

images()