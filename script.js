const giftLink = document.getElementById("GiftLink");
const giftFields = document.getElementById("GiftFields");

giftLink.addEventListener("click", function(event) {
    event.preventDefault();

    if (giftFields.style.display === "block") {
        giftFields.style.display = "none";
        giftLink.textContent = "Already have a startbucks gift card?▼";
    } else {
        giftFields.style.display = "block";
        giftLink.textContent = "Already have a startbucks gift card? ▲";
    }
});