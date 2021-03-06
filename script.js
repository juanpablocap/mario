const card = document.querySelector(".card");
const container = document.querySelector(".container");

const title = document.querySelector(".title");
const mario = document.querySelector(".mario img");
const github = document.querySelector(".github");
const description = document.querySelector(".info h3");
const btn = document.querySelector(".btn-group");

container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";

  title.style.transform = "translateZ(150px)";
  mario.style.transform = "translateZ(70px) rotateZ(-45deg)";
  description.style.transform = "translateZ(125px)";
  btn.style.transform = "translateZ(100px)";
  github.style.transform = "translateZ(75px)";
});

container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;

  title.style.transform = "translateZ(0px)";
  mario.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  btn.style.transform = "translateZ(0px)";
  github.style.transform = "translateZ(0px)";
});