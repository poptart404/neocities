// Create sparkle effect on button click
const interactiveButton = document.getElementById('interactive-button');

interactiveButton.addEventListener('click', function() {
// Create multiple sparkles at different positions
for (let i = 0; i < 5; i++) {
    createSparkle(interactiveButton);
}
});

function createSparkle(button) {
const sparkle = document.createElement('div');
sparkle.classList.add('sparkle');

// Select possible emojis for sparkles
const emojis = ['✨', '🌟', '💫', '⭐'];
const emoji = emojis[Math.round(Math.random() * emojis.length)];
sparkle.textContent = emoji;

// Position sparkle near the button
// const rect = button.getBoundingClientRect();

// Postion sparkle anywhere on page
const rect = document.body 

const x = rect.clientWidth
const y = rect.clientHeight

const left = Math.floor(Math.random() * x);
const top = Math.floor(Math.random() * y);

sparkle.style.left = `${left}px`;
sparkle.style.top = `${top}px`;
    
document.body.appendChild(sparkle);

// Trigger animation
setTimeout(() => {
    sparkle.classList.add('show');
}, 10);

// Remove after animation
setTimeout(() => {
    sparkle.remove();
}, 3000);
}