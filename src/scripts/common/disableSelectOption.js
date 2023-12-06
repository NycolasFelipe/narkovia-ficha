export default function disableSelectOption(select, option) {
  $(`#${select} option[value="${option}"]`).attr("disabled", "disabled");
}