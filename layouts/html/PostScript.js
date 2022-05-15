
var count = 0 ;

function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("myForm2").style.display = "none";
  document.getElementById("body").style.overflow = "hidden";

}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("myForm2").style.display = "block";
  document.getElementById("body").style.overflow = "scroll";
}

function likeColor(){
  if(count == 0 ){
    document.getElementById("likeColor").style.color = "#e35869";
    document.getElementById("DislikeColor").style.color = "white";
    count = 1; /* to close dislike */
  }
}

function dislikeColor(){
  if(count == 1 ){
    document.getElementById("DislikeColor").style.color = "#e35869";
    document.getElementById("likeColor").style.color = "white";
    count = 0; /* to close dislike */
  }
}




