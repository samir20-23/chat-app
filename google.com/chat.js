// Chat application main JavaScript

// User data - in a real app, this would come from a database
const users = [
    {
        id: 1,
        name: "bro",
        img: "img_users/man_7180002.png",
        lastSeen: "today at 09:45",
        lastMessage: "Yeah, let's meet later!",
        lastMessageTime: "12:30",
        messages: [
            { text: "What's up!", time: "11:30", sender: "user" },
            { text: "Work, work, work as always.", time: "11:35", sender: "me" },
            { text: "Great, great, great!", time: "12:00", sender: "user" },
            { text: "By the way, are you free later?", time: "12:10", sender: "me" },
            { text: "Yeah, let's meet later!", time: "12:30", sender: "user" },
        ]
    },
    {
        id: 2,
        name: "Chadia",
        img: "img_users/woman_7179996.png",
        lastSeen: "yesterday at 21:23",
        lastMessage: "Hi, how are you",
        lastMessageTime: "01:00",
        messages: [
            { text: "Hello!", time: "00:30", sender: "user" },
        ]
    },
    {
        id: 3,
        name: "Messi",
        img: "img_users/lionel-messi.jpg",
        lastSeen: "yesterday at 18:10",
        lastMessage: "Talent is nothing without hard work.",
        lastMessageTime: "13:50",
        messages: [
            { text: "Leo! How do you stay so good?", time: "13:00", sender: "me" },
            { text: "Talent is nothing without hard work.", time: "13:10", sender: "user" },
            { text: "I agree! You're always training!", time: "13:20", sender: "me" },
            { text: "The day you think there is no improvement to be made is a sad one.", time: "13:30", sender: "user" },
            { text: "You inspire millions!", time: "13:40", sender: "me" },
            { text: "I just want to enjoy football and make people happy.", time: "13:50", sender: "user" },
        ]
    },
    {
        id: 4,
        name: "CR7",
        img: "img_users/portuguese-footballer-cristiano-ronaldo-s-portrait-illustration-free-vector.jpg",
        lastSeen: "today at 13:00",
        lastMessage: "I'm not here to be second best.",
        lastMessageTime: "13:50",
        messages: [
            { text: "Cristiano, what's your mindset before a big game?", time: "12:45", sender: "me" },
            { text: "I'm not here to be second best.", time: "13:00", sender: "user" },
            { text: "That's why you're a legend!", time: "13:10", sender: "me" },
            { text: "Your love makes me stronger, your hate makes me unstoppable.", time: "13:20", sender: "user" },
            { text: "Do you ever feel pressure?", time: "13:30", sender: "me" },
            { text: "Pressure? I don’t feel pressure. I create it.", time: "13:40", sender: "user" },
            { text: "That's the mentality of a champion!", time: "13:45", sender: "me" },
            { text: "Siiiiuuuuuu!", time: "13:50", sender: "user" },
        ]
    },
    {
        id: 5,
        name: "Boot",
        img: "img_users/1624640.png",
        lastSeen: "Online",
        lastMessage: "How can I assist you?",
        lastMessageTime: "Now",
        messages: [
            { text: "Hey Boot!", time: "13:00", sender: "me" },
            { text: "Hello! How can I assist you?", time: "13:01", sender: "user" },
            { text: "Can you generate a list of tasks for me?", time: "13:02", sender: "me" },
            { text: "Certainly! Here’s a simple task list:\n1. Plan project structure\n2. Design UI\n3. Implement backend\n4. Test functionality\n5. Deploy application", time: "13:03", sender: "user" },
            { text: "Nice, and can you remind me in 2 hours?", time: "13:04", sender: "me" },
            { text: "I can't set real reminders, but I suggest using an alarm or notes app!", time: "13:05", sender: "user" },
            { text: "Alright, thanks Boot.", time: "13:06", sender: "me" },
            { text: "You're welcome! Let me know if you need anything else.", time: "13:07", sender: "user" }
        ]
    }
    ,
    {
        id: 6,
        name: "Eren Yeager",
        img: "img_users/tumblr_8c8142580f04ce02b13361e3efd86885_73cfc752_1280.jpg",
        lastSeen: "3 hours ago",
        lastMessage: "I just keep moving forward.",
        lastMessageTime: "13:50",
        messages: [
            { text: "Eren, do you think there's hope?", time: "13:00", sender: "me" },
            { text: "We can stay inside the walls our entire lives...", time: "13:10", sender: "user" },
            { text: "But do you really believe that?", time: "13:20", sender: "me" },
            { text: "If you're too scared to fight for your lives, fine! Let me fight for you!", time: "13:30", sender: "user" },
            { text: "So you won't stop?", time: "13:40", sender: "me" },
            { text: "I just keep moving forward.", time: "13:50", sender: "user" },
            { text: "Until what?", time: "14:00", sender: "me" },
            { text: "Until I destroy my enemies.", time: "14:10", sender: "user" },
        ]
    }
];



