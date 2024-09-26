// Get elements from the DOM
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');

// Function to handle sending a message
function sendMessage() {
    const userInput = chatInput.value.trim();  // Get the input text

    if (userInput !== "") {
        // Clear the input field
        chatInput.value = "";  
    }
}

// Event listeners for sending messages
sendBtn.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
