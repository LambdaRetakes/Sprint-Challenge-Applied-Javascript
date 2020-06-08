// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const headerSelector = document.querySelector(".header-container");

function Header() {
    const header = document.createElement("div");
    header.classList.add("header");
    headerSelector.appendChild(header);

    const headerDate = document.createElement("span");
    headerDate.classList.add("date");
    headerDate.textContent = "SMARCH 28, 2019";
    header.appendChild(headerDate);

    const headerH1 = document.createElement("h1");
    headerH1.textContent = "Lambda Times";
    header.appendChild(headerH1);

    const headerTemp = document.createElement("span");
    headerTemp.textContent = "98°";
    headerTemp.classList.add("temp");
    header.appendChild(headerTemp);
}

Header();