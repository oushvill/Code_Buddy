const contactsBtn = document.getElementById("contacts-btn");

const popup = document.getElementById("popup");

const noBtn = document.getElementById("no-btn");

const yesBtn = document.getElementById("yes-btn");

const success = document.getElementById("success");

const buyBtn = document.getElementById("buy-btn");

const overlay = document.getElementById("overlay");

contactsBtn.addEventListener("click", () => {
    popup.style.display = "block";
    overlay.classList.add("show");
  });


 