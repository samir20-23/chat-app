


let messages = document.getElementById("messages");
let message = document.getElementById("message");
let submit = document.querySelector(".submit");

let iconmessages = document.getElementById("iconmessage");
 

// show messages
function requst(){ 
    let data = new FormData();
    data.append("condition", "show");
    
    let request = new XMLHttpRequest();
    request.open("POST", "chat_room.php");
    request.onload = () => {
      let response = JSON.parse(request.responseText);
      console.log(response);
      response.forEach(element => {
        let messagess = document.createElement("span");
    
      messagess.innerHTML += element.message_content;
      messagess.id="messagess";
      messages.appendChild(messagess);
      
      });
      messages.scrollTop = messages.scrollHeight;
    };
    request.send(data);

   
}
requst();

function requestSend(){
  let data = new FormData(); 
  data.append("message", message.value);
  data.append("condition", "send");

  let request = new XMLHttpRequest();
  request.open("POST", "chat_room.php"); 
  request.onload = () => {
    let response = request.responseText;
    console.log(response);
    if(response == "verified"){
      requst();
    }
  };
  request.send(data);
}

 

// send message
 
message.addEventListener("input",(e)=>{
  
  if(message.value == ""){
  submit.id = "audio"; 
  iconmessages.classList = "fa fa-microphone";  

  }else{
   submit.id = "sendmessage"; 
   iconmessages.classList = "fa fa-paper-plane"; 
  } 
  
})
     
submit.addEventListener("click", () => {
  

  if(submit.id == "sendmessage"){
    requestSend();
}else{
console.log("audio")
}
});
 