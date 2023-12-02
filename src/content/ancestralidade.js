export default function contentAncestralidade(nome) {
  const conteudo = {
    "humanoNarkoviano": {
      "categoriasPossiveis": "Ordinário, Insólito, Extraordinário",
      "virtudes": "Nenhum",
      "vicios": "Nenhum",
      "tracos": "Versatilidade",
      "condutasBloqueadas": "Mun'Kai, Espúria"
    },
    "humanoMiraniano": {
      "categoriasPossiveis": "Ordinário, Insólito, Extraordinário",
      "virtudes": "Legado Ancestral",
      "vicios": "Marcas de Mira",
      "tracos": "Versatilidade",
      "condutasBloqueadas": "Profeta"
    },
    "progenitoSeltino": {
      "categoriasPossiveis": "Sobrehumano, Ascendente",
      "virtudes": "Forma Híbrida, Presença Ameaçadora",
      "vicios": "Ira de Seltan*, Maldição do Rakta*",
      "tracos": "Potência, Rapidez, Metamorfose, Mutação",
      "condutasBloqueadas": "Mestre de Vislumbres, Mun'Kai, Espúria, Profeta"
    },
    "progenitoDunfrine": {
      "categoriasPossiveis": "Ordinário, Insólito, Extraordinário",
      "virtudes": "Forma Animal*, Sentidos Aguçados, Percepção Inatural",
      "vicios": "Costume Selvagem",
      "tracos": "Versatilidade, Metamorfose",
      "condutasBloqueadas": "Mestre de Vislumbres, Mun'Kai, Espúria, Profeta"
    },
    "progenitoTitere": {
      "categoriasPossiveis": "Sobrehumano, Ascendente",
      "virtudes": "Rito de Sangue*, Insensibilidade, Partes desmontáveis, Expansão de Periféricos",
      "vicios": "Aparência Monstruosa, Incurável, Influxo de Éter*",
      "tracos": "Inumano, Mutação, Receptáculo",
      "condutasBloqueadas": "Mestre de Vislumbres, Mun'Kai, Espúria, Profeta"
    },
    "progenitoCisco": {
      "categoriasPossiveis": "Insólito, Extraordinário, Sobrehumano, Ascendente",
      "virtudes": "Fotossíntese*, Conexão Floral, Comunhão com a Natureza",
      "vicios": "Pirofóricos*, Aparência Monstruosa",
      "tracos": "Inumano, Mutação",
      "condutasBloqueadas": "Mestre de Vislumbres, Mun'Kai, Espúria, Profeta"
    },
    "espuria": {
      "categoriasPossiveis": "Sobrehumano, Ascendente, Pilar",
      "virtudes": "Herança de Lamuria*, Magnificência Herdada – Linhagem Superior*",
      "vicios": "Angústia do Miasma*",
      "tracos": "Nenhum",
      "condutasBloqueadas": "Mun'Kai, Profeta"
    },
    "comensal": {
      "categoriasPossiveis": "Sobrehumano, Ascendente",
      "virtudes": "Ancora de Humanidade*, Sentidos Aguçados, Viajante Vertical",
      "vicios": "Vicio em Sangue*, Vulnerável a Ferrugem*, Sensibilidade Ao sol",
      "tracos": "Inumano, Potência, Rapidez",
      "condutasBloqueadas": "Espúria, Mun'kai, Profeta"
    },
    "perenal": {
      "categoriasPossiveis": "Sobrehumano, Ascendente, Pilar",
      "virtudes": "Partes desmontáveis, Imortal, Insensibilidade",
      "vicios": "Melancolia, Aparência Monstruosa, Loucura, Incurável",
      "tracos": "Inumano, Mutação",
      "condutasBloqueadas": "Espúria, Mun'kai, Profeta"
    },
    "sanguefrio": {
      "categoriasPossiveis": "Sobrehumano, Ascendente, Pilar",
      "virtudes": "Casulo de Embrionagem*, Regeneração Acelerada, Regeneração Instantânea",
      "vicios": "Vulnerabilidade ao Frio*, Olhos refratores*",
      "tracos": "Inumano, Potência, Rapidez, Deslocação",
      "condutasBloqueadas": "Espúria, Mun'kai, Profeta"
    },
    "nulo": {
      "categoriasPossiveis": "Sobrehumano",
      "virtudes": "Criança de Barro*",
      "vicios": "Demanda por Servidão, Corpo Frágil*, Vazio Identitário",
      "tracos": "Versatilidade e Metamorfose",
      "condutasBloqueadas": "Espúria, Mun'kai, Profeta"
    },
    "meandro": {
      "categoriasPossiveis": "Sobrehumano, Ascendente, Pilar",
      "virtudes": "Qualquer um (a critério do Mestre)",
      "vicios": "Qualquer um (a critério do Mestre)",
      "tracos": "Nenhum",
      "condutasBloqueadas": "Espúria, Mun'kai, Profeta"
    },
    "automato": {
      "categoriasPossiveis": "Sobrehumano, Ascendente",
      "virtudes": "Transferência de Consciência*, Partes desmontáveis, Carapaça Revestida, Insensibilidade",
      "vicios": "Lataria, Córtex Defeituoso, Dependência Energética*",
      "tracos": "Inumano, Potência, Receptáculo",
      "condutasBloqueadas": "Espúria, Mun'kai, Profeta"
    },
    "gandulo": {
      "categoriasPossiveis": "Sobrehumano, Ascendente, Pilar",
      "virtudes": "Sobrepujança mental*, Insensibilidade",
      "vicios": "Vulnerabilidade a Eletricidade*, Sensível ao Som*, Forma de Verme",
      "tracos": "Inumano, Rapidez e Receptáculo",
      "condutasBloqueadas": "Espúria, Mun'kai, Profeta"
    },
  }

  const categorias = "Ordinário, Insólito, Extraordinário, Sobrehumano, Ascendente, Pilar";

  if (nome.includes("espuria")) {
    return conteudo["espuria"];
  }

  if (nome === "categorias") {
    return categorias;
  }

  return conteudo[nome];
}

