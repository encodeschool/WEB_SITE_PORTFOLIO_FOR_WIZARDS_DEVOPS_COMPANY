var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let icon = this.querySelector('.changeEvent');
    if (this.classList.contains('active')) {
        icon.classList.remove('bx-plus-circle');
        icon.classList.add('bx-minus-circle');
    } else {
        icon.classList.remove('bx-minus-circle');
        icon.classList.add('bx-plus-circle');
    }

    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      content.style.margin = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.margin = '25px 0';
    } 
  });
}

let openBtn = document.querySelector('#open_nav_btn');
let closeBtn = document.querySelector('#close_nav_btn');
let menu = document.querySelector('#menu');
let menuList = document.querySelectorAll('#menu a');

openBtn.onclick = function(e) {
  e.stopPropagation();
  menu.style.top = 0;
}

closeBtn.onclick = function() {
  menu.style.top = '-100%';
}

// document.addEventListener('click', function(e) {
//   if (!menu.contains(e.target) && !openBtn.contains(e.target)) {
//     menu.style.top = '-100%';
//   }
// });

menu.addEventListener('click', function(e) {
  e.stopPropagation();
});

menuList.forEach(link => {
  link.addEventListener('click', function() {
    menu.style.top = '-100%';
  })
});

function initializeSwiper(selector, options) {
  if (document.querySelector(selector)) {
    const swiperInstance = new Swiper(selector, options);

    // Add custom logic to always keep buttons active
    swiperInstance.on('slideChange', function () {
      // Always ensure that the next and prev buttons are active
      const prevButton = swiperInstance.navigation.prevEl;
      const nextButton = swiperInstance.navigation.nextEl;

      // Enable both buttons manually
      // if (prevButton && nextButton) {
      //   prevButton.classList.remove('swiper-button-disabled');
      //   nextButton.classList.remove('swiper-button-disabled');
      // }
    });

    return swiperInstance;
  }
  return null;
}

const defaultNavigation = {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev'
};

const defaultPagination = {
  el: '.swiper-pagination',
  clickable: true
};

const swiperInstances = {
  mainSwiper: initializeSwiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    loop: true,  // Enable looping to ensure navigation works at all times
    observer: false, // Disable observer to avoid interference
    pagination: defaultPagination,
    navigation: defaultNavigation
  }),

  reasonSwiper: initializeSwiper(".more-reason-swiper", {
    loop: true,  // Enable looping
    slidesPerView: 'auto',
    observer: false, // Disable observer to avoid interference
    autoplay: {
      delay: 5000,
      disableOnInteraction: false // Keep autoplay active after interaction
    },
    centeredSlides: true,
    navigation: defaultNavigation,
    pagination: defaultPagination
  }),

  serviceSwiper: initializeSwiper(".service_type_carouse", {
    loop: true,  // Enable looping
    slidesPerView: 'auto',
    observer: false, // Disable observer to avoid interference
    autoplay: {
      delay: 5000,
      disableOnInteraction: false // Keep autoplay active after interaction
    },
    centeredSlides: true,
    navigation: defaultNavigation,
    pagination: defaultPagination
  })
};

// telegram bot integration
document.querySelector('#submit-btn').onclick = function() {
  // let phone = document.querySelector('#phone').value;
  let email = document.querySelector('#email').value;
  let name = document.querySelector('#fullName').value;
  let phone = document.querySelector('#phone').value;
  let text = document.querySelector('#message').value;

  if (email.length <= 1 && email === "") {
      alert("Please fill the email input");
  } else {
      let xHttp = new XMLHttpRequest();
      let message = "Сообщение с веб-сайта\n📧Почта: " + email + "\n" + "👦Имя: " + name + '\n' + "📞Телефон: " + phone + '\n' + "✍️Сообщение: " + text;

      const token = "7613965435:AAHs9MH0dL7gSr8Y8y3M1CZtiU7VFxFFCX0";
      const chatId = "-4785601321";
      let url = 'https://api.telegram.org/bot' + token + '/sendMessage?chat_id=' + chatId + '&text=';
      xHttp.open("GET", url + encodeURIComponent(message), true);
      xHttp.send();

      alert('Successfully sent');
  }

}


// ScrollReveal().reveal(
//   '.col',
//   {
//     delay: 375,
//     duration: 500,
//     reset: true
//   }
// );