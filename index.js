const listEl = document.querySelector(".about-list");
let currentActive = null;
console.log(listEl);
listEl.addEventListener("click", (event) => {
  if (event.target === event.currentTarget) {
    return;
  }
  const liEl = event.target.closest(".about-list-item");
  if (currentActive) {
    currentActive.classList.remove("active");
  }
  if (currentActive === liEl) {
    currentActive = null;
    return;
  }
  liEl.classList.add("active");
  currentActive = liEl;
});
const btnEl1 = document.querySelector(".our-team-btn-left");
const btnEl2 = document.querySelector(".our-team-btn-right");
const teamsLiArr = document.querySelectorAll(".our-team-list-item");
let activeTeamCardId = 1;
console.log(activeTeamCardId);

btnEl1.addEventListener("click", (event) => {
  console.log(teamsLiArr[activeTeamCardId]);
  teamsLiArr[activeTeamCardId].classList.remove("active");
  console.log(activeTeamCardId);

  activeTeamCardId -= 1;
  console.log(activeTeamCardId);

  if (activeTeamCardId < 0) {
    activeTeamCardId = 2;
  }
  teamsLiArr[activeTeamCardId].classList.add("active");
  console.log(activeTeamCardId);
});

btnEl2.addEventListener("click", (event) => {
  teamsLiArr[activeTeamCardId].classList.remove("active");
  activeTeamCardId += 1;
  if (activeTeamCardId > 2) {
    activeTeamCardId = 0;
  }
  teamsLiArr[activeTeamCardId].classList.add("active");
  console.log(activeTeamCardId);
});
const btnEl3 = document.querySelector(".reviews-btn-left");
const btnEl4 = document.querySelector(".reviews-btn-right");
const ReviewsLiArr1 = document.querySelectorAll(".reviews-list-item");
let activeReviewsCardId = 1;
console.log(btnEl3);
btnEl3.addEventListener("click", (event) => {
  ReviewsLiArr1[activeReviewsCardId].classList.remove("active");
  activeReviewsCardId -= 1;
  if (activeReviewsCardId < 0) {
    activeReviewsCardId = 2;
  }
  ReviewsLiArr1[activeReviewsCardId].classList.add("active");
});
btnEl4.addEventListener("click", (event) => {
  ReviewsLiArr1[activeReviewsCardId].classList.remove("active");
  activeReviewsCardId += 1;
  console.log(activeReviewsCardId);
  if (activeReviewsCardId > 2) {
    activeReviewsCardId = 0;
  }
  ReviewsLiArr1[activeReviewsCardId].classList.add("active");
});
