let imgInput = document.getElementById("imgInput");
let pfp = document.getElementById("pfp");
let submit = document.getElementById("submit");
let nameInput = document.getElementById("nameInput");
let error = document.getElementById("error");

// set backgound image
imgInput.addEventListener("change", () => {
  var file = imgInput.files[0];
  if (file && file.type.startsWith("image/")) {
    let reader = new FileReader();
    reader.onload = (e) => {
      pfp.src = reader.result;
      pfp.style.display = "block";
    };
    reader.readAsDataURL(file);
  }
});

// send reauest
submit.addEventListener("click", () => {
  let data = new FormData();
  data.append("name", nameInput.value);
  data.append("img", imgInput.files[0]);

  let request = new XMLHttpRequest();
  request.open("POST", "chat_app.php");
  request.onload = () => {
    if (request.status === 200) {
      let response = request.responseText;
      console.log(response);
      if (response == "emptyImg") {
        error.innerHTML = "please select a profile picture";
      }

      if (response == "emptyName") {
        error.innerHTML = "please enter a valid name";
      }
      if (response == "alreadyName") {
        error.innerHTML = "Username already exists, please choose another name";
      }
      if (response == "verified") {
        // reaction
        window.location = "../authentification/chat_room.html";
        
      }
    } else {
      console.log("Request failed");
    }
  };
  request.send(data);
});