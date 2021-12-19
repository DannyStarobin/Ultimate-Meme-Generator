'use strict'

function init() {
    gCanvas = document.querySelector('#canvas');
    gCtx = gCanvas.getContext('2d');
    renderGallery()
    renderFilters('small')
   }


   function toggleMenu() {
    document.body.classList.toggle('menu-open');
}


