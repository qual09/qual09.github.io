// UI Declarations
const inputFile = document.getElementById('inputFile');
const outputFile = document.getElementById('outputFile');
const sample = document.getElementById('sample');
const analyzeFile = document.getElementById('analyzeFile');

// Evemt Listeners
inputFile.addEventListener('change', showFileContent);
sample.addEventListener('click', runSample);

// Clear UI
function resetUI() {
  outputFile.textContent = 'File is empty.';
  outputFile.style.display = 'none';
  analyzeFile.innerHTML = '';
  analyzeFile.style.display = 'none';
}

// Process the uploaded file
function showFileContent() {
  resetUI();

  // Initialize File Reader
  const fileReader = new FileReader();

  // Read uploaded file content
  if (inputFile.files[0]) {
    // in below code: this.files[0] equals inputFile.files[0]
    fileReader.readAsText(inputFile.files[0]);
  }

  // Function to execute when readAsText() is fired
  fileReader.onload = () => {
    // Update UI
    if (fileReader.result)
      outputFile.textContent = fileReader.result;
    outputFile.style.display = 'block';
    // Analyze file content
    analyzeFileContent(fileReader.result);
  }
}

// Analyze text content
function analyzeFileContent(fileContent) {
  let analyzeResult = '';

  // Count number of words
  let numberOfWords = 0;
  if (fileContent.match(/\b\S+\b/g)?.length)
    numberOfWords = fileContent.match(new RegExp(' ', 'g'))?.length;
  analyzeResult += '<strong>Words:</strong> ' + numberOfWords;

  // Count number of letters
  const alphabet = { 'a': 0, 'b': 0, 'c': 0, 'd': 0, 'e': 0, 'f': 0, 'g': 0, 'h': 0, 'i': 0, 'j': 0, 'k': 0, 'l': 0, 'm': 0, 'n': 0, 'o': 0, 'p': 0, 'q': 0, 'r': 0, 's': 0, 't': 0, 'u': 0, 'v': 0, 'w': 0, 'x': 0, 'y': 0, 'z': 0 };
  analyzeResult += '<br><br><strong style="margin-bottom: 10px;">Letters:</strong><br>';
  for (letter in alphabet) {
    let numberOfLetters = 0;
    if (fileContent.match(new RegExp(letter, 'g'))?.length)
      numberOfLetters = fileContent.match(new RegExp(letter, 'g'))?.length;
    analyzeResult += `
      <span class="resultRow">
        <strong>${letter}:</strong> <span>${numberOfLetters}</span> <br>
      </span>
      `;
  }

  // Update UI
  analyzeFile.innerHTML = analyzeResult;
  analyzeFile.style.display = 'block';
}

// Demo
function runSample() {
  inputFile.value = '';
  resetUI();

  // Read from local file
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'style.css', true);
  xhr.onload = () => {
    // Check if file is accessible
    if (xhr.status === 200) {
      // Update UI
      outputFile.textContent = xhr.responseText;
      outputFile.style.display = 'block';
      // Analyze file content
      analyzeFileContent(xhr.responseText);
    }
  }
  xhr.send();
}