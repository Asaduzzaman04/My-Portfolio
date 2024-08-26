// =====>menu-section-start<====== \\
const sideMenu = document.getElementById("side-menu");
const menuBtn = document.getElementById("menu-btn");
const closeMenu = document.getElementById("close-menu");

menuBtn.addEventListener("click", () => {
  sideMenu.style.right = "0";
});
closeMenu.addEventListener("click", () => {
  sideMenu.style.right = "-100%";
});

const listClose = document.getElementsByClassName("list-close");
for (let list of listClose) {
  list.addEventListener("click", () => {
    sideMenu.style.right = "-100%";
  });
}
// =====>mode-btn<=====\\



// =====>menu-section-end<====== \\

