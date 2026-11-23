/* =========================================================
   Club Offerings page scripts: random order, sorting,
   search by name and filter by skill level
   ========================================================= */

let offeringList = document.getElementById("offering-list");

/* Copy the offering cards into an array so they can be shuffled and sorted */
let cards = [];
let cardElements = offeringList.getElementsByClassName("offering-card");
for (let i = 0; i < cardElements.length; i++) {
    cards.push(cardElements[i]);
}

/* Helper functions that read each card's name, price and level */
function getName(card) {
    return card.getElementsByTagName("h2")[0].textContent;
}

function getPrice(card) {
    return parseInt(card.getElementsByClassName("offering-price")[0].textContent);
}

function getLevel(card) {
    return card.getElementsByClassName("offering-level")[0].textContent.toLowerCase();
}

/* Places the cards on the page in the order of the array */
function showCards() {
    for (let i = 0; i < cards.length; i++) {
        offeringList.appendChild(cards[i]);
    }
}

/* Shuffles the cards into a random order */
function shuffleOfferings() {
    for (let i = cards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = cards[i];
        cards[i] = cards[j];
        cards[j] = temp;
    }
    showCards();
}

/* Sorts the cards by the option chosen in the "Sort by" list */
function sortOfferings() {
    let option = document.getElementById("sort").value;

    if (option == "random") {
        shuffleOfferings();
        return;
    }

    if (option == "price-low") {
        cards.sort(function (a, b) {
            return getPrice(a) - getPrice(b);
        });
    } else if (option == "price-high") {
        cards.sort(function (a, b) {
            return getPrice(b) - getPrice(a);
        });
    } else if (option == "name-az") {
        cards.sort(function (a, b) {
            if (getName(a) < getName(b)) {
                return -1;
            }
            if (getName(a) > getName(b)) {
                return 1;
            }
            return 0;
        });
    } else if (option == "name-za") {
        cards.sort(function (a, b) {
            if (getName(a) > getName(b)) {
                return -1;
            }
            if (getName(a) < getName(b)) {
                return 1;
            }
            return 0;
        });
    }
    showCards();
}

/* Shows only the offerings whose name contains the search text
   and whose level matches the chosen skill level */
function filterOfferings() {
    let searchText = document.getElementById("search").value.toLowerCase().trim();
    let level = document.getElementById("level").value;
    let shown = 0;

    for (let i = 0; i < cards.length; i++) {
        let nameMatches = getName(cards[i]).toLowerCase().indexOf(searchText) != -1;
        let levelMatches = level == "all" || getLevel(cards[i]) == level;

        if (nameMatches && levelMatches) {
            cards[i].style.display = "";
            shown++;
        } else {
            cards[i].style.display = "none";
        }
    }

    /* Message shown when no offering matches */
    if (shown == 0) {
        document.getElementById("no-results").style.display = "block";
    } else {
        document.getElementById("no-results").style.display = "none";
    }
}

/* Display the offerings in a random order when the page loads */
shuffleOfferings();
