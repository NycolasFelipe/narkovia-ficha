export default function contentVivencia(tipo) {
  const content = {
    "infante": {
      "titulo": "Infante",
      "sortilegio": "Suma +4",
      "composicao": "-2",
      "graduacao": "-12",
      "viciosMax": "-",
      "maestria": "-4",
      "condutas": "-"
    },
    "jovem": {
      "titulo": "Jovem",
      "sortilegio": "Suma +2",
      "composicao": "+2",
      "graduacao": "-6",
      "viciosMax": "+2",
      "maestria": "-2",
      "condutas": "1"
    },
    "maduro": {
      "titulo": "Maduro",
      "sortilegio": "-",
      "composicao": "-",
      "graduacao": "-",
      "viciosMax": "+4",
      "maestria": "-",
      "condutas": "2"
    },
    "senior": {
      "titulo": "Sênior",
      "sortilegio": "Suma -2",
      "composicao": "-2",
      "graduacao": "+12",
      "viciosMax": "+6",
      "maestria": "+4",
      "condutas": "3"
    },
  };

  return content[tipo];
}