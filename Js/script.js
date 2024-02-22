// const navbar = document.querySelector(".page1-content");
// let top1 = navbar.offsetTop;
// function stickynavbar() {
//   if (window.scrollY >= top1) {
//     navbar.classList.add("sticky");
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
// window.addEventListener("scroll", stickynavbar);

let scrollContainer = document.querySelector(".gallery");
let nextBtn = document.getElementById("nextBtn");
let backBtn = document.getElementById("backBtn");
let img = document.getElementById("1stImg");

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
  scrollContainer.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 900;
});

backBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 900;
});
