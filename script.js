const compare__slider_1 = document.querySelector('.compare__slider-1')
compare__slider_1.querySelector('.slider').addEventListener('input', e => {
  compare__slider_1.style.setProperty('--position', `${e.target.value}%`)
})
const compare__slider_2 = document.querySelector('.compare__slider-2')
compare__slider_2.querySelector('.slider').addEventListener('input', e => {
  compare__slider_2.style.setProperty('--position', `${e.target.value}%`)
})
const compare__slider_3 = document.querySelector('.compare__slider-3')
compare__slider_3.querySelector('.slider').addEventListener('input', e => {
  compare__slider_3.style.setProperty('--position', `${e.target.value}%`)
})


function changeCurrentSlider (event) {
  const sliderWapper = event.closest('.compare__slider-wrapper')
  if (!event.classList.contains('compare__slider-selector-button-active')) {
    const AllButtons = sliderWapper.querySelectorAll('.compare__slider-selector-button')
    AllButtons.forEach(el => {
      el.classList.remove('compare__slider-selector-button-active')
    })
    event.classList.add('compare__slider-selector-button-active')

    const buttonCount = event.getAttribute('data-number-of-button')
    const leftImage = sliderWapper.querySelector('.image-before .slider-image')
    const rightImage = sliderWapper.querySelector('.image-after .slider-image')
    
    switch (buttonCount) {
      case "0":
        leftImage.setAttribute('src', 'images/compares/first_compare/overpass_back_long_s2.jpg')
        rightImage.setAttribute('src', 'images/compares/first_compare/overpass_back_long_s1.jpg')
        break;
      case "1":
        leftImage.setAttribute('src', 'images/compares/first_compare/overpass_lower_tunnel_s2.jpg')
        rightImage.setAttribute('src', 'images/compares/first_compare/overpass_lower_tunnel_s1.jpg')
        break;
      case "2":
        leftImage.setAttribute('src', 'images/compares/first_compare/overpass_toilets_s2.jpg')
        rightImage.setAttribute('src', 'images/compares/first_compare/overpass_toilets_s1.jpg')
        break;
      case "3":
        leftImage.setAttribute('src', 'images/compares/first_compare/overpass_van_vista_s2.jpg')
        rightImage.setAttribute('src', 'images/compares/first_compare/overpass_van_vista_s1.jpg')
        break;
      case "4":
        leftImage.setAttribute('src', 'images/compares/second_compare/nuke_default_s2.jpg')
        rightImage.setAttribute('src', 'images/compares/second_compare/nuke_default_s1.jpg')
        break;
      case "5":
        leftImage.setAttribute('src', 'images/compares/second_compare/nuke_ramp_s2.jpg')
        rightImage.setAttribute('src', 'images/compares/second_compare/nuke_ramp_s1.jpg')
        break;
      case "6":
        leftImage.setAttribute('src', 'images/compares/second_compare/nuke_t_s2.jpg')
        rightImage.setAttribute('src', 'images/compares/second_compare/nuke_t_s1.jpg')
        break;
      case "7":
        leftImage.setAttribute('src', 'images/compares/second_compare/nuke_backhall_s2.jpg')
        rightImage.setAttribute('src', 'images/compares/second_compare/nuke_backhall_s1.jpg')
        break;
      case "8":
        leftImage.setAttribute('src', 'images/compares/third_compare/dust2_back_plat_s2.jpg')
        rightImage.setAttribute('src', 'images/compares/third_compare/dust2_back_plat_s1.jpg')
        break;
      case "9":
        leftImage.setAttribute('src', 'images/compares/third_compare/dust2_blue_s2.jpg')
        rightImage.setAttribute('src', 'images/compares/third_compare/dust2_blue_s1.jpg')
        break;
      case "10":
        leftImage.setAttribute('src', 'images/compares/third_compare/dust2_ct_ramp_s2.jpg')
        rightImage.setAttribute('src', 'images/compares/third_compare/dust2_ct_ramp_s1.jpg')
        break;
      case "11":
        leftImage.setAttribute('src', 'images/compares/third_compare/dust2_double_doors_s2.jpg')
        rightImage.setAttribute('src', 'images/compares/third_compare/dust2_double_doors_s1.jpg')
        break;
      default:
        break;
    }
  }
}
