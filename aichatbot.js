document.getElementById('send-btn').addEventListener('click', function () {
  const input = document.getElementById('chat-input');
  const message = input.value.trim();
  if (message) {
    const chatBody = document.querySelector('.chat-body');
    const newMessage = document.createElement('div');
    newMessage.className = 'chat-message sent';
    newMessage.textContent = message;
    chatBody.appendChild(newMessage);
    input.value = '';
    chatBody.scrollTop = chatBody.scrollHeight; // Scroll to the bottom
  }
});

document.getElementById('toggle-chat').addEventListener('click', function () {
  const chatWidget = document.querySelector('.chat-widget');
  chatWidget.classList.toggle('collapsed');
});
