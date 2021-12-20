var gCanvas;
var gCtx;
var gImg
var gFocusedPrevColor
var gFocusedLineNumber
var gStartPos
const gTouchEvs = ['touchstart', 'touchmove', 'touchend']


function loadMemeEditor(id) {
    gCanvas = document.querySelector('#canvas');
    gCtx = gCanvas.getContext('2d');
    gMeme.selectedImgId = id
    console.log('id:', id);
    
    // resizeCanvas() 
    // drawImgFromlocal(id)
    window.addEventListener('resize', () => {
        console.log('resized')
        resizeCanvas()
        renderMeme()
        // addListeners()
    })
}

function renderMeme() {
    var meme = getMeme()
    var lines = meme.lines
    const txtPosFromLeft = gCanvas.width / 2
    clearCanvas()
    drwaImage()
    lines.forEach((line) => {
        drawRect(20, line.txtBoxPosFromTop, line.rectColor)
        drawText(line.txt, txtPosFromLeft, line.txtPosFromTop, line.size, line.align, line.color, line.strokeColor, line.font)
    })
}

// function renderSticker() {
//     const sticker = getsticker()
//     const { pos, size } = sticker
//    (pos.x, pos.y, size)
//    gCtx.drawImage(, 0, 0, gCanvas.width, gCanvas.height)
// }

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gCanvas.width = elContainer.offsetWidth
    gCanvas.height = elContainer.offsetHeight
}

function drawImgFromlocal(id) {
    gImg = new Image()
    gImg.src = `img/${id}.jpg`;
    gImg.onload = () => {
        drwaImage()
        drawRect(20, 10)
    }
}

function drwaImage() {
    gCtx.drawImage(gImg, 0, 0, gCanvas.width, gCanvas.height)
}

function drawRect(x, y, color = '#1b1b1b') {
    gCtx.beginPath();
    gCtx.rect(x, y, gCanvas.width - 40, 50);
    // gCtx.fillStyle = 'blue';
    // gCtx.fillRect(x, y, 150, 150);
    gCtx.strokeStyle = color;
    gCtx.stroke();
    gCtx.closePath();

}

function drawText(txt, x, y, size, align, color, strokeColor, font) {

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

function onDeleteItem() {
    if (!gMeme.lines.length) return

    if (gMeme.lines[gMeme.selectedLineIdx].isFocused) {
        gFocusedPrevColor = undefined
        gFocusedLineNumber = undefined
    } else if (!gMeme.lines[gMeme.selectedLineIdx].isFocused && gMeme.lines.length > 1) {
        gFocusedLineNumber -= 1
    }
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
    document.querySelector('.meme-text-input').setAttribute("data-line", 0)
    gMeme.selectedLineIdx = 0

    renderMeme()
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

    document.querySelector('.meme-text-input').setAttribute("data-line", nextLineNumber)
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
    document.querySelector('.meme-text-input').setAttribute("data-line", newLineNumber)
    renderMeme()
}

function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
}

// function addListeners() {
//     addMouseListeners()
//     addTouchListeners()
// }

// function addMouseListeners() {
//     gCanvas.addEventListener('mousemove', onMove)
//     gCanvas.addEventListener('mousedown', onDown)
//     gCanvas.addEventListener('mouseup', onUp)
// }

// function addTouchListeners() {
//     gCanvas.addEventListener('touchmove', onMove)
//     gCanvas.addEventListener('touchstart', onDown)
//     gCanvas.addEventListener('touchend', onUp)
// }

// function onDown(ev) {
//     const pos = getEvPos(ev)
//     if (!setStickerDrag(pos)) return
//     setStickerDrag(true)
//     gStartPos = pos
//     document.body.style.cursor = 'grabbing'

// }

// function onMove(ev) {
//     const sticker = getSticker();
//     if (!circle.isDrag) return
//     const pos = getEvPos(ev)
//     const dx = pos.x - gStartPos.x
//     const dy = pos.y - gStartPos.y
//     moveSticker(dx, dy)
//     gStartPos = pos
//     renderMeme()

// }

// function onUp() {
//     setStickerDrag(false)
//     document.body.style.cursor = 'grab'
// }

// function getEvPos(ev) {
//     var pos = {
//         x: ev.offsetX,
//         y: ev.offsetY
//     }
//     console.log('pos:', pos);

//     if (gTouchEvs.includes(ev.type)) {
//         ev.preventDefault()
//         ev = ev.changedTouches[0]
//         pos = {
//             x: ev.pageX - ev.target.offsetLeft,
//             y: ev.pageY - ev.target.offsetTop
//         }
//     }
//     return pos
// }


