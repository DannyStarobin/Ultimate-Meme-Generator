

var gMeme = {
    selectedImgId: null,
    selectedLineIdx: 0,
    lines: [{
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
    ]
}

function createLine() {
    const pos = getPosFromTop()
    const txtPos = pos + 25
    const line = {
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

// function setLineTxt()

