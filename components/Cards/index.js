// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//

// make a card for every article and mount it in the DOM
const cardContainer = document.querySelector(".cards-container");
axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then((res) => {
    res.data.articles.javascript.forEach((article) => {
      cardContainer.appendChild(cardCreator(article));
    });
    res.data.articles.bootstrap.forEach((article) => {
      cardContainer.appendChild(cardCreator(article));
    });
    res.data.articles.technology.forEach((article) => {
      cardContainer.appendChild(cardCreator(article));
    });
    res.data.articles.jquery.forEach((article) => {
      cardContainer.appendChild(cardCreator(article));
    });
    res.data.articles.node.forEach((article) => {
      cardContainer.appendChild(cardCreator(article));
    });
  })
  .catch((err) => {
    console.log(err);
  });

function cardCreator(data) {
  let card = document.createElement("div");
  let header = document.createElement("div");
  let author = document.createElement("div");
  let imgContainer = document.createElement("div");
  let img = document.createElement("img");
  let feature = document.createElement("span");

  card.appendChild(header);
  card.appendChild(author);
  author.appendChild(imgContainer);
  author.appendChild(feature);
  imgContainer.appendChild(img);

  card.classList.add("card");
  header.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");
  header.textContent = data.headline;
  img.src = data.authorPhoto;
  feature.textContent = `By ${data.authorName}`;

  return card;
}
