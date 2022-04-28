//generate random color
// // RGB 0-255
//apply to dom
//update color on event
const generateColorValue = () => Math.floor(Math.random() * 256);
//console.log(generateColorValue())
const createColor = () => {
  const red = generateColorValue();
  const green = generateColorValue();
  const blue = generateColorValue();
  return `rgb(${red},${green},${blue})`;
};

const applyColorToBody = (color) => {
  return (document.body.style.backgroundColor = color);
};

const addColorToBackground = () => {
  const color = createColor();
  return applyColorToBody(color);
};
addColorToBackground();

const logo = document.querySelector("#logo");
logo.innerText = "Aloha!";

const heading = document.createElement("h2");
heading.innerHTML = "<span>About Me</span>";
document.body.appendChild(heading);

const aboutME = document.createElement("div");
aboutME.innerHTML =
  "<div>I am a little pretend developer. I have no business being here.</div>";
document.body.appendChild(aboutME);

const newColors = document.getElementById("new-colors");
//newColors.onclick = () => addColorToBackground();
newColors.addEventListener("click", addColorToBackground);
newColors.addEventListener("click", () => console.log("click!"));

const interval = setInterval(addColorToBackground, 5000);
newColors.addEventListener("click", () => clearInterval(interval));
