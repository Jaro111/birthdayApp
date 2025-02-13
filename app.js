const click = document.getElementById("clickBtn");
const body = document.getElementsByTagName("body");
const centre = document.getElementById("centre");
const startButtonSpace = document.getElementById("startButtonSpace");
const imageContainer = document.getElementById("imageContainer");
const nextButton = document.getElementById("nextButton");
const wishesContent = document.getElementById("wishesContent");
const whoWish = document.getElementById("whoWish");

//
const imageArray = ["01_image", "02_image", "03_image"];
const i = 1;
let n = 0;
const wishes = {
  0: "\xa0\xa0\xa0\xa0Z okazji urodzin chcieli byśmy życzyć wszustkiego njalepszego",
  1: "\xa0\xa0\xa0\xa0Duzo zdrowia, pieniedzy i spełnienia marzeń",
  2: "\xa0\xa0\xa0\xa0Chociaz przede wszystkim, żeby każdy kolejny dzień sprawiał wiecej radości niż poprzedni",
  3: "Życzą Ania i Jarek",
};

//

click.addEventListener("click", () => {
  startButtonSpace.style.display = "none";
  imageContainer.style.display = "flex";
  imageContainer.style.backgroundImage = `url(../images/${imageArray[n]}.jpg)`;
  wishesContent.textContent = wishes[0];
});

nextButton.addEventListener("click", () => {
  n = n + i;
  if (n <= 2) {
    imageContainer.style.backgroundImage = `url(../images/${imageArray[n]}.jpg)`;
    if (n === 1) {
      wishesContent.textContent = wishes[1];
    } else if (n === 2) {
      wishesContent.textContent = wishes[2];
      whoWish.textContent = wishes[3];
      nextButton.textContent = "koniec";
    }
  } else if (n === 3) {
    startButtonSpace.style.display = "flex";
    imageContainer.style.display = "none";
    n = 0;
    wishesContent.textContent = "";
    whoWish.textContent = "";
    nextButton.textContent = "dalej >>";
  }
  console.log(n);
});
