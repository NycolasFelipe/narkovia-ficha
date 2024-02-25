function contentDetalhes(item) {
  const content = {
    // Categorias
    // Virtudes
    "legado-ancestral": {
      "titulo": "Legado Ancestral",
      "descricao": `Seu personagem reconhece o idioma miranico antigo mesmo que nunca o tenha lido ou
        ouvido antes. Além disso pode reconhecer outro miraniano com um teste de intuir. A
        dificuldade varia, um miraniano que não esconda seus hábitos/costume tem (Desafio 1),
        já um miraniano criado sobre costumes e hábitos narkovianos tem (Desafio. 2). Alguém
        que ativamente tente esconder isso faz um teste de performar contra seu teste de intuir.`,
      "requisitos": "Humano Miraniano"
    }
  }

  return content[item];
}

export default contentDetalhes;