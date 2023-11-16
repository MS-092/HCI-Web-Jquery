function filterImages(category) {
    const images = document.querySelectorAll('.image');

    images.forEach(image => {
        const id = image.getAttribute('data-id');

        if (category === 'all' || image.classList.contains(category)) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}
