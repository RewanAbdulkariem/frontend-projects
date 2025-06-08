const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.querySelector('.lightbox');
const closeBtn = document.getElementById('close-btn');
const lightboxImage = document.getElementById('lightbox-image');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImage.setAttribute('src', item.getAttribute('src').replace('-thumbnail', ''));
    });
});
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});
lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

