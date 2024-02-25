export default function localStorageSave() {
  const ancestralidade = $("#ancestralidade select").val();
  const categoria = $("#categoria select").val();
  const idade = parseInt($("#idade input").val());
  
  const storage = {
    "ancestralidade": ancestralidade,
    "categoria": categoria,
    "idade": idade,
  }

  localStorage.setItem("passo-a-passo", JSON.stringify(storage));
}