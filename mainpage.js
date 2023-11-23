function myFunction() {
    let dots = document.getElementById("dots");
    let moreText = document.getElementById("more");
    let btnText = document.getElementById("myBtn");
  // If the display property of the dots 
              // to be displayed is already set to 
              // 'none' (that is hidden) then this 
              // section of code triggers
    if (dots.style.display === "none") {
      moreText.style.display = "none";   // Hide the text between the span elements
      dots.style.display = "inline";   				// Show the dots after the text
      btnText.innerHTML = "Read More";  // Change the text on button to 'Read More'
    } 
    
    // If the hidden portion is revealed,
              // we will change it back to be hidden
    
    else {
  
      // Show the text between the
                  // span elements
      moreText.style.display = "inline";
  
                    // Hide the dots after the text
      dots.style.display = "none";
      // Change the text on button
                  // to 'Read Less'
      btnText.innerHTML = "Read Less";
  }
  }
  
  
  //changing the size of the text container
  const div = document.getElementById("textscontainer");
  document.addEventListener("mouseover", mouseover);
  document.addEventListener("mouseout", mouseout);
  
  function mouseover() {
    div.style.width = "500px";
    div.style.height="500px";
   
  }
  
  function mouseout() {
    div.style.width = "400px";
    div.style.height="400px";
  }
  
  
  
  //fetching data
  function fetchdata()
  {
      const exampleID = "tt13623136"
      const exampleSearch = "friends"
      fetch("https://www.omdbapi.com/?s=" + exampleSearch + "&apikey=434bb60d")
      .then(res=>{
          return res.json();
      })
      .then(data=>{
          console.log(data);
      })
      .catch(error=>console.log("error"));
  }
  fetchdata();