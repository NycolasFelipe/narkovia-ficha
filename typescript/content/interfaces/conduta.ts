import Content from "./_content";

interface GanhoItem {
  nome: string;
  id: string;
}

interface GanhoGraduacao {
  nome: string;
  opcoes: Array<string>;
  pontos: number;
}

interface ContentConduta extends Content {
  tipo: string;
  tipoTitulo: string;
  descricao: string;
  ganhos: {
    maestria: Array<GanhoItem>;
    especialidade: Array<GanhoItem>;
    graduacao: {
      simples: GanhoGraduacao[];
      escolha: GanhoGraduacao[]
    }
  }
}

export default ContentConduta;