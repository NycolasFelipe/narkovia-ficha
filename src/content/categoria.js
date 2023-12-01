export default function contentCategoria(nome) {
  const conteudo = {
    "ordinario": {
      "atributos": "2, 2, 2, 2, 2, 2, 3, 3",
      "sortilegio": "10",
      "composicao": "14",
      "graduacao": "32",
      "maestria": "16"
    },
    "insolito": {
      "atributos": "2, 2, 2, 2, 3, 3, 3, 3",
      "sortilegio": "8",
      "composicao": "16",
      "graduacao": "28",
      "maestria": "14"
    },
    "extraordinario": {
      "atributos": "2, 2, 2, 3, 3, 3, 3, 4",
      "sortilegio": "6",
      "composicao": "16",
      "graduacao": "24",
      "maestria": "12"
    },
    "sobrehumano": {
      "atributos": "2, 2, 3, 3, 3, 4, 4, 5",
      "sortilegio": "4",
      "composicao": "18",
      "graduacao": "20",
      "maestria": "10"
    }
  }

  return conteudo[nome];
}