export default function localStorageSave() {
  const ancestralidade = $("#ancestralidade select").val();
  const jornada = $("#jornada select#jornadas").val();
  const conduta = $("#jornada select#condutas").val();
  const categoria = $("#categoria select").val();
  const idade = parseInt($("#idade input").val());
  
  const storage = {
    "ancestralidade": ancestralidade,
    "jornada": jornada,
    "conduta": conduta,
    "categoria": categoria,
    "idade": idade,
  }

  localStorage.setItem("passo-a-passo", JSON.stringify(storage));
}