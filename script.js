let aList = Array.from(document.querySelectorAll('.navitem>a'));
let topNav = document.getElementsByClassName("topnav")[0];
let bottomNav = document.getElementsByClassName("bottomnav")[0];
let text = document.getElementsByClassName('text')[0];
let pList = Array.from(text.getElementsByTagName('p'));
let prevBtn = document.getElementsByClassName('prev')[0];
let nextBtn = document.getElementsByClassName('next')[0];
let mark = document.getElementsByClassName('mark')[0];
let pArr = ["intro", "question", "exclamation", "comma", "apostrophe", "period", "colon"];
let markArr = ["/", "?", "!", ",", "‘", ".", ";"];

(function initialDraw () {
  let index = currentIndex();
  if (index === 0) {
    aList.forEach(e => {
      e.classList.remove('nav-active');
    })
  }
}());

function currentIndex () {
  let currentIndexName = "";
  let currentIndex = 0;
  pList.forEach(ele => {
    if (ele.className.indexOf("txt-active") !== -1) {
      let txtIndex = ele.className.indexOf("txt");
      currentIndexName = ele.className.slice(0, txtIndex-1);
      // console.log(currentIndexName);
    }
  })
  for (let i = 0; i < pArr.length; i++) {
    if (pArr[i] === currentIndexName) {
      currentIndex = i;
      // console.log(currentIndex);
    }
  }
  return currentIndex;
}

function changeTxt(flag) {
  let currentIndexName = "";
  let currentIndex = 0;
  let newIndexName = "";
  pList.forEach(ele => {
    if (ele.className.indexOf("txt-active") !== -1) {
      ele.classList.remove("txt-active");
      currentIndexName = ele.className;
    }
  })
  if (flag === 1) {
    for (let i = 0; i < pArr.length; i++) {
      if (pArr[i] === currentIndexName) {
        if (i < pArr.length-1) {
          currentIndex = i;
        } else {
          currentIndex = -1;
        }
      }
    }
    newIndexName = pArr[currentIndex + 1];
    pList.forEach(e => {
      if (e.className === newIndexName) {
        e.classList.add("txt-active");
      }
    })
  } else if (flag === -1) {
    for (let i = 0; i < pArr.length; i++) {
      if (pArr[i] === currentIndexName) {
        if (i > 0) {
          currentIndex = i;
        } else {
          currentIndex = pArr.length;
        }
      }
    }
    newIndexName = pArr[currentIndex - 1];
    pList.forEach(e => {
      if (e.className === newIndexName) {
        e.classList.add("txt-active");
      }
    })
  }
  return newIndexName;
}

function addNavUnderline () {
  let index = currentIndex();
  if (index === 0) {
    aList.forEach(e => {
      e.classList.remove('nav-active');
    })
  } else {
    aList.forEach(e => {
      e.classList.remove('nav-active');
    })
    aList[index-1].classList.add("nav-active");
  }
}

function changeMark () {
  let index = currentIndex();
  switch (index) {
    case 0:
      mark.innerHTML = markArr[0];
      break;
    case 1:
      mark.innerHTML = markArr[1];
      break;
    case 2:
      mark.innerHTML = markArr[2];
      break;
    case 3:
      mark.innerHTML = markArr[3];
      break;
    case 4:
      mark.innerHTML = markArr[4];
      break;
    case 5:
      mark.innerHTML = markArr[5];
      break;
    case 6:
      mark.innerHTML = markArr[6];
      break;
  }
}

function toNextPage () {
  changeTxt(1);
  addNavUnderline();
  changeMark();
}

function toPrevPage () {
  changeTxt(-1);
  addNavUnderline();
  changeMark();
}

function changePage (e) {
  // acheive currentIndex
  let currentIndex = 0;
  if (e.target === e.currentTarget || e.target === document.getElementsByClassName("header-nav")[0]) return;
  let key = e.target.innerHTML.toLowerCase();
  if (e.target.innerHTML.toLowerCase() === "colon&amp;semi-colon") {
    key = key.slice(0, 5);
  }
  for (let i = 0; i < pArr.length; i++) {
    if (pArr[i] === key) {
      currentIndex = i;
    }
  }

  // draw underline
  if (currentIndex === 0) {
    aList.forEach(e => {
      e.classList.remove('nav-active');
    })
  } else {
    aList.forEach(e => {
      e.classList.remove('nav-active');
    })
    aList[currentIndex-1].classList.add("nav-active");
  }
  // draw mark
  switch (currentIndex) {
    case 0:
      mark.innerHTML = markArr[0];
      break;
    case 1:
      mark.innerHTML = markArr[1];
      break;
    case 2:
      mark.innerHTML = markArr[2];
      break;
    case 3:
      mark.innerHTML = markArr[3];
      break;
    case 4:
      mark.innerHTML = markArr[4];
      break;
    case 5:
      mark.innerHTML = markArr[5];
      break;
    case 6:
      mark.innerHTML = markArr[6];
      break;
  }

  // display text
  pList.forEach(ele => {
    if (ele.className.indexOf("txt-active") !== -1) {
      ele.classList.remove("txt-active");
    }
  })
  pList.forEach(e => {
    if (e.className === key) {
      e.classList.add("txt-active");
    }
  })
}

nextBtn.addEventListener("click", toNextPage);
prevBtn.addEventListener("click", toPrevPage);

topNav.addEventListener("click", changePage);
bottomNav.addEventListener("click", changePage);
