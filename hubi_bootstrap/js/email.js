const emailInput = document.querySelector("#exampleInputEmail1");
const succesPopup = document.querySelector(".success");
const wyslijMailBtn = document.querySelector("#wyslijMail");
const errorPopup = document.querySelector(".err");
const wiadomosc = document.querySelector("#wiadomosc")
wyslijMailBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (emailInput.value.match(validRegex)) {
      succesPopup.style.display = "grid";
      emailInput.value = ""
        wiadomosc.value = ""
      setTimeout(() => {
        succesPopup.style.display = "none";
      }, 1000);
    } else {
      errorPopup.style.display = "grid";
      setTimeout(() => {
        errorPopup.style.display = "none";
      }, 1000);
    }
  });


