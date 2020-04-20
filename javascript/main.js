// use a light box to give
const lightBox = document.createElement('div');
lightBox.id = 'LightBox';
document.body.appendChild(lightBox);

const images = document.querySelectorAll('img');

images.forEach(image => {
    image.addEventListener('click', e => {

        lightBox.classList.add('active');
        const largeImg = document.createElement('img');

        // show the image
        largeImg.src = image.src;
        while (lightBox.firstChild) {
            lightBox.removeChild(lightBox.firstChild)
        }
        lightBox.appendChild(largeImg)
    })
});

lightBox.addEventListener('click', e => {
    if (e.target === e.currentTarget)
        lightBox.classList.remove('active');
});

// Quote and inspired by WEB DEV SIMPLIFIED CHANNEL FROM youtube https://www.youtube.com/watch?v=uKVVSwXdLr0
