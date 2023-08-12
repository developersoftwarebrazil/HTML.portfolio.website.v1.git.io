function autoTypongText() {
  function activeTypingText(element) {
    const textArray = element.innerHTML.split("");
    element.innerHTML = "";

    textArray.forEach((letter, index) => {
      setTimeout(() => {
        element.innerHTML += letter;
      }, 75 * index);
    });
  }
  const title = document.querySelector(".typing");
  
  console.log(title)

 
  activeTypingText(title);
}
export default autoTypongText;
