let currentPage = 1;
const totalQuestions = 13; // Set the total number of questions

function move() {
    var elem = document.getElementById("myBar");
    var width = (currentPage - 1) * (100 / totalQuestions); // Calculate the progress based on the current question
    var id = setInterval(frame, 10);

    function frame() {
        if (width >= currentPage * (100 / totalQuestions)) {
            clearInterval(id);
        } else if (width < currentPage * (100 / totalQuestions)) {
            width++;
            elem.style.width = width + '%';
            }
    }
}

function showPage(pageNumber) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    pages[pageNumber - 1].classList.add('active');
    move(); // Move progress bar when showing new question
}

function nextPage() {
    if (currentPage < totalQuestions) {
        currentPage++;
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
