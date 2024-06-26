function displayRecipe(response) {
  console.log("Recipe generated");
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "83f9b46743o5b9ba5591000677t89ea4";
  let prompt = `Generate an Italian recipe about ${instructionsInput.value}`;
  let context =
    "You are an Italian cuisine chef and love to share your best recipes. Your mission is to generate a short recipe in HTML. Make sure to follow the user's instructions and to present the recipe well structured including the quantities and measures. Write the name of the cusine chef at the end of the recipe as a signature.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  console.log("Generating Recipe");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
