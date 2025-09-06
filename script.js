// Emojis pool
const heartEmojis = [
  "❤️","🧡","💛","💚","💙","💜","🖤","🤍","🤎",
  "💖","💝","💘","💕","💞","💓","💗","💟","❣️","💌","♥️"
];
const kissEmojis = [
  "😘","😚","😙","😗","💋","👩‍❤️‍💋‍👨","👨‍❤️‍💋‍👨","👩‍❤️‍💋‍👩","😽","😻"
];
const hugEmojis = [
  "🤗","🫂","👫","👬","👭","🤝","🙌","👐","🤲"
];
const romanticExtras = [
  "🌹","🥀","🌷","🌸","🌺","🌻","🌼","💐",
  "🌞","🌟","✨","💫","🌙","🎶","🎵","🎼"
];

// Helper
function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Show message
function showMessage() {
  const choice = document.getElementById("choice").value;
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = ""; 

  if (!choice) {
    outputDiv.innerHTML = "<p>Please choose an option 💡</p>";
    return;
  }

  if (choice === "sorry") {
    for (let i = 0; i < 2000; i++) {
      outputDiv.innerHTML += `Sorry ${getRandomItem(heartEmojis)} `;
    }
  }

  if (choice === "love") {
    for (let i = 0; i < 2000; i++) {
      outputDiv.innerHTML += `I Love You ${getRandomItem(heartEmojis.concat(romanticExtras))} `;
    }
  }

  if (choice === "kiss") {
    for (let i = 0; i < 2000; i++) {
      outputDiv.innerHTML += `${getRandomItem(kissEmojis)} `;
    }
  }

  if (choice === "hug") {
    for (let i = 0; i < 2000; i++) {
      const hugLine = document.createElement("span");
      hugLine.classList.add("hug-line");
      hugLine.style.animationDelay = `${i * 0.02}s`;
      hugLine.innerHTML = `Big Hug ${getRandomItem(hugEmojis)} ${getRandomItem(heartEmojis)} ${getRandomItem(romanticExtras)} `;
      outputDiv.appendChild(hugLine);
    }
  }
}
