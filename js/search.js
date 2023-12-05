const movieSearchBox = document.getElementById("movie-search-box");
const searchList = document.getElementById("search-list");
const resultGrid = document.getElementById("result-grid");
const checkboxes = document.getElementById("checkboxes");
let allmovies=[];



function createListeners()
{
  movieSearchBox.addEventListener("keyup", findMovies)
  const checkElements = checkboxes.querySelectorAll(".type-checkbox");  //added all checboxes to the checkelements which is an object.
  console.log(checkElements)
  checkElements.forEach(item => {
    item.addEventListener("change", ()=> {
      displayMovieList(allmovies);
    })
  })

}
createListeners();



// load movies from API
async function loadMovies(searchTerm) {
  const URL = `https://omdbapi.com/?s=${searchTerm}&apikey=434bb60d`; //calling end points and receiving data in the variable.
  const res = await fetch(`${URL}`);
  const data = await res.json(); //the result is being converted to json
  if (data.Response == "True"){ 
    displayMovieList(data.Search);  
    allmovies=data.Search;
  }
  else
  allmovies=[];
}

function findMovies() {
  let searchTerm = movieSearchBox.value;
  if (searchTerm.length > 0) {
    searchList.classList.remove("hide-search-list");
    loadMovies(searchTerm);
  } else {
    searchList.classList.add("hide-search-list");
  }
}

function displayMovieList(movieData) {
  searchList.innerHTML = "";  //emptying the searchList each time
  const checkElements = checkboxes.querySelectorAll(".type-checkbox");  //added all checboxes to the checkelements which is an object.
  
  let checked = "all"; 
  checkElements.forEach((item)=>{      //pushed all those elements to form an array of checkboxes using anon function.
    // checks.push(item);
    if(item.checked)
    {
    checked=item.value;
    }
  })
  let movies = [];  
  console.log(checked); //now we want another array which will check the checking of those checkboxes, this is the array which we will be using ahead in our list. 
  if (checked==="all"){
    
  movies=movieData;
  }
  else
  {
    
    movies=movieData.filter((item)=>{
    return item.Type===checked;
    })
  }
  
  for (let idx = 0; idx < movies.length; idx++) {
    let movieListItem = document.createElement("div");
    movieListItem.dataset.id = movies[idx].imdbID; // setting movie id in  data-id
    movieListItem.classList.add("search-list-item");
    if (movies[idx].Poster != "N/A") moviePoster = movies[idx].Poster;
    else moviePoster = "Imagenotfound.jpeg";
    const thumbnail1 = document.createElement("div");
    thumbnail1.classList.add("search-item-thumbnail");
    const image = document.createElement("img");
    image.setAttribute("src", moviePoster);
    thumbnail1.append(image); //appended image with the thumbnail.
    const information = document.createElement("div");
    information.classList.add("search-item-info"); //added div with search-item-info class to the movieListItem class list
    movieListItem.append(thumbnail1, information);
    const nameofmovie = document.createElement("h3");
    const yearofmovie = document.createElement("p");
    nameofmovie.innerText = movies[idx].Title;
    yearofmovie.innerText = movies[idx].Year;
    information.append(nameofmovie, yearofmovie);
    // console.log(movieListItem);
    searchList.appendChild(movieListItem);
  }
  loadMovieDetails();
}

function loadMovieDetails() {
  const searchListMovies = searchList.querySelectorAll(".search-list-item");
  searchListMovies.forEach((movie) => {
    movie.addEventListener("click", async () => {
      // console.log(movie.dataset.id);
      searchList.classList.add("hide-search-list");
      movieSearchBox.value = "";
      const result = await fetch(
        `http://www.omdbapi.com/?i=${movie.dataset.id}&apikey=434bb60d`
      );
      const movieDetails = await result.json();
      // console.log(movieDetails);
      displayMovieDetails(movieDetails);
    });
  });
}

function displayMovieDetails(details) {
  resultGrid.innerHTML = `
  <div class="flip-card">
  <div class="flip-card-inner">
    <div class = "movie-poster">
        <img src = "${
          details.Poster != "N/A" ? details.Poster : "image_not_found.png"
        }" alt = "movie poster">
    </div>
    <div class="flip-card-back">
    <h4>${details.Title}</h4>
    <h5>${details.Year}</h5>
    </div>
    </div>
    </div>
    <div class = "movie-info">
        <h3 class = "movie-title">${details.Title}</h3>
        <ul class = "movie-misc-info">
            <li class = "year"><b>Year: </b>${details.Year}</li>
            <li class = "rated">Ratings: ${details.Rated}</li>
            <li class = "released"><b>Released: </b>${details.Released}</li>
        </ul>
        <p class = "genre"><b>Genre: &nbsp;</b> ${details.Genre}</p>
        <p class = "writer"><b>Writer: &nbsp;</b> ${details.Writer}</p>
        <p class = "actors"><b>Actors: &nbsp;</b>${details.Actors}</p>
        <p class = "plot"><b>Plot: &nbsp;</b> ${details.Plot}</p>
        <p class = "language"><b>Language: &nbsp;</b> ${details.Language}</p>
        <p class = "awards"><b>Awards: &nbsp;<i class = "fas fa-award"></i></b> ${
          details.Awards
        }</p>
    </div>
    `;
};


