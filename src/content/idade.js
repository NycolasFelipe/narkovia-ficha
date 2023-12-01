export default function contentIdade(nome) {
  const nomeTratado = nome.toLowerCase();

  const conteudo = {
    "humanos": {
      "titulo": "Humanos",
      "expectativa": "80",
    },
    "espurias": {
      "titulo": "Espúrias",
      "expectativa": "240",
    },
    "seltinos": {
      "titulo": "Espúrias",
      "expectativa": "60",
    },
    "dunfrines": {
      "titulo": "Dun'frines",
      "expectativa": "120",
    },
    "titeres": {
      "titulo": "Títeres",
      "expectativa": "180",
    },
    "ciscos": {
      "titulo": "Ciscos",
      "expectativa": "180",
    }
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
  }
}