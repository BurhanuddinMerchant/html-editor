const editorInput = document.getElementById("editor");
const editorOutput = document.getElementById("output");
const displayOutput = () => {
  console.log("here");
  const HTML = editorInput.value;
  editorOutput.innerHTML = HTML;
};
