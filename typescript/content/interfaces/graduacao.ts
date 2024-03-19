import Content from "./_content";

interface ContentGraduacao extends Content {
  itens: {
    id: string;
    titulo: string;
    descricao: string;
  }
}

export default ContentGraduacao;