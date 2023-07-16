function sandwich() {
    let element = document.getElementById("dropDown");
    if (element.classList.contains("hidden")) {
        element.classList.remove("hidden");
        element.classList.add("flex");
    } else if (element.classList.contains("flex")) {
        element.classList.remove("flex");
        element.classList.add("hidden");
    }
}