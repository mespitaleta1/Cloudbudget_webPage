const CLASS_VISIBLE = "carousel_item--visible";
const NEXT = "next";
const PREV = "prev";
let currentSlidesIdx = [0, 1, 2];
let slidesId = Array.from(
  document.getElementsByClassName("carousel_item")
).map((elementHTML) => elementHTML.getAttribute("id"));

let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");

prevBtn.addEventListener("click", () => onHandleSlideChange(PREV));
nextBtn.addEventListener("click", () => onHandleSlideChange(NEXT));

function onHandleSlideChange(move) {
  const newSlidesIdx = currentSlidesIdx.map((currentSlideIdx) => {
    let newSlide;
    if (move === PREV) {
      if (currentSlideIdx === 0) {
        newSlide = slidesId.length - 1;
      } else {
        newSlide = currentSlideIdx - 1;
      }
    } else {
      if (currentSlideIdx === slidesId.length - 1) {
        newSlide = 0;
      } else {
        newSlide = currentSlideIdx + 1;
      }
    }
    return newSlide;
  });

  currentSlidesIdx.forEach((idx) => {
    const elementHTML = document.getElementById(slidesId[idx]);
    elementHTML.classList.remove(CLASS_VISIBLE, "center", "prev", "next");
  });

  newSlidesIdx.forEach((item, idx) => {
    const elementHTML = document.getElementById(slidesId[item]);
    elementHTML.classList.add(CLASS_VISIBLE);
    switch (idx) {
      case 0:
        elementHTML.classList.add("prev");
        break;
      case 1:
        elementHTML.classList.add("center");
        break;
      case 2:
        elementHTML.classList.add("next");
        break;
    }
  });
  currentSlidesIdx = newSlidesIdx;
}
