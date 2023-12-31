function myFunction() {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more");
  let btnText = document.getElementById("myBtn");
  // If the display property of the dots
  // to be displayed is already set to
  // 'none' (that is hidden) then this
  // section of code triggers
  if (dots.style.display === "none") {  //means that if its value is true. 
    moreText.style.display = "none"; // Hide the text between the span elements
    dots.style.display = "inline"; // Show the dots after the text
    btnText.innerHTML = "Read More"; // Change the text on button to 'Read More'
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
  div.style.height = "500px";
  div.style.marginLeft = "480px";
  div.style.marginBottom = "50px";
}

function mouseout() {
  div.style.width = "400px";
  div.style.height = "400px";
  div.style.marginLeft = "530px";
  div.style.marginBottom = "50px";
}
