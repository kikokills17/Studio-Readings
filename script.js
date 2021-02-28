window.onload = function () {
  // achieve doms which are useful
  let prevbtn1 = document.getElementsByClassName("prev")[0];
  let prevbtn2 = document.getElementsByClassName("prev")[1];
  let nextbtn1 = document.getElementsByClassName("next")[0];
  let nextbtn2 = document.getElementsByClassName("next")[1];
  let markNames = ['intro', 'question', 'exclamation', 'comma', 'apostrophe', 'period', 'colon'];
  
  let dom = document.querySelector("div.content>.text>p");
  let className = dom.className;
  // console.log(className);

  // initial opacity for text
  (function initialDraw() {
    if (!dom) return;
    dom.style.opacity = 1;
  }());

  function toPrevPage (currentPageName) {
    let currentPageIndex = 0;
    let newPageIndex = 0;
    let newUrl = '';
    if (!currentPageName) return;
    for (let i = 0; i < markNames.length; i++) {
      if (markNames[i] === currentPageName) {
        currentPageIndex = i;
      }
    }
    newPageIndex = currentPageIndex <= 0 ? markNames.length - 1 : currentPageIndex - 1;
    newUrl = `./${markNames[newPageIndex]}.html`;
    window.location.href = newUrl;
  }

  function toNextPage (currentPageName) {
    let currentPageIndex = 0;
    let newPageIndex = 0;
    let newUrl = '';
    if (!currentPageName) return;
    for (let i = 0; i < markNames.length; i++) {
      if (markNames[i] === currentPageName) {
        currentPageIndex = i;
      }
    }
    newPageIndex = currentPageIndex >= markNames.length - 1 ? 0 : currentPageIndex + 1;
    newUrl = `./${markNames[newPageIndex]}.html`;
    window.location.href = newUrl;
  }

  // add Event Listener
  prevbtn1.addEventListener('click', function () {
    toPrevPage(className);
  });
  prevbtn2.addEventListener('click', function () {
    toPrevPage(className);
  });
  nextbtn1.addEventListener('click', function () {
    toNextPage(className);
  });
  nextbtn2.addEventListener('click', function () {
    toNextPage(className);
  });
}