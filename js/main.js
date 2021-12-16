'use strict'

function init() {
    gCanvas = document.querySelector('#canvas');
    gCtx = gCanvas.getContext('2d');
    renderGallery()
    renderFilters('small')


   }




// function onMoreFilterOptions() {
//     var elFilters = document.querySelector('.filters')
//     var htmls = `<button class="filter-btn funny-filter-btn">funny</button>
// <button class="filter-btn comics-filter-btn">comics</button>
// <button class="filter-btn dogs-filter-btn">dogs</button>
// <button class="filter-btn drinks-filter-btn">drinks</button>
// <button class="filter-btn books-filter-btn">books</button>
// <button class="filter-btn comics-filter-btn">comics</button>
// <button class="filter-btn dogs-filter-btn">dogs</button>
// <button class="filter-btn drinks-filter-btn">drinks</button>
// <button class="filter-btn books-filter-btn">books</button>
// <button class="filter-btn comics-filter-btn">comics</button>
// <button class="filter-btn dogs-filter-btn">dogs</button>
// <button class="filter-btn drinks-filter-btn">drinks</button>
// <button class="filter-btn books-filter-btn">books</button>
// <button class="filter-btn close-filter-btn" onclick="onCloseFilterOptions()">...close X</button>`
//     elFilters.innerHTML = htmls

// }

// function onCloseFilterOptions(){
//     var elFilters = document.querySelector('.filters')
//     var htmls = `<button class="filter-btn funny-filter-btn">funny</button>
//     <button class="filter-btn comics-filter-btn">comics</button>
//     <button class="filter-btn dogs-filter-btn">dogs</button>
//     <button class="filter-btn drinks-filter-btn">drinks</button>
//     <button class="filter-btn books-filter-btn">books</button>
//     <button class="filter-btn more-filter-btn" onclick="onMoreFilterOptions()">more...</button>`
//     elFilters.innerHTML = htmls
// }