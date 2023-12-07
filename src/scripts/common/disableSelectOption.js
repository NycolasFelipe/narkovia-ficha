export default function disableSelectOption(categoria, option) {
  $(`#${categoria} select option[value="${option}"]`).attr("disabled", "disabled");
}