declare var $: any;

function slickSlider(selector: string) {
  $(selector).slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
}

export default slickSlider;