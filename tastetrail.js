

function showPage(pageName) {

    // Get all pages
    const pages = document.querySelectorAll(".page");

    // Hide every page
    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    // Show selected page
    document
        .getElementById(pageName)
        .classList.add("active");

    // Go to top
    window.scrollTo(0, 0);
}


function filterRecipes(category) {

    const cards =
        document.querySelectorAll(".recipe-card");

    cards.forEach(function(card) {

        const cardCategory =
            card.dataset.category;

        if (
            category === "all" ||
            cardCategory.includes(category)
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


function goToCategory(category) {

    showPage("recipes");

    filterRecipes(category);

}


function searchRecipes() {

    const searchValue =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const cards =
        document.querySelectorAll(".recipe-card");

    cards.forEach(function(card) {

        const name =
            card.dataset.name.toLowerCase();

        if (name.includes(searchValue)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


let favorites = [];


function addFavorite(recipe) {

    if (!favorites.includes(recipe)) {

        favorites.push(recipe);

        updateFavorites();

        alert(recipe + " added to your favorites ❤️");

    } else {

        alert(recipe + " is already in your favorites.");

    }

}


function updateFavorites() {

    const favoriteList =
        document.getElementById("favoriteList");


    if (favorites.length === 0) {

        favoriteList.innerHTML =
            "<p class='empty'>You haven't added any recipes yet.</p>";

        return;

    }


    favoriteList.innerHTML = "";


    favorites.forEach(function(recipe) {

        const item =
            document.createElement("div");

        item.className = "favorite-item";

        item.innerHTML =
            "❤️ " + recipe;

        favoriteList.appendChild(item);

    });

}


function toggleDarkMode() {

    document.body.classList.toggle("dark");

}


document
    .getElementById("contactForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        const name =
            document.getElementById("name")
            .value
            .trim();


        const email =
            document.getElementById("email")
            .value
            .trim();


        const message =
            document.getElementById("message")
            .value
            .trim();


        const result =
            document.getElementById("formMessage");


        if (
            name === "" ||
            email === "" ||
            message === ""
        ) {

            result.innerText =
                "⚠️ Please fill in all fields.";

            return;

        }


        if (!email.includes("@")) {

            result.innerText =
                "⚠️ Please enter a valid email.";

            return;

        }


        result.innerText =
            "✅ Thank you, " +
            name +
            "! Your message has been submitted.";

        document
            .getElementById("contactForm")
            .reset();

    });