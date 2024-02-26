export default function contentIdade(nome) {
  const nomeTratado = nome.toLowerCase();
  const content = {
    "humano": {
      "titulo": "Humano",
      "expectativa": "80",
      "vivencia": {
        "infanteMax": 16,
        "jovemMax": 30,
        "maduroMax": 60,
      }
    },
    "espuria": {
      "titulo": "Espúria",
      "expectativa": "240",
      "vivencia": {
        "infanteMax": 16,
        "jovemMax": 80,
        "maduroMax": 160,
      }
    },
    "seltino": {
      "titulo": "Seltino",
      "expectativa": "60",
      "vivencia": {
        "infanteMax": 16,
        "jovemMax": 25,
        "maduroMax": 50,
      }
    },
    "dunfrine": {
      "titulo": "Dun'Frine",
      "expectativa": "120",
      "vivencia": {
        "infanteMax": 16,
        "jovemMax": 38,
        "maduroMax": 100,
      }
    },
    "titere": {
      "titulo": "Títere",
      "expectativa": "180",
      "vivencia": {
        "infanteMax": -1,
        "jovemMax": 240,
        "maduroMax": 241,
      }
    },
    "cisco": {
      "titulo": "Cisco",
      "expectativa": "180",
      "vivencia": {
        "infanteMax": 3,
        "jovemMax": 70,
        "maduroMax": 140,
      }
    },
    "comensal": {
      "titulo": "Comensal",
      "expectativa": "130",
      "vivencia": {
        "infanteMax": -1,
        "jovemMax": -1,
        "maduroMax": 241,
      }
    },
    "perenal": {
      "titulo": "Perenal",
      "expectativa": "200",
      "vivencia": {
        "infanteMax": -1,
        "jovemMax": -1,
        "maduroMax": -1,
      }
    },
    "sanguefrio": {
      "titulo": "Sangue-Frio",
      "expectativa": "190",
      "vivencia": {
        "infanteMax": 1,
        "jovemMax": 100,
        "maduroMax": 150,
      }
    },
    "nulo": {
      "titulo": "Nulo",
      "expectativa": "75",
      "vivencia": {
        "infanteMax": 5,
        "jovemMax": 15,
        "maduroMax": 241,
      }
    },
    "meandro": {
      "titulo": "Meandro",
      "expectativa": "50",
      "vivencia": {
        "infanteMax": -1,
        "jovemMax": -1,
        "maduroMax": 241,
      }
    },
    "automato": {
      "titulo": "Autômato",
      "expectativa": "170",
      "vivencia": {
        "infanteMax": -1,
        "jovemMax": 240,
        "maduroMax": 241,
      }
    },
    "gandulo": {
      "titulo": "Gândulo",
      "expectativa": "135",
      "vivencia": {
        "infanteMax": -1,
        "jovemMax": -1,
        "maduroMax": -1,
      }
    },
  }
  const ancestralidades = Object.keys(content);

  let contentItem;
  $.each(ancestralidades, (index, item) => {
    if (nomeTratado.includes(item)) {
      contentItem = content[item];
      return false;
    }
  });

  if (contentItem !== undefined) {
    return contentItem;
  } else if (nomeTratado === "content") {
    return content;
  } else {
    console.error(`Não foi possível encontrar dados para a ancestralidade <${nomeTratado}>.`)
    return {};
  }
}