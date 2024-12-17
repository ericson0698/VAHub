const messagesDiv = document.getElementById("messages");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Mock chatbot responses
const responses = {
  hello: "Hi there! How can I assist you today?",
  help: "Sure! Let me know your question, and I'll do my best to assist.",
  courses: "You can find our courses on the Courses page.",
  default: "I'm sorry, I didn't understand that. Can you please rephrase?",
};

// Handle sending a message
sendBtn.addEventListener("click", () => {
  const userMessage = userInput.value.trim();
  if (userMessage) {
    // Display user message
    addMessage("You", userMessage);
    userInput.value = "";

    // Display bot response
    const botResponse =
      responses[userMessage.toLowerCase()] || responses.default;
    setTimeout(() => addMessage("Bot", botResponse), 500);
  }
});

// Add message to chat window
function addMessage(sender, text) {
  const messageDiv = document.createElement("div");
  messageDiv.textContent = `${sender}: ${text}`;
  messagesDiv.appendChild(messageDiv);
}
