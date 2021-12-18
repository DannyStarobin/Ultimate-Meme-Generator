

var gMeme = {
    selectedImgId: null,
    selectedLineIdx: 0,
    lines: [{
        txtBoxPosFromTop: 25,
        txtPosFromTop: 50,
        txtPosFromLeft: 275,
        txt: '',
        size: 30,
        align: 'center',
        color: 'black',
        rectColor: 'black',
        isFocused:'false'

    }
    ]
}

function createLine(){
const pos =getPosFromTop()
const txtPos= pos +25
    const line = {
        txtBoxPosFromTop: pos,
        txtPosFromTop: txtPos,
        txtPosFromLeft: 275,
        txt: '',
        size: 30,
        align: 'center',
        color: 'black',
        rectColor: 'black',
        isFocused:'false'
    }
    gMeme.lines.push(line)
}

function getPosFromTop() {
    if (gMeme.lines.length === 0) {
        return 25
    } else if (gMeme.lines.length ===1) {
        return 475
    }else
    return 250
}


function getMeme() {

    return gMeme
}

// function setLineTxt()

