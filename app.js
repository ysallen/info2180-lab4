document.addEventListener("DOMContentLoaded", function () {
    let searchButton = document.getElementById("search-btn");
    let searchInput = document.getElementById("search-input");
    let result = document.getElementById("result");

    searchButton.addEventListener("click", function () {
        let query = searchInput.value;

        fetch("superheroes.php?query=" + encodeURIComponent(query))
            .then(function (response) {
                return response.text();
            })
            .then(function (data) {
                result.innerHTML = data;
            });
    });
});