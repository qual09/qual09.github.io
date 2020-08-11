console.log("Yo Dawg!");
console.log(location.hostname);

function yo() {
  const searchCriteria = {
    a: "aaa",
    b: "bbb",
    c: "bbb",
  };

  // console.log(Object.keys(searchCriteria));

  for (let prop in searchCriteria) {
    // if (searchCriteria.hasOwnProperty(prop))
    console.log(prop, searchCriteria[prop]);
  }
}

function openContent(content) {
  $("#mainContent").load(content + ".html");
  selectCurrentNav(content);
}

function selectCurrentNav(content) {
  document.getElementById("home").classList.remove("currentMenu");
  // document.getElementById("blog").classList.remove("currentMenu");
  document.getElementById("about").classList.remove("currentMenu");
  document.getElementById(content).classList.add("currentMenu");
}

//STICKY HEADER
window.onscroll = () => stickyHeader();
function stickyHeader() {
  var header = document.getElementById("stickyHeader");
  var headerPosition = document.getElementById("mainContent");
  var sticky = headerPosition.offsetTop;
  if (window.pageYOffset > sticky) {
    header.classList.add("stickyHeader");
  } else {
    header.classList.remove("stickyHeader");
  }
}
