// Expanded Heart Emojis 💕
const heartEmojis = [
  "❤️","🧡","💛","💚","💙","💜","🖤","🤍","🤎",
  "💖","💝","💘","💕","💞","💓","💗","💟","❣️",
  "💌","♥️"
];

// Expanded Kiss Emojis 😘
const kissEmojis = [
  "😘","😚","😙","😗","💋",
  "👩‍❤️‍💋‍👨","👨‍❤️‍💋‍👨","👩‍❤️‍💋‍👩",
  "😽","😻"
];

// Expanded Hug Emojis 🤗
const hugEmojis = [
  "🤗","🫂","👫","👬","👭",
  "🤝","🙌","👐","✋","🤲"
];

// Extra Romantic Emojis 🌹✨
const romanticExtras = [
  "🌹","🥀","🌷","🌸","🌺","🌻","🌼",
  "💐","🌞","🌟","✨","💫","🌙",
  "🎶","🎵","🎼"
];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function showMessage() {
  const choice = document.getElementById("choice").value;
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = ""; // clear old

  if (!choice) {
    outputDiv.innerHTML = "<p>Please choose an option 💡</p>";
    return;
  }

  if (choice === "sorry") {
    for (let i = 0; i < 100; i++) {
      outputDiv.innerHTML += `Sorry ${getRandomItem(heartEmojis)} `;
    }
  }

  if (choice === "love") {
    for (let i = 0; i < 100; i++) {
      outputDiv.innerHTML += `I Love You ${getRandomItem(heartEmojis.concat(romanticExtras))} `;
    }
  }

  if (choice === "kiss") {
    for (let i = 0; i < 100; i++) {
      outputDiv.innerHTML += `${getRandomItem(kissEmojis)} `;
    }
  }

  if (choice === "hug") {
    for (let i = 0; i < 50; i++) {
      const hugLine = document.createElement("span");
      hugLine.classList.add("hug-line");
      hugLine.style.animationDelay = `${i * 0.15}s`;
      hugLine.innerHTML = `Big Hug ${getRandomItem(hugEmojis)} ${getRandomItem(heartEmojis)} ${getRandomItem(romanticExtras)}<br>`;
      outputDiv.appendChild(hugLine);
    }
  }
}
