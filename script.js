// window.onload = function () {
  let aList = Array.from(document.querySelectorAll('.navitem>a'));
  let topNav = document.getElementsByClassName("topnav")[0];
  let bottomNav = document.getElementsByClassName("bottomnav")[0];
  let text = document.getElementsByClassName('text')[0];
  let pList = Array.from(text.getElementsByTagName('p'));
  let prevBtn = document.getElementsByClassName('prev')[0];
  let nextBtn = document.getElementsByClassName('next')[0];
  let prevBtn2 = document.getElementsByClassName('prev')[1];
  let nextBtn2 = document.getElementsByClassName('next')[1];
  let mark = document.getElementsByClassName('mark')[0];
  let mark2 = document.getElementsByClassName('mark')[1];
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
    // console.log(index);
    if (window.innerWidth < 1440) {
      if (index > 3 && index < 7) {
        index += 3;
      }
    }
    // console.log(index);
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
        mark2.innerHTML = markArr[0];
        break;
      case 1:
        mark.innerHTML = markArr[1];
        mark2.innerHTML = markArr[1];
        break;
      case 2:
        mark.innerHTML = markArr[2];
        mark2.innerHTML = markArr[2];
        break;
      case 3:
        mark.innerHTML = markArr[3];
        mark2.innerHTML = markArr[3];
        break;
      case 4:
        mark.innerHTML = markArr[4];
        mark2.innerHTML = markArr[4];
        break;
      case 5:
        mark.innerHTML = markArr[5];
        mark2.innerHTML = markArr[5];
        break;
      case 6:
        mark.innerHTML = markArr[6];
        mark2.innerHTML = markArr[6];
        break;
      default: 
        mark.innerHTML = markArr[0];
        mark2.innerHTML = markArr[0];
        break;
    }
  }

  function topGoBack () {
    let index = currentIndex();
    // console.log(index);
    let eleClassName = pArr[index];
    // console.log(eleClassName)
    document.getElementsByClassName(eleClassName)[0].scrollTop = 0;
  }

  function toNextPage () {
    changeTxt(1);
    addNavUnderline();
    changeMark();
    topGoBack();
  }

  function toPrevPage () {
    changeTxt(-1);
    addNavUnderline();
    changeMark();
    topGoBack();
  }

  function changePage (e) {
    // acheive currentIndex
    // console.log(e.target, e.currentTarget)
    let currentIndex = 0;
    if (e.target === e.currentTarget || e.target === document.getElementsByClassName("header-nav")[0]) return;
    for (let i = 0; i < document.getElementsByClassName("navitem").length; i++) {
      if (e.target === document.getElementsByClassName("navitem")[i]) return;
    }

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
      if (window.innerWidth < 1440) {
        // currentIndex += 3;
        if (currentIndex < 4) {
          aList[currentIndex - 1].classList.add("nav-active");
        }
        aList[currentIndex + 3 - 1].classList.add("nav-active");
      }
      // if (currentIndex < 4) {
      //   aList[currentIndex - 1].classList.add("nav-active");
      //   console.log(1);
      // }
      aList[currentIndex - 1].classList.add("nav-active");
      
    }

    // draw mark
    switch (currentIndex) {
      case 0:
        mark.innerHTML = markArr[0];
        mark2.innerHTML = markArr[0];
        break;
      case 1:
        mark.innerHTML = markArr[1];
        mark2.innerHTML = markArr[1];
        break;
      case 2:
        mark.innerHTML = markArr[2];
        mark2.innerHTML = markArr[2];
        break;
      case 3:
        mark.innerHTML = markArr[3];
        mark2.innerHTML = markArr[3];
        break;
      case 4:
        mark.innerHTML = markArr[4];
        mark2.innerHTML = markArr[4];
        break;
      case 5:
        mark.innerHTML = markArr[5];
        mark2.innerHTML = markArr[5];
        break;
      case 6:
        mark.innerHTML = markArr[6];
        mark2.innerHTML = markArr[6];
        break;
      default: 
        mark.innerHTML = markArr[0];
        mark2.innerHTML = markArr[0];
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

    // reset the scrolltop of element
    topGoBack();
  }

  nextBtn.addEventListener("click", toNextPage);
  prevBtn.addEventListener("click", toPrevPage);
  nextBtn2.addEventListener("click", toNextPage);
  prevBtn2.addEventListener("click", toPrevPage);

  topNav.addEventListener("click", changePage);
  bottomNav.addEventListener("click", changePage);
// }
