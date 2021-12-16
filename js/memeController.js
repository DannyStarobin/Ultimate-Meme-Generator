var gCanvas;
var gCtx;



function drawImgFromlocal(x) {
    var img = new Image()
    img.src = `img/${x}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height) //img,x,y,xend,yend
    }
}

function drawImgFromRemote() {
    var img = new Image()
    img.src = 'https://steamcdn-a.akamaihd.net/steam/apps/431960/ss_39ed0a9730b67a930acb8ceed221cc968bee7731.1920x1080.jpg?t=1571786836';
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height) //img,x,y,xend,yend
        console.log(img);
    }
}

function downloadCanvas(elLink) {
    const data = gCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'my-img.jpg'
}

function drawRect(x, y) {
    gCtx.rect(x, y,500, 50);
    // gCtx.fillStyle = 'blue';
    // gCtx.fillRect(x, y, 150, 150);
    gCtx.strokeStyle = '#1b1b1b';
    gCtx.stroke();
}

function drawText(txt, x, y) {
    // gCtx.font = '48px serif';
    // gCtx.fillText(txt, x, y);
    gCtx.textBaseline = 'middle';
    gCtx.textAlign = 'center';
    // gCtx.lineWidth = 2;
    // gCtx.strokeStyle = 'red';
    gCtx.font = '30px monospace';
    gCtx.fillStyle = 'black';
    gCtx.fillText(txt, x, y);
    // gCtx.strokeText(txt, x, y);
}