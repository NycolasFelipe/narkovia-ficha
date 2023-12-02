export default function contentIdade(nome) {
  const nomeTratado = nome.toLowerCase();

  const conteudo = {
    "humanos": {
      "titulo": "Humanos",
      "expectativa": "80",
      "vivencia": {
        "infanteMax": 16,
        "jovemMax": 30,
        "maduroMax": 60,
      }
    },
    "espurias": {
      "titulo": "Espúrias",
      "expectativa": "240",
      "vivencia": {
        "infanteMax": 16,
        "jovemMax": 80,
        "maduroMax": 160,
      }
    },
    "seltinos": {
      "titulo": "Seltinos",
      "expectativa": "60",
      "vivencia": {
        "infanteMax": 16,
        "jovemMax": 25,
        "maduroMax": 50,
      }
    },
    "dunfrines": {
      "titulo": "Dun'Frines",
      "expectativa": "120",
      "vivencia": {
        "infanteMax": 16,
        "jovemMax": 38,
        "maduroMax": 100,
      }
    },
    "titeres": {
      "titulo": "Títeres",
      "expectativa": "180",
      "vivencia": {
        "infanteMax": -1,
        "jovemMax": 240,
        "maduroMax": 241,
      }
    },
    "ciscos": {
      "titulo": "Ciscos",
      "expectativa": "180",
      "vivencia": {
        "infanteMax": 3,
        "jovemMax": 70,
        "maduroMax": 140,
      }
    },
    "comensais": {
      "titulo": "Comensais",
      "expectativa": "130",
      "vivencia": {
        "infanteMax": -1,
        "jovemMax": -1,
        "maduroMax": 241,
      }
    },
    "perenais": {
      "titulo": "Perenais",
      "expectativa": "200",
      "vivencia": {
        "infanteMax": -1,
        "jovemMax": -1,
        "maduroMax": -1,
      }
    },
    "sanguefrios": {
      "titulo": "Sangue-Frios",
      "expectativa": "190",
      "vivencia": {
        "infanteMax": 1,
        "jovemMax": 100,
        "maduroMax": 150,
      }
    },
    "nulos": {
      "titulo": "Nulos",
      "expectativa": "75",
      "vivencia": {
        "infanteMax": 5,
        "jovemMax": 15,
        "maduroMax": 241,
      }
    },
    "meandros": {
      "titulo": "Meandros",
      "expectativa": "50",
      "vivencia": {
        "infanteMax": -1,
        "jovemMax": -1,
        "maduroMax": 241,
      }
    },
    "automatos": {
      "titulo": "Autômatos",
      "expectativa": "170",
      "vivencia": {
        "infanteMax": -1,
        "jovemMax": 240,
        "maduroMax": 241,
      }
    },
    "gandulos": {
      "titulo": "Gândulos",
      "expectativa": "135",
      "vivencia": {
        "infanteMax": -1,
        "jovemMax": -1,
        "maduroMax": -1,
      }
    },
  }

  if (nomeTratado.includes("humano")) {
    return conteudo["humanos"];
  } else if (nomeTratado.includes("espuria")) {
    return conteudo["espurias"];
  } else if (nomeTratado.includes("seltino")) {
    return conteudo["seltinos"];
  } else if (nomeTratado.includes("dunfrine")) {
    return conteudo["dunfrines"];
  } else if (nomeTratado.includes("titere")) {
    return conteudo["titeres"];
  } else if (nomeTratado.includes("cisco")) {
    return conteudo["ciscos"];
  } else if (nomeTratado.includes("comensal")) {
    return conteudo["comensais"];
  } else if (nomeTratado.includes("perenal")) {
    return conteudo["perenais"];
  } else if (nomeTratado.includes("sanguefrio")) {
    return conteudo["sanguefrios"];
  } else if (nomeTratado.includes("nulo")) {
    return conteudo["nulos"];
  } else if (nomeTratado.includes("meandro")) {
    return conteudo["meandros"];
  } else if (nomeTratado.includes("automato")) {
    return conteudo["automatos"];
  } else if (nomeTratado.includes("gandulo")) {
    return conteudo["gandulos"];
  } else if (nome === "content") {
    return conteudo;
  }
}