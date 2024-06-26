function displayRecipe(response) {
  console.log("Recipe generated");
  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("generating");
  recipeElement.innerHTML = ""; // Clear the generating message

  let typewriter = new Typewriter(recipeElement, {
    autoStart: true,
    delay: 50,
    cursor: "",
  });

  typewriter.typeString(response.data.answer).start();
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "83f9b46743o5b9ba5591000677t89ea4";
  let prompt = `Generate an Italian recipe about ${instructionsInput.value}`;
  let context =
    "You are an Italian cuisine chef and love to share your best recipes. Your mission is to generate a short recipe in HTML. Make sure to follow the user's instructions and to present the recipe well structured including the quantities and measures. Write the name of the cuisine chef at the end of the recipe as a signature. Ensure that all text in the recipe is aligned to the left.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.classList.add("generating");
  recipeElement.innerHTML = `<div class="generating">⌛ Generating the Best ${instructionsInput.value} Italian Recipe</div>`;

  console.log("Generating Recipe");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
