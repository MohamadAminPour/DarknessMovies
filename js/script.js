import { movies } from "./datas.js";

let mobileMenuContainer = document.querySelector('.mobile_menu')
let menuIcon = document.querySelector('.menu-icon')
let mainContainer = document.querySelector('.main-container')
let searchbarInput = document.querySelector('.searchbar-input')
let searchbarResult = document.querySelector('.searchbar-result')


menuIcon.addEventListener('click', () => {
  mobileMenuContainer.classList.toggle('active')
})



// movies.forEach(movie => {
//     mainContainer.insertAdjacentHTML('beforeend', `
//     <div class="movie-box">
//         <p>${movie.id}</p>
//         <p>${movie.name}</p>
//         <p>${movie.imdb}</p>
//         <a href="movie.html?id=${movie.id}">download</a>
//     </div>
// `)
// })


var swiper = new Swiper(".headSlider", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".mainSlider1", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    800: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },
});


var swiper = new Swiper(".mainSlider2", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    500: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    800: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },
});


//search bar
searchbarInput.addEventListener('keypress', () => {
  searchbarResult.style.display = 'block'

  let userSearch = movies.filter((movie) => movie.name.toLowerCase().startsWith(searchbarInput.value.toLowerCase()))
    .map((movie) => ` 
    <a href="${movie.downloadLink}" class="searchbar-result__box">
      <div class="result-box__left">
          <img src="${movie.src}" alt="">
      </div>
      <div class="result-box__right">
          <p class="result-box__right-ENname">${movie.name}</p>
          <div class="item-rate">
              <p class="result-box__right-FAname">${movie.faname}</p>
              <p class="imdb-num"><span>${movie.imdb}</span> / 10</p>
          </div>
      </div>
    </a>`)
    .join('')
  searchbarResult.innerHTML = userSearch
})

searchbarInput.addEventListener('blur', () => {
  setTimeout(() => {
    searchbarResult.style.display = 'none'
  }, 100);
})