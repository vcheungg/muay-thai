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
  let comboOutput = document.querySelector("#combo");
  let input = userInput.value.trim().toLowerCase();

  const validStrikes = [
    "jab",
    "cross",
    "elbow",
    "knee",
    "teep",
    "mid kick",
    "low kick",
    "head kick",
    "hook",
    "switch stance",
    "uppercut",
    "inside low kick",
    "front kick",
  ];

  let isValid = validStrikes.some((strike) => input.includes(strike));

  if (isValid) {
    comboOutput.innerHTML = "Please enter a valid strike";
    return;
  }
  comboOutput.innerHTML = "Generating a combo...";

  let apiKey = "047t2173e3a39c66942c701baf3a6of5";
  let prompt = `Generate a 6-12 hit combo starting with ${userInput.value}, make sure it is a valid hit and do not generate a combo if something is off-topic`;
  let context =
    "Include strikes like jab, cross, elbows, knees, teeps, and kicks, no need to include it all, just a suggestion. Alternate sides for flow (left/right). Make it realistic and dynamic. Keep it simple to just the hits, no need to expand it or include anything else";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayCombo);
}

let comboForm = document.querySelector("#combo-generator");
comboForm.addEventListener("submit", generateCombo);
