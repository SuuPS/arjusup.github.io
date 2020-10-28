var startButton = document.getElementById('startButton');
startButton.addEventListener('click', function() {
    var overlay = document.getElementById('overlay');
    overlay.remove();

    console.log('Trynna play the video');
    let camvideo = document.querySelector('#video')
    if (camvideo !== null) {
        camvideo.style.display = 'block';
    }

    let video = document.querySelector('#arvideo')
    video.muted = false;
    video.play();

}, false);

ARnft.ARnft.init(1280, 720, "./Data/nft/pinball", 'config.json', true)
    .then((nft) => {
        nft.addVideo('arvideo', 360);
        // document.getElementById('loading').style.display = 'none';
    }).catch((error) => {
        console.log(error);
    });