function togglemenu(){
    var menuDiv = document.getElementById("All-menu");
    if(menuDiv.style.display === "none"){
        menuDiv.style.display = "block";
    }
    else{
        menuDiv.style.display = "none"
    }
}


function checkLength() {
  var password = document.getElementById("password").value;
  var errorMsg = document.getElementById("error-msg");
  var submitBtn = document.getElementById("submit-btn");
  if (password.length < 6) {
    errorMsg.style.display = "block";
    submitBtn.disabled = true;
  } else {
    errorMsg.style.display = "none";
    submitBtn.disabled = false;
  }
}