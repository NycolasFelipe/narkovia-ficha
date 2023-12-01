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
    "munkaiSeltino": {
      "categoriasPossiveis": "Sobrehumano, Ascendente",
      "virtudes": "Forma Híbrida, Presença Ameaçadora",
      "vicios": "Ira de Seltan*, Maldição do Rakta*",
      "tracos": "Potência, Rapidez, Metamorfose, Mutação",
      "condutasBloqueadas": "Mestre de Vislumbres, Mun'Kai, Espúria, Profeta"
    },
    "munkaiDunfrine": {
      "categoriasPossiveis": "Ordinário, Insólito, Extraordinário",
      "virtudes": "Forma Animal*, Sentidos Aguçados, Percepção Inatural",
      "vicios": "Costume Selvagem",
      "tracos": "Versatilidade, Metamorfose",
      "condutasBloqueadas": "Mestre de Vislumbres, Mun'Kai, Espúria, Profeta"
    },
    "munkaiTitere": {
      "categoriasPossiveis": "Sobrehumano, Ascendente",
      "virtudes": "Rito de Sangue*, Insensibilidade, Partes desmontáveis, Expansão de Periféricos",
      "vicios": "Aparência Monstruosa, Incurável, Influxo de Éter*",
      "tracos": "Inumano, Mutação, Receptáculo",
      "condutasBloqueadas": "Mestre de Vislumbres, Mun'Kai, Espúria, Profeta"
    },
    "munkaiCisco": {
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
    }
  }

  if (nome.includes("espuria")) {
    return conteudo["espuria"];
  }

  return conteudo[nome];
}

