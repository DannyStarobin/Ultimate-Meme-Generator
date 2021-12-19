var gCanvas;
var gCtx;
var gImg
var gFocusedPrevColor
var gFocusedLineNumber

function loadMemeEditor(id) {
    gCanvas = document.querySelector('#canvas');
    gCtx = gCanvas.getContext('2d');
    gMeme.selectedImgId = id
    
    // window.addEventListener('resize', resizeCanvas)
    // window.addEventListener('resize', () => {
    //     console.log('resized')
    //     resizeCanvas()
    // })
}

function renderMeme() {
   var meme = getMeme()
    var lines = meme.lines
    const txtPosFromLeft = gCanvas.width/2
    clearCanvas()
   
    gCtx.drawImage(gImg, 0, 0, gCanvas.width, gCanvas.height)
    lines.forEach((line) => {
        drawRect(20, line.txtBoxPosFromTop, line.rectColor)
        drawText(line.txt, txtPosFromLeft, line.txtPosFromTop, line.size, line.align, line.color, line.strokeColor, line.font)
    })
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gCanvas.width = elContainer.offsetWidth
    gCanvas.height = elContainer.offsetHeight
}

function onChangeFont(font){
    gMeme.lines[gMeme.selectedLineIdx].font = `${font}`
    renderMeme()
}

function onChangeStrokeColor(strokeColor){
    gMeme.lines[gMeme.selectedLineIdx].strokeColor = `${strokeColor}`
    renderMeme()
}

function onChangeColor(txtColor) {
    gMeme.lines[gMeme.selectedLineIdx].color = `${txtColor}`
    renderMeme()
}

function onTextAlign(align) {
    console.log('align:', align);
    gMeme.lines[gMeme.selectedLineIdx].align = `${align}`

    if (align === 'right') gMeme.lines[gMeme.selectedLineIdx].txtPosFromLeft = 520
    if (align === 'left') gMeme.lines[gMeme.selectedLineIdx].txtPosFromLeft = 30
    if (align === 'center') gMeme.lines[gMeme.selectedLineIdx].txtPosFromLeft = 275

    renderMeme()
}

function onFontSmall() {
    gMeme.lines[gMeme.selectedLineIdx].size -= 1
    renderMeme()
}

function onFontLarge() {
    if (gMeme.lines[gMeme.selectedLineIdx].size === 48) return
    gMeme.lines[gMeme.selectedLineIdx].size += 1

    renderMeme()
}

function onMoveDown() {

    if (gMeme.lines[gMeme.selectedLineIdx].isFocused === true) {
        gMeme.lines[gMeme.selectedLineIdx].txtBoxPosFromTop += 1
        gMeme.lines[gMeme.selectedLineIdx].txtPosFromTop += 1
        renderMeme()
    }
}

function onMoveUp() {

    if (gMeme.lines[gMeme.selectedLineIdx].isFocused === true) {
        gMeme.lines[gMeme.selectedLineIdx].txtBoxPosFromTop -= 1
        gMeme.lines[gMeme.selectedLineIdx].txtPosFromTop -= 1
        renderMeme()
    }
}

function onDeleteItem() {
    if (!gMeme.lines.length) return

    if (gMeme.lines[gMeme.selectedLineIdx].isFocused) {
        gFocusedPrevColor = undefined
        gFocusedLineNumber = undefined
    } else if (!gMeme.lines[gMeme.selectedLineIdx].isFocused && gMeme.lines.length > 1) {
        gFocusedLineNumber -= 1
    }

    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
    document.querySelector('.text-input').setAttribute("data-line", 0)
    gMeme.selectedLineIdx = 0

    renderMeme()
}

function unFocus() {
    if (gFocusedLineNumber >= 0 && gMeme.lines[gFocusedLineNumber].isFocused) {
        gMeme.lines[gFocusedLineNumber].isFocused = false
        gMeme.lines[gFocusedLineNumber].rectColor = gFocusedPrevColor
    }
}

function onChangeLine() {
    if (!gMeme.lines.length) return
    const currLineNumber = gMeme.selectedLineIdx
    var nextLineNumber
    unFocus()

    if (gMeme.lines.length === currLineNumber + 1 || gMeme.lines.length === 1) {
        nextLineNumber = 0
    } else {
        nextLineNumber = currLineNumber + 1
    }

    document.querySelector('.text-input').setAttribute("data-line", nextLineNumber)
    gFocusedPrevColor = gMeme.lines[nextLineNumber].rectColor
    gMeme.lines[nextLineNumber].isFocused = true
    gMeme.lines[nextLineNumber].rectColor = 'yellow'
    gFocusedLineNumber = nextLineNumber
    gMeme.selectedLineIdx = nextLineNumber

    renderMeme()
}

function onAddLine() {
    createLine()
    unFocus()
    const newLineNumber = gMeme.lines.length - 1
    gMeme.selectedLineIdx = newLineNumber
    document.querySelector('.text-input').setAttribute("data-line", newLineNumber)
    renderMeme()
}

function setLineTxt(txt) {
    const lineNumber = gMeme.selectedLineIdx
    gMeme.lines[lineNumber].txt = txt
    renderMeme()
}

function drawImgFromlocal(id) {
    gImg = new Image()
    gImg.src = `img/${id}.jpg`;
    gImg.onload = () => {
        gCtx.drawImage(gImg, 0, 0, gCanvas.width, gCanvas.height) //img,x,y,xend,yend 
        resizeCanvas()
        drawRect(20,10)
        renderMeme()
        
    }
}

function drawRect(x,y, color = '#1b1b1b') {
    gCtx.beginPath();
    gCtx.rect(x, y, gCanvas.width - 40, 50);
    // gCtx.fillStyle = 'blue';
    // gCtx.fillRect(x, y, 150, 150);
    gCtx.strokeStyle = color;
    gCtx.stroke();
    gCtx.closePath();

}

function drawText(txt, x, y, size, align, color, strokeColor, font ) {

    // gCtx.font = '48px serif';
    // gCtx.fillText(txt, x, y);
    gCtx.textBaseline = 'middle';
    gCtx.textAlign = `${align}`;
    // gCtx.lineWidth = 2;
    gCtx.strokeStyle = `${strokeColor}`;
    gCtx.font = `${size}px ${font}`;
    gCtx.fillStyle = `${color}`;
    gCtx.fillText(txt, x, y);
    gCtx.strokeText(txt, x, y);
}

function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
}

