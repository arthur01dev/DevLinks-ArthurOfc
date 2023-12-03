let trilho = document.querySelector("#trilho");
let body = document.querySelector("body");
let txt = document.querySelector("#txt");
let perf = document.querySelector("#perf");
let fim = document.querySelector("#fim");

trilho.addEventListener("click", () => {
  trilho.classList.toggle("dark");
  body.classList.toggle("dark");
  txt.classList.toggle("dark");
  perf.classList.toggle("dark");
  fim.classList.toggle("dark");
});