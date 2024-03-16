function handleLoading() {
  setTimeout(() => {
    $(".loading-page").addClass("d-none");
    $("#content").removeClass("d-none");
  }, 200);
}

export default handleLoading;