let currentPage = 1;

function move() {
    var elem = document.getElementById("myBar");
    var width = 0;
    var id = setInterval(frame, 10);

    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width + '%';
        }
    }
}
function showPage(pageNumber) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    pages[pageNumber - 1].classList.add('active');
}

function nextPage() {
    if (currentPage < 14) {
        currentPage++;
        move();
        showPage(currentPage);
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

});

showPage(currentPage);





