const item = document.querySelectorAll("div.noise");
const CLICKED_CLASS = "clicked";
function handleClick() {
    const hasClass = item.classList.contains(CLICKED_CLASS);
    if (!hasClass) {
        item.classList.add(CLICKED_CLASS);
    } else {
        item.classList.remove(CLICKED_CLASS);
    }
}

item.addEventListener("click", handleClick);

function init() {
    handleClick();
}

init();