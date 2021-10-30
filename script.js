// document.getElementsByTagName("a").forEach((elem) => {
//   elem.addEventListener("click", function (e) {
//     e.preventDefault();
//   });
// });

// console.log(document.getElementsByTagName("a"));

document
  .querySelector("input[name=checkbox]")
  .addEventListener("click", function (e) {
    if (e.target.checked) {
      document.querySelector(".header-nav").classList.remove("show");
    } else {
      document.querySelector(".header-nav").classList.add("show");
    }
  });
