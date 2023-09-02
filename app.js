const inputElement1 = document.getElementById("InputJs1");
const inputElement2 = document.getElementById("InputJs2");
const inputElement3 = document.getElementById("InputJs3");
const inputElement4 = document.getElementById("InputJs4");
const clearButton = document.getElementById("Submit");
const animatedText = document.getElementById("animated-text");
const durationButton = document.getElementById("duration-button");

clearButton.addEventListener("click", function () {
  alert(
    "Hy!" +
      inputElement1.value +
      "\n" +
      " Your Email :" +
      inputElement2.value +
      "\n" +
      " Your Subject :" +
      inputElement3.value +
      "\n" +
      " Thanks For Submitting :" +
      inputElement4.value +
      "\n"
  );
  inputElement1.value = "";
  inputElement2.value = "";
  inputElement3.value = "";
  inputElement4.value = "";
});

durationButton.addEventListener("click", () => {
  animatedText.style.animationDuration = "4s";
});
