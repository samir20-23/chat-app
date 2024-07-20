let messages = document.getElementById("messages");
let message = document.getElementById("message");
let submit = document.getElementById("submit");

// show messages
let data = new FormData();
data.append("condition", "show");

let request = new XMLHttpRequest();
request.open("POST", "chat_room.php");
request.onload = () => {
  let response = JSON.parse(request.responseText);
  console.log(response);
  response.forEach(element => {
  messages.innerHTML += element.message_content;
    
  });
};
request.send(data);

// send message
submit.addEventListener("click", () => {
  let data = new FormData();
  data.append("message", message.value);
  data.append("condition", "send");

  let request = new XMLHttpRequest();
  request.open("POST", "chat_room.php");
  request.onload = () => {
    let response = request.responseText;
    console.log(response);
  };
  request.send(data);
});