// Initialize variables
let currentUserId = 1;
let mobileView = window.innerWidth <= 750;

// DOM elements
const firstPage = document.getElementById('firstpage');
const lastPage = document.getElementById('lastpage');
const chatUser = document.getElementById('chatuser');
const inputUser = document.getElementById('inputuserr');
const sendButton = document.getElementById('aoudiouser');
const usersContainer = document.getElementById('users');

// Function to create user list
function renderUserList() {
    usersContainer.innerHTML = '';
    users.forEach(user => {
        const userElement = document.createElement('div');
        userElement.id = `user-${user.id}`;
        userElement.className = 'user-item';
        userElement.innerHTML = `
            <div id="user1">
                <div id="user_profile">
                    <img src="${user.img}" id="user_img">
                    <div id="userContent">
                        <p id="user_name">${user.name}</p>
                        <p id="user_lastMessaage">${user.lastMessage}</p>
                    </div>
                </div>
                <span is="user_date">${user.lastMessageTime}</span>
            </div>
        `;
        userElement.addEventListener('click', () => selectUser(user.id));
        usersContainer.appendChild(userElement);
    });
}

// Function to select a user and show chat
function selectUser(userId) {
    currentUserId = userId;
    const user = users.find(u => u.id === userId);

    // Update header info in chat
    document.getElementById('userchatname').textContent = user.name;
    document.getElementById('viewuser').textContent = `last seen ${user.lastSeen}`;
    document.querySelector('#navUser #userdata img').src = user.img;

    // Render messages
    renderMessages(user.messages);

    // Show chat on mobile
    if (mobileView) {
        firstPage.style.display = 'none';
        lastPage.style.display = 'block';
    }
}

