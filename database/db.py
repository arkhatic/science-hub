import json
from os import read

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

addItem(apps)
