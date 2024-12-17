// Get the elements
const settingsIcon = document.getElementById('settingsIcon');
const settingsPanel = document.getElementById('settingsPanel');

// Toggle the settings panel on icon click
settingsIcon.addEventListener('click', () => {
    settingsPanel.classList.toggle('open');
});
