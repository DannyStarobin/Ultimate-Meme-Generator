'use strict'
var gFilter = 'all'
var gFilterBarStatus = 'close'

var gKeywordSearchCountMap = {
    'Funny': 1, 'Cat': 4, 'Baby': 2,
    'Politicians': 0, 'Love': 0, 'Dogs': 0,
    'Man': 0, 'Sleep': 0, "Hate": 0,
    'Celebrities': 0, 'Cartoon': 0, 'Serious': 0,
    'Israeli': 0, 'You': 0
}

var gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['Funny', 'Politicians', 'Man'] },
    { id: 2, url: 'img/2.jpg', keywords: ['Love', 'Dogs'] },
    { id: 3, url: 'img/3.jpg', keywords: ['Baby', 'Dogs', 'Sleep'] },
    { id: 4, url: 'img/4.jpg', keywords: ['Sleep', 'Cat'] },
    { id: 5, url: 'img/5.jpg', keywords: ['Funny', 'Baby'] },
    { id: 6, url: 'img/6.jpg', keywords: ['Funny', 'Man'] },
    { id: 7, url: 'img/7.jpg', keywords: ['Funny', 'Baby'] },
    { id: 8, url: 'img/8.jpg', keywords: ['Funny', 'Man'] },
    { id: 9, url: 'img/9.jpg', keywords: ['Funny', 'Baby', 'Laughing'] }, 
    { id: 10, url: 'img/10.jpg', keywords: ['Funny', 'Politicians', 'Man', 'Laughing'] },
    { id: 11, url: 'img/11.jpg', keywords: ['Funny', 'Love', 'Hate', 'Man'] },
    { id: 12, url: 'img/12.jpg', keywords: ['Funny', 'Celebrities', 'Man', 'Israeli', 'You'] },
    { id: 13, url: 'img/13.jpg', keywords: ['Funny', 'Celebrities', 'Man', 'You'] },
    { id: 14, url: 'img/14.jpg', keywords: ['Serious', 'Celebrities', 'Man'] },
    { id: 15, url: 'img/15.jpg', keywords: ['Celebrities', 'Man'] },
    { id: 16, url: 'img/16.jpg', keywords: ['Funny', 'Celebrities', 'Man', 'Laughing'] },
    { id: 17, url: 'img/17.jpg', keywords: ['Serious', 'Politicians', 'Man'] },
    { id: 18, url: 'img/18.jpg', keywords: ['Funny', 'Cartoon'] },
];

function onImageClick(id) {
    loadMemeEditor(id)
    toggleGallery()
}

function getImgsForDisplay(filter = gFilter) {
    if (filter === 'all') {
        return gImgs
    }
    var imgs = gImgs.filter(img => {
        return img.keywords.includes(filter)
    });
    filter = 'all'
    return imgs
}


function getFiltersForDisplay(filterBarStatus) {
    var { Funny, Cat, Baby, Politicians } = gKeywordSearchCountMap
    
    if (filterBarStatus === 'open') {
        return gKeywordSearchCountMap
    } else {
        return { Funny, Cat, Baby, Politicians }
    }
}

function onFilterClick(filter) {
    gFilter = filter
    gKeywordSearchCountMap[filter] += 1

    renderFilters(gFilterBarStatus)
    renderGallery()
}

function onOpenCloseFilterBar(filterBarStatus) {
    gFilterBarStatus=filterBarStatus
    renderFilters(gFilterBarStatus) 
}

function onFilterSearch(searchValue) {
   
    var searchResults = getImgsForDisplay(searchValue)
    if (!searchResults.length) {
        renderGallery('all')
        alert('Sorry no results')
    } else
    renderGallery(searchValue)
    console.log('searchResults:', searchResults);
}
