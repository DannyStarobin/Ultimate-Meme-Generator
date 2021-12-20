var gMeme = {
    selectedImgId: null,
    selectedLineIdx: 0,
    selectedStickerIdx:0,
    lines: [ {
            txtBoxPosFromTop: 10,
            txtPosFromTop: 35,
            txt: '',
            size: 30,
            align: 'center',
            color: 'white',
            strokeColor: 'black',
            font: 'impact',
            rectColor: 'black',
            isFocused: 'false'
        }
    ],
    // stickers:[]
}

function createLine() {
    const pos = getPosFromTop()
    const txtPos = pos + 25
    const line =
    {
        txtBoxPosFromTop: pos,
        txtPosFromTop: txtPos,
        txt: '',
        size: 30,
        align: 'center',
        color: 'white',
        strokeColor: 'black',
        font: 'impact',
        rectColor: 'black',
        isFocused: 'false'
    }
    gMeme.lines.push(line)
}

function getPosFromTop() {
    if (gMeme.lines.length === 0) {
        return 10
    } else if (gMeme.lines.length === 1) {
        return gCanvas.height - 60
    } else
        return gCanvas.height / 2 - 20
}

function getMeme() {
    return gMeme
}

function onChangeFont(font) {
    gMeme.lines[gMeme.selectedLineIdx].font = `${font}`
    renderMeme()
}

function onChangeStrokeColor(strokeColor) {
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

function unFocus() {
    if (gFocusedLineNumber >= 0 && gMeme.lines[gFocusedLineNumber].isFocused) {
        gMeme.lines[gFocusedLineNumber].isFocused = false
        gMeme.lines[gFocusedLineNumber].rectColor = gFocusedPrevColor
    }
}

function setLineTxt(txt) {
    const lineNumber = gMeme.selectedLineIdx
    gMeme.lines[lineNumber].txt = txt
    renderMeme()
}


// DRAG

// function createsticker(pos) {
//     sticker = {
//         pos,
//         size: 40,
//         isDrag: false
//     }
//     gMeme.stickers.push(sticker)
// }

// function getSticker() {
//     return gMeme.stickers
// }

// function isStickerClicked(clickedPos) {
//     const { pos } = sticker
//     const distance = Math.sqrt((pos.x - clickedPos.x) ** 2 + (pos.y - clickedPos.y) ** 2)
//     return distance <=sticker.size
// }


// function setStickerDrag(isDrag) {
//     sticker.isDrag = isDrag
// }

// function moveSticker(dx, dy) {
//     sticker.pos.x += dx
//     sticer.pos.y += dy
// }

// function loadSticker(x,type){
//     createsticker()

// }
