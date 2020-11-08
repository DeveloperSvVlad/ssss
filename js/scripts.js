// Dekstop vars
const defaultFontSize = 16;
const defaultWidth = 1366;
const reduce = defaultWidth / defaultFontSize;
// Mobile vars
// const defaultFontSizeMob = 15.75;
// const defaultWidthMob = 375;
// const reduceMob = defaultWidthMob / defaultFontSizeMob;
const defaultFontSizeMob = 4.26667;

// функция отвечает за динамический адаптив при ресайзе до 768 в пикселях
    function recalcRem() {
        let currentWidth = document.documentElement.offsetWidth;
        const currentFZ = currentWidth / reduce;
        if (currentWidth > 1366) {
            currentWidth = defaultWidth;
        } else {
            document.documentElement.style.fontSize = currentFZ + 'px';
        }
    }
// Тут функция на viewport + в else функция на декстоп (Проверка норм)
function fontSizeHandler() {
    if (document.documentElement.offsetWidth < 768) {
        // const currentWidth = document.documentElement.offsetWidth;
        // const currentFZ = currentWidth / reduceMob;
        // document.documentElement.style.fontSize = currentFZ + 'px';
        document.documentElement.style.fontSize = defaultFontSizeMob + 'vw';
    } else {
        recalcRem();
    }
}
// Ресайз + передеача в аргументы функцию
window.addEventListener('resize', fontSizeHandler);

//! Функция которая проверяет может ли браузер отобразить формат webp, если может, то функция добавляет к селектору body класс webp
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
 testWebP(function (support) {
    
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }else{
        document.querySelector('body').classList.add('no-webp');
    }
});
//? slider for gallery intro
if (document.querySelectorAll('.swiper-container.gallery__carousel').length > 0) {
    var mySwiper = new Swiper('.swiper-container.gallery__carousel', {
        loop: true,
        speed: 1200,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
}
// Burger 
    const $body = document.querySelector('body'),
    $menuButton = document.querySelector('.header__burger'),
    $menu = document.querySelector('.menu'),
    $menuItems = document.querySelectorAll('.menu__list-link');

 
        $menuButton.addEventListener('click', () => {
            $menuButton.classList.toggle('active');
            $menu.classList.toggle('active');
            $body.classList.toggle('lock');
            for (let navItems of $menuItems) {
                navItems.addEventListener('click', () => {
                    $menuButton.classList.remove('active')
                    $menu.classList.remove('active')
                })
            }
          });


  //? slider for main-cards
  if (document.querySelectorAll('.swiper-container.cards__carousel').length > 0) {
    var mySwiper = new Swiper('.swiper-container.cards__carousel', {
        slidesPerView: 'auto',
        spaceBetween: 15,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
  }
  // Прелоадер
  if (document.querySelectorAll('.preloader').length > 0) {
    document.body.onload = () => {
      setTimeout(() => {
          let preloader = document.querySelector('.preloader');
          if (!preloader.classList.contains('done')){
              preloader.classList.add('done');
              
          }
      }, 1000);
  }
  }

// Tabs
const $linewiveBtn = document.querySelectorAll('.categories__cards'),
      // $linewivesItem = document.querySelectorAll('.tabs__content .categories__image'),
      $content = document.querySelectorAll('.tabs__content'),
      $preview = document.querySelector('.categories__inner-content-preview');

const onTabClick = (item, i) => {
    item.addEventListener('click', () => {
      $preview.classList.add('hidden');
        let currentBtn = item;
        if (!currentBtn.classList.contains('active')){
            for (let ind = 0; ind < $linewiveBtn.length; ind++) {
                $linewiveBtn[ind].classList.remove('active');
                // $linewivesItem[ind].classList.remove('active');
                $content[ind].classList.remove('active');
            };
            $linewiveBtn[i].classList.add('active');
            // $linewivesItem[i].classList.add('active');
            $content[i].classList.add('active');
        }
    })
}
$linewiveBtn.forEach(onTabClick);

  // const $preloader__nubmers = document.querySelector('.preloader__number span');
  // window.myInterval = setInterval(time, 50);
  // let nubmer = 0;
  // function time () {
  //    if (number >= 100) {
  //      clearInterval(myInterval);
  //    }
  // }


