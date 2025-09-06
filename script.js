function generateMessage() {
  const option = document.getElementById("option").value;
  const output = document.getElementById("output");
  output.innerHTML = "";

  let emojis = [];
  let message = "";

  if (option === "sorry") {
    emojis = ["💔","❤️","💕","💞","💓","💗","❣️","💖","💘"];
    message = "Sorry";
  } else if (option === "love") {
    emojis = ["❤️","💕","💖","💘","💞","💓","💗","😍","🥰"];
    message = "I Love You";
  } else if (option === "kiss") {
    emojis = ["💋","😘","😗","😙","😚","👩‍❤️‍💋‍👨","👨‍❤️‍💋‍👨","👩‍❤️‍💋‍👩"];
    message = "Kiss";
  } else if (option === "hug") {
    emojis = ["🤗","🫂","❤️","💕","💞","💓"];
    message = "Hug";
  }

  let result = "";
  for (let i = 0; i < 2000; i++) {
    let randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    result += `${message} ${randomEmoji} `;
  }

  output.innerHTML = result;
}
