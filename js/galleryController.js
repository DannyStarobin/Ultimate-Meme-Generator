'use strict'



function renderGallery() {
    var imgs = getImgsForDisplay()

    const strHtmls = imgs.map(function (img) {
        return `
        <img src=${img.url} class="gallery-img" id="${img.id}" onclick="drawImgFromlocal(id)">
        `
    })
    document.querySelector('.gallery-grid-container').innerHTML = strHtmls.join('')

}

function onFilterClick(filter) {
    console.log('filter:', filter);

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


