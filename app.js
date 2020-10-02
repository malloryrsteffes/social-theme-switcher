let body = document.getElementsByTagName("body");

function toggleClass() {
  console.log("clicked!");
  if (document.getElementById("bodyToggle").className == "dark")
    document.getElementById("bodyToggle").className = "light";
  else document.getElementById("bodyToggle").className = "dark";
}
