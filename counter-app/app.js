countEl = document.getElementById("count-el");
saveEL = document.getElementById("save-el");

count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}
function save() {
  saveEL.textContent += count + " - ";
  count = 0;
  countEl.textContent = count;
}
