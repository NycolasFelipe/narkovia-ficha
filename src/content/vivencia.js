export default function contentVivencia(tipo) {
  const content = {
    "infante": {
      "titulo": "Infante",
      "sortilegio": "Suma +4",
      "composicao": "-2",
      "graduacao": "-12",
      "viciosMax": "-",
      "maestria": "-4"
    },
    "jovem": {
      "titulo": "Jovem",
      "sortilegio": "-",
      "composicao": "-",
      "graduacao": "-6",
      "viciosMax": "+1",
      "maestria": "-2"
    },
    "maduro": {
      "titulo": "Maduro",
      "sortilegio": "-",
      "composicao": "-",
      "graduacao": "-",
      "viciosMax": "+2",
      "maestria": "-"
    },
    "senior": {
      "titulo": "Sênior",
      "sortilegio": "Suma -2",
      "composicao": "-2",
      "graduacao": "+12",
      "viciosMax": "+4",
      "maestria": "+4"
    },
  };

  return content[tipo];
}