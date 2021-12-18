'use strict'



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
    loadEditor(id)
    

    const elFilterBar = document.querySelector('.filter-search-bar')
    const elGallery = document.querySelector('.main-gallery')
    const elEditor = document.querySelector('.editor-grid-container')
    elFilterBar.classList.add("display-none")
    elGallery.classList.add("display-none")
    elEditor.classList.remove("display-none")

}

function onFilterClick(filter) {
    gFilter = filter
    renderGallery()
}

function onMoreCloseBtnsClick(size) {
    renderFilters(size)
}

function renderFilters(size) {
    const filters = getFiltersForDisplay(size)
    const elFilters = document.querySelector('.filters')
    const filtersArr = Object.entries(filters)
    var strHtmls

    strHtmls = filtersArr.map(filter => {

        return `<button class="filter-btn"  style="font-size:${18 + filter[1]}px" onclick="onFilterClick('${filter[0]}')">${filter[0]}</button>`
    });

    elFilters.innerHTML = strHtmls.join('')
    if (size === 'small') {
        elFilters.innerHTML += `<button class="filter-btn more-filter-btn" onclick="onMoreCloseBtnsClick('large')">more...</button>`
    } else {
        elFilters.innerHTML += `<button class="filter-btn close-filter-btn" onclick="onMoreCloseBtnsClick('small')">...close X</button>`
    }
}



