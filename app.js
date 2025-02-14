const click = document.getElementById("clickBtn");
const body = document.getElementsByTagName("body");
const centre = document.getElementById("centre");
const startButtonSpace = document.getElementById("startButtonSpace");
const imageContainer = document.getElementById("imageContainer");
const nextButton = document.getElementById("nextButton");
const wishesContent = document.getElementById("wishesContent");
const whoWish = document.getElementById("whoWish");
const wishesTag = document.getElementById("wishesTag");

//
const imageArray = ["01image", "02image", "03image"];
const i = 1;
let n = 0;
const wishes = {
  0: "\xa0\xa0\xa0\xa0W dniu Twojego Święta życzymy Ci wszystkiego Najlepszego",
  1: "\xa0\xa0\xa0\xa0Dużo zdrowia, szczęścia i miłości. Żebyś zawsze była uśmiechnięta, pogodna oraz żebyś odnalazła to czego szukasz",
  2: "\xa0\xa0\xa0\xa0Chociaz przede wszystkim, żeby każdy kolejny dzień sprawiał wiecej radości niż poprzedni",
  3: "\xa0\xa0\xa0\xa0\xa0Życzą Ania i Jarek",
  4: "\xa0\xa0\xa0\xa0Kochana Mamo.",
};
//
const colorClickFunction = () => {
  nextButton.style.backgroundColor = "white";
  setInterval(() => {
    nextButton.style.backgroundColor = "rgba(0, 0, 0, 0.137)";
  }, 200);
};

//

click.addEventListener("click", () => {
  startButtonSpace.style.display = "none";
  imageContainer.style.display = "flex";
  imageContainer.style.backgroundImage = `url(./images/${imageArray[n]}.jpg)`;
  wishesContent.textContent = wishes[0];
  wishesTag.textContent = wishes[4];
});

nextButton.addEventListener("click", () => {
  n = n + i;
  if (n <= 2) {
    wishesTag.style.display = "none";
    imageContainer.style.backgroundImage = `url(./images/${imageArray[n]}.jpg)`;
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
    wishesTag.style.display = "block";
  }
  colorClickFunction();
});
