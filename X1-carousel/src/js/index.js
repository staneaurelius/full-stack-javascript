import "../css/normalize.css";
import "../css/style.css";
import btcImg from "../img/bitcoin.png";
import bnbImg from "../img/bnb.png";
import solImg from "../img/solana.png";
import adaImg from "../img/cardano.png";
import mkrImg from "../img/maker.png";

function createCircleSvg() {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
    circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("width", "8px");
  svg.setAttribute("height", "8px");
  svg.classList.add("circle-btn");

  circle.setAttribute("r", "12");
  circle.setAttribute("cx", "12");
  circle.setAttribute("cy", "12");
  circle.setAttribute("fill", "currentColor");

  svg.appendChild(circle);
  return svg;
}

function clearActiveCircles(circleBtns) {
  for (let i = 0; i < circleBtns.length; i++) {
    const btn = circleBtns[i];
    if (btn.classList.contains("active")) {
      btn.classList.toggle("active");
      break;
    }
  }
}

function generateImage(imageName) {
  const imageMapper = {
    Bitcoin: btcImg,
    "Build N Build": bnbImg,
    Solana: solImg,
    Cardano: adaImg,
    Maker: mkrImg,
  };

  const image = document.createElement("img");
  image.setAttribute("src", imageMapper[imageName]);
  image.setAttribute("alt", `Image of ${imageName} coin`);
  image.setAttribute("id", imageName);
  image.setAttribute("width", "600px");
  image.setAttribute("height", "250px");

  return image;
}

const dropdownHandler = (function () {
  const dropdownBtn = document.querySelector(".dropdown"),
    dropdownContainer = document.querySelector(".dropdown-items"),
    dropdownItems = document.querySelectorAll("li");

  dropdownBtn.addEventListener("click", (e) => {
    dropdownContainer.classList.toggle("hidden");
  });

  dropdownItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      dropdownBtn.textContent = e.target.textContent;
      dropdownContainer.classList.toggle("hidden");

      const imageIndex = carouselHandler.coinImages.indexOf(
        dropdownBtn.textContent
      );
      carouselHandler.navigateToImg(imageIndex);
    });
  });

  return { dropdownBtn };
})();

const carouselHandler = (function () {
  const coinImages = ["Bitcoin", "Build N Build", "Solana", "Cardano", "Maker"],
    btnContainer = document.querySelector("#carousel-buttons");

  // Circle initiator
  for (let i = 0; i < coinImages.length; i++) {
    const circleSvg = createCircleSvg();
    if (i === 0) {
      circleSvg.classList.toggle("active");
    }

    btnContainer.insertBefore(
      circleSvg,
      btnContainer.querySelector("#next-btn")
    );
  }

  // Image initiator
  const imgContainer = document.querySelector("#carousel-images");
  for (let i = 0; i < coinImages.length; i++) {
    const coinImage = generateImage(coinImages[i]);
    if (i === 0) {
      coinImage.classList.add("focus");
    } else if (i === 1) {
      coinImage.classList.add("img-next");
    } else {
      coinImage.classList.add("hidden");
    }

    imgContainer.appendChild(coinImage);
  }

  // Image navigator
  const navigateToImg = function (index) {
    const displayedImgs = document.querySelectorAll("img");
    displayedImgs[index].classList.add("focus");

    for (let i = 0; i < displayedImgs.length; i++) {
      const imgClasses = displayedImgs[i].classList;
      displayedImgs[i].classList.remove(...imgClasses);
      displayedImgs[i].classList.add("hidden");
    }

    displayedImgs[index].classList.add("focus");
    displayedImgs[index].classList.remove("hidden");

    if (index === 0) {
      displayedImgs[index + 1].classList.add("img-next");
      displayedImgs[index + 1].classList.remove("hidden");
    } else if (index === 4) {
      displayedImgs[index - 1].classList.add("img-prev");
      displayedImgs[index - 1].classList.remove("hidden");
    } else {
      displayedImgs[index - 1].classList.add("img-prev");
      displayedImgs[index - 1].classList.remove("hidden");
      displayedImgs[index + 1].classList.add("img-next");
      displayedImgs[index + 1].classList.remove("hidden");
    }

    dropdownHandler.dropdownBtn.textContent = coinImages[index];
  };

  // Circle buttons listener
  const circleBtns = document.querySelectorAll(".circle-btn");
  circleBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let targetSvg;
      if (e.target.tagName != "svg") {
        targetSvg = e.target.parentNode;
      } else {
        targetSvg = e.target;
      }
      clearActiveCircles(circleBtns);
      targetSvg.classList.toggle("active");

      // Change image on click
      const buttonIndex = Array.from(circleBtns).indexOf(targetSvg);
      navigateToImg(buttonIndex);
    });
  });

  // Arrow button listener
  const prevBtn = document.querySelector("#prev-btn"),
    nextBtn = document.querySelector("#next-btn");

  prevBtn.addEventListener("click", (e) => {
    const currentCoin = dropdownHandler.dropdownBtn.textContent;
    const currentIndex = coinImages.indexOf(currentCoin);
    navigateToImg(currentIndex - 1);
  });

  nextBtn.addEventListener("click", (e) => {
    const currentCoin = dropdownHandler.dropdownBtn.textContent;
    const currentIndex = coinImages.indexOf(currentCoin);
    navigateToImg(currentIndex + 1);
  });

  return { coinImages, navigateToImg };
})();
