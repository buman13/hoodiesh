document.addEventListener('DOMContentLoaded', function () {
    let sizes = document.querySelectorAll('.psize');

    sizes.forEach(function (size) {
        size.addEventListener('click', function () {
            // Remove the 'clicked' class from all sizes
            sizes.forEach(function (s) {
                s.classList.remove('clicked');
            });

            // Add the 'clicked' class to the clicked size
            size.classList.add('clicked');
        });
    });
});
function openPopup() {
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
document.addEventListener('DOMContentLoaded', () => {
    // Your code here
    document.querySelectorAll('.clothes-card img').forEach(img => {
        img.onclick = () => {
            document.querySelector('.pop-img').style.display = 'block';
            document.querySelector('.pop-img img').src = img.getAttribute('src');
        }
    });

    document.querySelector('.pop-img span').onclick = () => {
        document.querySelector('.pop-img').style.display = 'none';
    };
    
  
});;
document.querySelector('.body').addEventListener('click', (event) => {
    const popImg = document.querySelector('.pop-img');
    // Check if the click is not inside the '.pop-img' element
    if (popImg && !popImg.contains(event.target)) {
        popImg.style.display = 'none';
    }
});