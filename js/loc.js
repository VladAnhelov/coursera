let convertbtn = document.querySelector('.convertbtn');
let fileNum = document.getElementById('fileNum');
const uploadInput = document.querySelector('uploadInput');
const output = document.querySelector('.output');
const output2 = document.querySelector('.output2');
const fileInput = document.querySelector('input[type=file]');
var _validFileExtensions = ['.json'];
let jsonFile;

function logFile(event) {
  let str = event.target.result;
  let json = JSON.parse(str);

  jsonFile = json;
  if (jsonFile.distance.unit === 'm') {
    jsonFile.distance['unit'] = 'ft';
    jsonFile.distance['value'] = jsonFile.distance.value * 3.28;
    delete jsonFile.convert_to;
    let k = JSON.stringify(jsonFile, null, ' ');
    output2.innerText = k;
  }
}

fileInput.addEventListener('change', () => {
  const [file] = fileInput.files;
  if (file) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      output.innerText = reader.result;
    });
    reader.onload = logFile;
    reader.readAsText(file);
  }
});

function chooseJsonFile(inputFile) {
  if (inputFile.type == 'file') {
    var sFileName = inputFile.value;
    if (sFileName.length > 0) {
      var blnValid = false;
      for (var j = 0; j < _validFileExtensions.length; j++) {
        var sCurExtension = _validFileExtensions[j];
        if (
          sFileName
            .substr(sFileName.length - sCurExtension.length, sCurExtension.length)
            .toLowerCase() == sCurExtension.toLowerCase()
        ) {
          blnValid = true;
          convertbtn.disabled = false;
          break;
        }
      }

      if (!blnValid) {
        alert(
          'Sorry, ' +
            sFileName +
            ' is invalid, allowed extensions are: ' +
            _validFileExtensions.join(', ')
        );
        inputFile.value = '';
        return false;
      }
    }
  }
  return true;
}

function export2txt() {
  const a = document.createElement('a');
  window.open(
    (a.href = URL.createObjectURL(
      new Blob([JSON.stringify(jsonFile, null, 2)], {
        type: 'application/json',
      })
    ))
  );
  a.setAttribute('download', 'data.json');
  document.body.appendChild(a);
  a.click();

  document.body.removeChild(a);
}
