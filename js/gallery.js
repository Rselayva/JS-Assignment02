const featuredImage = document.querySelector('#gallery figure img');
const thumbnails = document.querySelectorAll('#gallery ul li img');

thumbnails.forEach((thumbnail, index) => {
   thumbnail.addEventListener('click', () => {
      const largeImageSrc = thumbnail.src.replace('-small', '-large');
      featuredImage.src = largeImageSrc;

      featuredImage.alt = thumbnail.alt.replace(' thumbnail', '');
      document.querySelector('#gallery figure figcaption').textContent = thumbnail.alt.replace(' thumbnail', '');
   });
});
