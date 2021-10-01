const LEVEL_1 = [
  ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", ".", "*"],
  ["*", "S", ".", ".", ".", ".", ".", "*", "*", ".", "*", ".", "T"],
  ["*", "*", "*", "*", "*", ".", ".", ".", ".", ".", "*", ".", "*"],
  ["*", "*", "*", "*", "*", ".", "*", "*", "*", ".", "*", ".", "*"],
  ["*", "*", "*", "*", "*", ".", "*", "*", "*", "*", "*", ".", "*"],
  ["*", "*", "*", "*", "*", ".", "*", "*", "*", "*", "*", ".", "*"],
  ["*", "*", "*", "*", "*", ".", ".", ".", ".", ".", ".", ".", "*"],
  ["*", "*", "*", "*", "*", ".", "*", "*", "*", "*", "*", "*", "*"],
  ["*", ".", ".", ".", ".", ".", ".", ".", ".", ".", "*", "*", "*"],
  ["*", ".", "*", "*", "*", "*", "*", "*", ".", ".", ".", "*", "*"],
  ["*", ".", ".", ".", ".", "*", "*", "*", "*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
];

const LEVEL_2 = [
  [
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
  ],
  [
    "*",
    ".",
    ".",
    "S",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    "*",
  ],
  [
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    ".",
    "*",
  ],
  [
    "*",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    "*",
  ],
  [
    "*",
    ".",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
  ],
  [
    "*",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    "T",
  ],
  [
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
  ],
];

const LEVEL_3 = [
  ["*", "*", "*", "*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "S", "*", "*", "*"],
  ["*", "*", "*", "*", ".", "*", "*", "*"],
  ["*", "*", "*", "*", ".", "*", "*", "*"],
  ["*", "*", "*", "*", ".", "*", "*", "*"],
  ["*", ".", ".", ".", ".", ".", ".", "*"],
  ["*", ".", "*", "*", "*", "*", ".", "*"],
  ["*", ".", ".", "*", "*", "*", ".", "*"],
  ["*", ".", ".", "*", "*", "*", ".", "*"],
  ["*", "*", ".", "*", "*", "*", "*", "*"],
  ["*", "T", ".", "*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*", "*", "*", "*"],
];

let main = document.querySelector("main");
let container = document.createElement("section");
main.appendChild(container);

let maze1 = LEVEL_1;
let positionX = 0;
let positionY = 0;

for (let i = 0; i < maze1.length; i++) {
  let j = 0;
  for (let elem of maze1[i]) {
    let block = document.createElement("div");
    container.appendChild(block);
    if (elem.includes("*")) {
      block.className = "walls";
    } else if (elem.includes(".")) {
      block.className = "paths";
    } else if (elem.includes("S")) {
      positionX = i;
      positionY = j;
      block.className = "starting";
    } else if (elem.includes("T")) {
      block.className = "treasure";
    }
    j++;
  }
}

let player = document.querySelector(".starting");
let div = document.querySelectorAll("div");

window.addEventListener("keypress", (event) => {
  let nextPosX = positionX;
  let nextPosY = positionY;

  if (event.key === "z") {
    nextPosY--;
  }
  if (event.key === "q") {
    nextPosX--;
  }
  if (event.key === "s") {
    nextPosY++;
  }
  if (event.key === "d") {
    nextPosX++;
  }

  console.log(div[nextPosY * 13 + nextPosX]);

  if (
    div[nextPosY * 13 + nextPosX].className == "paths" ||
    div[nextPosY * 13 + nextPosX].className == "pathed"
  ) {
    document.querySelectorAll("div")[positionY * 13 + positionX].className =
      "pathed";
    positionY = nextPosY;
    positionX = nextPosX;
    document.querySelectorAll("div")[positionY * 13 + positionX].className =
      "starting";
  } else if (div[nextPosY * 13 + nextPosX].className == "treasure") {
    alert("Letsss Goooo");
  }
});
