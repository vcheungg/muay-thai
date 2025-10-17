function displayCombo(response) {
  new Typewriter("#combo", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

function generateCombo(event) {
  event.preventDefault();
  let userInput = document.querySelector("#combo-idea");
  let apiKey = "047t2173e3a39c66942c701baf3a6of5";
  let prompt = `User inputs: Generate a 6-12 hit combo starting with ${userInput.value}`;
  let context =
    "Follow user prompt - start a muay thai combo with user input value, can include jab, cross, knees, teeps, elbows, kicks of any kind, right or left side and make it flow";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
}

let muaythaiCombo = document.querySelector("#combo");
muaythaiCombo.innerHTML = "Generating a combo..";
axios.get(apiUrl).then(displayCombo);

let comboForm = document.querySelector("#combo-generator");
comboForm.addEventListener("submit", generateCombo);
