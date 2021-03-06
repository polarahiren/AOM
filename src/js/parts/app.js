import 'slick-carousel';

export class App{

  init() {

    $('.large-slider').slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 300,
      autoplay: true,
      slidesToShow: 1,
      responsive: [
          {
              breakpoint: 768,
              settings: {
                  arrows: true
              }
          }
      ]
  });

    $('.accreditations-logo-carousel').slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 300,
      autoplay: true,
      slidesToShow: 3,
      responsive: [
          {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              }
          }
      ]
    });

  /* related products slider */
  $('.logos-slider').slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 400,
      autoplay: true,
      slidesToShow: 6,
      responsive: [
          {
              breakpoint: 1200,
              settings: {
                  slidesToShow: 5,
                  arrows: false,
              }
          },
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 4,
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 3,
              }
          }
      ]
  });

  $('.insta_slider').slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
    ]
  });

  $('.testimonial-carousel').slick({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 300,
      autoplay: true,
      slidesToShow: 1,
      adaptiveHeight: true,
  });

  $('.service-slider').slick({
      dots: false,
      arrows: true,
      infinite: true,
      speed: 300,
      autoplay: true,
      slidesToShow: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
              arrows: false,
              dots: false,
            }
          }
      ]
  });

  // the blog slider for home page
  $('.the-blog-slider').slick({
      dots: false,
      arrows: false,
      infinite: false,
      speed: 300,
      autoplay: false,
      slidesToShow: 2,
      responsive: [
        {
          breakpoint: 991,
          settings: {
              slidesToShow: 1,
          }
        }
      ]
  });

  // the blog slider for member area page
  $('.related-post-slider').slick({
      dots: false,
      arrows: false,
      infinite: false,
      speed: 300,
      autoplay: false,
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 991,
          settings: {
              slidesToShow: 1,
          }
        }
      ]
  });

  }

  slickSLider (){

  }

}