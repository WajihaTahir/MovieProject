function searchshow(query)
{
    const url=`https://www.omdbapi.com/?apikey=434bb60d&s=${query}`;
    fetch(url)
    .then(response => response.json())
    .then((jsonData)=>{
        console.log(jsonData);
        let array=Object.entries(jsonData);
        console.log(array);
        // const results=array.map(element => element.Title);
        // console.log(results);
    })
}

window.onload = () =>
{
    const searchFieldElement=document.getElementById("searchField");
    searchFieldElement.onkeyup=(event)=>{
searchshow(searchFieldElement.value);
}
};