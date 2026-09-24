const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase();

    cards.forEach(function (card) {
        const title = card.querySelector(".card-title").textContent.toLowerCase();

        if (title.includes(searchText)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
});