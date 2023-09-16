var counterContainer = document.querySelector(".website-counter");

var visitCount = localStorage.getItem("page_view");
visitCount = Number(visitCount) + 1;
localStorage.setItem("page_view", 1);

counterContainer.innerHTML = visitCount;
