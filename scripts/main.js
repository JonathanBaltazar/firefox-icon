let logo = document.querySelector(".logo");

logo.addEventListener("click", () => {
    logo.style.rotate = "360deg";
    logo.style.transition = "all 0.8s ease-in-out";

    setTimeout(() => {
        logo.removeAttribute("style");
    }, 1000);
});
