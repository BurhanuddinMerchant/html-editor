const editorInput = document.getElementById("editor");
const editorOutput = document.getElementById("output");
const displayOutput = () => {
  const HTML = editorInput.value;
  editorOutput.innerHTML = HTML;
};
