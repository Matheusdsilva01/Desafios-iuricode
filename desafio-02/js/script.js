var container = document.getElementById('container-images');
var jodans = [
    './assets/images-jordans/air-jordan-1-high-zoom-cmft-tropical-twist-1-400.svg',
    './assets/images-jordans/air-jordan-1-mid-black-noble-red-w-1-1000.svg',
    './assets/images-jordans/air-jordan-1-mid-bright-citrus-1-1000 1.svg',
    './assets/images-jordans/air-jordan-1-mid-carbon-fiber-1-1000 1.svg',
    './assets/images-jordans/air-jordan-1-mid-dutch-green-1-400.svg',
    './assets/images-jordans/air-jordan-1-mid-grey-camo-1-1000 1.svg',
    './assets/images-jordans/air-jordan-1-mid-light-smoke-grey-gs-1-1000.svg',
    './assets/images-jordans/air-jordan-1-retro-high-court-purple-w-1-400.svg']

for (let i = 0; i < jodans.length; i++) {
    const element = jodans[i];
    var cardImage = document.createElement('div');
    cardImage.className = 'card-image';
    var img = document.createElement('img');
    img.setAttribute('src', element);
    img.setAttribute('alt', element);
    cardImage.appendChild(img);
    container.append(cardImage);
}
