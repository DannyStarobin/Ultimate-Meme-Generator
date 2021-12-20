'use strict'
function init(){
    renderGallery()
    renderFilters(gFilterBarStatus)
}


function renderGallery() {
    var imgs = getImgsForDisplay()

    const strHtmls = imgs.map(function (img) {
        return `
        <img src=${img.url} class="gallery-img" id="${img.id}" onclick="onImageClick(id)">
        `
    })
    document.querySelector('.gallery-grid-container').innerHTML = strHtmls.join('')
}

function onImageClick(id) {
    drawImgFromlocal(id)
    loadMemeEditor(id)
    toggleGallery()
}

function toggleGallery() {
    const elFilterBar = document.querySelector('.filter-search-bar')
    const elGallery = document.querySelector('.main-gallery')
    const elEditor = document.querySelector('.meme-page-container')
    elFilterBar.classList.toggle("display-none")
    elGallery.classList.toggle("display-none")
    elEditor.classList.toggle("display-none")
}

function renderFilters(filterBarStatus) {
    const filters = getFiltersForDisplay(filterBarStatus)
    const elFilters = document.querySelector('.filters')
    const filtersArr = Object.entries(filters)
    var strHtmls

    strHtmls = filtersArr.map(filter => {

        return `<button class="filter-btn"  style="font-size:${18 + filter[1]}px" onclick="onFilterClick('${filter[0]}')">${filter[0]}</button>`
    });

    elFilters.innerHTML = strHtmls.join('')
    if (filterBarStatus === 'close') {
        elFilters.innerHTML += `<button class="filter-btn more-filter-btn" onclick="onOpenCloseFilterBar('open')">more...</button>`
    } else {
        elFilters.innerHTML += `<button class="filter-btn close-filter-btn" onclick="onOpenCloseFilterBar('close')">...close X</button>`
    }
}

function onCloseModal(){
  document.querySelector('.share-on-facebook-modal').style.display ='none'  
}


