const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close");

openBtn.onclick = () => {
    modal.classList.add("active");
};

closeBtn.onclick = () => {
    modal.classList.remove("active");
};

modal.onclick = (e) => {
    if (e.target === modal) {
        modal.classList.remove("active");
    }
};