// Function to render messages
function renderMessages(messages) {
    chatUser.innerHTML = '';

    messages.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${message.sender === 'me' ? 'sent' : 'received'}`;
        messageElement.innerHTML = `
            <div class="message-content">
                <p>${message.text}</p>
                <span class="message-time">${message.time}</span>
            </div>
        `;
        chatUser.appendChild(messageElement);
    });

    // Scroll to bottom
    chatUser.scrollTop = chatUser.scrollHeight;
}

// Function to send message
function sendMessage() {
    const text = inputUser.value.trim();
    if (text === '') return;

    const now = new Date();
    const time = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;

    const user = users.find(u => u.id === currentUserId);
    user.messages.push({ text, time, sender: 'me' });

    renderMessages(user.messages);
    inputUser.value = '';
}

// Add back button for mobile view
function addBackButton() {
    const backButton = document.createElement('i');
    backButton.className = 'fa fa-arrow-left back-button';
    backButton.style.marginRight = '15px';
    backButton.style.fontSize = '22px';
    backButton.style.cursor = 'pointer';

    backButton.addEventListener('click', () => {
        firstPage.style.display = 'flex';
        lastPage.style.display = 'none';
    });

    document.getElementById('userdata').prepend(backButton);
}

// Add CSS for messages
function addMessageStyles() {
    const style = document.createElement('style');
    style.textContent = `
        #chatuser {
            padding: 20px;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        
        .message {
            max-width: 80%;
            padding: 10px;
            border-radius: 10px;
            position: relative;
            margin-bottom: 5px;
        }
        
        .sent {
            background-color: #dcf8c6;
            align-self: flex-end;
            margin-left: auto;
        }
        
        .received {
            background-color: white;
            align-self: flex-start;
            margin-right: auto;
        }
        
        .message-content {
            display: flex;
            flex-direction: column;
        }
        
        .message-time {
            align-self: flex-end;
            font-size: 12px;
            color: #888;
            margin-top: 5px;
        }
        
        #user1 {
            padding: 8px;
            border-radius: 10px;
            transition: background-color 0.2s;
        }
        
        #user1:hover {
            background-color: rgba(0, 0, 0, 0.05);
        }
        
        .user-item.active #user1 {
            background-color: rgba(0, 0, 0, 0.1);
        }
        
        @media screen and (max-width: 750px) {
            #lastpage {
                display: none;
                width: 100%;
            }
        }
    `;
    document.head.appendChild(style);
}

// Event listeners
sendButton.addEventListener('click', sendMessage);
inputUser.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    mobileView = window.innerWidth <= 750;
    if (!mobileView) {
        firstPage.style.display = 'flex';
        lastPage.style.display = 'block';
    }
});

// Initialize app
function initApp() {
    renderUserList();
    addMessageStyles();

    if (mobileView) {
        addBackButton();
        firstPage.style.display = 'flex';
        lastPage.style.display = 'none';
    } else {
        selectUser(1); // Select first user by default in desktop view
    }
}

// Start the app
document.addEventListener('DOMContentLoaded', initApp);
function saveMessages() {
    localStorage.setItem('chatMessages', JSON.stringify(users));
}

function loadMessages() {
    const savedMessages = localStorage.getItem('chatMessages');
    if (savedMessages) {
        users = JSON.parse(savedMessages);
        renderUserList();
        selectUser(currentUserId);
    }
}

// Load messages when the page loads
window.addEventListener('load', loadMessages);

// Update localStorage after sending a message
function sendMessage() {
    const text = inputUser.value.trim();
    if (text === '') return;

    const now = new Date();
    const time = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;

    const user = users.find(u => u.id === currentUserId);
    user.messages.push({ text, time, sender: 'me' });

    renderMessages(user.messages);
    inputUser.value = '';
    saveMessages();
}
function addDarkModeButton() {
    const button = document.createElement('button');
    button.id = 'darkModeToggle';
    button.textContent = '🌙';
    button.style.cssText = 'position: fixed; bottom: 20px; right: 20px; width: 40px; height: 40px; border-radius: 50%; border: none; background: #222; color: #fff; font-size: 20px; cursor: pointer;';

    button.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.getElementById("firstpage").style.backgroundColor = document.body.classList.contains('dark-mode') ? "black" : "white";
        document.getElementById("user_lastMessaage").style.color = document.body.classList.contains('dark-mode') ? "black" : "white";

        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });

    document.body.appendChild(button);

    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        document.getElementById("firstpage").style.backgroundColor = "black";
        document.getElementById("user_lastMessaage").style.color = "white";

        
    }
}


// Add dark mode styles
const style = document.createElement('style');
style.textContent = `
    .dark-mode {
        background-color: #222;
        color: #fff;
    }
    .dark-mode input, .dark-mode button {
        background: #444;
        color: #fff;
    }
`;
document.head.appendChild(style);

addDarkModeButton();
function addNavbarToggle() {
    const menu = document.createElement('div');
    menu.id = 'sidebarMenu';
    menu.style.cssText = 'position: fixed; left: -250px; top: 0; width: 250px; height: 100%; background: #333; color: white; padding: 20px; transition: left 0.3s;';
    menu.innerHTML = `
        <button id="closeMenu" style="background: none; border: none; color: white; font-size: 20px; cursor: pointer;">❌</button>
        <p>Menu Content Here</p>
    `;
    
    document.body.appendChild(menu);

    document.querySelector('.fa-bars').addEventListener('click', () => {
        menu.style.left = '0';
    });

    document.getElementById('closeMenu').addEventListener('click', () => {
        menu.style.left = '-250px';
    });
}

addNavbarToggle();

